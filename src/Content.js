// import images
import Hero_person from "./assets/images/Hero/MEs.png";

import reactjs from "./assets/images/Skills/react.png";
import python from "./assets/images/Skills/python.png";
import cpp from "./assets/images/Skills/c++.png";
import css from "./assets/images/Skills/css.png";
import html from "./assets/images/Skills/html.png";
import docker from "./assets/images/Skills/docker.png";
import java from "./assets/images/Skills/java.png";
import sql from "./assets/images/Skills/sql.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/Project3.png";
import project2 from "./assets/images/Projects/Project1.png";
import project3 from "./assets/images/Projects/Project2.png";
import project4 from "./assets/images/Projects/Project4.png";
// import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/man.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "SANAULLAH",
    LastName: "MOMIN",
    btnText: "Github",
    image: Hero_person,
    hero_content: [
      {
        count: "1.5+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Html",
        para: "Lorem ipsum text  dummy",
        logo: html,
      },
      {
        name: "Css",
        para: "Lorem ipsum text  dummy",
        logo: css,
      },
      {
        name: "C++",
        para: "Lorem ipsum text  dummy",
        logo: cpp,
      },
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Docker",
        para: "Lorem ipsum text  dummy",
        logo: docker,
      },
      {
        name: "Python",
        para: "Lorem ipsum text  dummy",
        logo: python,
      },
      {
        name: "Java",
        para: "Lorem ipsum text  dummy",
        logo: java,
      },
      {
        name: "Sql",
        para: "Lorem ipsum text  dummy",
        logo: sql,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Proficient in modern web development technologies including HTML, CSS, JavaScript, and frameworks like React. Skilled in creating responsive, user-centric designs with seamless functionality.",
        logo: services_logo1,
      },
      {
        title: "UI / UX DESIGNING",
        para: "Experienced in crafting intuitive and visually appealing user interfaces using modern design tools. Skilled in delivering user-centric designs that enhance functionality and engagement.",
        logo: services_logo2,
      },
      {
        title: "Mobile development",
        para: "Skilled in building responsive and feature-rich mobile applications using React Native. Proficient in creating seamless user experiences on Android devices.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    //image: person_project,
    project_content: [
      {
        title: "Todo App",
        image: project1,
      },
      {
        title: "Digital Wallet",
        image: project2,
      },
      {
        title: "Property App",
        image: project3,
      },
      {
        title: "Employee Management System",
        image: project4,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para:"Passionate developer ready to bring your ideas to life with expertise in Web Development, UI/UX Design, and Mobile Development using React Native. Let’s collaborate to create impactful and user-friendly solutions!",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "sanaullahmomin111@gmail.com",
        icon: GrMail,
        link: "mailto:sanaullahmomin111@gmail.com",
      },
      {
        text: "+92 3095053623",
        icon: MdCall,
        link: "https://wa.me/3095053623",
      },
      {
        text: "momin._.23",
        icon: BsInstagram,
        link: "https://www.instagram.com/momin._.23/",
      },
    ],
  },
  Footer: {
    text: "All © Rights Reserved",
  },
};
