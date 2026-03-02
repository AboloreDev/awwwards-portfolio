// index.js
export const servicesData = [
  {
    title: "Full-Stack Development",
    description:
      "I build scalable, secure, and maintainable web applications with clean architecture and well-structured systems. From API design to frontend implementation, every layer is engineered for reliability and performance.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST APIs, Authentication, Scalable Architecture)",
      },
      {
        title: "Frontend Engineering",
        description: "(React, TypeScript, Component Architecture)",
      },
      {
        title: "Database Design",
        description: "(SQL/NoSQL Modeling, Query Optimization)",
      },
    ],
  },
  {
    title: "Cloud Foundations",
    description:
      "Reliable software requires reliable infrastructure. I implement CI/CD workflows, containerization, and cloud deployment strategies to ensure consistent, secure, and scalable application delivery.",
    items: [
      {
        title: "CI/CD Pipelines",
        description: "(GitHub Actions, Automated Testing)",
      },
      {
        title: "Containerization",
        description: "(Docker, Environment Consistency)",
      },
      {
        title: "Cloud Deployment",
        description: "(AWS, EC2, API Gateway, AWSCognito)",
      },
    ],
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Robust systems require rigorous validation. I implement testing strategies to ensure application reliability, prevent regressions, and maintain code quality across development cycles.",
    items: [
      {
        title: "Unit & Integration Testing",
        description: "(Go Testing, Jest, API Testing)",
      },
      {
        title: "Test Automation",
        description: "(CI Test Workflows, Continuous Validation)",
      },
      {
        title: "Code Quality & Reviews",
        description: "(Refactoring, Performance Checks, Error Handling)",
      },
    ],
  },
  {
    title: "Web Applications",
    description:
      "I develop responsive, high-performance web applications with clean UI architecture and optimized frontend performance. The focus is on usability, scalability, and long-term maintainability.",
    items: [
      {
        title: "Responsive Interfaces",
        description: "(Modern CSS, Accessibility, UX Standards)",
      },
      {
        title: "Performance Optimization",
        description: "(SSR, Code Splitting, Caching Strategies)",
      },
      {
        title: "Web Platform Features",
        description: "(Authentication, Dashboards, Admin Systems)",
      },
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "Nestora Real Estate Platform",
    description:
      "A full-stack real estate platform for seamless property discovery, connecting landlord and tenants with filtering, appointment bookings, lease agreements and an escrow based payment system.",
    subDescription: [
      "Developing a modern real estate interface using Next.js, TypeScript, and Tailwind CSS for a fast and responsive experience.",
      "Utilizing Prisma ORM with PostgreSQL for scalable and secure data modeling.",
      "Integrating stripe to handle payment systems",
      "Escrow based payment functionalities that prevents property listing fraud",
    ],
    href: "https://realty-sphere.vercel.app/",
    github: "https://github.com/AboloreDev/realty-sphere",
    image: "/assets/projects/1.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "TypeScript" },
      { id: 4, name: "PostgreSQL" },
      { id: 5, name: "Prisma" },
      { id: 6, name: "Stripe" },
    ],
  },
  {
    id: 3,
    name: "Finance Dashboard",
    description:
      "An analytics dashboard for visualizing personal and business financial data.",
    subDescription: [
      "Engineered with MERN stack and TypeScript for strong type safety and modularity.",
      "Integrated Redux for reliable state management and real-time chart updates.",
    ],
    href: "https://finance-dashboard-backend-fy04.onrender.com/",
    image: "/assets/projects/2.png",
    github: "https://github.com/AboloreDev/finance-dashboard",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "ExpressJs" },
      { id: 5, name: "Redux" },
    ],
  },

  {
    id: 4,
    name: "Cartella E-Commerce",
    description:
      "An end-to-end ecommerce web application with real-time checkout and robust admin capabilities.",
    subDescription: [
      "Built with Next.js and TypeScript for scalable frontend and backend integration.",
      "Implemented Stripe for secure, real-time payments and transaction handling.",
    ],
    href: "https://cartella-e-commerce.vercel.app/",
    image: "/assets/projects/3.png",
    bgImage: "/assets/backgrounds/table.jpg",
    github: "https://github.com/AboloreDev/cartella-E-commerce",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "TypeScript" },
      { id: 4, name: "Stripe" },
      { id: 6, name: "Sanity" },
    ],
  },

  {
    id: 5,
    name: "Concurrent Payroll & Banking System",
    description:
      "A concurrency-driven payroll processing engine built in Go. Supports multi-employee salary computation, safe concurrent deposits and withdrawals, and race-condition prevention using goroutines, mutexes, and WaitGroups.",
    href: "",
    image: "/assets/projects/9.png",
    bgImage: "/assets/backgrounds/map.jpg",
    github: "https://github.com/AboloreDev/go-payroll-processor-system",
    frameworks: [
      { id: 1, name: "Go (Golang)" },
      { id: 2, name: "Goroutines" },
      { id: 3, name: "Mutex & WaitGroup" },
      { id: 4, name: "Concurrency Patterns" },
    ],
  },
  {
    id: 6,
    name: "Concurrent Task Scheduler",
    description:
      "A lightweight background job scheduler supporting delayed and recurring tasks with graceful shutdown. Implements channel-based cancellation, lifecycle management, and safe task orchestration using Go concurrency primitives.",
    href: "",
    image: "/assets/projects/5.png",
    bgImage: "/assets/backgrounds/poster.jpg",
    github: "https://github.com/AboloreDev/go-concurrent-task-scheduler",
    frameworks: [
      { id: 1, name: "Go (Golang)" },
      { id: 2, name: "Channels" },
      { id: 3, name: "Time.Ticker & Timer" },
      { id: 4, name: "Synchronization Primitives" },
    ],
  },
];
export const socials = [
  { name: "Twitter", href: "https://twitter.com/abolorreeeee" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/fathiu-alabi/" },
  { name: "GitHub", href: "https://github.com/Aboloredev" },
];
