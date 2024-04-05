'use client'
import { Canvas } from "@react-three/fiber";

async function About(params: any) {

    return (
        <section id="name" className="bg-red-300 p-4 text-center text-xl md:text-3xl font-extrabold w-full" >
            <p>Hello,</p>

            <p><span>I'm</span> <span>MAHESH</span>  </p>
            <Canvas>
                <ambientLight intensity={0.1} />
                <directionalLight color="red" position={[0, 0, 5]} />
                <mesh>
                    <sphereGeometry args={[2, 2, 5]} />
                    <meshStandardMaterial />
                </mesh>
            </Canvas>

        </section>
    )
}
export default About;