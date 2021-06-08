import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const PostItemLink = styled(AniLink)`
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

export const PostItemWrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid var(--borders);
  background: #fff;
  display: flex;
  padding: 1.5rem 1.5rem;
  width: 100%;
  box-shadow: 10px 10px 6px rgba(0,0,0,0.3);
  body#grid & {
    border: none;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
  }
  ${media.lessThan("large")`
    border-radius: 15px;
    margin: 8px 16px;
    align-items: flex-start;
    padding: 0 0;
    width: 95%;
  `}
`

export const PostItemImage = styled.div`
  align-items: center;
  background: #c4c4c4;
  border-radius: 15%;
  color: #fff;
  display: flex;
  padding: .2rem .5rem;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  height: 111px;
  width: 111px;
  text-transfroma: uppercase;
  ${media.lessThan("large")`
    border-radius: 15px 0 0 15px;
    font-size: 1rem;
    margin-bottom: .7rem;
    height: 100%;
    background: #B6FFA9;
  `}
`
export const PostWrapperTagdate = styled.div`
  align-items: center;
  display: flex;
  padding: .5rem 0;
  border-radius: 15% 0 0 15%;
`


export const PostItemTag = styled.div`
  align-items: center;
  background: ${props =>
    props.background ? props.background : "var(--highlight)"};
  border-radius: 15px;
  color: #fff;
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  min-height: auto;
  width: 90px;
  padding: .2rem .5rem;
  text-transform: uppercase;
  margin-bottom: .7rem;
  flex-direction: column;
  ${media.lessThan("large")`
    margin-bottom: .2rem;
    font-size: 0.7rem;
    font-weight: 500;
    width: 70px;
    padding: .2rem .2rem;
  `}
  body#grid & {
    margin-bottom: 1.5rem;
  }
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  ${media.lessThan("large")`
    margin: 0 0 0 1rem;
    width: 300px;
    padding: 1rem 0rem;
  `}
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
  padding: 0 .5rem;
  ${media.lessThan("large")`
    font-size: 0.7rem;
  `}
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
  ${media.lessThan("large")`
    font-size: 1.2rem;
    font-weight: 700;
    margin: .2rem 0 0 0;
  `}
  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
  ${media.lessThan("large")`
    font-size: .8rem;
    font-weight: 300;
    margin: 0 0 0 0;

  `}
`