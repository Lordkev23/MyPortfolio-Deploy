/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Kevin's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Kevin Villanueva Portfolio",
    type: "website",
    url: "https://github.com/Lordkev23",
  },
};

//Home Page
const greeting = {
  title: "Kevin Villanueva",
  logo_name: "Lord Kev",
  nickname: "Kev",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://docs.google.com/document/d/1jfmm0KO8mskicKXJbmBwrQVMoftZv57H/edit",
  portfolio_repository: "https://github.com/Lordkev23/MyPortfolio",
  githubProfile: "https://github.com/Lordkev23",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Lordkev23",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kevin-villanueva-manrique-030653255/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCky0XWH5bVgLAReI3RKu4ig",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:kevdaviman.23@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  
];

const skills = {
  data: [
    
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Creating application backend in NodeJS, Express & MongoDB",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#663399",
          },
        }
      ],
    },
   
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for web applications",
        "⚡ Customizing logo designs and building logos from Figma",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Miro",
          fontAwesomeClassname: "simple-icons:miro",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Trello",
          fontAwesomeClassname: "simple-icons:trello",
          style: {
            color: "#FF7C00",
          },
        },
        
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Udemy",
      iconifyClassname: "simple-icons:udemy",
      style: {
        color: "purple",
      },
      profileLink: "https://www.udemy.com/home/my-courses/learning/",
    },
    {
      siteName: "Henry",
      iconifyClassname: "fa:h-square",
      style: {
        color: "yellow",
      },
      profileLink: "https://www.students.soyhenry.com/",
    },
    {
      siteName: "Platzi",
      iconifyClassname: "simple-icons:platzi",
      style: {
        color: "green",
      },
      profileLink: "https://platzi.com/home",
    },
    
  ],
};

