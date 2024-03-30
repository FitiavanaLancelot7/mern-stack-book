import { smilingFace } from "../assets/motions"
import { motion } from "framer-motion"
export default function Motion({ height }) {
  return (
    <motion.div
    initial={{
        opacity: 0,
        scale: 0
    }}
    animate={height >= 700 ? 'smile' : 'notSmile'}
    transition={{ stiffness: 30, type: "spring" }}
    variants={{
        smile: {
            opacity: 1,
            scale: 1
        },
        notSmile: {
            opacity: 0,
            scale: 0
        }
    }}
    >
      <img 
      className="relative h-[4rem] aspect-square pointer-events-none"
      src={smilingFace} alt="Smiling Face" />
    </motion.div>
  )
}


