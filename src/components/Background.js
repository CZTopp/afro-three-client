import React from "react"
import styled from "styled-components"
import backdrop from "../assets/images/Hero.png"

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 1000px;
  background: linear-gradient(180deg, #080439 6.33%, #14021e 39.13%);
  text-align: center;
  overflow: hidden;
`
const Wave = styled.div`
  position: absolute;
  width: 100%;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100%;

  @media (max-width: 1440px) {
    background-size: 1440px;
  }
`

const Wave1 = styled(Wave)`
  background-image: url(${backdrop});
`

export const Background = () => {
  return (
    <>
      <Wrapper>
        <Wave1 />
      </Wrapper>
    </>
  )
}
