import timepro from "./assets/products/timepro-screen.jpg"
import visitpro from "./assets/products/visitpro-screen.jpg"
import mealpro from "./assets/products/mealpro-screen.jpg"
import queuepro from "./assets/products/queuepro-screen.jpg"
import projectpro from "./assets/products/projectpro-screen.jpg"

export const products = [
  {
    id: "timepro",
    index: "01",
    name: "TimePro",
    tag: "Time & Attendance",
    tagline: "Smarter workforce control with advanced time & attendance software",
    desc: "Biometric attendance, shift management, leave workflows and real-time analytics — accurate workforce tracking for modern organisations.",
    longDesc:
      "Chronexa's time attendance software delivers instant clarity for your organisation. The time attendance system tracks every shift effortlessly — biometric verification removes manual errors, automated logs capture every entry and exit instantly, and real-time analytics surface absentees, overtime and shift adherence. It centralises schedules and approvals into one unified platform, supporting flexible schedules, rotational shifts and multi-location operations across IT, retail, finance, education and corporate teams.",
    points: [
      "Biometric verification with automated logs removes manual errors and body punching.",
      "Centralised schedules, approvals and permissions handling in a single platform.",
      "Shift management, leave workflows and multi-location support for hybrid teams.",
      "Real-time dashboards surface absences, overtime and shift adherence instantly.",
      "Smooth integration with HRMS and payroll for accurate, on-time processing.",
      "Audit trails maintain compliance and transparency for every attendance record.",
    ],
    screen: timepro,
    accent: "#b40000",
    features: [
      "Biometric clock-in",
      "Shift & leave management",
      "Real-time analytics",
      "Multi-location support",
      "HRMS & payroll integration",
      "Permission workflows",
    ],
  },
  {
    id: "visitpro",
    index: "02",
    name: "VisitPro",
    tag: "Visitor Management",
    tagline: "Every entry simple, every check-in secure",
    desc: "Smart pre-registration, approval workflows, touchless check-in and badge issuance — every entry simple, every check-in secure.",
    longDesc:
      "Visitor management software by Chronexa makes sure every step of entry is simple and check-ins are secure. Smart pre-registration, approval workflows, touchless QR check-in and badge issuance digitise the full visitor lifecycle — from request to checkout. Visitors can join via mobile, walk-in or kiosk, and every detail syncs in real-time across entry points. Front-desk and administrative staff operate smoothly across desktops, tablets or kiosks, keeping zones controlled and organised.",
    points: [
      "Digitises the full visitor lifecycle — pre-registration, approvals, check-in and checkout.",
      "Touchless QR-based entry and secure pre-scheduled visitor handling.",
      "Responsive web interface across desktops, tablets and kiosks.",
      "Fast verification keeps up with peak-hour visitor volume.",
      "Integrates with Chronexa Employee Master, access control and ID scanner hardware.",
      "Visitor badges and live entry-point control strengthen on-site safety.",
    ],
    screen: visitpro,
    accent: "#b40000",
    features: [
      "Pre-registration & approvals",
      "Touchless QR check-in",
      "Visitor badges",
      "Live entry-point control",
      "Kiosk & mobile check-in",
      "Real-time visitor reporting",
    ],
  },
  {
    id: "mealpro",
    index: "03",
    name: "MealPro",
    tag: "Canteen / Meal Management",
    tagline: "Cut queues, waste and fraud at every counter",
    desc: "Meal entitlement engine, biometric meal verification and shift-based planning — cut queues, waste and fraud at every counter.",
    longDesc:
      "The meal management software and canteen management system reduce queues and smoothen kitchen-to-counter management. A strong meal entitlement engine prevents unauthorised access, biometric limits stop duplicate consumption, and shift-based meal planning distributes counter load. Meal categorisation, vendor management and real-time order flow make daily operations faster and more organised — cutting long queues, wastage and costs while creating a smarter dining experience for students and employees.",
    points: [
      "Meal entitlement engine prevents unauthorised meal access and ensures compliance.",
      "Biometric verification tracks every meal consumed and stops duplicates.",
      "Shift-based meal planning and counter load distribution cut rush-hour queues.",
      "Automated meal categorisation with real-time order flow.",
      "Vendor and catering management for kitchen-to-counter coordination.",
      "Integrates with HR software to sync allowances, shifts and employee profiles.",
    ],
    screen: mealpro,
    accent: "#b40000",
    features: [
      "Meal entitlement engine",
      "Biometric meal limits",
      "Counter load distribution",
      "Vendor management",
      "Shift-based meal planning",
      "Smart buffet & zone support",
    ],
  },
  {
    id: "queuepro",
    index: "04",
    name: "QueuePro",
    tag: "Queue Management",
    tagline: "Serve more customers with fewer bottlenecks",
    desc: "Self-service kiosks, mobile-first ticketing, real-time announcements and dashboards — serve more customers with fewer bottlenecks.",
    longDesc:
      "Chronexa's queue management software enables retail and restaurant operations to move faster. Self-service kiosks, mobile-first ticketing, QR and SMS tickets and real-time announcements keep customers flowing, while dashboards and insights let managers allocate staff and reduce idle time. The online queue management system guides customers through mobile ordering — eliminating long queues and creating an efficient, transparent service experience. Queues are joined from the phone, tracked in real time and served fairly.",
    points: [
      "Self-service kiosks and mobile-first ticketing for fast customer flow.",
      "QR codes, SMS and app notifications deliver tickets and status updates.",
      "Real-time announcements and counter displays reduce wait anxiety.",
      "Live dashboards help managers allocate staff and cut idle time.",
      "Service process from ticket issuance to feedback captured end-to-end.",
      "Wait-time analytics improve decision-making and operational efficiency.",
    ],
    screen: queuepro,
    accent: "#b40000",
    features: [
      "Kiosk integration",
      "QR / SMS ticketing",
      "Real-time announcements",
      "Wait-time analytics",
      "Mobile-first queueing",
      "Counter display system",
    ],
  },
  {
    id: "projectpro",
    index: "05",
    name: "ProjectPro",
    tag: "Project Management",
    tagline: "Assignments, deadlines and progress, tracked with precision",
    desc: "Assignments, deadlines and progress tracking built for precision — automation keeps every project organised and on schedule.",
    longDesc:
      "Chronexa provides the best project management software to make assignments, deadlines and progress tracking seamless. Built with precision speed, the task management software tracks, syncs and improves planning while automating routine steps. Task allocation, real-time tracking and workflow automation keep teams accountable and projects on schedule. Integrated with the unified workforce layer, ProjectPro coordinates staff and progress across the organisation, identifying bottlenecks quickly and improving overall service delivery.",
    points: [
      "Easy task allocation and real-time progress tracking across teams.",
      "Workflow automation removes routine steps and manual follow-ups.",
      "Deadline tracking keeps every project organised and on schedule.",
      "Identifies bottlenecks quickly and monitors overall performance.",
      "Improves accountability and team collaboration organisation-wide.",
      "Shares the unified workforce layer with all Chronexa products.",
    ],
    screen: projectpro,
    accent: "#b40000",
    features: [
      "Task assignment",
      "Deadline tracking",
      "Workflow automation",
      "Progress sync",
      "Team collaboration",
      "Bottleneck insights",
    ],
  },
]

