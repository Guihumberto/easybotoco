import styled from "styled-components"
import media from "styled-media-query"

export const SidebarWrapper = styled.aside`
  align-items: center;
  border-right: 1px solid var(--borders);
  background: var(--mediumBackground);
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 15rem;
  ${media.lessThan("large")`
    align-items: flex-start;
    height: auto;
    padding: 1rem 1rem;
    width: 100%;
    box-shadow: 10px 10px 6px rgba(0,0,0,0.3);
  `}
`