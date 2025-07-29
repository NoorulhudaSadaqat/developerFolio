/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Noor Ul Huda Sadaqat",
  title: "Hi all, I'm Noor",
  subTitle: emoji(
    "A Full Stack Developer with 4+ years of experience building scalable web and mobile apps using React.js, Next.js, Node.js, NestJS, and React Native, along with integrations in Web3, Firebase, and AWS."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1dQDt7tV4icw_RKiP5zkUzxZPxdbfIi-K/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/NoorulhudaSadaqat",
  linkedin: "https://www.linkedin.com/in/NoorulhudaSadaqat/",
  gmail: "noorulhudasaqat48@gmail.com",
  // gitlab: "",
  // facebook: "https://www.facebook.com/",
  medium: "https://medium.com/@noorulhuda48",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Full Stack Developer with hands-on experience in building scalable web and mobile apps using modern stacks",
  skills: [
    emoji("⚡ Build responsive and high-performance user interfaces using React.js, Next.js, and React Native"),
    emoji("⚡ Develop robust backend APIs using Node.js, Express.js, and NestJS with MongoDB or PostgreSQL"),
    emoji("⚡ Implement Web3 functionality with MetaMask, Ethers.js, and The Graph for decentralized apps"),
    emoji("⚡ Integrate Firebase for authentication, analytics, and real-time data storage"),
    emoji("⚡ Use AWS S3, EC2, and Pinata for file handling and decentralized storage"),
    emoji("⚡ Build dynamic admin panels, quiz platforms, and health-focused mobile experiences")
  ],

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js" // adjust if you want to replace with a custom icon
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Next.js",
      fontAwesomeClassname: "fas fa-code" // placeholder icon
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "NestJS",
      fontAwesomeClassname: "fas fa-cube" // placeholder icon
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Ethers.js",
      fontAwesomeClassname: "fab fa-ethereum" // closest match
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "PUCIT(currently named FCIT)",
      logo: require("./assets/images/pucitLogo.png"),
      subHeader: "Bachelour of Science in Information technology",
      duration: "Oct 2018 - July 2022",
      desc: "Graduated with 3.47 CGPA",
      descBullets: [
        "Been an active member of 3+ co-curricular societies",
        "Won merit-based scholarship"
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Senior Full Stack Developer",
      company: "CodeCraft",
      companylogo: require("./assets/images/codecraftLogo.png"), // Replace with actual logo
      date: "July 2024 – Present",
      desc: "Worked remotely with a New Zealand-based healthtech startup to build mobile and web apps from scratch.",
      descBullets: [
        "Built 5+ key features for a React Native healthcare app including login, splash screen, and subscription flows",
        "Created a dynamic quiz generator platform with subdomain automation and Meta Pixel tracking",
        "Developed a customizable admin panel managing 200+ live quizzes"
      ]
    },
    {
      role: "MERN Stack Developer",
      company: "RenesisTech",
      companylogo: require("./assets/images/renesisLogo.png"),
      date: "Dec 2023 – Oct 2024",
      desc: "Led development of Web3 marketplace features and smart contract integrations.",
      descBullets: [
        "Built decentralized app with minting, bidding, buying, and wallet authentication using Ethers.js",
        "Integrated USDT and Polygon contracts to improve transaction performance"
      ]
    },
    {
      role: "Software Engineer",
      company: "GoSaaS Labs",
      companylogo: require("./assets/images/gosaasLogo.png"),
      date: "Aug 2022 – Dec 2023",
      desc: "Worked on product enhancement and frontend optimization in a team of 12+ engineers.",
      descBullets: [
        "Improved UI and reduced codebase size by over 80% via refactoring",
        "Mentored 3 junior developers and built 40+ Jest test cases for better stability"
      ]
    },
    {
      role: "Associate Software Engineer",
      company: "The Dev Corporate",
      companylogo: require("./assets/images/devcorpLogo.png"),
      date: "Oct 2021 – July 2022",
      desc: "Integrated third-party APIs and built backend modules using NestJS.",
      descBullets: [
        "Integrated Stripe, SendGrid, and OneSignal in 3+ Express apps",
        "Delivered a full NestJS app solo, boosting team performance by 30%"
      ]
    },
    {
      role: "MERN Stack Intern",
      company: "Tbox Solutionz",
      companylogo: require("./assets/images/tboxLogo.png"),
      date: "July 2021 – Sept 2021",
      desc: "Contributed to a live MERN project and resolved over 13 bugs as part of a 12-member team.",
      descBullets: [
        "Completed 4+ practice projects and learned SDLC fundamentals",
        "Collaborated on a real-time application and worked on production issues"
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Startups and platforms where I led full stack or Web3 development",
  projects: [
    {
      image: require("./assets/images/defaultProject.png"),
      projectName: "BLTC",
      projectDesc: "A health-focused mobile app providing personalized tracking and treatment features.",
      projectDetails: [
        "Built login, subscription, and profile flows in React Native",
        "Integrated promo code support and in-app purchase logic",
        "Collaborated with backend team to design key API contracts"
      ],
      techStack: ["React Native", "Redux", "Node.js", "Firebase", "Stripe"],
      footerLink: [
        {
          name: "Visit Mobile App",
          url: "https://apps.apple.com/us/app/bltc-life-transformation-app/id6746760838"
        },
        {
          name: "Visit Website",
          url: "https://app.bltc.io"
        }
      ]
    },
    {
      image: require("./assets/images/defaultProject.png"),
      projectName: "Health Quiz",
      projectDesc: "A customizable quiz platform with subdomain automation and Meta Pixel tracking for health assessments.",
      projectDetails: [
        "Built the entire quiz builder end-to-end from scratch and implemented CI/CD pipeline",
        "Implemented Cloudflare API to auto-provision subdomains for 20+ quizzes",
        "Tracked user flow with Meta Pixel on the final step to aid marketing optimization"
      ],
      techStack: ["React.js", "Node.js", "Firebase", "MongoDB", "Cloudflare", "Meta Pixel", "AWS"],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://quiz.health/"
        }
      ]
    },
    {
      image: require("./assets/images/defaultProject.png"),
      projectName: "L'Arts",
      projectDesc: "A decentralized NFT marketplace for art assets with smart contract functionality.",
      projectDetails: [
        "Built minting, lazy minting, bidding, and claiming flows with full Web3 wallet integration",
        "Optimized transactions using USDT and Polygon contracts",
        "Enabled social login with Google and Apple for smooth onboarding"
      ],
      techStack: ["Next.js", "Ethers.js", "Polygon", "Firebase", "MongoDB"],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://larts.net/"
        }
      ]
    },
    
    {
      image: require("./assets/images/defaultProject.png"),
      projectName: "HutFin",
      projectDesc: "A real estate investment platform using blockchain for secure transactions.",
      projectDetails: [
        "Built core modules for wallet authentication, asset listing, and Web3 bidding",
        "Integrated Ethers.js and smart contracts for real-time property transactions",
        "Optimized wallet-to-wallet flow and ensured smooth dApp onboarding"
      ],
      techStack: ["React.js", "Node.js", "Ethers.js", "Web3", "MongoDB"],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://hutfin.com/"
        }
      ]
    },
    {
      image: require("./assets/images/defaultProject.png"),
      projectName: "Depicted 3D",
      projectDesc: "A 3D NFT visualization and marketplace platform built with Web3 and real-time caching technologies.",
      projectDetails: [
        "Developed dynamic NFT preview handling using GLB, OBJ, and MTL file formats",
        "Used The Graph for fast NFT metadata indexing and querying",
        "Implemented Redis for caching expensive queries and improving performance",
        "Handled wallet-based filtering, NFT detail pages, and metadata sync"
      ],
      techStack: ["React.js", "Node.js", "The Graph", "Redis", "Three.js", "Ethers.js"],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://depicted.ai/"
        }
      ]
    },
    {
      image: require("./assets/images/defaultProject.png"),
      projectName: "Health Assistant",
      projectDesc: "A medical support platform with a responsive frontend for patient management.",
      projectDetails: [
        "Built responsive pages with Ant Design and React.js",
        "Implemented lazy loading and improved loading times by 40%",
        "Used Google reCAPTCHA and context APIs for app-wide security and state management"
      ],
      techStack: ["React.js", "Ant Design", "TypeScript", "BrowserStack", "Google reCAPTCHA"],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.touchmedical.ca/"
        }
      ]
    },
    {
      image: require("./assets/images/defaultProject.png"),
      projectName: "Mahnty",
      projectDesc: "A full-stack project focused on file storage and scalable data APIs.",
      projectDetails: [
        "Designed MongoDB schema and REST APIs from scratch",
        "Handled AWS S3 file storage and Heroku deployment",
        "Led a team of 5 as part of the final year university capstone"
      ],
      techStack: ["Node.js", "Express", "MongoDB", "AWS S3", "Heroku"],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://mahnty.com/"
        }
      ]
    }
  ],
  display: true
};



// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3404959795",
  email_address: "noorulhudasadaqat48@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
