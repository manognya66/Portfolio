import { motion } from "framer-motion";
import { FaShieldAlt, FaLaptopCode, FaRobot } from "react-icons/fa";

const interests = [
  {
    icon: <FaShieldAlt className="text-indigo-600 text-3xl" />,
    text: "Keen interest in exploring and learning ",
    highlight: "Cyber Security",
  },
  {
    icon: <FaLaptopCode className="text-green-600 text-3xl" />,
    text: "Strong knowledge in ",
    highlight: "MERN Stack Development",
  },
  {
    icon: <FaRobot className="text-pink-600 text-3xl" />,
    text: "Enthusiastic about building ",
    highlight: "AI Assistants",
  },
];

export default function InterestsScroller() {
  return (
    <div className="overflow-hidden w-full mt-6">
      <motion.ul
        className="flex gap-10 whitespace-nowrap text-gray-600"
        animate={{ x: ["0%", "-200%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        }}
      >
        {interests.concat(interests).map((item, idx) => (
          <li key={idx} className="flex items-center gap-3 min-w-max">
            {item.icon}
            <span>
              {item.text}
              <span className="font-medium">{item.highlight}</span>
            </span>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
