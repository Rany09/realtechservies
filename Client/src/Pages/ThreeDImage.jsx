// ThreeDImage.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const ThreeDImage = ({ imageUrl }) => {
  return (
    <Canvas style={{ height: '500px' }}>
      <ambientLight />
      <directionalLight position={[0, 0, 5]} />
      <mesh>
        <sphereBufferGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          attach="material"
          map={new THREE.TextureLoader().load(imageUrl)} 
          side={THREE.BackSide} // Render the inside of the sphere
        />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDImage;
