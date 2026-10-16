/* ==================================================================
   YOUR PORTFOLIO CONTENT
   This is the ONLY file you need to edit. index.html reads it and
   builds your page automatically.

   THREE RULES
   1. Only change the text inside "quotes".
   2. Keep the comma at the end of each line and after each } block.
   3. Don't need something? Set it to "" (empty quotes) and it
      disappears from your page. An empty list [] hides the whole section.

   TO ADD A NEW PROJECT / JOB / SKILL GROUP
   Copy an entire block, from its opening {  to its closing },
   paste it right below, and change the text.
   ================================================================== */

const PORTFOLIO = {

  // ---------- HEADER ----------
  name: "Alex Munoz-Craig",
  title: "Data Science",                  // your focus area, shown under your name
  accentColor: "#1f3fe0",                 // link color; any hex color works

  contact: {
    email: "am50732n@pace.edu",
    location: "Manhattan, NY",
    degree: "BS in Computer Science, Minors in Math & Applied Stats",
    github: "https://github.com/bmcraig2007",
    linkedin: "",                         // TODO: paste your LinkedIn URL here
    resume: "resume.pdf",                 // upload your resume PDF to the repo with this exact file name
  },

  // ---------- ABOUT (2–3 sentences) ----------
  // UPDATED: leads with environmental/space data interest (matches your research emails)
  about: "Computer Science student and Seidenberg Scholar at Pace University focused on data science, especially environmental and space-related data. I build machine learning models and data pipelines in Python, from analyzing sea surface temperature data as a research intern at Brown University to building Weather Vault, a Random Forest temperature forecasting model, during my summer AI internship. Outside the classroom, I serve as the Seidenberg Scholars Professional Development Coordinator and am founding a robotics and engineering club at Pace.",

  // ---------- PROJECTS ----------
  // Each project is one block. Copy a block to add another.
  projects: [
    {
      title: "Weather Vault: Predictive Weather Model",
      link: "",                           // TODO: paste your Weather Vault demo link here
      date: "June 2026",
      tools: "Python, scikit-learn, Pandas, NumPy, Jupyter",
      description: [
        "Interactive demo of a Random Forest model trained on 12 years of NOAA daily records from JFK International Airport, forecasting air temperature. Built as my AI Innovation & Exploration internship project.",
        // UPDATED: added the Odin sensor data work so it backs up what your emails say
        "Started by collecting and cleaning raw JSON sensor data from Pace's Odin sensor API with Pandas, then moved to NOAA public records as the primary source. Engineered 7-day and 30-day rolling averages and lag features, split data chronologically into training and testing sets, and fixed a flat off-season prediction issue by blending model output with historical seasonal averages. Scored MAE 3.62°F / RMSE 4.64°F on the 2024–2026 held-out set.",
      ],
    },
    // NEW PROJECT
    {
      title: "AI Study Assistant",
      link: "",                           // repo is private, so no link for now
      date: "Fall 2026",
      tools: "AI API, Postgres (Neon), Render",   // TODO: add the languages/frameworks you used
      description: [
        "A personal AI assistant for PC and iPhone that connects to Pace's Brightspace and Outlook to track upcoming and overdue assignments, build to-do lists, and remember context across conversations. Includes a Pomodoro focus timer and a customizable space-themed interface. Deployed on Render with a password-protected backend and a Neon Postgres database.",
      ],
    },
    // NEW PROJECT
    {
      title: "Seidenberg Scholars Portfolio Template",
      link: "",                           // TODO: paste the link to noxtournal/scholars-portfolio-template
      date: "Fall 2026",
      tools: "HTML, CSS, JavaScript, GitHub Pages",
      description: [
        "A no-code portfolio template for Seidenberg Scholars: students edit one simple content file and the page builds itself, with no web development experience needed. This site is built with it.",
      ],
    },
    // NEW PROJECT
    {
      title: "Seidenberg Scholars Hub Site",
      link: "",                           // TODO: paste the link once it's live
      date: "Fall 2026",
      tools: "HTML, CSS, JavaScript, GitHub Pages",
      description: [
        "A central website for the Seidenberg Scholars cohort with events, program information, and coordinator contacts, plus a page for prospective incoming students. Designed to be handed off to future Scholars to maintain.",
      ],
    },
  ],

  // ---------- EXPERIENCE ----------
  experience: [
    {
      role: "AI Innovation & Exploration Intern",
      org: "Seidenberg Scholars, Pace University",   // UPDATED: filled in
      location: "",
      dates: "Summer 2026",                           // UPDATED
      bullets: [
        "Explored machine learning tools and techniques through a project-based internship with Pace faculty.",
        "Built Weather Vault, a Random Forest weather forecasting model and web app, as my internship deliverable.",
      ],
    },
    {
      role: "Research Intern",
      org: "Brown University",
      location: "Providence, RI",
      dates: "",                                      // TODO: add dates (e.g., "Summer 2025")
      bullets: [
        "Analyzed sea surface temperature data using Python.",
        // TODO: add 1–2 more bullets from your resume (methods, tools, results)
      ],
    },
    // NEW ROLE
    {
      role: "Professional Development Coordinator",
      org: "Seidenberg Scholars, Pace University",
      location: "New York, NY",
      dates: "Fall 2026 – Present",
      bullets: [
        "Proposed and created this new leadership role within the Scholars cohort.",
        "Find tech conferences, talks, and summits for the cohort, and plan networking events, hackathons, and resume-building workshops each semester.",
        "Built a no-code portfolio template so every Scholar can publish their own portfolio site.",
      ],
    },
    {
      role: "Founder",
      org: "Robotics & Engineering Club, Pace University",
      location: "New York, NY",
      dates: "2026 – Present",
      bullets: [
        "Leading the effort to establish a new robotics and engineering student organization at Pace.",
      ],
    },
    {
      role: "Peer Tutor & Orientation Leader",
      org: "",                                        // TODO: fill in where (or delete this whole block)
      location: "",
      dates: "",
      bullets: [],                                    // TODO: add 1–2 bullets
    },
  ],

  // ---------- EDUCATION ----------
  education: [
    {
      school: "Pace University, Seidenberg School of Computer Science and Information Systems",
      degree: "B.S. in Computer Science, Minor in Mathematics, Minor in Applied Statistics",
      dates: "Expected May 2029",
      details: "Concentrations: Data Science, Robotics  |  GPA: 3.70  |  Seidenberg Scholar",
    },
  ],

  // ---------- SKILLS ----------
  skills: [
    { group: "Data / ML",   items: "Python, Pandas, NumPy, scikit-learn, Jupyter Notebook, Matplotlib" },
    { group: "Dev Tools",   items: "JavaScript, Java, HTML/CSS, React, Expo, Git, GitHub, Unity, Streamlit" },
    { group: "Data Sources", items: "NOAA climate records, IoT sensor APIs (JSON)" },   // NEW
  ],

  // ---------- FOOTER ----------
  footer: "Built with the Seidenberg Scholars Portfolio Template",
};
