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
  title: "Hi, I'm Noor",
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
  subTitle:
    "Full Stack Developer with hands-on experience in building scalable web and mobile apps using modern stacks",
  skills: [
    emoji(
      "⚡ Build responsive and high-performance user interfaces using React.js, Next.js, and React Native"
    ),
    emoji(
      "⚡ Develop robust backend APIs using Node.js, Express.js, and NestJS with MongoDB or PostgreSQL"
    ),
    emoji(
      "⚡ Implement Web3 functionality with MetaMask, Ethers.js, and The Graph for decentralized apps"
    ),
    emoji(
      "⚡ Integrate Firebase for authentication, analytics, and real-time data storage"
    ),
    emoji(
      "⚡ Use AWS S3, EC2, and Pinata for file handling and decentralized storage"
    ),
    emoji(
      "⚡ Build dynamic admin panels, quiz platforms, and health-focused mobile experiences"
    )
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
      fontAwesomeClassname: "fab fa-js" 
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
      schoolName: "PUCIT",
      logo: require("./assets/images/pucitLogo.png"),
      subHeader: "Bachelour of Science in Information technology",
      duration: "Oct 2018 - July 2022",
      desc: "Graduated with 3.47 CGPA",
      descBullets: [
        "Been an active member of 3+ co-curricular societies",
        "Won merit-based scholarship"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend (React.js, Next.js, React Native)",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend (Node.js, Express.js, NestJS)",
      progressPercentage: "85%"
    },
    {
      Stack: "Web3 (Ethers.js, MetaMask, The Graph)",
      progressPercentage: "50%"
    },
    {
      Stack: "Database (MongoDB, PostgreSQL)",
      progressPercentage: "85%"
    },
    {
      Stack: "DevOps & Cloud (Firebase, AWS, Heroku)",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming (JavaScript, TypeScript)",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Senior Full Stack Developer",
      company: "CodeCraft",
      companylogo: require("./assets/images/codecraft.jpeg"), // Replace with actual logo
      date: "July 2024 – Present",
      // desc: "Worked remotely with a New Zealand-based healthtech startup to build mobile and web apps from scratch.",
      descBullets: [
        "Built 5+ core features for a healthcare app in React Native, including login, splash screen, and subscriptions with promo codes.",
        "Helped launch the app from scratch, handling UI, state management, and API integration in a fully remote setup",
        "Built a quiz generator platform end to end, with subdomain automation, UI customisation and Meta Pixel tracking, powering 100+ quizzes"
      ]
    },
    {
      role: "MERN Stack Developer",
      company: "RenesisTech",
      companylogo: require("./assets/images/renesis.jpeg"),
      date: "Dec 2023 – Oct 2024",
      // desc: "Led development of Web3 marketplace features and smart contract integrations.",
      descBullets: [
        "Developed 2 major decentralised Web 3.0 applications, enhancing user engagement and security.",
        "Implemented smart contract integrations with Polygon and USDT, optimising reliability and transaction processes",
        "Collaborated with a team of 10+ and contributed to 6+ projects building 2 from scratch"
      ]
    },
    {
      role: "Software Engineer",
      company: "GoSaaS Labs",
      companylogo: require("./assets/images/gosaas.png"),
      date: "Aug 2022 – Dec 2023",
      // desc: "Worked on product enhancement and frontend optimization in a team of 12+ engineers.",
      descBullets: [
        "Maintenance and enhancement of product and added new features according to client requirements, collaborating with a team of 12+",
        "Mentored 3 junior developers on React and Node.js, and documented best practices for my team.",
        "Developed modules to improve application performance, resulting in 25% more user satisfaction"
      ]
    },
    {
      role: "Associate Software Engineer",
      company: "The Dev Corporate",
      companylogo: require("./assets/images/tdc.jpeg"),
      date: "Oct 2021 – July 2022",
      // desc: "Integrated third-party APIs and built backend modules using NestJS.",
      descBullets: [
        "Integrated 3rd party APIs like Stripe for payment module, SendGrid for email verification, and Onesignal for push notifications in 3+ applications built using Express.js & Node.js",
        "Constructed server-side web services & APIs, designed schemas, and connected databases to local and deployed servers for 3+ apps.",
        "Built an entire app's RESTful APIs solely using Nest.js even without being trained."
      ]
    },
    {
      role: "MERN Stack Intern",
      company: "Tbox Solutionz",
      companylogo: require("./assets/images/tbox.jpeg"),
      date: "July 2021 – Sept 2021",
      // desc: "Contributed to a live MERN project and resolved over 13 bugs as part of a 12-member team.",
      descBullets: [
        "Learned the entire MERN Stack. Completed 4+ practice projects.",
        "Contributed on a live project and fixed 13+ bugs.",
        "Collaborated with a team of 12+ and learned SDLC."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Startups and platforms where I led full stack or Web3 development",
  projects: [
    {
      image: require("./assets/images/defaultProject.png"),
      projectName: "BLTC",
      projectDesc:
        "A health-focused mobile app providing personalized tracking and treatment features.",
      projectDetails: [
        "Created a dynamic quiz module integrating RESTful APIs",
        "Designed and implemented the subscription system with promo code support",
        "Handled user onboarding with Firebase Authentication including login, reset/forgot password",
        "Implemented splash screen and user-friendly navigation for better UX"
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
      projectDesc:
        "A customizable quiz platform with subdomain automation and Meta Pixel tracking for health assessments.",
      projectDetails: [
        "Built the entire quiz builder end-to-end from scratch and implemented CI/CD pipeline",
        "Implemented Cloudflare API to auto-provision subdomains for 20+ quizzes",
        "Tracked user flow with Meta Pixel on the final step to aid marketing optimization"
      ],
      techStack: [
        "React.js",
        "Node.js",
        "Firebase",
        "MongoDB",
        "Cloudflare",
        "Meta Pixel",
        "AWS"
      ],
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
      projectDesc:
        "A decentralized NFT marketplace for art assets with smart contract functionality.",
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
      projectDesc:
        "A real estate investment platform using blockchain for secure transactions.",
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
      projectDesc:
        "A 3D NFT visualization and marketplace platform built with Web3 and real-time caching technologies.",
      projectDetails: [
        "Developed dynamic NFT preview handling using GLB, OBJ, and MTL file formats",
        "Used The Graph for fast NFT metadata indexing and querying",
        "Implemented Redis for caching expensive queries and improving performance",
        "Handled wallet-based filtering, NFT detail pages, and metadata sync"
      ],
      techStack: [
        "React.js",
        "Node.js",
        "The Graph",
        "Redis",
        "Three.js",
        "Ethers.js"
      ],
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
      projectDesc:
        "A medical support platform with a responsive frontend for patient management.",
      projectDetails: [
        "Built responsive pages with Ant Design and React.js",
        "Implemented lazy loading and improved loading times by 40%",
        "Used Google reCAPTCHA and context APIs for app-wide security and state management"
      ],
      techStack: [
        "React.js",
        "Ant Design",
        "TypeScript",
        "BrowserStack",
        "Google reCAPTCHA"
      ],
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
      projectDesc:
        "A full-stack project focused on file storage and scalable data APIs.",
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

const learningSection = {
  display: true,
  title: "Currently Exploring",
  subtitle: "Learning how to build intelligent, AI-powered experiences",
  learning: [
    "🤖 AI Agents: understanding how autonomous agents work and can be orchestrated",
    "🔗 LLM Integration: integrating LLMs via APIs and using tools like LangChain for chaining logic",
    "✍️ Prompt Engineering: writing better prompts for more accurate and controlled model behavior"
  ]
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
  resumeSection,
  learningSection
};
