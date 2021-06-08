import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

import * as S from "./styled"

const Banner = () => {
    return (
        <S.BannerItemLink>
            <S.BannerWrapper>
                <S.BannerItemImage><StaticImage 
                src="../../images/banner.jpg" 
                alt="easy avatar" 
                placeholder="tracedSVG"
                />
                </S.BannerItemImage>
            </S.BannerWrapper>
        </S.BannerItemLink>
    )
}

export default Banner