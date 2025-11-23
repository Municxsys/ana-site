
"use client";
import { motion } from "framer-motion";
export default function Card({ title, price, children, img } : { title: string, price?: string, children?: React.ReactNode, img?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="rounded-[2rem] bg-neutral-sand text-green-vitality backdrop-blur-sm p-6 shadow-card border border-green-vitality/10 hover:shadow-glowGold transition-all"
      style={{ borderRadius: "2rem" }}
    >
      {img && (<div className="overflow-hidden rounded-[2rem]"><img src={img} alt={title} className="w-full h-48 object-cover" /></div>)}
      <h3 className="mt-4 font-serif text-xl text-green-vitality">{title}</h3>
      {price && <p className="mt-1 font-medium text-ink/80">{price}</p>}
      {children && <div className="mt-4 text-ink/80">{children}</div>}
    </motion.div>
  );
}
