import { Card } from './components/chat-card/card'
import profilePicture from '../../assets/amonfUS.png'

import './portofolio.scss'
import { useEffect, useState } from 'react'
import { Content } from './components/content/content'
import { AlarmOn, Alarm, ThreeDRotation, GitHub, Facebook, Instagram, BugReport } from '@material-ui/icons'
import { bindActionCreators } from '@reduxjs/toolkit'
import { connect } from 'react-redux'
import { setMoveChatLeft } from './portofolio.actions'

const chatText: string[] = ['Hello.', 'I am Hudi.', 'Welcome to my Portofolio!']

interface PortofolioProps {
    something?: string
    moveChatLeft?: boolean
    portofolio: any
}

function PortofolioComponent(props: PortofolioProps): JSX.Element {
    useEffect(() => {
        if (props.portofolio.moveChatLeft.moveChatLeft) {
            setChatClassNames('chat-container-left')
            setBallClasses('ball_jump_animation')
            setNavbarClasses('navbar_component_animations')
        }
    }, [props.portofolio.moveChatLeft.moveChatLeft])

    const [chatClassNames, setChatClassNames] = useState('')
    const [contentClassNames, setChatContentClassNames] = useState('')

    const [bubbleClasses, setBubbleClasses] = useState('bubble_animation')

    const [bubbleClicked, setBubbleClicked] = useState(false)

    const [ballClasses, setBallClasses] = useState('')

    const [navbarClasses, setNavbarClasses] = useState('')

    const cardWidth = '25vw'
    const cardHeight = 'auto'

    let prevScrollVal = 0
    let scrollVal = 0

    // window.onscroll = function () {
    //     scrollVal = document.documentElement.scrollTop
    //     // console.log('Scrolled: ' + scrollVal)s
    //     if (scrollVal - prevScrollVal > 0) {
    //         // setChatClassNames('chat-container-left')
    //         setChatContentClassNames('content_move_up')
    //     }
    //     if (scrollVal == 0) {
    //         setChatContentClassNames('content_move_down')
    //     }
    //     prevScrollVal = scrollVal
    // }

    function bubbleOnClick() {
        setTimeout(setBubbleClicked, 300, true)
        setBubbleClasses('bubble_pop_down')
    }

    function bubbleOnMouseLeave() {
        setBubbleClasses('bubble_wiggle')
    }

    return (
        <div className="backgroud-container">
            <div id="backgroud" className="backgroud">
                <div>
                    {!bubbleClicked ? (
                        <button
                            className={`bubble ${bubbleClasses}`}
                            onClick={e => {
                                bubbleOnClick()
                            }}
                            onMouseLeave={e => {
                                bubbleOnMouseLeave()
                            }}
                        >
                            <Alarm className={'alarm'} style={{ width: '5vw', height: '5vw', fill: 'white' }}></Alarm>
                        </button>
                    ) : (
                        <>
                            <div className={`chat-card-container ${chatClassNames}`}>
                                <Card
                                    scrolledDistance={scrollVal}
                                    trackOnWindow={false}
                                    chatText={chatText}
                                    profilePicture={profilePicture}
                                    animationClasses={''}
                                    scale={0.5}
                                ></Card>
                            </div>
                            <div className={`content_container`}>
                                <Content navbarComponentClasses={navbarClasses} />
                            </div>
                        </>
                    )}
                </div>

                <div className={`ball ${ballClasses} `}></div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    ...state
})

const mapDispatchToProps = (dispatch: any) => ({
    dispatch,
    ...bindActionCreators({ setMoveChatLeft }, dispatch) //? astea sunt ACTIONS
})

export const Portofolio = connect(mapStateToProps, mapDispatchToProps)(PortofolioComponent)
