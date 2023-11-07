import React, { useRef } from "react";
import { easing } from "maath";
import { useGLTF } from "@react-three/drei";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const Backdrop = () => {
	const shadows = useRef();
	return (
		<AccumulativeShadows
			position={[0, 0, -0.14]}
			ref={shadows}
			temporal
			frames={60}
			alphaTest={0.2}
			scale={4}
			rotation={[Math.PI / 2, 0, 0]}
		>
			<RandomizedLight
				amount={8}
				radius={16}
				intensity={0.9}
				ambient={0.8}
				position={[5, -5, 10]}
			/>
		</AccumulativeShadows>
	);
};

export default Backdrop;