const degrees = {
  degrees: [
    {
      title: "Henry",
      subtitle: "Full Stack Web Developer",
      // logo_path: "C:\Users\HP\Desktop\MyPortfolio\MyPortfolio\images\henryUser.png",
      alt_name: "IIITDM Kurnool",
      duration: "2022 - 2023",
      descriptions: [
        "⚡ I learned to develop both the Front End and Back End of a web application: I acquired knowledge and skills in programming languages for both client-side and server-side development, enabling me to develop complete web applications from scratch.",
        "⚡ I learned to work in a team and communicate effectively: I learned the importance of teamwork and effective communication in achieving goals efficiently and solving problems as a team.",
        "⚡ I learned to develop creative solutions and lead teams: I developed skills in creative thinking and problem-solving, and learned to lead teams and motivate others to achieve common goals. Additionally, I gained emotional intelligence skills that enable me to be an effective leader.",
      ],
      website_link: "https://www.soyhenry.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Full Stack Web Developer",
      subtitle: "Henry",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1ESvI7C8VUqScHtLzFsEKDkIEgNwop5Er/view?usp=sharing",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Teaching Assistant (TA)",
      subtitle: "Henry",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1Ca_vmStGkPUo3e6x-O7h261Q-UfrmZgF/view?usp=sharing",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "English Certificate",
      subtitle: "EF SET",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1v1jJp_Ma_KaI5Yy3Kr8ao2syujfn2ZBB/view?usp=sharing",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "English for Shopping",
      subtitle: "Platzi",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1-yZumWBEENdlaxZe0VZ6aOzTYIHmb6Y4/view?usp=sharing",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Strategies for Effective Online Learning",
      subtitle: "Platzi",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1hHCmj0XeGVTYyKl4vZy3yAxsGGk4IcG1/view?usp=sharing",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Configuring Development Environment in Windows",
      subtitle: "Platzi",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/14FtxUDmLopnpWMo5rEhIj-cWksSduq7R/view?usp=sharing",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Basic Computing",
      subtitle: "Platzi",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1zyt1Ju31lObedz2EEhxhKAvVkuzCsgJf/view?usp=sharing",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Freelance Course",
      subtitle: "Platzi",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1m767X86V_w6ZF1tvCnliR-z0OyI9DRuk/view?usp=sharing",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work",
  description:
    "In terms of my professional experience, I have worked as a Teaching Assistant at Henry Bootcamp, guiding students through the course, resolving exercises, and proposing ideas for process improvement. Additionally, I have worked as a Full Stack Developer for both Henry and an NGO, where I was develop a mobile application using MongoDB, React Native, JavaScript, Node.js, Mongoose, and Firebase. My experience has taught me the importance of collaboration and teamwork in achieving success, and I have found that my technical skills combined with strong teamwork make me a valuable asset in the software development industry.I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Teaching Assistant (TA) ",
          company: "Henry",
          company_url: "https://www.soyhenry.com/",
          logo_path: "legato_logo.png",
          duration: "Oct 2022 - Feb 2023",
          location: "Argentina",
          description:
            "•	Coordinated a group of students to achieve integration into the study group. •	Guided students through the early stages of the course. •	Assisted students in resolving exercises and promoting group collaboration. •	Proposed ideas for improving the Bootcamp processes.",
          color: "#0879bf",
        },
        {
          title: "Full Stack Developer",
          company: "Henry / NGO Find a Home",
          company_url: "https://www.soyhenry.com/",
          logo_path: "muffito_logo.png",
          duration: "Jan 2023 - Feb 2023",
          location: "Argentina",
          description:
            "•	Currently developing a mobile application with a team, using mainly MongoDB and React Native, for an NGO located in Argentina. •	Key technologies used: React Native, JavaScript, Mongo DB, Mongoose, Node.js, Firebase.",
          color: "#9b1578",
        },
        
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Machine Learning Intern",
    //       company: "TikTok Inc.",
    //       company_url: "https://www.tiktok.com/en/",
    //       logo_path: "tiktok_logo.png",
    //       duration: "May 2022 - Aug 2022",
    //       location: "San Francisco, USA",
    //       description:
    //         "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Data Science Research Intern",
    //       company: "Delhivery Pvt. Ltd.",
    //       company_url: "https://www.delhivery.com/",
    //       logo_path: "delhivery_logo.png",
    //       duration: "May 2019 - Sept 2019",
    //       location: "Gurgaon, Haryana",
    //       description:
    //         "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //       color: "#ee3c26",
    //     },
    //     {
    //       title: "Data Science Intern",
    //       company: "Intel Indexer LLC",
    //       company_url:
    //         "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //       logo_path: "intel_logo.jpg",
    //       duration: "Nov 2018 - Dec 2018",
    //       location: "Work From Home",
    //       description:
    //         "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //       color: "#0071C5",
    //     },
    //   ],
    // },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Here there are some of my projects at GitHub using HTML5, CSS3, JavaScript, React, Redux, Node JS, SQL & MongoDB.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I published a little about some projects at my LinkedIn.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Information",
      createdAt: "2023-02",
      description: "Publication about the finish of my proyect for an NGO 'Find a Home'",
      url:
        "https://www.linkedin.com/feed/update/urn:li:activity:7031690241392398336/?commentUrn=urn%3Ali%3Acomment%3A(activity%3A7031690241392398336%2C7031692103231369217)&dashCommentUrn=urn%3Ali%3Afsd_comment%3A(7031692103231369217%2Curn%3Ali%3Aactivity%3A7031690241392398336)&dashReplyUrn=urn%3Ali%3Afsd_comment%3A(7031693277057679360%2Curn%3Ali%3Aactivity%3A7031690241392398336)&replyUrn=urn%3Ali%3Acomment%3A(activity%3A7031690241392398336%2C7031693277057679360)",
    },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with using HTML5, CSS3, JavaScript, React, Redux, Node JS, SQL & MongoDB Projects.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://www.linkedin.com/in/kevin-villanueva-manrique-030653255/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Los Olivos, Lima, Lima, Perú - 15307",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com.pe/maps/place/15307/@-11.9369408,-77.0953845,14z/data=!3m1!4b1!4m6!3m5!1s0x9105d1c220104221:0xcf91a8b6b7d2e3da!8m2!3d-11.9394425!4d-77.0765927!16s%2Fg%2F1hc21_1bh?hl=es",
  },
  phoneSection: {
    title: "Cell Phone",
    subtitle: "+51 962 089 198",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
