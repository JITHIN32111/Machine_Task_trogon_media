import user1img from "/allImages/user4img.png";
import user2img from "/allImages/user3img.png";
import user3img from "/allImages/user8.png";
import tvImg from "/allImages/tv.png";
import designImg from "/allImages/Design.png";
import actingImg from "/allImages/acting.png";
import artImg from "/allImages/art.png";
import gamesImg from "/allImages/games.png";
import cricketImg from "/allImages/cricket.png";
import photographyImg from "/allImages/photography.png";
import user4img from "/allImages/user6.png";
import user5img from "/allImages/user7.png";
import userMsg1 from "/allImages/userMsg1.png";
import userMsg2 from "/allImages/userMsg2.png";
import userMsg3 from "/allImages/userMsg3.png";
import userMsg4 from "/allImages/userMsg4.png";
import userMsg5 from "/allImages/userMsg5.png";
import { RiHome2Fill } from "react-icons/ri";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { BsRocketFill } from "react-icons/bs";
import { FaBinoculars } from "react-icons/fa6";
export const PostImgs = [
  { icon: user1img },
  { icon: user2img },
  { icon: user3img },
  { icon: user4img },
  { icon: user5img },
];

export const Menus = [
  { title: "Tv Shows", icon: tvImg },
  { title: "Photography", icon: photographyImg },
  { title: "Design", icon: designImg },
  { title: "Acting", icon: actingImg },
  { title: "Art Gallery", icon: artImg },
  { title: "Games", icon: gamesImg },
  { title: "Cricket", icon: cricketImg },
];
export const msgIcon = [
    { icon: userMsg1 },
    { icon: userMsg2 },
    { icon: userMsg3 },
    { icon: userMsg4 },
    { icon: userMsg5 },
  ];

  export const Icons = [
    { title: "Home", icon: RiHome2Fill },
    { title: "Messages", icon: TbMessageCircle2Filled },
    { title: "Settings", icon: IoMdSettings },
    { title: "Upgrade", icon: BsRocketFill },
    { title: "Explore", icon: FaBinoculars },
  ]; 
 export const userDetails = [
    {
      title: "Basic Information",
      details: [
        { label: "Date of Birth", value: "27-12-1993" },
        { label: "Email Id", value: "example@gmail.com" },
        { label: "Blood Group", value: "AB+" },
        { label: "Height", value: "164cm" },
        { label: "Weight", value: "64kg" },
      ],
    },
    {
      title: "Religious Information",
      details: [
        { label: "Religion", value: "Islam" },
        { label: "Sect", value: "Sunni" },
        { label: "Perform Namaz", value: "Always" },
        { label: "Read Qur'an", value: "Daily" },
        { label: "Religiousness", value: "Religious" },
      ],
    },
    {
      title: "Educational and Professional Information",
      details: [
        { label: "Education", value: "Bachelors (Bsc Computer Science)" },
        { label: "Profession", value: "Computer Engineer" },
      ],
    },
  ];