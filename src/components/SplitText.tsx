import { motion } from "motion/react";

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function SplitText({
  children,
  className = "",
  delay = 0,
  stagger = 0.07,
  once = true,
  as: Tag = "span",
}: SplitTextProps) {
  const words = children.split(" ");

  return (
    <Tag className={`${className}`} aria-label={children}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block mr-[0.28em] last:mr-0">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once }}
            transition={{
              delay: delay + i * stagger,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
