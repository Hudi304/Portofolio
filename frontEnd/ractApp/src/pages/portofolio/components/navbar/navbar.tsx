import { useState } from 'react'
import './navbar_styles.scss'
import { AccessAlarm, ThreeDRotation, GitHub, Facebook, Instagram, BugReport } from '@material-ui/icons'

interface NavbarProps {
    something?: string
    navbarComponentClasses: string
}

const sections = [<AccessAlarm />, <ThreeDRotation />, <GitHub />, <Facebook />, <Instagram />, <BugReport />]

export function Navbar(props: NavbarProps): JSX.Element {
    const [semicircleClasses, setSemicircleClasses] = useState('')
    const semicircle = document.getElementById('semicircle')!
    let prevClassList: DOMTokenList
    let htmlSections = document.getElementsByClassName('navbar-section')
    const { navbarComponentClasses } = props

    function onClick(
        i: number,
        selector: HTMLElement,
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        sections: HTMLCollectionOf<Element>
    ) {
        selector!.style.left = `${i * 50}px`
        const classList = (e.target as Element).classList
        const elemnt = e.target as Element
        // const children = element.

        console.log(elemnt)
        console.log(classList)

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

    return (
        <div className={`${navbarComponentClasses}`}>
            <div className="navbar navbar_expand_width" style={{ maxWidth: `${sections.length * 50}px` }}>
                <div id="semicircle" className={`selector ${semicircleClasses}`} />
                {sections.map((item, i) => {
                    return (
                        <button
                            key={i}
                            className={`navbar-section-btn ${i == 0 ? 'active' : ''}`}
                            onClick={e => {
                                const semicircle = document.getElementById('semicircle')!
                                onClick(i, semicircle!, e, htmlSections)
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
        </div>
    )
}
