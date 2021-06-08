import styled from "styled-components"
import media from "styled-media-query"

export const LayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  ${media.lessThan("large")`
    flex-direction: column;
  `}
`

export const LayoutMain = styled.main`
  background: var(--background);
  min-height: 100vh;
  padding: 1rem 4.5rem 0 16rem;
  transition: background, color 0.5s;
  width: 100%;
  body#grid & {
    grid-template-areas:
      "posts"
      "pagination";
  }
  ${media.lessThan("large")`
    padding: 4.125rem 0 3rem 0;
  `}
`