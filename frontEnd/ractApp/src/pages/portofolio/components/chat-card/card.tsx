import './card_styles.scss'
import Tilt from 'react-parallax-tilt'
import { useEffect, useState } from 'react'

interface CardProps {
    width: number
    height: number
    scale?: number
    profilePicture: string
    chatText: string[]
    trackOnWindow: boolean
    scrolledDistance: number
}

function onEnter() {
    console.log('ON ENTER')
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

function chatAnimation(text: string[], setter: (chatAnimFinn: boolean) => void) {
    setInterval(cursorAnimation, 400)
    let time = 400
    text.forEach(line => {
        time += 40 * line.length
        setTimeout(stringWrite, time, line)
        time += 3000
        setTimeout(stringDelete, time)
    })
    setTimeout(setter, time, true)
}

export function Card(props: CardProps): JSX.Element {
    const [scale, setScale] = useState(1.05)

    const [trackOnWindow, setTrackOnWindow] = useState(true)
    const [chatAnimationStarted, setChatAnimationStarted] = useState(false)
    const [chatAnimationFinnished, setChatAnimationFinnished] = useState(true)

    const { chatText, scrolledDistance, width, height } = props

    useEffect(() => {
        if (!chatAnimationStarted) {
            chatAnimation(chatText!, setChatAnimationFinnished)
            setChatAnimationStarted(true)
            setChatAnimationFinnished(false)
        }
    })

    useEffect(() => {
        console.log(scrolledDistance)
    }, [scrolledDistance])

    return (
        <Tilt
            style={{ width, height }}
            className="parallax-effect-glare-scale"
            perspective={500}
            glareEnable={false}
            glareMaxOpacity={0.45}
            scale={scale}
            tiltReverse={false}
            trackOnWindow={false}
            // onEnter={StringAnimation}
            onClick={onEnter}
        >
            <button style={{ width, height }} className="clear-button" onClick={onEnter}>
                <div className="inner-wrapper">
                    <div className="grid-item">
                        <div className="profile-picture-felx-container">
                            <img className="profile-picture" src={props.profilePicture} />
                            <div className="name">
                                <div>Michael</div>
                                <div>(Hudi)</div>
                            </div>
                        </div>
                    </div>

                    <div className="grid-item">
                        <div id="chatMessage" className="chat_message">
                            <div className="text"></div>
                            <span className="cursor">|</span>
                        </div>
                    </div>
                </div>
            </button>
        </Tilt>
    )
}
