import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useCharacterAnimations } from "../context/CharacterAnimations";

export function Character(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/character.glb");
  const { actions, names } = useAnimations(animations, group);
  const { setAnimations } = useCharacterAnimations();

  useEffect(() => {
    setAnimations(names);
  }, [names]);

  useEffect(() => {
    actions[names[0]].reset().fadeIn(1).play();
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.Root} />
          <skinnedMesh
            name="Character_Female_Face_01"
            geometry={nodes.Character_Female_Face_01.geometry}
            material={materials.Character}
            skeleton={nodes.Character_Female_Face_01.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/character.glb");
