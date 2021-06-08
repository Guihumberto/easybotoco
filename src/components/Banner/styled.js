import styled from 'styled-components'
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const BannerItemLink = styled(AniLink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;
  
  body#grid & {
    background-color: var(--background);
  }

  &:hover {
    color: var(--highlight);
  }
`

export const BannerWrapper = styled.section`
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border-bottom: 1px solid var(--borders);
  background: #EBD624;
  display: flex;
  margin-bottom: 1rem;
  height: auto;
  width: 100%;
  box-shadow: 10px 10px 6px rgba(0,0,0,0.3);

  ${media.lessThan("large")`
    margin: 1rem 1rem 0 1rem;
  `}
`
export const BannerItemImage = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  height: auto;
  width: 100%;
  ${media.lessThan("large")`
  `}
`