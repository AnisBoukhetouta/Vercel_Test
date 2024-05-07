import React from 'react';
import { useFrame, useThree } from '@react-three/fiber';

import json from './blueFlame.json';
import NebulaEngine, { NebulaSystem } from './nebulaEngine';

interface Props {}
const BlueFlame: React.FC<Props> = (props: Props) => {
  const { scene } = useThree();
  const [particleSystem, setParticleSystem] = React.useState<NebulaSystem>();

  useFrame(() => {
    if (particleSystem) {
      NebulaEngine.update(particleSystem);
    }
  });

  React.useEffect(() => {
    NebulaEngine.loadSystem(json as unknown as JSON, scene).then((nebulaSystem) => {
      setParticleSystem(nebulaSystem);
    });
  }, [scene]);
};

export default BlueFlame;
