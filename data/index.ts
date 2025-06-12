import { link } from "fs";

export const navItems = [
  //{ name: "Home", link: "" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I develop and deploy mobile apps for android and ios",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/mob.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building Flutter Animation package",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 10,
    title: "Juhayna Survey",
    des: "Survey app made to Conduct Surveys for Juhayna Food Industries Company.",
    img: "/juh.png",
    iconLists: ["/re.png","/dart.svg"],
    link: "https://play.google.com/store/apps/details?id=com.juhayna.survey&pcampaignid=web_share",
  },
  {
    id: 1,
    title: "Ghazal Parking App",
    des: "Gazelle is a user-friendly mobile app that simplifies parking for car owners and parking attendants.",
    img: "/p1.jpg",
    iconLists: ["/re.png","/dart.svg", "/fire.svg"],
    link: "https://apps.apple.com/sa/app/gazelle/id6502878426",
  },
  {
    id: 2,
    title: "AlSari4Cars",
    des: "Al Sari for Cars App, It is an app that was made to help customers to request cars purchases, services and browse cars news, updates from al sari agencies.",
    img: "/sari.png",
    iconLists: ["/re.png","/dart.svg","/kotlin.png","/fire.svg"],
    link: "https://apps.apple.com/sa/app/alsari4cars/id6741610056",
  },
  {
    id: 3,
    title: "KN",
    des: "The KN app, approved by the Libyan state, provides social, financial, and logistical services such as job opportunities, a marketplace, and transportation, with features for communication and user financial support.",
    img: "/kn.png",
    iconLists: ["/re.png","/dart.svg", "/fire.svg"],
    link: "https://play.google.com/store/apps/details?id=com.alkafaa.alkafaa_user&pcampaignid=web_share",
  },
  {
    id: 4,
    title: "Meter",
    des: "METER is the ultimate platform connecting providers, customers, and sellers in a seamless, easy-to-use app. Whether you're offering a service, selling products, or looking to hire a professional, METER simplifies the process for everyone involved.",
    img: "/met.png",
    iconLists: ["/re.png","/dart.svg", "/fire.svg"],
    link: "https://apps.apple.com/us/app/meter-app/id6664052882",
  },
  {
    id: 6,
    title: "Mansour",
    des: "We work in selling, slaughtering, packaging and delivering the best local sheep in refrigerated cars throughout the year in all regions of Riyadh. Our products are distinguished by high quality and reasonable prices.",
    img: "/man.png",
    iconLists: ["/re.png","/dart.svg"],
    link: "https://apps.apple.com/eg/app/%D9%85%D9%86%D8%B5%D9%88%D8%B1-%D9%84%D9%84%D8%B0%D8%A8%D8%A7%D8%A6%D8%AD/id1394266199?platform=iphone",
  },
  {
    id: 7,
    title: "Power Punch",
    des: "Power Punch is a shopping app with a smooth interface, secure payments, product browsing, and order tracking for a fast, reliable experience.",
    img: "/power.jpg",
    iconLists: ["/re.png","/dart.svg", "/fire.svg"],
    link: "https://play.google.com/store/apps/details?id=com.tocaan.powerpunch&pcampaignid=web_share",
  },
  {
    id: 8,
    title: "Al-Anduls",
    des: "This application is for Al-Andalus Electrical Appliances Company. It's An Ecommerce for electrical products",
    img: "/and.png",
    iconLists: ["/re.png","/dart.svg", "/fire.svg"],
    link: "https://apps.apple.com/us/app/%D8%A7%D9%84%D8%A7%D9%86%D8%AF%D9%84%D8%B3/id6473839184",
  },
  {
    id: 9,
    title: "Nibbles",
    des: "Nibbles is a Flutter-based food app designed to provide users with a delightful and user-friendly experience as they explore a variety of meals and food packages.",
    img: "/p4.png",
    iconLists: ["/re.png","/dart.svg", "/fire.svg"],
    link: "https://github.com/mo7amedaliEbaid/nibbles-ecommerce-food",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Mohamed was a fantastic experience. His deep understanding of mobile development, especially in Flutter, was evident from day one. Mohamed's commitment to delivering outstanding results and his passion for technology make him an invaluable asset. If you're looking to innovate your mobile app and exceed user expectations, Mohamed is your go-to developer.",
    name: "Fatima Ahmed",
    title: "CTO of Spark Clouds",
  },
  {
    quote:
      "Collaborating with Mohamed was truly refreshing. His meticulous approach to fFutter development and his ability to grasp complex concepts quickly were remarkable. Mohamed's dedication to excellence and his creative problem-solving skills make him an outstanding developer. If you're seeking innovation and reliability in your projects, Mohamed is the ideal choice.",
    name: "Mohamed Nasser",
    title: "Lead Developer at Ammanah Technologies",
  },
  {
    quote:
      "Mohamed Ali's expertise in Mobile development was crucial to our project's success. His innovative solutions and proactive approach helped us overcome many challenges. Mohamed's professionalism and commitment to delivering high-quality work make him a valuable team member. If you're venturing into flutter technology, Mohamed is the expert you need.",
    name: "Ahmed Saleh",
    title: "Blockchain Architect at CryptoTech Solutions",
  },
  {
    quote:
      "Mohamed's Coding skills are exceptional. His ability to blend creativity with user-centric design principles resulted in an intuitive and visually appealing product. Mohamed's attention to detail and passion for creating meaningful user experiences set him apart. If you're looking to elevate your app's design, Mohamed is the developer you're looking for.",
    name: "Huda Al-Farsi",
    title: "Senior UX/UI Designer at Sit",
  },
  {
    quote:
      "Working with Mohamed Ali was a pleasure. His expertise in clean architecture and scalable solutions was instrumental in optimizing our infrastructure. Mohamed's dedication to delivering smooth and scalable apps is commendable. If you need and app to grow your business, Mohamed is the expert you can rely on.",
    name: "Khalid Hassan",
    title: "Saudi Busnessmain",
  },
];


export const companies = [
  {
    id: 1,
    name: "Flutter",
    img: "/re.png",
   // nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "Dart",
    img: "/dart.svg",
   // nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Firebase",
    img: "/fire.svg",
   // nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "Kotlin",
    img: "/kotlin.png",
 //   nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "React.Native",
    img: "/re.svg",
   // nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Mobile Application Developer",
    company: "Spark Clouds",
    startDate: "Jan 2021",
    endDate: "Dec 2021",
    desc: "Assisted in the development of a Mobile Native Applications Using Java and Kotlin.",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Flutter Developer",
    company: "U-Med",
    startDate: "Dec 2022",
    endDate: "Apr 2022",
    desc: "Designed, developed and deployed mobile apps for both iOS & Android platforms using Flutter.",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Flutter Developer",
    company: "Sit",
    startDate: "Apr 2022",
    endDate: "Mar 2024",
    desc: "Lead the development of a mobile app for a client, from initial concept to deployment on app stores.",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Senior Mobile Developer",
    company: "Webstdy",
    startDate: "Mar 2024",
    endDate: "Present",
    desc: "Developed and maintained user-facing features using modern mobile technologies.",
    thumbnail: "/exp4.svg",
  },
  {
    id: 5,
    title: "Mobile Developer",
    company: "Juhayna Food Industries",
    startDate: "Sep 2024",
    endDate: "Dec 2024",
    desc: "Developed and deployed a survey app to conduct surveys for juhayna company",
    thumbnail: "/exp2.svg",
  },
];
export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/mo7amedaliEbaid",
  },
  {
    id: 2,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/mo7amedebaid/",
  },
];
