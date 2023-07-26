import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    java,
    python,
    c,
    cplusplus,
    meta,
    starbucks,
    tesla,
    csm,
    conceptx,
    selfemployed,
    ucberkeley,
    shopify,
    carrent,
    jobit,
    tripguide,
    operatingsystem,
    chatapp,
    threejs,
    databasesystem,
    gitlet,
    browser,
    github,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "academic",
      title: "Academic",
    },
    {
      id: "project",
      title: "Project",
    },
    {
      id: "contact",
      title: "Contact",
    }
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: mobile,
    },
    {
      title: "Database Engineer",
      icon: backend,
    },
    {
      title: "Operating System Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [

    {
      name: "python",
      icon: python,
    },
    {
      name: "java",
      icon: java
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "c",
      icon: c,
    },
    {
      name: "cplusplus",
      icon: cplusplus,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
  ];
  
  const experiences = [
    {
      title: "University of California, Berkeley",
      company_name: "Bachelor of Science in Electrical Engineering and Computer Science",
      icon: ucberkeley,
      iconBg: "#818aaf",
      date: "June 2020 - May 2023",
      points: [
        "Pursued an undergraduate degree in EECS at a top-ranked public university.",
        "Acquired a broad range of knowledge in areas including Computer Security, Algorithms, Operating Systems, Database Systems, Machine Learning, and Artificial Intelligence.",
        "Developed software applications as part of coursework or personal projects, demonstrating proficiency in a variety of programming languages such as Java, Python, or C."
      ]
    },
    {
      title: "Private Computer Science Tutor",
      company_name: "Self-employed",
      icon: selfemployed,
      iconBg: "#818aaf",
      date: "August 2018 - December 2022",
      points: [
        "Assisted struggling students in understanding Computer Science theories.",
        "Provided students with a deeper understanding beyond what was required to complete homework assignments.",
        "Assigned projects focused on fundamental data structures to reinforce understanding and provide practical experience.",
        "Provided guidance and mentorship to students pursuing Computer Science degrees or careers."
      ]
    },
    {
      title: "Assistant Math Instructor",
      company_name: "ConceptX",
      icon: conceptx,
      iconBg: "#818aaf",
      date: "June 2018 - July 2018",
      points: [
        "Produced comprehensive math lecture videos covering topics up to Calculus.",
        "Collaborated closely with editorial teams to create high-quality educational videos.",
        "Delivered clear and articulate lectures to enhance the clarity and effectiveness of the explanations."
      ]
    },
    {
      title: "College of San Mateo",
      company_name: "Transferred to UC Berkeley",
      icon: csm,
      iconBg: "#818aaf",
      date: "January 2018 - May 2020",
      points: [
        "Completed an Engineering program of study.",
        "Achieved consistent placement on the Dean's List throughout college.",
        "Developed a passion for Computer Science, leading to a decision to transfer to UC Berkeley.",
        "Closely worked with professors on honor projects",
        "Successfully adapted to the unique academic culture of a Western university as an international student."      ]
    },
    // {
    //   title: "React.js Developer",
    //   company_name: "Starbucks",
    //   icon: starbucks,
    //   iconBg: "#383E56",
    //   date: "March 2020 - April 2021",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    
  ];
  
  const projects = [
    {
      name: "Full Stack Chat Application",
      description: "The full stack project deploys MERN stack to create a real-time responsive chat application that supports creating users, searching users, one-to-one real-time communication, group real-time communication, and real-time notification. \n\n Demo Accounts: \n [james@gmail.com, james], \n [nathan@gmail.com, nathan]",
      tags: [
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "green-text-gradient",
        },
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
      ],
      image: chatapp,
      org_image: github,
      source_code_link: "https://silent-chat.herokuapp.com/",
    },
    {
      name: "Pint Operating System",
      description:
        "The course project include writing a shell application, implementing scheduling algorithms, designing a virtual memory manager, implementing a file system, and building a network stack. The project requires a team of four students to design and implement these components of an operating system.",
      tags: [
        {
          name: "C",
          color: "blue-text-gradient",
        },
        {
          name: "x86 Assembly",
          color: "green-text-gradient",
        },
      ],
      image: operatingsystem,
      org_image: ucberkeley,
      source_code_link: "https://cs162.org/",
    },
    {
      name: "Relational Database Management System",
      description:
        "The project in CS 186 comprises building a simple relational database management system, implementing B+ tree indexing, algorithms for query optimization and execution, and designing a transaction management system that handles concurrency and recovery.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
      ],
      image: databasesystem,
      org_image: ucberkeley,
      source_code_link: "https://cs186berkeley.net/",
    },
    {
      name: "Gitlet Version Control",
      description:
        "Gitlet has a command-line interface similar to Git. The project involves implementing components, such as object serialization, file I/O, hash functions, and tree data structures. The product supports \"add\" and \"commit\" commands, creating and merging branches, handling conflicts, and the \"log\" and \"checkout\" commands.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
      ],
      image: gitlet,
      org_image: ucberkeley,
      source_code_link: "https://inst.eecs.berkeley.edu/~cs61b/sp22/materials/proj/proj3/introduction.html",
    },
    
    // {
    //   name: "Car Rent",
    //   description:
    //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "mongodb",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "tailwind",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: carrent,
    //   source_code_link: "https://github.com/",
    // },
    // {
    //   name: "Job IT",
    //   description:
    //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "restapi",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "scss",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: jobit,
    //   source_code_link: "https://github.com/",
    // },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  