/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Alex",
  title: "Hi all, I'm Alex",
  subTitle: emoji(
    "Passionate Data Scientist and Game Developer 🚀"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/alexandre-gautier-684856206/",
  github: "https://github.com/alex-experiments",
  // leetcode: "https://leetcode.com/u/Darkysun/",
  // gmail: "saadpasta70@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "HARD-WORKING AI ENGINEER THAT DEVELOPS GAMES IN HIS SPARE TIME",
  skills: [
    emoji("⚡ Develop cutting-edge AI applications"),
    emoji("⚡ Strong background in computer vision and AI research"),
    emoji("⚡ Passionate about game development since the age of 14")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "pytorch",
      fontAwesomeClassname: "	fas fa-fire"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-square"
    },
    {
      skillName: "unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "c#",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "flutter",
      fontAwesomeClassname: "fab fa-codepen"
    },
    {
      skillName: "processing",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "CentraleSupélec -- Paris-Saclay University",
      logo: require("./assets/images/centraleSupelecLogo.png"),
      subHeader: "Engineering Degree (MS) -- Artificial Intelligence Specialization",
      duration: "September 2019 - September 2023",
      desc: "Engineering MS with a specialization in AI.",
      descBullets: [
        "Key subjects studied: Computer Science (Machine Learning, Deep Learning, Data Science, High Performance Computing, Optimization), Mathematics, Statistics.",
        "Completed major group projects: deep-learning based earthquake magnitude classification (~100h), and computer-vision analysis of table soccer games to extract performance statistics (~150h)."
      ]
    },
    {
      schoolName: "CPGE Lycée Joffre Montpellier",
      logo: require("./assets/images/prepajoffre.png"),
      subHeader: "Selective Post-Secondary Studies in Mathematics, Physics, Chemistry, and Computer Science",
      duration: "September 2017 - September 2019",
      desc: "Intensive preparation program for top engineering schools in France.",
      descBullets: [
        "Focused on advanced mathematics, physics, chemistry, and computer science."
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
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
  display: true, // Set true to show workExperiences Section
  experience: [
    {
      role: "AI Engineer",
      company: "Publicis Re:Sources",
      companylogo: require("./assets/images/publicisLogo.png"),
      date: "Apr. 2025 – present",
      desc: "Member of the GenAI team.",
      descBullets: [
        "Lead Developer on PositiveAI project.",
        "Contributions to other projects including object detection and fine-grained classification."
      ]
    },
    {
      role: "AI Engineer",
      company: "SEGULA Technologies",
      companylogo: require("./assets/images/segulaLogo.png"),
      date: "Jan. 2024 – Apr. 2025",
      desc: "Worked on multiple AI research and industrial projects, mainly focused on computer vision, while supervising research interns.",
      descBullets: [
        "Worked on research projects.",
        "Developed multiple proof-of-concepts.",
        "Developed a full-stack application.",
        "Created and delivered a comprehensive 10.5-hour course on AI."
      ]
    },
    {
      role: "Research Intern",
      company: "HeadMind Partners",
      companylogo: require("./assets/images/headmindLogo.png"),
      date: "May 2023 – Nov. 2023",
      desc: "Conducted a technological survey and implemented advanced methods for image generation and deepfake detection.",
      descBullets: [
        "Constrained image generation methods.",
        "Deepfake generation/detection methods.",
        "ML mission with the French Ministry of the Armed Forces."
      ]
    },
    {
      role: "Research Intern",
      company: "ETS x CHU Ste-Justine",
      companylogo: require("./assets/images/etsLogo.png"),
      date: "Mar. 2022 – Aug. 2022",
      desc: "Implemented, evaluated, and optimized unsupervised methods for lesion detection in MRI scans of premature infants’ brains.",
      descBullets: [
        "Worked with sensitive medical data in a clinical research environment."
      ]
    },
    // {
    //   role: "Paid Tutor in Mathematics and Programming",
    //   company: "Self-employed",
    //   companylogo: require("./assets/images/tutoringLogo.png"),
    //   date: "Jan. 2021 – May 2023",
    //   desc: "Delivered mathematics and programming courses to students in selective post-secondary studies.",
    //   descBullets: []
    // }
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    // {
    //   image: require("./assets/images/saayaHealthLogo.webp"),
    //   projectName: "Saayahealth",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://saayahealth.com/"
    //     }
    //     //  you can add extra buttons here.
    //   ]
    // },
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Nextu",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://nextu.se/"
    //     }
    //   ]
    // }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Personnal Projects and Achievements"),
  subtitle:
    "Some Cool Stuff that I have done as well as some personnal achievements!",

  achievementsCards: [
    {
      title: "Easy Bbox",
      subtitle: "Python package for Bounding Box manipulation (2025)",
      image: require("./assets/images/easyBboxLogo.png"),
      imageAlt: "EasyBbox illustration",
      footerLink: [
        {
          name: "See on Github",
          url: "https://github.com/Alex-experiments/easy-bbox"
        },
        {
          name: "See on Pypi",
          url: "https://pypi.org/project/easy-bbox"
        },
        {
          name: "See the Docs",
          url: "https://alex-experiments.github.io/easy-bbox"
        }
      ]
    },
    {
      title: "Top 40 000 Leetcode",
      subtitle:
        "Entered the top 40 000 Leetcode users",
      image: require("./assets/images/leetcodeLogo.png"),
      imageAlt: "Leetcode's logo",
      footerLink: [
        {
          name: "Leetcode profile",
          url: "https://leetcode.com/u/Darkysun/"
        }
      ]
    },
    {
      title: "Never Stop Racing",
      subtitle: "Crazy Hill Racing remake with Unity (2023)",
      image: require("./assets/images/neverStopRacingLogo.png"),
      imageAlt: "Never Stop Racing screenshot",
      footerLink: [
        {
          name: "Play on PlayStore",
          url: "https://play.google.com/store/apps/details?id=com.GitanerieStudio.BinaryBounce"
        }
      ]
    },
    {
      title: "Binary Bounce",
      subtitle: "Original game creation with Unity (2023)",
      image: require("./assets/images/binaryBounceLogo.png"),
      imageAlt: "Binary Bounce screenshot",
      footerLink: [
        {
          name: "Play on PlayStore",
          url: "https://play.google.com/store/apps/details?id=com.Gitanerie.NeverStopRacing"
        }
      ]
    },
    {
      title: "Bloons Tower Defense 5 Remake",
      subtitle:
        "Full remake of BTD5 in processing3 (2021)",
      image: require("./assets/images/BTD5_gameplay.gif"),
      imageAlt: "BTD5 remake image",
      footerLink: [
        {
          name: "See on Github",
          url: "https://github.com/Alex-experiments/tower_defense"
        }
      ]
    },
    {
      title: "Synthwave Audio Visualizer",
      subtitle: "Made with processing (2020)",
      image: require("./assets/images/synthwaveVisualizeGif.gif"),
      imageAlt: "Synthwave Visualizer gif",
      footerLink: [],
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
    "Discuss a project or just want to say hi? Contact me on Linkedin.",
  // number: "+92-0000000000",
  // email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
