import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";

const Model = () => {
    const model = useGLTF (" ./model/pikachu2.glb");
    const animations = useAnimations(model.animations,model.scene);
    console.log(animations);

useEffect(() => {
    animations.actions.Idle.play();
});

    return <primitive position-y={-0.4} object={model.scene} />;
};

useGLTF.preload(" ./model/pikachu2.glb");
export default Model;
