import './card_styles.scss'
import Tilt from 'react-parallax-tilt'
import { useCallback, useEffect, useState } from 'react'
import { bindActionCreators } from '@reduxjs/toolkit'
import { connect } from 'react-redux'
import { setMoveChatLeft } from '../../portofolio.actions'

interface CardProps {
    scale?: number
    profilePicture: string
    chatText: string[]
    trackOnWindow: boolean
    scrolledDistance: number
    animationClasses: string
    setMoveChatLeft?: () => any
}

function onEnter() {
    // console.log('ON ENTER')
}

function stringWrite(text: string) {
    const spnText = document.querySelector('.text')!
    let indexText = 0
    const time = 40
    const addLetter = () => {
        spnText.textContent += text[indexText]
        indexText++
        if (indexText === text.length) {
            clearInterval(indexTyping)
        }
    }
    const indexTyping = setInterval(addLetter, time)
}

function stringDelete() {
    const spnText = document.querySelector('.text')!
    const time = 40
    const deleteLetter = () => {
        spnText.textContent = spnText.textContent?.slice(0, spnText.textContent.length - 1)!
        if (spnText.textContent.length === 0) {
            clearInterval(indexTyping)
        }
    }
    const indexTyping = setInterval(deleteLetter, time)
}

const cursorAnimation = () => {
    const spnCursor = document.querySelector('.cursor')
    spnCursor!.classList.toggle('active')
}

function CardComponent(props: CardProps): JSX.Element {
    const [scale, setScale] = useState(1.05)

    const [trackOnWindow, setTrackOnWindow] = useState(true)
    const [chatAnimationStarted, setChatAnimationStarted] = useState(false)
    const [chatAnimationFinnished, setChatAnimationFinnished] = useState(true)
    const [pulse, setPulse] = useState('')
    const [popUp, setpopUp] = useState('chat_card_pop_up')

    const [chatAnimationList, setChatAnimationList] = useState('chat_card_pop_up')

    const { chatText, scrolledDistance } = props

    useEffect(() => {
        if (!chatAnimationStarted) {
            chatAnimation(chatText!, setChatAnimationFinnished)
            setChatAnimationStarted(true)
            setChatAnimationFinnished(false)
        }
    })

    useEffect(() => {
        // console.log(scrolledDistance)
    }, [scrolledDistance])

    function chatAnimation(text: string[], setter: (chatAnimFinn: boolean) => void) {
        setInterval(cursorAnimation, 400)
        let time = 400
        let lastLineLength = 0
        text.forEach(line => {
            time += 40 * line.length
            setTimeout(stringWrite, time, line)
            time += 300
            setTimeout(stringDelete, time)
            lastLineLength = line.length
        })
        setTimeout(
            (e: boolean) => {
                setter(e)
                // classSetter('chat_box_jump_left')
                console.log('ANIMATION FINNISHED')
                if (props.setMoveChatLeft) {
                    props.setMoveChatLeft()
                }
            },
            time + lastLineLength * 40, //? adjusts for the time needed to delete the last line
            true
        )
    }

    function chatCardOnEnter() {
        // console.log('on enter')
        setPulse('')
    }

    function chatCardOnLeave() {
        // console.log('on leave')
        setPulse('card-pulse')
    }

    setTimeout(setChatAnimationList, 300, '')

    return (
        <Tilt
            className={`parallax-effect-glare-scale ${chatAnimationList}`}
            perspective={500}
            glareEnable={false}
            glareMaxOpacity={0.45}
            scale={scale}
            tiltReverse={false}
            trackOnWindow={false}
            onEnter={chatCardOnEnter}
            onLeave={chatCardOnLeave}
            onClick={onEnter}
        >
            <button className="clear-button" onClick={onEnter}>
                <div className="card-grid ">
                    <div className="profile-picture-felx-container">
                        <img className="profile-picture " src={props.profilePicture} />
                        <div className="name ">
                            <div>Michael</div>
                            {/* <div>(Hudi)</div> */}
                        </div>
                    </div>

                    <div id="chatMessage" className="chat_message ">
                        <div className="text  "></div>
                        <span className="cursor ">|</span>
                    </div>
                </div>
            </button>
        </Tilt>
    )
}

const mapStateToProps = (state: any) => ({
    ...state
})

const mapDispatchToProps = (dispatch: any) => ({
    dispatch,
    ...bindActionCreators({ setMoveChatLeft }, dispatch) //? astea sunt ACTIONS
})

export const Card = connect(mapStateToProps, mapDispatchToProps)(CardComponent)
