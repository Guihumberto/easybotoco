import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"

import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled"

const PostItem = ({
  slug,
  background,
  category,
  date,
  timeToRead,
  title,
  description,
  image,
}) => (
  <S.PostItemLink
    to={slug}
    cover
    direction="right"
    bg={getThemeColor()}
    duration={0.6}
  >
    <S.PostItemWrapper>
      <S.PostItemImage>
              <StaticImage 
                src="../../images/easy-icon.png" 
                alt="easy avatar" 
                placeholder="tracedSVG"
            />
      </S.PostItemImage>
      <S.PostItemInfo>
        <S.PostWrapperTagdate>
          <S.PostItemTag background={background}>{category}</S.PostItemTag>
          <S.PostItemDate> {date} • Pinheiro - MA</S.PostItemDate>
        </S.PostWrapperTagdate>
        <S.PostItemTitle>{title}</S.PostItemTitle>
        <S.PostItemDescription>{description}</S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem