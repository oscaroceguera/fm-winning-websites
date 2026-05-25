"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   // const tween = gsap.to(".title", {
  //   //   x: 200,
  //   //   duration: 10,
  //   //   // onUpdate: () => {
  //   //   //   console.log("Updated");
  //   //   // },
  //   // });

  //   const ctx = gsap.context(() => {
  //     gsap.to(".title", {
  //       x: 200,
  //       duration: 10,
  //       onUpdate: () => {
  //         console.log("Updated");
  //       },
  //     });

  //     gsap.from(".title", {
  //       opacity: 0,
  //       duration: 10,
  //     });
  //   }, containerRef);

  //   return () => {
  //     // tween.revert();
  //     ctx.revert();
  //   };
  // }, []);

  // hook do the same
  useGSAP(
    () => {
      SplitText.create(".title", {
        type: "chars, words",
        charsClass: "letter",
      });

      gsap.from(".title .letter", {
        y: 200,
        ease: "circ.out",
        opacity: 0,
        stagger: 0.03,
      });
    },
    {
      scope: containerRef,
    },
  );

  return (
    <div className="bg-blue-300 text-black">
      <h1 className="title">HERE</h1>
      <div
        ref={containerRef}
        className="flex h-screen items-end justify-left overflow-hidden"
      >
        <h1 className="title font-black text-[min(20rem,30vw)] leading-none pb-[0.1em] text-left">
          GSAP
          <br />
          tweens
        </h1>
      </div>
    </div>
  );
}