export const industries = [
  { id: "finance", name: "Finance & Banking", desc: "QueuePro + VisitPro keep clients served in order with a better waiting experience." },
  { id: "it", name: "IT & Corporate", desc: "Attendance, visitor files and project coordination unified for modern teams." },
  { id: "government", name: "Government", desc: "Automated workflows accelerate public service and simplify visitor control." },
  { id: "retail", name: "Retail & Restaurants", desc: "Kiosks, QR scans and mobile orders handle peak-hour customer flow." },
  { id: "healthcare", name: "Healthcare", desc: "Touchless sign-ins keep sensitive zones protected and movement tracked." },
  { id: "education", name: "Education", desc: "Student access, meal tracking and canteen operations running smoothly." },
]

export const steps = [
  { n: "01", title: "Seamless Automation", desc: "Take control of operational workflows with reduced errors and automated tasks." },
  { n: "02", title: "Secure Access", desc: "Controlled entry with verification — only authorised personnel reach restricted areas." },
  { n: "03", title: "Scalable Platform", desc: "Meet growing organisational needs easily by expanding system capabilities." },
]

export const features = [
  { id: "bio", icon: "biometric", label: "Biometric Authentication Framework", desc: "Face & fingerprint verification for every touchpoint." },
  { id: "qr", icon: "qr", label: "QR-Based Queue Processing", desc: "Paperless ticketing and entry via secure QR codes." },
  { id: "cloud", icon: "cloud", label: "Cloud Workflow Automation", desc: "Automated operational flows across the platform." },
  { id: "sync", icon: "sync", label: "Real-Time Data Syncing", desc: "Live dashboards, instantly in sync everywhere." },
  { id: "rbac", icon: "rbac", label: "Role-Based Access Control", desc: "Granular permissions for every role and zone." },
]

