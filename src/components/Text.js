import React from "react"
import styled from "styled-components"
import text3d from "../assets/images/text-models.png"

const Image = styled.img`
  position: absolute;
  align-self: flex-start;
  width: 545px;
  height: 392;
`

export const Text = () => {
  return <Image src={text3d} alt="fro naming service text" />
}
