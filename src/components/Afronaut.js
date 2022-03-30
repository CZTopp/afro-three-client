import React, { useRef, useEffect } from "react"
import * as THREE from "three"
import { useGLTF, useHelper } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import afronautModel from "../assets/models/afronaut.glb"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const Afronaut = (props) => {
  const gltf = useLoader(GLTFLoader, afronautModel)
  const afronaut = useRef()

  if (gltf) {
    gltf.scene.scale.set(8, 8, 8)
    gltf.scene.rotation.y = 1.5
    gltf.scene.position.set(2, -2, 0)
    afronaut.current = gltf.scene
  }
  return (
    <>
      <primitive object={afronaut.current} />
    </>
  )
}

useGLTF.preload(afronautModel)

export default Afronaut
