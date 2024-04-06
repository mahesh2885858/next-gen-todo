'use client'
import { useGSAP } from "@gsap/react";
import { Canvas } from "@react-three/fiber";
import { gsap } from "gsap";
import { useRef } from "react";
gsap.registerPlugin(useGSAP)
function About(params: any) {
    const box = useRef<HTMLParagraphElement | null>(null)
    useGSAP(() => {
        gsap.from(".text", { width: 0, stagger: 0.1 })
    }, { scope: box })

    return (
        <section id="name" className="bg-red-300 p-4 text-center text-xl md:text-3xl font-extrabold w-full" >
            <div className="flex w-full flex-col justify-center items-center">
                <p>Hello,</p>

                <p ref={box} className="flex flex-row">

                    {'This is Mahesh'.split("").map((t) => {
                        if (t == " ") return <p>&nbsp;</p>
                        return <p className="text">{t}</p>
                    })}
                </p>
            </div>
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