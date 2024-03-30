import { AiOutlineLoading } from "react-icons/ai";
import { motion } from 'framer-motion'

const Spinner = () => {
  return (
    <motion.div 
    animate="rotation"
    variants={{
      rotation: {
        rotate: 360,
        scale: 2
      }
    }}
    >
      <AiOutlineLoading className="absolute z-100 text-sky-800" />
    </motion.div>
  )
}

export default Spinner
