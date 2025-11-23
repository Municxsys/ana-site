
"use client";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
export default function Hero(){
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat" style={{backgroundImage:"url('/images/background.png')"}}>
      <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]"></div>
      <motion.div className="relative z-10 flex flex-col items-center" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:2.4,ease:"easeOut"}}>
        <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:0.3,duration:2.0,ease:"easeOut"}}><Logo/></motion.div>
        <motion.h1 className="mt-6 font-serif text-4xl md:text-6xl text-green-vitality tracking-widest uppercase" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:0.6,duration:2.0,ease:"easeOut"}}>Ana Casarotti</motion.h1>
        <motion.p className="mt-3 text-lg md:text-xl text-ink/80" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.0,duration:1.6}}>Medizinische Fußpflege & Kosmetik – Hausbesuche in Köln und Umgebung</motion.p>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.4,duration:1.2}} className="mt-10"><Button href="#kontakt">Termin vereinbaren</Button></motion.div>
      </motion.div>
    </section>
  );
}
