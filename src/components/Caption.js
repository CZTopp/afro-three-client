import React, { Suspense } from "react"
import * as THREE from "three"
import { Canvas, useThree, useFrame } from "@react-three/fiber"
import { Text } from "@react-three/drei"

export const Caption = ({ children, position }) => {
  const { width } = useThree((state) => state.viewport)
  return (
    <Text
      position={position}
      lineHeight={0.8}
      //   font="/Ki-Medium.ttf"
      fontSize={width / 29}
      material-toneMapped={false}
      anchorX="center"
      anchorY="middle"
      //   color={0x08ff39}
      color={0x65d7c0}
    >
      {children}
    </Text>
  )
}
