module.exports = [
    {
        id: 1,
        title: "Intro to Web Development",
        date: "2025-01-10",
        time: "10:00 AM – 12:00 PM",
        venue: "CS Lab 1, Block A",
        location: "My College Campus",
        description: "Learn basics of HTML, CSS and how websites work.",

        objectives: [
            "Understand HTML document structure",
            "Learn basic CSS styling",
            "Build your first webpage"
        ],

        prerequisites: ["None"],

        materials: [
            "intro-web-dev-slides.pdf",
            "starter-template.zip"
        ],

        structure: [
            { time: "10 min", activity: "Introduction & Icebreaker" },
            { time: "20 min", activity: "How the Web Works" },
            { time: "30 min", activity: "HTML Basics" },
            { time: "30 min", activity: "CSS Basics" },
            { time: "20 min", activity: "Mini Project" }
        ],

        content: [
            "HTML tags & elements",
            "CSS selectors",
            "Page layout",
            "VS Code setup"
        ]
    },

    {
        id: 2,
        title: "JavaScript Fundamentals",
        date: "2025-01-17",
        time: "02:00 PM – 04:00 PM",
        venue: "Seminar Hall 2",
        location: "My College Campus",

        description: "Hands-on introduction to JavaScript basics.",

        objectives: [
            "Variables & Data Types",
            "Functions & Events",
            "DOM Manipulation"
        ],

        prerequisites: ["Basic HTML", "Basic CSS"],

        materials: [
            "javascript-notes.pdf",
            "practice-exercises.pdf"
        ],

        structure: [
            { time: "10 min", activity: "Setup" },
            { time: "30 min", activity: "Variables & Functions" },
            { time: "30 min", activity: "Loops & Conditions" },
            { time: "30 min", activity: "DOM Manipulation" }
        ],

        content: [
            "let vs const",
            "Functions",
            "Events",
            "querySelector"
        ]
    }
];