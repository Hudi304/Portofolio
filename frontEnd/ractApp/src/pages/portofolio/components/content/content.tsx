import './content_styles.scss'
import Tilt from 'react-parallax-tilt'
import { useEffect, useState } from 'react'
import { Navbar } from '../navbar/navbar'

interface ContentProps {
    scale?: number
    navbarComponentClasses: string
}

export function Content(props: ContentProps): JSX.Element {
    const { navbarComponentClasses } = props
    return (
        <div className="content">
            <Navbar navbarComponentClasses={navbarComponentClasses} />
            {/* <h1>Portofolio</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat vehicula placerat. Aliquam eu placerat mi. Morbi
                nec aliquet augue. Pellentesque sit amet convallis lectus. Nulla eget est quis lorem luctus maximus. Vestibulum vel ex
                lacinia, maximus quam non, tempor lectus. Fusce semper interdum elit sit amet condimentum. Vivamus hendrerit et tellus
                rutrum hendrerit. Proin aliquam lorem vitae consequat elementum. Etiam interdum tristique sem ac pretium. Sed tempus neque
                ac odio feugiat posuere.
            </p>
            <p>
                In massa lacus, tempus in metus sed, aliquam facilisis arcu. Integer diam ante, ullamcorper non ipsum vel, bibendum lobortis
                arcu. Aliquam sollicitudin commodo neque, et ullamcorper justo convallis sed. Ut vel convallis lacus. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris sed ullamcorper turpis, ut ultrices ante. Quisque
                nec gravida mauris. Praesent efficitur nibh sit amet luctus vehicula. Proin eu ultricies libero, eu gravida libero.
                Vestibulum feugiat maximus eros, ut condimentum justo dapibus ac. Aenean in ipsum sit amet nibh euismod iaculis. Proin at
                malesuada velit. Aenean eleifend nec leo ut tempor. Sed pretium vehicula purus at feugiat.
            </p>
            <p>
                Quisque risus arcu, ultrices eu urna quis, faucibus lacinia sem. Nulla pharetra a dui in eleifend. Morbi ultrices eros quis
                orci tincidunt vehicula. In hac habitasse platea dictumst. Cras ut placerat ante, id porttitor lorem. Aenean a turpis neque.
                Proin sodales, dolor eget vehicula eleifend, diam enim posuere ipsum, sit amet vehicula nisi est ac tortor. Duis ornare
                lacinia elit, in finibus enim condimentum sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada
                fames ac turpis egestas. Pellentesque lorem diam, tincidunt id sapien eu, commodo egestas enim. Quisque ultrices ut purus
                euismod malesuada. Vivamus ex tellus, pretium quis pretium non, efficitur nec dolor. Phasellus sit amet ornare lorem. Nulla
                porta pulvinar turpis nec consequat. Nulla gravida lectus sed tellus laoreet pellentesque.
            </p>
            <p>
                Pellentesque suscipit nunc eget diam tempus, sit amet semper enim mattis. Maecenas vehicula dui purus, a lacinia ante
                efficitur nec. Sed mattis sed nisl ultrices malesuada. Praesent feugiat interdum dui, eu tristique lectus. Morbi fringilla
                maximus massa, quis hendrerit arcu volutpat eget. Etiam luctus dui at dui iaculis, sed tempus lorem laoreet. Donec eros
                sapien, lacinia a hendrerit quis, volutpat sit amet dui. Duis feugiat congue tellus, eu fringilla est tristique sed. Sed
                urna ex, faucibus ac libero vitae, luctus pulvinar diam.
            </p>
            <p>
                Aenean rutrum arcu felis, eu congue magna aliquam ac. Integer nec feugiat velit, sed sagittis urna. Integer iaculis nisi ut
                posuere maximus. Duis tempor arcu in neque rhoncus malesuada. Nullam et ultricies tortor. Duis faucibus magna in sapien
                dignissim cursus. Suspendisse eget luctus ante, aliquet ullamcorper purus. Ut non neque lacus. Duis in elit volutpat sapien
                hendrerit pharetra sit amet non diam.
            </p>
            <p></p>
            CONTENT */}
        </div>
    )
}
