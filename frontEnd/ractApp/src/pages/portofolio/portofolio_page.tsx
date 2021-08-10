import { Card } from './components/chat-card/card'
import profilePicture from '../../assets/amonfUS.png'

import './portofolio.scss'
import { useState } from 'react'
import { Content } from './components/content/content'

const chatText: string[] = ['Hello.', 'I am Hudi.', 'Welcome to my Portofolio!']

interface PortofolioProps {
    something?: string
}

export function Portofolio(props: PortofolioProps): JSX.Element {
    const bg = document.querySelector('backgroud')
    const [trackOnWindow, setTrackOnWindow] = useState(true)
    const [chatClassNames, setChatClassNames] = useState('')
    const [contentClassNames, setChatContentClassNames] = useState('')

    const cardWidth = 500
    const cardHeight = 200

    let prevScrollVal = 0
    let scrollVal = 0

    window.onscroll = function () {
        scrollVal = document.documentElement.scrollTop
        console.log('Scrolled: ' + scrollVal)
        if (scrollVal - prevScrollVal > 0) {
            setTrackOnWindow(false)
            console.log('flase')
            setChatClassNames('chat-container-left')
            setChatContentClassNames('content_move_up')
        }
        if (scrollVal == 0) {
            setTrackOnWindow(true)
            console.log('true')
            setChatClassNames('chat-container-right')
            setChatContentClassNames('content_move_down')
        }
        prevScrollVal = scrollVal
    }
    return (
        <div className="backgroud-container">
            <div id="backgroud" className="backgroud">
                <div className="center-felx">
                    {/* <div style={{ left: `calc(50vw - ${cardWidth / 2}px)` }} className={`chat-container ${chatClassNames}`}>
                        <Card
                            width={cardWidth}
                            height={cardHeight}
                            scrolledDistance={scrollVal}
                            trackOnWindow={trackOnWindow}
                            chatText={chatText}
                            profilePicture={profilePicture}
                        ></Card>
                    </div> */}

                    <div className={`content_container ${contentClassNames}`}>
                        <Content />
                    </div>
                </div>
            </div>
        </div>
    )
}
