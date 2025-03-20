"use client";
import CurvedText from "@/components/curved-text";
import { motion, useInView } from "framer-motion";
import { WHO_AM_I_BG } from "@/lib/asset";
import Image from "next/image";
import { useRef } from "react";

export default function WhoAmI() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: process.env.NODE_ENV == "production",
  });

  return (
    <motion.div
      className="relative mx-auto mt-10 max-w-7xl overflow-hidden px-3 pb-6 md:mt-20 md:pb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <motion.p
        className="mb-8 text-2xl sm:mb-12 sm:text-3xl md:mb-16 md:text-4xl lg:text-5xl xl:text-6xl"
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        I believe in a user centered design approach, ensuring that every
        project I work on is tailored to meet the specific needs of its users.
      </motion.p>
      <motion.div
        className="text-muted-foreground overflow-hidden border-b pb-3 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 1 }}
        ref={ref}
      >
        <CurvedText arcHeight={120} fontSize={72} className="-my-8">
          This is me.
        </CurvedText>
      </motion.div>
      <motion.div
        className="mt-3.5 grid place-content-center min-[950px]:grid-cols-2"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="h-full text-left">
          <div className="w-full md:w-max">
            <motion.p
              className="text-center text-4xl md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              Hi, I&apos;m <span className="font-paytoneOne">Aquib Alam.</span>
            </motion.p>
            <motion.p
              className="my-2 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 2.5, duration: 0.8 }}
            >
              <span className="font-paytoneOne text-[8px]">
                (also an OCD person.)
              </span>
            </motion.p>
          </div>
        </div>
        <motion.div
          className="text-muted-foreground max-w-[450px] text-lg"
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: 2,
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <p>
            I&apos;m a Kolkata based Full Stack Developer who enjoys learning
            and building meaningful web applications. I try my best to create
            smooth and functional user experiences while continuously improving
            my skills.
          </p>
          <p className="mt-3">
            I focus on writing clean, efficient code and making applications
            that are accessible, super fast, and user-friendly.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/2 -z-[1] w-full max-w-xl -translate-x-1/2 -translate-y-1/2 transform saturate-0 select-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 0.3, scale: 1 } : {}}
        transition={{ delay: 0, duration: 1 }}
      >
        <Image
          src={WHO_AM_I_BG}
          alt="Pending"
          width={1000}
          height={1000}
          quality={100}
        />
      </motion.div>
    </motion.div>
  );
}
