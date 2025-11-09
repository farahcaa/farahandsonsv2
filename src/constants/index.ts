import { BelmontPic, Cell, damPic, LastOne, Linkedin } from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
    selected: "#",
  },
  {
    id: "1",
    title: "About",
    url: "/about",
    selected: "#About-us",
  },
  {
    id: "3",
    title: "Services",
    url: "/services",
    selected: "#Services",
  },
  {
    id: "4",
    title: "Projects",
    url: "/projects",
    selected: "#Projects",
  },
  {
    id: "5",
    title: "Careers",
    url: "/careers",
    selected: "#Careers",
  },
  {
    id: "6",
    title: "Contact",
    url: "/contact",
    selected: "#Contact",
  },
  // {
  //   id: "6",
  //   title: "Courses",
  //   url: "/farahandsonsv2/Courses",
  //   selected: "#Courses",
  // },
];

export const socials = [
  {
    id: 1,
    src: Cell,
    url: "tel:+1 (317)-833-0060",
  },
  {
    id: 2,
    src: Linkedin,
    url: "https://www.linkedin.com/in/ken-farah-a202123a/",
  },
];

export const ServiceExpert = [
  {
    id: 0,
    header: "Construction Inspection:",
    body: "Ensuring the integrity and safety of structures with meticulous oversight.",
  },
  {
    id: 1,
    header: "Civil Engineering:",
    body: "From concept to completion, engineering solutions that last.",
  },
  {
    id: 2,
    header: "Project Management: ",
    body: "Comprehensive management ensuring projects are delivered on time and within budget.",
  },
  {
    id: 3,
    header: "Quality Assurance:",
    body: " Rigorous testing and validation for peace of mind.",
  },
  {
    id: 4,
    header: "Consulting Services:",
    body: "Expert advice to navigate complex construction challenges.",
  },
];

export const whyus = [
  {
    id: 0,
    header: "Experienced Leadership:",
    body: "Guided by industry veterans with a proven track record.",
  },
  {
    id: 1,
    header: "Client-Centric Approach:",
    body: "Your goals are our priority, and we strive to exceed your expectations.",
  },
  {
    id: 2,
    header: "Innovative Solutions: ",
    body: "Leveraging the latest technology and methods for optimal outcomes.",
  },
  {
    id: 3,
    header: "Community Commitment:",
    body: "A local company with a global mindset, investing in the places we work.",
  },
];

export const projects = [
  {
    id: 0,
    title: "Citizens-Belmont, A.W.T Ferrous Building",
    picture: BelmontPic,
    text: [
      {
        message:
          "The Belmont AWT plant uses ferrous sulfate (pickle liquor) for sludge conditioning, odor, and phosphorus control. Previously stored in the basement, the chemical caused corrosion and limited expansion. The old tanks needed replacement.",
      },
      {
        message:
          " Citizens Energy Group and Wessler Engineering built a new chemical storage and feed facility, designed to handle the corrosive nature of pickle liquor. It features a high-performance coating system, with controls, electrical distribution, and HVAC systems in separate rooms to prevent corrosion. An observation area allows operators to monitor the process without entering the corrosive space. The system is fully integrated into SCADA for monitoring and control",
      },
      {
        message:
          "The facility allows for easy tank removal via a roof access panel and has increased tank volumes to meet current demand, with room for future expansion. Construction began in 2022, and the facility became operational in spring 2023. This project highlights our expertise in advanced chemical storage solutions.",
      },
    ],
  },
  {
    id: 1,
    title: "Citizens-O.N.S WALL TIES",
    picture: damPic,
    text: [
      {
        message:
          "The Oxygen Notification System (ONS) facilities at Citizens Energy Group&apos;s Belmont and Southport Vance wastewater treatment plants include aeration tanks and secondary clarifiers, operational since the early 1980s. Initially, steel wall ties were installed to stabilize the exterior channel walls under hydrostatic pressure. Recently, Citizens Energy Group undertook a project to replace these steel ties with exterior support structures for easier access and maintenance.",
      },
      {
        message:
          "At the Belmont plant, the aeration channel is supported by 189 W 18 x 106 coated beams, while the clarifier channel is supported by 142 HP 14 x 117 driven piles, averaging 30 feet in depth, with concrete caps spaced 8 feet apart",
      },
      {
        message:
          "At the Southport plant, the aeration channel is supported by 174 W 18 x 106 coated beams, spaced 5 feet apart. The clarifier channel is supported by 30 HP 14 x 117 driven piles, averaging 40 feet in depth, with concrete caps spaced 8 feet apart. Additional support is provided by knee piles, with 106 HP 14 x 117 driven piles, averaging 30 feet in depth, and concrete caps spaced 8 feet apart.",
      },
      {
        message:
          "Both plants also underwent extensive crack and joint repairs, deck access ramp replacements, loading dock modifications, exterior stair replacements, and aeration grading replacement at Southport. The project was completed ahead of schedule and within budget, with less than 2% change orders, no safety incidents, and no damage to adjacent structures, showcasing our commitment to quality and safety.",
      },
    ],
  },
  {
    id: 2,
    title: "Belmont and Southport AWT Effluent Filter Improvement - Phase 1",
    picture: LastOne,
    text: [
      {
        message:
          "The Belmont and Southport Wastewater Treatment Plants each have 12 sand filters used for tertiary treatment. This project represents the first phase of rehabilitating these filters. Several factors influence the constructability of this project. Option No. 2 proposes performing the RIO and 42-inch BFV replacements simultaneously during the winter permit period of 2023/2024, from December 1, 2023, to April 30, 2024.",
      },
      {
        message:
          "The scope of work includes installing two variable frequency drives for the 500 HP Backwash Pumps at both Belmont and Southport. It also involves replacing twelve 20-inch butterfly valves with modulating electric actuators and twenty-four 42-inch butterfly valves with electric actuators at both plants. Additionally, three filter manual backup control panels will be installed at each plant. Belmont will also receive two ship&apos;s ladders.",
      },
      {
        message:
          "The project includes pipe fittings and couplings to aid in constructability, junction boxes, conduit and wire for new valve actuators, and miscellaneous integration of new devices into the SCADA. Site restoration is also part of the scope.",
      },
    ],
  },
];
