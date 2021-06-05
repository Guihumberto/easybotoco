import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

import * as S from "./styled"

const Avatar = () => {
    return (
        <S.AvatarWrapper>
            <StaticImage 
                src="../../images/easy-icon.png" 
                alt="easy avatar" 
                placeholder="tracedSVG"
            />
        </S.AvatarWrapper>
    )
}

export default Avatar