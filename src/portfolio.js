/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Yuvraj",
  logo_name: "YUVRAJ",
  nickname: "yuvraj",
  full_name: "Yuvraj Reddy",
  subTitle:
    "Full Stack Developer, Machine Learning Enthusiast. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1kcvW8P65jWZFeKR6Jopf3nrQLA1qJCwn/view?usp=sharing",
  mail: "mailto:veluriyuvrajreddy@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/veluriyuvrajreddy",
  linkedin: "https://www.linkedin.com/in/yuvraj-reddy-veluri-9a64bb292/",
  gmail: "veluriyuvrajreddy@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: "",
  instagram:
    "https://www.instagram.com/yuvrajreddyveluri?igsh=emZwOTZvYTF4aDR4&utm_source=qr",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive and dynamic web applications with modern frameworks",
        "⚡ Frontend development using ReactJS for interactive user experiences",
        "⚡ Backend development with NodeJS, ExpressJS, and MongoDB for scalable solutions",
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
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        // {
        //   skillName: "PHP",
        //   fontAwesomeClassname: "simple-icons:php",
        //   style: {
        //     color: "#7377AD",
        //   },
        // },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        // {
        //   skillName: "Kotlin",
        //   fontAwesomeClassname: "simple-icons:kotlin",
        //   style: {
        //     color: "#5c79df",
        //   },
        // },
        // {
        //   skillName: "Dart",
        //   fontAwesomeClassname: "simple-icons:dart",
        //   style: {
        //     color: "#29B0EE",
        //   },
        // },
        // {
        //   skillName: "Go",
        //   fontAwesomeClassname: "simple-icons:go",
        //   style: {
        //     color: "#00A7D0",
        //   },
        // },
        // {
        //   skillName: "Visual Basic",
        //   fontAwesomeClassname: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },
        // {
        //   skillName: "C#",
        //   fontAwesomeClassname: "simple-icons:csharp",
        //   style: {
        //     backgroundColor: "transparent",
        //     color: "#3776AB",
        //   },
        // },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        // {
        //   skillName: "NextJS",
        //   fontAwesomeClassname: "simple-icons:nextdotjs",
        //   style: {
        //     color: "#FFFFFF",
        //     backgroundColor: "#1D1D1D",
        //     borderRadius: "50%",
        //   },
        // },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
        // {
        //   skillName: "Android App Development",
        //   fontAwesomeClassname: "simple-icons:android",
        //   style: {
        //     color: "#3DDC84",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },

        // {
        //   skillName: "Wordpress",
        //   fontAwesomeClassname: "simple-icons:wordpress",
        //   style: {
        //     color: "#207297",
        //   },
        // },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },

    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Certified AWS Developer Associate and Cloud Practioner",
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Experience hosting and managing web apps on GCP and AWS",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Netlify",
    //       fontAwesomeClassname: "simple-icons:netlify",
    //       style: {
    //         color: "#38AFBB",
    //       },
    //     },
    //     {
    //       skillName: "Heroku",
    //       fontAwesomeClassname: "simple-icons:heroku",
    //       style: {
    //         color: "#6863A6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //   ],
    // },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Hands-on experience with Machine Learning and AI-driven projects",
        "⚡ Worked on multiple projects integrating machine learning models for real-world applications.",
        "⚡ Experience with 3+ Projects",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#6E6E6E",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Chaitanya Bharathi Institute of Technology",
      subtitle: "B.E in Computer Science and Engineering",
      logo_path: "cbit.png",
      alt_name: "DAL",
      duration: "2023 - 2026",
      descriptions: [
        "⚡ Studied core subjects such as Data Structures, Design and Analysis of Algorithms, Computer Networks, Operating Systems, and MERN Stack.",
        "⚡ Learnt SDLC and Agile methodologies for efficient software development and project management.",
        "⚡ Worked on projects on courses like Machine Learning and Web Technologies.",
      ],
      website_link: "https://www.cbit.ac.in/",
    },
    {
      title: "Government Polytechnic Masab Tank",
      subtitle: "Diploma in Computer Science and Engineering",
      logo_path: "sbtet.jpg",
      alt_name: "SBTET",
      duration: "2020 - 2023",
      descriptions: [
        "⚡ Gained expertise in Java, Python, Web Development, and DBMS.",
        "⚡ I have also completed various online courses for Java, Python, Web Development, etc.",
        "⚡ I have implemented several projects based on what I've learnt under my Computer Engineering course. ",
      ],
      website_link: "https://www.sbtet.telangana.gov.in/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "AWS Developer Associate",
    //   subtitle: "Amazon Web Services",
    //   logo_path: "aws.png",
    //   certificate_link:
    //     "https://www.credly.com/badges/b12fbece-07f3-47f5-9dda-cd56f49e250d/public_url",
    //   alt_name: "AWS",
    //   color_code: "#ffc475",
    // },
    // {
    //   title: "AWS Certified Cloud Practioner",
    //   subtitle: "Amazon Web Services",
    //   logo_path: "aws.png",
    //   certificate_link:
    //     "https://www.credly.com/badges/8b2db191-702d-427c-91aa-0f926be447a6/public_url",
    //   alt_name: "AWS",
    //   color_code: "#ffc475",
    // },
    // {
    //   title: "Google Summer of Code 2019",
    //   subtitle: "Google / Sugar Labs",
    //   logo_path: "google_logo.png",
    //   certificate_link: " ",
    //   alt_name: "Google",
    //   color_code: "#ffc475",
    // },
    // {
    //   title: "Google Code-In Student",
    //   subtitle: "2014-2017",
    //   logo_path: "google_logo.png",
    //   certificate_link: " ",
    //   alt_name: "Google",
    //   color_code: "#1e70c1",
    // },
    // {
    //   title: "Google Summer of Code Mentor",
    //   subtitle: "2017 / 2018 / 2020",
    //   logo_path: "google_logo.png",
    //   certificate_link: " ",
    //   alt_name: "Google",
    //   color_code: "#ffbfae",
    // },
    // {
    //   title: "Google Code-In Mentor",
    //   subtitle: "2017 / 2018 / 2019",
    //   logo_path: "google_logo.png",
    //   certificate_link: " ",
    //   alt_name: "Google",
    //   color_code: "#b190b0",
    // },
    // {
    //   title: "Deep Learning Specialization",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://coursera.org/share/737a9587023c666b8e6cb303157aaeba",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#47A048",
    // },
    // {
    //   title: "Sequence Models",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/FM5AKEZA9NUY",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#F6B808",
    // },
    // {
    //   title: "Convolutional Neural Networks",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/U8BLDNUT9UUM",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#2AAFED",
    // },
    // {
    //   title: "Structuring Machine Learning Projects",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/YLC25SJQKH3Y",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#E2405F",
    // },
    // {
    //   title: "Machine Learning",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/records/72KY93DT82MP",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Neural Networks and Deep Learning",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/records/25JXRB2RWHRX",
    //   alt_name: "Google",
    //   color_code: "#7A7A7A",
    // },
    // {
    //   title: "Improving Deep Neural Networks",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/records/PKR9M9LQ3JWC",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Android Developer Nanodegree",
    //   subtitle: "Part of Google India Scholarship Program",
    //   logo_path: "100.png",
    //   certificate_link: "https://graduation.udacity.com/confirm/HLE7K5V3",
    //   alt_name: "Google",
    //   color_code: "#C5E2EE",
    // },
    // {
    //   title: "InOut 4.0 Winner #2",
    //   subtitle: "2017",
    //   logo_path: "ino.png",
    //   certificate_link: " ",
    //   alt_name: "InOut",
    //   color_code: "#fffbf3",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Volunteership",
  description:
    "I've completed two internships. I've mostly done projects on my own. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    // {
    //   title: "Work",
    //   experiences: [
    //     {
    //       title: "CS2 - IT Developer/Analyst",
    //       company: "Canada Revenue Agency",
    //       company_url: "https://www.canada.ca/en/revenue-agency.html",
    //       logo_path: "cra.png",
    //       duration: "May 2023 - Present",
    //       location: "Halifax, Nova Scotia",
    //       description:
    //         "• Led development to concurrently process tax returns for multiple fiscal years, reducing system processing time by 35%\n" +
    //         "• Implemented new tax return types and led development of T3 returns, resolving 25+ critical production issues\n" +
    //         "• Collaborated across 5+ cross-functional teams to integrate tax law changes, ensuring 100% compliance\n" +
    //         "• Mentored 4 team members and led code review sessions, enhancing team knowledge sharing",
    //       color: "#f10000",
    //     },
    //     {
    //       title: "Full Stack Developer - Part-time Contract",
    //       company: "SpatialCut",
    //       company_url: "",
    //       logo_path: "spatialcut.png",
    //       duration: "April 2024 - Present",
    //       location: "Remote",
    //       description:
    //         "• Architected AWS cloud infrastructure, reducing complexity by 40% and improving scalability\n" +
    //         "• Developed microservices using AWS SageMaker, ECS, and EC2 Mac Instances for Apple Vision Pro platform\n" +
    //         "• Optimized video processing pipeline, reducing rendering time by 25%",
    //       color: "#2962FF",
    //     },
    //     {
    //       title: "Full Stack Developer",
    //       company: "Quicko",
    //       company_url: "https://quicko.com/",
    //       logo_path: "quicko.jpg",
    //       duration: "June 2021 - October 2021",
    //       location: "Ahmedabad",
    //       description:
    //         "• Developed PWA with Flutter serving 50,000+ customers\n" +
    //         "• Integrated 5+ brokerages including Zerodha, Upstox, Groww\n" +
    //         "• Implemented backend APIs using Node.js and Spring Boot, reducing operational costs by 20%\n" +
    //         "• Created responsive frontend using Angular and Vue.js",
    //       color: "#2962FF",
    //     },
    //     {
    //       title: "Python Developer",
    //       company: "Google Summer of Code - Sugar Labs",
    //       company_url: "https://sugarlabs.org/",
    //       logo_path: "google_logo.png",
    //       duration: "May 2019 - August 2019",
    //       location: "Remote",
    //       description:
    //         "• Implemented Dashboard functionality using Python and GTK3 for Sugar OS\n" +
    //         "• Created interactive widget for Sugar Desktop environment\n" +
    //         "• Contributed to Python 2 to 3 migration and Music Blocks features",
    //       color: "#ee3c26",
    //     },
    //   ],
    // },
    {
      title: "Internships",
      experiences: [
        {
          title: "SDE Intern",
          company: "Crimson Innovative Technologies",
          company_url: "https://crimsoninnovative.com/",
          logo_path: "crimson.jpg",
          duration: "December 2022 - March 2023",
          location: "Onsite",
          description:
            "Pioneered the integration of full-stack technologies across three projects, leading the development of innovative solutions using MongoDB, Express.js, React.js, Node.js, and REST APIs to build five full-stack applications.",
          color: "#ee3c26",
        },
        {
          title: "Machine Learning Intern",
          company: "YBI Foundation",
          company_url: "https://www.ybifoundation.org/",
          logo_path: "ybi.jpg",
          duration: "June 2024 - July 2024",
          location: "Remote",
          description:
            "Developed multiple machine learning models for Fake News Detection, including Logistic Regression, Decision Tree, and Random Forest, while utilizing TfidfVectorizer for feature extraction to transform textual data into numerical formats for model training.",
          color: "#0071C5",
        },
        // {
        //   title: "Web Developer",
        //   company: "Wrighter Writing Solutions",
        //   company_url: " ",
        //   logo_path: "wrighter.jpg",
        //   duration: "August 2020",
        //   location: "",
        //   description: "Develop a website using PHP and jQuery.",
        //   color: "#56A4D3",
        // },
        // {
        //   title: "Front-End Developer",
        //   company: "VJ TechServe",
        //   company_url: " ",
        //   logo_path: "vjt.png",
        //   duration: "September 2020",
        //   location: "",
        //   description: "Develop a portfolio website using ReactJS",
        //   color: "#800000",
        // },
      ],
    },
    {
      title: "Volunteerships and Club Memberships",
      experiences: [
        {
          title: "Web Developer",
          company: "Neural Nexus",
          company_url: "",
          logo_path: "neural_nexus.jpg",
          duration: "August 2024 - Present",
          location: " ",
          description:
            "Active member of the Web Development team at Neural Nexus Club in CBIT, collaborating with a talented group of individuals to design and develop innovative web solutions.",
          color: "#4285F4",
        },
        {
          title: "Senior Coordinator",
          company: "HackitOn",
          company_url: "",
          logo_path: "hackiton.jpg",
          duration: "February 2024 - Present",
          location: " ",
          description:
            "Senior Coordinator of the HackitOn Club's Programming Team, where I oversee and guide a group of enthusiastic programmers, organizing events and challenges that encourage learning, collaboration, and innovation.",
          color: "#D83B01",
        },
        // {
        //   title: "Board Member at Codeuino",
        //   company: " ",
        //   company_url: " ",
        //   logo_path: "codeuino.jpg",
        //   duration: "2018 - 2019",
        //   location: " ",
        //   description: "Previous Board during early days of Codeuino",
        //   color: "#D83B01",
        // },
        // {
        //   title: "BluWings Club",
        //   company: " ",
        //   company_url: " ",
        //   logo_path: "b.png",
        //   duration: "2018 - On Going",
        //   location: " ",
        //   description:
        //     "Co-Founder and President of the programming club called BluWings. Have organized several workshops which introduced programming and related tools to freshers.",
        //   color: "#D83B01",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects leverage a diverse range of cutting-edge technology tools to deliver innovative solutions. Below are some of the projects that showcase my skills and expertise in utilizing the latest technologies.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "hrishi2.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try my best to write a blog about it.",
    link: "https://medium.com/@hrishipatel99",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      name: "Food Ordering Application",
      url: "https://github.com/veluriyuvrajreddy/Food-Delivery",
      description:
        "Architected a food delivery platform with features like order tracking, secure transactions, comprehensive cart management, menu filtering, and user authentication, serving over 1,000 users.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "Stripe API",
          iconifyClass: "logos-stripe",
        },
      ],
    },
    {
      name: "Cancer Rate Prediction System",
      url: "https://github.com/veluriyuvrajreddy/",
      description:
        "Optimized an OLS Regression model using One-Hot Encoding, Z-score, and IQR. Evaluated performance with MAE, MSE, RMSE, and R-squared, and improved interpretability with scatter plots.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
        {
          name: "Pandas",
          iconifyClass: "logos-pandas",
        },
        {
          name: "Flask",
          iconifyClass: "logos-flask",
        },
        // {
        //   name: "Statsmodels",
        //   iconifyClass: "logos-statsmodels",
        // },
        // {
        //   name: "Sklearn",
        //   iconifyClass: "logos-sklearn",
        // },
        // {
        //   name: "React.js",
        //   iconifyClass: "logos-react",
        // },
        // {
        //   name: "TypeScript",
        //   iconifyClass: "devicon-typescript",
        // },
        // {
        //   name: "Node.js",
        //   iconifyClass: "devicon-nodejs",
        // },
        // {
        //   name: "Express.js",
        //   iconifyClass: "devicon-express",
        // },

        // {
        //   name: "MongoDB",
        //   iconifyClass: "logos-mongodb",
        // },
      ],
    },
    {
      name: "Fraud Detection System for Medical Claims",
      url: "https://github.com/veluriyuvrajreddy/",
      description:
        "Preprocessed medical claims data, applied SMOTE for class imbalance, and optimized an SVM model with GridSearchCV, achieving high ROC-AUC scores.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
        {
          name: "Pandas",
          iconifyClass: "logos-pandas",
        },
        {
          name: "Flask",
          iconifyClass: "logos-flask",
        },
        // {
        //   name: "Flutter",
        //   iconifyClass: "logos-flutter",
        // },
        // {
        //   name: "Firebase",
        //   iconifyClass: "logos-firebase",
        // },
      ],
    },
    {
      name: "Assignment Management",
      url: "https://github.com/veluriyuvrajreddy/AssignmentManagement",
      description:
        "A dual-interface application enabling lecturers to create assignment URLs, manage subjects, and assign scores, while allowing students to easily upload submissions.",
      languages: [
        // {
        //   name: "NodeJS",
        //   iconifyClass: "logos-nodejs",
        // },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "PHP",
          iconifyClass: "logos-php",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos-bootstrap",
        },
        // {
        //   name: "HTML",
        //   iconifyClass: "logos-html",
        // },
        // {
        //   name: "CSS",
        //   iconifyClass: "logos-css",
        // },
        {
          name: "Cancer Rate Prediction System",
          url: "https://github.com/veluriyuvrajreddy/",
          description:
            "Optimized an OLS Regression model using One-Hot Encoding, Z-score, and IQR. Evaluated performance with MAE, MSE, RMSE, and R-squared, and improved interpretability with scatter plots.",
          languages: [
            {
              name: "Python",
              iconifyClass: "logos-python",
            },
            {
              name: "Jupyter Notebook",
              iconifyClass: "logos-jupyter",
            },
            {
              name: "Pandas",
              iconifyClass: "logos-pandas",
            },
            {
              name: "Flask",
              iconifyClass: "logos-flask",
            },
            // {
            //   name: "Statsmodels",
            //   iconifyClass: "logos-statsmodels",
            // },
            // {
            //   name: "Sklearn",
            //   iconifyClass: "logos-sklearn",
            // },
            // {
            //   name: "React.js",
            //   iconifyClass: "logos-react",
            // },
            // {
            //   name: "TypeScript",
            //   iconifyClass: "devicon-typescript",
            // },
            // {
            //   name: "Node.js",
            //   iconifyClass: "devicon-nodejs",
            // },
            // {
            //   name: "Express.js",
            //   iconifyClass: "devicon-express",
            // },

            // {
            //   name: "MongoDB",
            //   iconifyClass: "logos-mongodb",
            // },
          ],
        },
      ],

      // languages: [
      //   {
      //     name: "NodeJS",
      //     iconifyClass: "logos-nodejs",
      //   },
      //   {
      //     name: "JavaScript",
      //     iconifyClass: "logos-javascript",
      //   },
      // ],
    },
    {
      name: "Fake News Detection System",
      url: "https://github.com/veluriyuvrajreddy/",
      description:
        "Developed a Fake News Detection System using AI/ML techniques, which analyzes and classifies news articles, social media posts, and other textual data to evaluate the authenticity of information.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
        {
          name: "Pandas",
          iconifyClass: "logos-pandas",
        },
        {
          name: "Flask",
          iconifyClass: "logos-flask",
        },
        // {
        //   name: "Flutter",
        //   iconifyClass: "logos-flutter",
        // },
        // {
        //   name: "Firebase",
        //   iconifyClass: "logos-firebase",
        // },
      ],
    },
    {
      name: "Car Price Predictor",
      url: "https://github.com/veluriyuvrajreddy/",
      description:
        "Implemented machine learning linear regression algorithms to analyze attributes like make, model, year, mileage, and condition to forecast car prices.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
        {
          name: "Pandas",
          iconifyClass: "logos-pandas",
        },
        {
          name: "Flask",
          iconifyClass: "logos-flask",
        },
        // {
        //   name: "Flutter",
        //   iconifyClass: "logos-flutter",
        // },
        // {
        //   name: "Firebase",
        //   iconifyClass: "logos-firebase",
        // },
      ],
    },
    // {
    //   name: "opPortfolio",
    //   url: "https://github.com/Hrishi1999/opPortfolio",
    //   description: "(This) A clean and full customizable portfolio template.",
    //   languages: [
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //   ],
    // },
    // {
    //   name: "Cab Security System",
    //   url: " ",
    //   description:
    //     "Driver drowsiness detection, profanity detection, violence detection, SMS alerts, cab driver tracking.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Tensorflow",
    //       iconifyClass: "logos-tensorflow",
    //     },
    //     {
    //       name: "OpenCV",
    //       iconifyClass: "logos-opencv",
    //     },
    //   ],
    // },
    // {
    //   name: "Lensinator",
    //   url: " ",
    //   description:
    //     "Published on Play Store back in 2017, crossed 55K downloads. Performed object detection, image captioning, OCR, handwritten OCR, barcode and QR code scanning with product information.",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-java",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Firebase",
    //       iconifyClass: "logos-firebase",
    //     },
    //   ],
    // },
    // {
    //   name: "Doorbell.io",
    //   url: "https://github.com/Hrishi1999/Doorbell.io",
    //   description:
    //     "A sound-classifier webapp made with ReactJS + TensorflowJS.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "TensorflowJS",
    //       iconifyClass: "logos-tensorflow",
    //     },
    //   ],
    // },
    // {
    //   name: "Video Summarization",
    //   url: "https://github.com/Hrishi1999/Video-Summarization",
    //   description:
    //     "A video summarization webapp. A Flask-based backend which servers the Tensorflow model and a frontend made in ReactJS.",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "Tensorflow",
    //       iconifyClass: "logos-tensorflow",
    //     },
    //   ],
    // },
    // {
    //   name: "Dashboard Activity",
    //   url: "https://github.com/Hrishi1999/Dashboard.activity",
    //   description:
    //     "Google Summer of Code project. A Dashboard activity for Sugar OS which tracks user activity so user can know where they use their most time and where they create most files.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },
    // {
    //   name: "Project Pickle",
    //   url: " ",
    //   description:
    //     "An app similar to Uber Eats but targeted for Gruhudhyogs (homemade pickles and products). Order management, live order tracking, rating and reviews system, etc.",
    //   languages: [
    //     {
    //       name: "Java",
    //       iconifyClass: "logos-java",
    //     },
    //     {
    //       name: "Firebase",
    //       iconifyClass: "logos-firebase",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },
    // {
    //   name: "Project Health Card",
    //   url: "",
    //   description:
    //     "An aadhard-card like utility card which keeps track of all your health records suchs as: Medicines, Lab Reports, Recent Diseases, Allergies, etc.",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-java",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Firebase",
    //       iconifyClass: "logos-firebase",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "MongoDB",
    //       iconifyClass: "logos-mongodb",
    //     },
    //   ],
    // },
    // {
    //   name: "Food Classifier",
    //   url: " ",
    //   description:
    //     "A food classifier app using tflite which classfier over 50 Indian Dishes.",
    //   languages: [
    //     {
    //       name: "Flutter",
    //       iconifyClass: "logos-flutter",
    //     },
    //     {
    //       name: "Dart",
    //       iconifyClass: "logos-dart",
    //     },
    //     {
    //       name: "Tensorflow",
    //       iconifyClass: "logos-tensorflow",
    //     },
    //     {
    //       name: "Jupyter Notebook",
    //       iconifyClass: "logos-jupyter",
    //     },
    //   ],
    // },
    // {
    //   name: "Image Clustering",
    //   url: " ",
    //   description:
    //     "A simple use of K-Means Clustering algorithm to sort images by automatically predicting number of classes. This can be used to clean an image dataset.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Jupyter Notebook",
    //       iconifyClass: "logos-jupyter",
    //     },
    //   ],
    // },
    // {
    //   name: "Antivirus",
    //   url: " ",
    //   description:
    //     "A project from 2012. Made an antivirus with realtime scanning. Implemented by using comparison of md5 hashes.",
    //   languages: [
    //     {
    //       name: "Visual Basic",
    //       iconifyClass: "logos-dotnet",
    //     },
    //   ],
    // },
    // {
    //   name: "Sugar on Windows",
    //   url: " ",
    //   description:
    //     "Run and setup Sugar OS to be able to run on Windows using Windows Subsystem for Linux",
    //   languages: [
    //     {
    //       name: "Visual Basic",
    //       iconifyClass: "logos-dotnet",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },
    // {
    //   name: "Object + Face Detection",
    //   url: " ",
    //   description: "2017 project. Object detection + accurate face detection.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Tensorflow",
    //       iconifyClass: "logos-tensorflow",
    //     },
    //     {
    //       name: "OpenCV",
    //       iconifyClass: "logos-opencv",
    //     },
    //   ],
    // },
    // {
    //   name: "Image Captioning with Visual Attention",
    //   url: " ",
    //   description: "Ongoing. Used MSCOCO 2014/2017 for image captioning.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Tensorflow",
    //       iconifyClass: "logos-tensorflow",
    //     },
    //     {
    //       name: "Jupyter Notebook",
    //       iconifyClass: "logos-jupyter",
    //     },
    //   ],
    // },
    // {
    //   name: "DalSocial",
    //   url: " ",
    //   description:
    //     "An Android app to meet new people in the university, organize and join events. ",
    //   languages: [
    //     {
    //       name: "Kotlin",
    //       iconifyClass: "simple-icons:kotlin",
    //       color: "#F18E33",
    //     },
    //     {
    //       name: "Android",
    //       iconifyClass: "simple-icons:android",
    //       color: "#3DDC84",
    //     },
    //     {
    //       name: "Firebase",
    //       iconifyClass: "logos-firebase",
    //     },
    //   ],
    // },
    // {
    //   name: "HalifaxFoodie",
    //   url: " ",
    //   description:
    //     "CSCI5410 Project. A multi-client recipe app for Halifax Foodies.",
    //   languages: [
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "AWS",
    //       iconifyClass: "logos-aws",
    //     },
    //     {
    //       name: "Google Cloud",
    //       iconifyClass: "logos-google-cloud",
    //     },
    //   ],
    // },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
