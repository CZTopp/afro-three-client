import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useLoader, useFrame } from "@react-three/fiber"
import babyshipModel from "../assets/models/babyship.glb"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const Babyship = (props) => {
  const babyship = useRef()
  const gltf = useLoader(GLTFLoader, babyshipModel)

  if (gltf) {
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(-2.9, -3.2, -1.5)
    babyship.current = gltf.scene
  }

  useFrame(({ clock }) => {
    babyship.current.rotation.y = clock.getElapsedTime() * 0.025
  })

  return (
    <>
      <primitive object={babyship.current} />
    </>
  )
}

useGLTF.preload(babyshipModel)

export default Babyship
