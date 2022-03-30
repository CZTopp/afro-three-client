import "./App.css"
import { Background } from "./components/Background"
import { Text } from "./components/Text"
import { Suspense } from "react"
import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import Afronaut from "./components/Afronaut"
import Babyship from "./components/Babyship"
import styled from "styled-components"
import { Caption } from "./components/Caption"
// import { Box } from "./components/Box"

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;
  canvas {
    height: 740px;
  }
`

// const sizes = {
//   width: 800,
//   height: 600,
// }
// const camera = new THREE.PerspectiveCamera(
//   10,
//   sizes.width / sizes.height,
//   0.1,
//   100
// )
// camera.position.x = 1
// camera.position.y = 2
// camera.position.z = 8

// console.log(camera.position.x)

function App() {
  return (
    <Wrapper className="App">
      <Text />
      <Background />
      <Canvas className="canvas" camera={[1, 2, 1]}>
        <OrbitControls enableZoom={false} />
        {/* <ambientLight intensity={0.01} /> */}
        <directionalLight position={[-8, 5, 2]} intensity={0.6} />
        <pointLight position={[2, 2, 99]} intensity={3} color={0x65d7c0} />
        <Suspense fallback={null}>
          {/* <Box /> */}
          <Caption position={[-8.9, 5.3, -3]}>{`.fro naming service`}</Caption>
          <Caption
            position={[-4.9, 4.8, -3]}
          >{` Your forever Afro-Futurist API on the blockchain!`}</Caption>
          <Afronaut />
          <Babyship />
        </Suspense>
      </Canvas>
    </Wrapper>
  )
}

export default App
