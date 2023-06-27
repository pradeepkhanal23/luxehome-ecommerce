import { AiOutlineCompass } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineHistoryEdu } from "react-icons/md";

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
  {
    id: 4,
    path: "checkout",
    name: "checkout",
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
];
