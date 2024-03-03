import { OrbitControls } from "@react-three/drei";

import Model from "./model";


const Scene = () => {
  return (
    <>
      <ambientLight intensity={2} />
      <OrbitControls />
        {true ? <Model />: ""}
 
 

    </>
  );
};

export default Scene;
