const initialWebsites = [
    // Coding & Contests
    {
        id: "1",
        title: "LeetCode (Problem Solving & DSA)",
        url: "https://leetcode.com/",
        category: "coding",
        description: "Platform for preparing technical coding interviews and practicing DSA problems.",
        tags: ["DSA", "Interviews", "Coding"],
        isNew: true,
        badgeText: "HOT"
    },
    {
        id: "2",
        title: "GeeksforGeeks (CS Portal & DSA)",
        url: "https://www.geeksforgeeks.org/",
        category: "coding",
        description: "Computer Science portal for tutorials, DSA, interview experiences, and core CS subjects.",
        tags: ["DSA", "Tutorials", "Core CS"],
        isNew: false
    },
    {
        id: "3",
        title: "CodeChef (Monthly Contests & CP)",
        url: "https://www.codechef.com/",
        category: "coding",
        description: "Competitive programming website with monthly contests and learning paths.",
        tags: ["Contests", "Competitive Coding"],
        isNew: true,
        badgeText: "CONTEST"
    },
    {
        id: "4",
        title: "Codeforces (Global Coding Contests)",
        url: "https://codeforces.com/",
        category: "coding",
        description: "Competitive programming community hosting regular contests and rating systems.",
        tags: ["Contests", "Algorithms"],
        isNew: false
    },
    {
        id: "5",
        title: "HackerRank (Skill Badges & Practice)",
        url: "https://www.hackerrank.com/",
        category: "coding",
        description: "Practice coding skill badges, SQL, domain-specific challenges, and assessments.",
        tags: ["Badges", "Practice", "SQL"],
        isNew: false
    },
    {
        id: "6",
        title: "GitHub (Code Hosting & Projects)",
        url: "https://github.com/",
        category: "coding",
        description: "Host code, manage repositories, collaborate open-source, and showcase projects.",
        tags: ["Git", "Version Control", "Projects"],
        isNew: false
    },

    // Jobs & Internships
    {
        id: "26",
        title: "Unstop (Hackathons & Off-Campus Hiring)",
        url: "https://unstop.com/",
        category: "jobs",
        description: "Hackathons, hiring challenges, quizzes, internships, and job opportunities.",
        tags: ["Hackathons", "Hiring", "Contests"],
        isNew: true,
        badgeText: "HIRING"
    },
    {
        id: "27",
        title: "LinkedIn (Jobs & Professional Network)",
        url: "https://www.linkedin.com/jobs/",
        category: "jobs",
        description: "Professional networking platform, off-campus job listings, and career updates.",
        tags: ["Networking", "Jobs", "Resume"],
        isNew: true,
        badgeText: "DRIVES"
    },
    {
        id: "28",
        title: "Internshala (College Internships Portal)",
        url: "https://internshala.com/",
        category: "jobs",
        description: "India's leading internship search portal for college students and freshers.",
        tags: ["Internships", "Freshers"],
        isNew: false
    },
    {
        id: "29",
        title: "Wellfound (Startup & Remote Tech Jobs)",
        url: "https://wellfound.com/",
        category: "jobs",
        description: "Find remote and startup tech jobs and internship opportunities.",
        tags: ["Startups", "Remote Jobs"],
        isNew: false
    },
    {
        id: "30",
        title: "Naukri.com (IT & Software Engineering Jobs)",
        url: "https://www.naukri.com/",
        category: "jobs",
        description: "India's largest job portal for IT, software development & freshers.",
        tags: ["IT Jobs", "Software"],
        isNew: false
    },

    // Core CSE & GATE Prep
    {
        id: "13",
        title: "Gate Smashers (OS, DBMS, CN Video Lectures)",
        url: "https://www.youtube.com/@GateSmashers",
        category: "learning",
        description: "Popular YouTube channel for simplified GATE & University exam core CS preparation.",
        tags: ["OS", "DBMS", "CN", "GATE"],
        isNew: true,
        badgeText: "MUST WATCH"
    },
    {
        id: "14",
        title: "NPTEL (IIT & IISc Certification Courses)",
        url: "https://nptel.ac.in/",
        category: "learning",
        description: "IIT & IISc online certification courses and video lectures for core engineering.",
        tags: ["IIT Courses", "Certificates"],
        isNew: false
    },
    {
        id: "15",
        title: "MIT OpenCourseWare (Free MIT Computer Science)",
        url: "https://ocw.mit.edu/",
        category: "learning",
        description: "Free publication of material from thousands of MIT computer science courses.",
        tags: ["MIT", "University", "Lecture"],
        isNew: false
    },
    {
        id: "16",
        title: "Coursera (CS Certifications & Degrees)",
        url: "https://www.coursera.org/",
        category: "learning",
        description: "Top university courses and professional certificates in Computer Science.",
        tags: ["Courses", "Certifications"],
        isNew: false
    },
    {
        id: "17",
        title: "TutorialsPoint (Quick Subject Notes)",
        url: "https://www.tutorialspoint.com/",
        category: "learning",
        description: "Comprehensive text-based technical tutorials and quick reference guides.",
        tags: ["Tutorials", "Guides"],
        isNew: false
    },

    // Web Development
    {
        id: "7",
        title: "MDN Web Docs (Official HTML/CSS/JS Manuals)",
        url: "https://developer.mozilla.org/",
        category: "webdev",
        description: "Official and complete reference documentation for HTML, CSS, JavaScript, and Web APIs.",
        tags: ["Docs", "HTML", "CSS", "JS"],
        isNew: false
    },
    {
        id: "8",
        title: "W3Schools (Beginner Web Tutorials)",
        url: "https://www.w3schools.com/",
        category: "webdev",
        description: "Easy to learn web development tutorials, examples, and interactive live editors.",
        tags: ["Tutorials", "Beginners"],
        isNew: false
    },
    {
        id: "9",
        title: "freeCodeCamp (Free FullStack Certification)",
        url: "https://www.freecodecamp.org/",
        category: "webdev",
        description: "Free interactive web development, certifications, and project-based learning.",
        tags: ["Free Courses", "Certifications"],
        isNew: true,
        badgeText: "FREE"
    },
    {
        id: "10",
        title: "Dev.to (Developer Community & Blogs)",
        url: "https://dev.to/",
        category: "webdev",
        description: "A constructive and inclusive social network for software developers.",
        tags: ["Community", "Articles", "Blogs"],
        isNew: false
    },
    {
        id: "11",
        title: "CodePen (Online Front-End Playground)",
        url: "https://codepen.io/",
        category: "webdev",
        description: "Online code editor and social development environment for front-end web developers.",
        tags: ["Front-end", "Playground"],
        isNew: false
    },

    // AI & Data Science
    {
        id: "18",
        title: "Hugging Face (AI Models & Datasets)",
        url: "https://huggingface.co/",
        category: "ai",
        description: "The AI community building the future. Datasets, open models, and Space apps.",
        tags: ["LLM", "Models", "Datasets"],
        isNew: true,
        badgeText: "TRENDING"
    },
    {
        id: "19",
        title: "Kaggle (Data Science & Free GPUs)",
        url: "https://www.kaggle.com/",
        category: "ai",
        description: "Data Science competitions, free GPU Jupyter notebooks, and open datasets.",
        tags: ["Data Science", "GPU", "Notebooks"],
        isNew: false
    },
    {
        id: "20",
        title: "Google Colab (Free Cloud Jupyter & GPU)",
        url: "https://colab.research.google.com/",
        category: "ai",
        description: "Free cloud Jupyter notebook environment with free access to GPU and TPU.",
        tags: ["Python", "Jupyter", "GPU"],
        isNew: false
    },
    {
        id: "21",
        title: "PyTorch (Deep Learning Framework)",
        url: "https://pytorch.org/",
        category: "ai",
        description: "An open-source machine learning framework that accelerates path from research to deployment.",
        tags: ["Deep Learning", "Framework"],
        isNew: false
    },

    // Dev Tools & Utilities
    {
        id: "22",
        title: "Stack Overflow (Coding Q&A & Error Fixes)",
        url: "https://stackoverflow.com/",
        category: "tools",
        description: "Question and answer website for professional and enthusiast programmers.",
        tags: ["Q&A", "Debugging", "Help"],
        isNew: false
    },
    {
        id: "23",
        title: "AWS Console (Cloud Deployment & Servers)",
        url: "https://aws.amazon.com/",
        category: "tools",
        description: "Amazon Web Services cloud computing portal for servers, databases, and deployment.",
        tags: ["Cloud", "Deployment", "AWS"],
        isNew: false
    },
    {
        id: "24",
        title: "Docker Docs (Containerization Guides)",
        url: "https://docs.docker.com/",
        category: "tools",
        description: "Guides and reference manuals for containerizing software applications.",
        tags: ["Containers", "DevOps"],
        isNew: false
    },
    {
        id: "25",
        title: "DevDocs.io (Fast Offline Programming Docs)",
        url: "https://devdocs.io/",
        category: "tools",
        description: "Fast, offline, and unified documentation browser for all major programming languages.",
        tags: ["Offline Docs", "Reference"],
        isNew: false
    },

    // Result & Government Services
    {
        id: "31",
        title: "Sarkari Result",
        url: "https://www.sarkariresult.com/",
        category: "result",
        description: "Government exam results, admit cards, answer keys, and latest job notices.",
        tags: ["Results", "Admit Card", "Jobs"],
        isNew: true,
        badgeText: "RESULT"
    },
    {
        id: "32",
        title: "India Results",
        url: "https://www.indiaresults.com/",
        category: "result",
        description: "School, college, university, and competitive examination results.",
        tags: ["Results", "Education"],
        isNew: false
    },
    {
        id: "33",
        title: "National Government Services Portal",
        url: "https://services.india.gov.in/",
        category: "government",
        description: "Official directory for citizen services and government information.",
        tags: ["Government", "Services"],
        isNew: true,
        badgeText: "OFFICIAL"
    },
    {
        id: "34",
        title: "National Portal of India",
        url: "https://www.india.gov.in/",
        category: "government",
        description: "Official Indian government portal for schemes, departments, and public information.",
        tags: ["Government", "Schemes"],
        isNew: false
    },
    {
        id: "35",
        title: "Bihar Board Official Website",
        url: "https://secondary.biharboardonline.com/",
        category: "bihar",
        description: "Bihar Board secondary examination notices, results, and student services.",
        tags: ["Bihar Board", "Matric"],
        isNew: true,
        badgeText: "BIHAR"
    },
    {
        id: "36",
        title: "Bihar Board Inter Official Website",
        url: "https://seniorsecondary.biharboardonline.com/",
        category: "bihar",
        description: "Bihar Board intermediate examination forms, notices, and results.",
        tags: ["Bihar Board", "Inter"],
        isNew: false
    },
    {
        id: "37",
        title: "Aadhaar Official Portal",
        url: "https://uidai.gov.in/",
        category: "aadhaar",
        description: "Official UIDAI portal for Aadhaar enrolment, updates, and citizen services.",
        tags: ["Aadhaar", "UIDAI"],
        isNew: true,
        badgeText: "OFFICIAL"
    },
    {
        id: "38",
        title: "MyAadhaar Services",
        url: "https://myaadhaar.uidai.gov.in/",
        category: "aadhaar",
        description: "Download Aadhaar, check status, update details, and use online Aadhaar services.",
        tags: ["Aadhaar", "Online Service"],
        isNew: false
    },
    //RTPS Services
    {
        id: "39",
        title: "RTPS Services",
        url: "https://serviceonline.bihar.gov.in/",
        category: "rtps",
        description: "Official RTPS portal for various government services and information.",
        tags: ["RTPS", "Government"],
        isNew: true,
        badgeText: "OFFICIAL"
    },
    {
        id: "48",
        title: "RTPS Application Status",
        url: "https://serviceonline.bihar.gov.in/officials/citizenApplication.html",
        category: "rtps",
        description: "Check the status of your RTPS application.",
        tags: ["RTPS", "Government"],
        isNew: false,
        badgeText: "OFFICIAL"
    },
    {
        id: "49",
        title: "Download RTPS Certificates",
        url: "https://swcs.bihar.gov.in/RtpsReportView/certificate_download.jsp",
        category: "rtps",
        description: "Download your RTPS certificates in PDF format.",
        tags: ["RTPS", "Government"],
        isNew: false,
        badgeText: "OFFICIAL"
    },
    //PAN Card Services
    {
        id: "40",
        title: "PAN Card Official Portal",
        url: "https://tinpan.proteantech.in/",
        category: "pan",
        description: "Official PAN card portal for application, updates, and citizen services.",
        tags: ["ProteanTech", "Tax"],
        isNew: true,
        badgeText: "OFFICIAL"
    },
    {
        id: "41",
        title: "Download PAN Card ",
        url: "https://onlineservices.proteantech.in/paam/requestAndDownloadEPAN.html",
        category: "pan",
        description: "Download your PAN card in PDF format using your PAN number and date of birth.",
        tags: ["ProteanTech", "PAN Card", ""],
        isNew: false,
        badgeText: "PROTEANTECH"
    },
    {
        id: "42",
        title: "Apply for PAN Card",
        url: "https://onlineservices.proteantech.in/paam/endUserRegisterContact.html",
        category: "pan",
        description: "Apply for PAN card, updates, and citizen services.",
        tags: ["ProteanTech", "PAN Card", "Tax"],
        isNew: false,
        badgeText: "PROTEANTECH"
    },
    {
        id: "43",
        title: "Status Tracking for PAN Card",
        url: "https://tin.tin.proteantech.in/pantan/StatusTrack.html",
        category: "pan",
        description: "Track the status of your PAN card application with ProteanTech.",
        tags: ["ProteanTech", "Tax"],
        isNew: false,
        badgeText: "PROTEANTECH"
    },
    //Voter ID Services
    {
        id: "44",
        title: "Voter ID Services",
        url: "https://www.eci.gov.in/",
        category: "voter",
        description: "Official portal for Voter ID services and information.",
        tags: ["Election Commission", "Voter Services"],
        isNew: true,
        badgeText: "OFFICIAL"
    },
    {
        id: "45",
        title: "New Voter ID Registration",
        url: "https://voters.eci.gov.in/form6",
        category: "voter",
        description: "Register for a new Voter ID.",
        tags: ["Election Commission", "Voter Services"],
        isNew: false,
        badgeText: "VOTER"
    },
    {
        id: "46",
        title: "Track Voter ID Application Status",
        url: "https://voters.eci.gov.in/home/track",
        category: "voter",
        description: "Track the status of your Voter ID application.",
        tags: ["Election Commission", "Voter Services"],
        isNew: false,
        badgeText: "VOTER"
    },
    {   
        id: "47",
        title: "Voter ID Correction Services",
        url: "https://voters.eci.gov.in/form8",
        category: "voter",
        description: "Apply for corrections in your Voter ID details.",
        tags: ["Election Commission", "Voter Services"],
        isNew: true,
        badgeText: "OFFICIAL"
    },

    {
        id: "55",
        title: "Voter ID Election Results",
        url: "https://results.eci.gov.in/",
        category: "voter",
        description: "Check the election results for your Voter ID.",
        tags: ["Election Commission", "Voter Services"],
        isNew: false,
        badgeText: "VOTER"
    },

];

