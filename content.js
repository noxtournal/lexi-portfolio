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
    degree: "BS in Computer Science, Minor in Math, Applied Stats",
    github: "https://github.com/bmcraig2007",
    linkedin: "",                         // TODO: paste your LinkedIn URL here
    resume: "resume.pdf",                 // upload your resume PDF to the repo with this exact file name
  },

  // ---------- ABOUT (2–3 sentences) ----------
  about: "Computer Science student at Pace University (Seidenberg Scholar) concentrating in Data Science and Robotics, with hands-on experience building machine learning models and data pipelines in Python. Built Weather Vault, a Random Forest-based weather forecasting model and web app, during a project-based AI internship, and previously analyzed sea surface temperature data as a research intern at Brown University. Founder of a new robotics and engineering club at Pace, with a track record of leadership through peer tutoring and orientation programs.",

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
        "Engineered 7-day and 30-day rolling averages and lag features to capture short- and long-term trends, split data chronologically into training and testing sets, and fixed a flat off-season prediction issue by blending model output with historical seasonal averages. Scored MAE 3.62°F / RMSE 4.64°F on the 2024–2026 held-out set.",
      ],
    },
  ],

  // ---------- EXPERIENCE ----------
  // TODO: add dates and more bullets from the Professional Experience section of your resume.
  experience: [
    {
      role: "AI Innovation & Exploration Intern",
      org: "",
      location: "",
      dates: "2026",
      bullets: [
        "Built Weather Vault, a Random Forest weather forecasting model and web app, as a project-based internship deliverable.",
      ],
    },
    {
      role: "Research Intern",
      org: "Brown University",
      location: "Providence, RI",
      dates: "",
      bullets: [
        "Analyzed sea surface temperature data using Python.",
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
      org: "",
      location: "",
      dates: "",
      bullets: [],
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
  ],

  // ---------- FOOTER ----------
  footer: "Built with the Seidenberg Scholars Portfolio Template",
};
