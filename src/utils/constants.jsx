import { AiOutlineCompass } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineHistoryEdu } from "react-icons/md";
import { GiStairsGoal } from "react-icons/gi";

export const navlinks = [
  {
    id: 1,
    path: "/",
    name: "home",
  },
  {
    id: 2,
    path: "products",
    name: "products",
  },
  {
    id: 3,
    path: "about",
    name: "about",
  },
];

export const services = [
  {
    id: 1,
    icon: <AiOutlineCompass className="scale-[4] text-logoPurple" />,
    title: "mission",
    text: "Creating homes that inspire and nurture, blending comfort and style with our exceptional furniture collection.",
  },
  {
    id: 2,
    icon: <IoEyeOutline className="scale-[4] text-logoPurple" />,
    title: "vision",
    text: "To be the leading destination for individuals seeking exquisite furniture that transforms their living spaces into personal sanctuaries.",
  },
  {
    id: 3,
    icon: <MdOutlineHistoryEdu className="scale-[4] text-logoPurple" />,
    title: "history",
    text: "Providing unparalleled quality, design, and customer satisfaction, while exceeding expectations and enriching lives through the art of fine living.",
  },
  {
    id: 4,
    icon: <GiStairsGoal className="scale-[4] text-logoPurple" />,
    title: "goal",
    text: "To provide exceptional furniture that enhances living spaces, inspires creativity, and creates a lasting sense of comfort and beauty.",
  },
];

// Checking for production environment and set the correct API URL

const apiUrl = import.meta.env.VITE_APP_URL || "https://localhost:8888";

export const checkoutUrl = `${apiUrl}/.netlify/functions/create-payment-intent`;