const categoryLabels = {
    all: "TOTAL LINKS (ALL)",
    coding: "Coding & Contests",
    jobs: "Jobs & Off-Campus Hiring",
    learning: "Core CSE & GATE Prep",
    webdev: "Web Development Docs",
    ai: "AI & Data Science",
    tools: "Dev Tools & Cloud",
    result: "Results & Admit Cards",
    government: "Government Services",
    bihar: "Bihar Board",
    rtps: "RTPS Services",
    pan: "PAN Card Services",
    aadhaar: "Aadhaar / UIDAI",
    voter: "Voter ID Services"
};

const sarkariBoxConfig = [
    {
        category: "coding",
        title: "CODING & CONTESTS (कोडिंग पोर्टल्स)",
        headerBg: "linear-gradient(135deg, #b91c1c 0%, #ef4444 100%)",
        borderColor: "#ef4444"
    },
    {
        category: "jobs",
        title: "JOBS & OFF-CAMPUS (नौकरियां व इंटर्नशिप)",
        headerBg: "linear-gradient(135deg, #047857 0%, #10b981 100%)",
        borderColor: "#10b981"
    },
    {
        category: "learning",
        title: "CORE CSE & GATE PREP (पढ़ाई व नोट्स)",
        headerBg: "linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)",
        borderColor: "#3b82f6"
    },
    {
        category: "webdev",
        title: "WEB DEVELOPMENT (वेब डेवलपमेंट)",
        headerBg: "linear-gradient(135deg, #6d28d9 0%, #8b5cf6 100%)",
        borderColor: "#8b5cf6"
    },
    {
        category: "ai",
        title: "AI & DATA SCIENCE (AI व डेटा साइंस)",
        headerBg: "linear-gradient(135deg, #c2410c 0%, #f97316 100%)",
        borderColor: "#f97316"
    },
    {
        category: "tools",
        title: "DEV TOOLS & CLOUD (ज़रूरी टूल्स)",
        headerBg: "linear-gradient(135deg, #0369a1 0%, #06b6d4 100%)",
        borderColor: "#06b6d4"
    },
    {
        category: "result",
        title: "RESULTS & ADMIT CARDS (रिजल्ट)",
        headerBg: "linear-gradient(135deg, #be123c 0%, #f43f5e 100%)",
        borderColor: "#f43f5e"
    },
    {
        category: "government",
        title: "GOVERNMENT SERVICES (सरकारी सेवा)",
        headerBg: "linear-gradient(135deg, #166534 0%, #22c55e 100%)",
        borderColor: "#22c55e"
    },
    {
        category: "bihar",
        title: "BIHAR BOARD (बिहार बोर्ड)",
        headerBg: "linear-gradient(135deg, #92400e 0%, #f59e0b 100%)",
        borderColor: "#f59e0b"
    },
    {
        category: "rtps",
        title: "RTPS SERVICES (RTPS सेवाएँ)",
        headerBg: "linear-gradient(135deg, #0f172a 0%, #334155 100%)",
        borderColor: "#334155"
    },
    {
        category: "pan",
        title: "PAN CARD SERVICES (पैन कार्ड सेवाएँ)",
        headerBg: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
        borderColor: "#3b82f6"
    },
    {
        category: "aadhaar",
        title: "AADHAAR / UIDAI (आधार सेवा)",
        headerBg: "linear-gradient(135deg, #4338ca 0%, #6366f1 100%)",
        borderColor: "#6366f1"
    },
    {
        category: "voter",
        title: "VOTER ID SERVICES (मतदाता पहचान सेवाएँ)",
        headerBg: "linear-gradient(135deg, #f1f11f 0%, #398d24 100%)",
        borderColor: "#d2b216"
    }
];

