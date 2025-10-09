import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const RobotModel = ({ isMobile }) => {
  const robot = useGLTF("./cute_robot/scene.gltf");
  const meshRef = useRef();

  // Animation de rotation et de balancement pour BB-8
  useFrame((state) => {
    if (meshRef.current) {
      // Rotation douce
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <hemisphereLight intensity={0.6} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1.5} position={[0, 0, 0]} />
      
      {/* Lumières pour donner vie à BB-8 */}
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#ff8800" />
      <pointLight position={[-5, 3, -5]} intensity={0.3} color="#00aaff" />
      
      <primitive
        object={robot.scene}
        scale={isMobile ? 0.01 : 0.015}
        position={isMobile ? [0, -0.3, -1] : [0, -0.6, -1.5]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const RobotCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 1, 5], fov: 40 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={1}
        />
        <RobotModel isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default RobotCanvas;