export const stats = [
  { value: 99.9, suffix: "%", label: "System Uptime" },
  { value: 30, suffix: "k+", label: "Happy Customers" },
  { value: 5, suffix: "", label: "Integrated Products" },
  { value: 24, suffix: "/7", label: "Security Assurance" },
]

export const faqs = [
  {
    q: "How does TimePro improve accuracy in daily attendance tracking?",
    a: "TimePro uses biometric verification and automated logs to remove manual errors. Every entry and exit is recorded instantly, with shift management, leave management, real-time analytics and permission handling unified in one platform.",
  },
  {
    q: "What makes VisitPro better than traditional visitor handling?",
    a: "VisitPro digitises the full visitor lifecycle — pre-registration, approvals, touchless check-in, badge issuance and checkout. It supports mobile entry, walk-ins and peak-hour volume with real-time syncing across every entry point.",
  },
  {
    q: "How does MealPro reduce queues and meal fraud in canteens?",
    a: "The meal entitlement engine prevents unauthorised access, biometric limits stop duplicate consumption, and shift-based planning distributes counter load — cutting long queues, wastage and costs.",
  },
  {
    q: "Can QueuePro handle peak hours in retail and restaurants?",
    a: "Yes. Self-service kiosks, mobile-first ticketing, QR codes and real-time announcements keep customers flowing. Live dashboards let managers allocate staff and reduce average wait times.",
  },
  {
    q: "Does ProjectPro integrate with the other Chronexa products?",
    a: "ProjectPro tracks tasks, deadlines and progress with workflow automation, and shares a unified workforce layer with TimePro, VisitPro, MealPro and QueuePro for seamless operations.",
  },
  {
    q: "Do your systems support multiple locations?",
    a: "Yes. Chronexa platforms work across distributed teams, multiple branches and field employees — managers monitor everything from one unified dashboard.",
  },
]

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "/about" },
  { label: "Blogs", href: "/blog" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

export const about = {
  tagline: "Drive Stronger Security",
  intro:
    "A complete workforce management solution that streamlines attendance, visitor access, meal management, queue operations and project workflow processes.",
  heading: "Smart Workforce Management system for Dubai and Saudi Arabia",
  body:
    "Chronexa strengthens operations with softwares like Chronexa TimePro, Chronexa VisitPro and more. It makes staff tracking easy with secured workplaces, and reduced manual process. The time attendance software, employee clock-in system, and attendance management system software help maintain workflow across departments.",
  points: [
    "Secure, smart, and efficient control with attendance management system.",
    "Track employees, manage visitors, optimize operations easily every day.",
  ],
  how: [
    { n: "01", title: "Effortless Control", desc: "Manage workflow effortlessly with Chronexa's workforce management solution. The touchless management streamlines and ensures a precise day-to-day operation." },
    { n: "02", title: "Precision Management", desc: "Automate and ensure high operational efficiency with Chronexa's best software stack. The software helps manage staff and operations in a snap." },
    { n: "03", title: "Instant Insights", desc: "Chronexa ensures total visibility with improved workforce management with proper oversight on the people management and employee clock-in system data." },
    { n: "04", title: "Workflow Intelligence", desc: "Optimize processes via employee attendance software and time attendance for smarter and smoother workflows." },
  ],
}

export const blogs = [
  {
    id: "hybrid-teams-project-management-uae",
    index: "01",
    title: "Hybrid Teams & Smarter Projects: Chronexa's Project Management Software in the UAE",
    category: "Project Management",
    date: "April 10, 2026",
    dateISO: "2026-04-10",
    author: "Chronexa Team",
    readTime: "6 min read",
    screen: projectpro,
    product: "projectpro",
    excerpt:
      "Hybrid teams split between office and remote run two parallel versions of the same project. ProjectPro unifies them into one shared record — deadlines, assignments and progress, visible everywhere.",
    intro:
      "Hybrid teams are no longer an exception in the UAE — they are the operating model. When part of a team works in the office and part works remotely, coordination breaks in quiet, expensive ways: decisions made in hallways never reach remote members, status lives in scattered spreadsheets, and deadlines drift without anyone noticing. Chronexa ProjectPro turns the project into a single shared record both sides treat as the source of truth.",
    sections: [
      {
        heading: "The problem hybrid teams actually face",
        body: "In a hybrid setup, information flows differently to different people. In-office members default to informal conversations; remote members miss them entirely and often do not know what they missed. Project management software is the equaliser — it creates a shared layer that captures assignments, deadlines and progress the moment they change. ProjectPro keeps that record live across every location and time zone.",
      },
      {
        heading: "Visibility without the daily check-in",
        body: "Status should flow automatically from task completion, not from someone remembering to post an update. ProjectPro tracks tasks, milestones and progress in real time, so managers in Dubai, Abu Dhabi or Riyadh know what the field team finished yesterday without a Tuesday call. The same visibility lets teams spot bottlenecks early and act before small issues become major delays.",
      },
      {
        heading: "Designed for UAE operations",
        body: "From construction and facilities management to IT and government, ProjectPro adapts to multi-office structures and distributed teams. Task assignment, deadline tracking and workflow automation run on the same verified workforce layer as the rest of the Chronexa suite — attendance, visitors, meals and queues stay connected to the projects that depend on them.",
      },
    ],
    quote:
      "The one tool a team uses consistently beats the tool with the better feature list — every time.",
    conclusion:
      "Hybrid work does not have to mean fragmented projects. With ProjectPro, every team — office or remote — works from the same live record, and every project in the UAE stays organised and on schedule.",
  },
  {
    id: "time-attendance-abu-dhabi",
    index: "02",
    title: "High-Performance Time and Attendance Software: Chronexa's Approach to Workforce Automation in Abu Dhabi",
    category: "Time & Attendance",
    date: "April 3, 2026",
    dateISO: "2026-04-03",
    author: "Chronexa Team",
    readTime: "5 min read",
    screen: timepro,
    product: "timepro",
    excerpt:
      "Accuracy and efficiency define workforce management in Abu Dhabi. TimePro consolidates attendance, leave, permissions and shift scheduling into one unified platform.",
    intro:
      "In an era where accuracy and efficiency define success, Abu Dhabi organisations need more than a clock-in system. They need a platform that consolidates attendance tracking, leave management, permissions and shift scheduling into a single unified system — automated, accurate and compliant with UAE Labour Law and WPS.",
    sections: [
      {
        heading: "Automation that removes manual error",
        body: "TimePro uses biometric verification and automated logs to eliminate the errors that come from manual tracking. Every entry and exit is captured instantly, with automated shift planning and real-time attendance visibility. HR teams gain control and clarity, while managers identify trends in absenteeism, overtime, shift adherence and late arrivals.",
      },
      {
        heading: "One platform for shifts, leave and permissions",
        body: "Rather than juggling separate tools, teams centralise schedules and approvals in TimePro. Leave features and permissions are logged automatically for payroll and audit use, and the system handles flexible schedules, rotational shifts and multiple work locations without friction.",
      },
      {
        heading: "Compliance and integration built in",
        body: "TimePro supports adherence with UAE Labour Laws and WPS, maintaining audit trails for attendance records, approvals and policy changes. It integrates with HRMS, payroll and access control systems, so the payroll team never faces discrepancies and processes salaries faster.",
      },
    ],
    quote:
      "Reducing HR workload by up to 70% through automation — that is the standard Abu Dhabi teams expect.",
    conclusion:
      "TimePro is not just a time attendance software. It is a complete workforce engine — reducing manual work, strengthening compliance and giving Abu Dhabi organisations clarity, efficiency and confidence in management.",
  },
  {
    id: "queue-management-dubai",
    index: "03",
    title: "Chronexa Queue Management Software: An Essential Requirement for Customer Interaction in Dubai",
    category: "Queue Management",
    date: "March 27, 2026",
    dateISO: "2026-03-27",
    author: "Chronexa Team",
    readTime: "5 min read",
    screen: queuepro,
    product: "queuepro",
    excerpt:
      "Dubai's customers expect premium service — and speed. QueuePro organises the complete customer journey, cutting perceived wait times and boosting satisfaction.",
    intro:
      "Long and frustrating queues are a relentless problem across every industry. In a service-driven city like Dubai, businesses are judged on how efficiently they manage customer interactions. QueuePro stands at the heart of this transformation — a queue system software that organises the complete customer journey, from kiosk check-in to service and feedback.",
    sections: [
      {
        heading: "Customers check in their way",
        body: "An intuitive customer interface lets visitors join through a queue management kiosk, a mobile device or a web portal — reducing dependency on front-desk staff and accelerating onboarding. Ticket distribution gives every customer a unique identifier, and real-time updates reduce confusion and improve transparency.",
      },
      {
        heading: "Queues that move themselves",
        body: "QueuePro captures wait times, service durations and traffic patterns to enable decision-making. Customers are routed to the right counters automatically, queue information is processed through a central engine to keep kiosks, displays and staff interfaces in sync, and live announcements keep everyone informed.",
      },
      {
        heading: "A measurable business advantage",
        body: "Businesses integrating digital queue management have experienced up to 35% fewer perceived wait times and 20–30% higher customer satisfaction. Nearly 60% of customers avoid returning after a poor queue experience — so managing queues is no longer an operational task, it is a competitive advantage in Dubai.",
      },
    ],
    quote:
      "Managing queues is no longer just an operational task — it is a competitive advantage.",
    conclusion:
      "From banking to healthcare and government, QueuePro adapts to any industry. It transforms waiting time into an organised, transparent customer experience — and makes service in Dubai feel effortless.",
  },
  {
    id: "visitor-management-security-uae",
    index: "04",
    title: "The Silent Security Upgrade: How Visitor Management Software in UAE Protects Your Workplace",
    category: "Visitor Management",
    date: "March 19, 2026",
    dateISO: "2026-03-19",
    author: "Chronexa Team",
    readTime: "6 min read",
    screen: visitpro,
    product: "visitpro",
    excerpt:
      "Every visitor is a security touchpoint. VisitPro transforms reception into a secure, intelligent visitor ecosystem — every entry tracked, validated and compliant.",
    intro:
      "Workplace security extends far beyond surveillance cameras and access cards. Every visitor represents a security touchpoint, and managing that flow without a system leads to inefficiencies, compliance risks and vulnerabilities. VisitPro transforms traditional reception processes into a secure and intelligent visitor management ecosystem, ensuring every entry is tracked and validated.",
    sections: [
      {
        heading: "The complete visitor lifecycle",
        body: "VisitPro manages the journey from invitation to exit. Administrators send invite links so visitors submit details, upload documents and give consent in advance — with Google Calendar and Outlook integration for scheduling. Hosts approve, reject or postpone visits, while security teams add another layer of authorisation, with instant notifications and a full audit trail.",
      },
      {
        heading: "Fast, secure check-in",
        body: "At reception, visitors check in with QR codes, passport ID scanning and live photo capture — with optional facial recognition and automated badge printing. Walk-in visitors are handled without compromise: reception monitors them, requests approvals and issues badges within moments. Check-out tracking and overstay alerts maintain full visibility of who is on site at any time.",
      },
      {
        heading: "Compliance at the core",
        body: "VisitPro is built around role-based access control — administrators, hosts, security personnel and visitors each have defined permissions. It aligns with PDPL and GDPR standards, ensuring consent collection, HTTPS communication, configurable document retention and a tamper-proof audit trail for every action.",
      },
    ],
    quote:
      "Over 60% of workplace security breaches are linked to unauthorised or poorly monitored visitor access.",
    conclusion:
      "VisitPro is not just guest management software. It is a strategic security function that protects the workplace, improves the visitor experience and keeps every entry accounted for.",
  },
  {
    id: "projectpro-dubai",
    index: "05",
    title: "Chronexa ProjectPro: An All-in-One Project Management Software for Businesses in Dubai",
    category: "Project Management",
    date: "March 13, 2026",
    dateISO: "2026-03-13",
    author: "Chronexa Team",
    readTime: "5 min read",
    screen: projectpro,
    product: "projectpro",
    excerpt:
      "Clear direction, collaboration and control drive project success in Dubai. ProjectPro combines planning, task tracking and smart reporting into one platform.",
    intro:
      "Dubai businesses handle multiple teams, deadlines and resources simultaneously. Managing projects through spreadsheets or disconnected systems becomes inefficient as organisations scale. ProjectPro provides a structured system to plan projects, assign tasks, track progress and generate actionable insights — from planning to execution with precision.",
    sections: [
      {
        heading: "Smart planning and scheduling",
        body: "ProjectPro offers templates, timelines and priority settings so project managers can launch fast. Built-in scheduling defines responsibilities, assigns tasks and creates milestones and deadlines for each phase, with resource deployment that identifies possible delays early.",
      },
      {
        heading: "Seamless task tracking",
        body: "Teams log daily activities and progress updates while tracking manpower and material usage. Photos, comments and notes attach to tasks, and blockers surface in real time — keeping both office and field teams on the same page.",
      },
      {
        heading: "Governance and smart reporting",
        body: "Access control is role-based: managers monitor team performance, employees submit daily updates for approval, and dashboards confirm each step of execution. Reports export to PDF, Excel and CSV for easy sharing, and real-time dashboards let managers act before small issues become major delays.",
      },
    ],
    quote:
      "Organisations using modern project tools report spending 30% less time on internal emails and 50% less time searching for project information.",
    conclusion:
      "ProjectPro brings structure, transparency and efficiency to every project phase — helping Dubai businesses revolutionise the way they plan, execute and monitor work.",
  },
  {
    id: "chronexa-suite-saudi-arabia",
    index: "06",
    title: "The Chronexa Software Suite: Five Tools of Seamless Workforce Management Across Saudi Arabia",
    category: "Workforce Management",
    date: "February 23, 2026",
    dateISO: "2026-02-23",
    author: "Chronexa Team",
    readTime: "7 min read",
    screen: timepro,
    product: "timepro",
    excerpt:
      "Attendance, visitors, meals, queues and projects — five specialised tools sharing one verified workforce layer, unified for organisations across Saudi Arabia.",
    intro:
      "Saudi Arabia is building faster than it has ever built. Organisations across the Kingdom are adopting smart workforce management to keep pace — and the Chronexa suite delivers it with five specialised tools that share a single verified workforce layer.",
    sections: [
      {
        heading: "TimePro — attendance without friction",
        body: "Biometric clock-in, shift and leave management, and real-time analytics give Saudi organisations precise workforce tracking. HR teams consolidate time tracking, leave, permissions and biometric integration in one platform, with smooth payroll integration for accurate processing.",
      },
      {
        heading: "VisitPro — secure, simple entry",
        body: "Smart pre-registration, approval workflows and touchless QR check-in make every visitor journey simple and secure. Visitor badges and live entry-point control keep premises protected across every location.",
      },
      {
        heading: "MealPro, QueuePro and ProjectPro",
        body: "MealPro's entitlement engine and biometric limits cut queues, waste and fraud at every counter. QueuePro's kiosks, QR ticketing and real-time announcements serve more customers with fewer bottlenecks. And ProjectPro keeps assignments, deadlines and progress tracked with precision — all running on the same workforce layer.",
      },
    ],
    quote:
      "One verified workforce layer, five specialised tools — each engineered to remove friction from a different operation.",
    conclusion:
      "Together, the Chronexa suite gives Saudi Arabia's organisations a unified way to manage their people and their operations — one live feed from attendance to projects, everywhere at once.",
  },
]