const marqueeNotice = [
    { title: "TCS NQT 2026 Registration Open - Off Campus Hiring Drive", url: "https://www.tcs.com/careers", type: "JOB" },
    { title: "Sarkari Result: Latest Government Jobs & Admit Cards", url: "https://www.sarkariresult.com/", type: "RESULT" },
    { title: "LeetCode Weekly Contest Live - Practice DSA Problems", url: "https://leetcode.com/contest/", type: "CONTEST" },
    { title: "GATE 2027 CSE Notes & OS, DBMS Lectures Updated", url: "https://gate.iitk.ac.in/", type: "NOTICE" },
    { title: "Free Google Colab GPU & Hugging Face AI Models Available", url: "https://colab.research.google.com/", type: "AI" }
];

/*
    CODE-ONLY CONTROL GUIDE

    Add a new link inside initialWebsites:
    {
        id: "39",
        title: "Your Website Name",
        url: "https://example.com/",
        category: "result",
        description: "Short description",
        tags: ["Result", "Exam"],
        isNew: true,
        badgeText: "NEW"
    }

    Add a new category in three places:
    1. categoryLabels: new key and display name
    2. categoryIcons in script.js: new key and Font Awesome icon
    3. sarkariBoxConfig: category, title, headerBg, and borderColor

    Add a latest update by adding an object to marqueeNotice:
    { title: "New Vacancy Notice", url: "https://example.com/notice", type: "JOB" }
*/
