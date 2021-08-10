import { useState } from 'react'
import './navbar_styles.scss'
import { AccessAlarm, ThreeDRotation, GitHub, Facebook, Instagram, BugReport } from '@material-ui/icons'

interface NavbarProps {
    something?: string
}

const sections = [<AccessAlarm />, <ThreeDRotation />, <GitHub />, <Facebook />, <Instagram />, <BugReport />]

export function Navbar(props: NavbarProps): JSX.Element {
    function onClick(
        i: number,
        selector: HTMLElement,
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        sections: HTMLCollectionOf<Element>
    ) {
        selector!.style.left = `${i * 50}px`
        const classList = (e.target as Element).classList
        const elemnt = e.target as Element

        console.log(e)

        for (let section of sections) {
            const sectionElement = section as Element
            sectionElement.classList.remove('active')
        }

        if (classList.contains('item')) {
            const parent = elemnt.parentElement as Element
            parent.classList.add('active')
        } else {
            elemnt.classList.add('active')
        }
    }

    const [semicircleClasses, setSemicircleClasses] = useState('')
    const semicircle = document.getElementById('semicircle')!
    let prevClassList: DOMTokenList
    let htmlSections = document.getElementsByClassName('navbar-section')
    return (
        <div className="navbar">
            <div id="semicircle" className={`semicircle ${semicircleClasses}`}></div>
            {sections.map((item, i) => {
                return (
                    <button
                        key={i}
                        className={`navbar-section ${i == 0 ? 'active' : ''}`}
                        onClick={e => {
                            onClick(i, semicircle, e, htmlSections)
                            if (prevClassList != undefined) {
                                prevClassList.remove('active')
                            }
                            prevClassList = (e.target as Element).classList
                        }}
                    >
                        <div className="item">{item}</div>
                    </button>
                )
            })}
        </div>
    )
}
