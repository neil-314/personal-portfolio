const portfolioContent = {
  "projects": [
    {
      "id": "logpose",
      "sector": "tech",
      "name": "Log Pose Companion",
      "jp": "航海の記録",
      "kind": "ONE PIECE COMPANION",
      "image": "project-logpose.webp",
      "stack": "Next.js · JavaScript · APIs · Supabase",
      "summary": "One checkpoint connects your whole One Piece journey.",
      "body": "A progress-aware logbook for anime and manga. A saved episode or chapter guides recaps, quizzes, discovery suggestions, character reveals, and revisits.",
      "points": [
        "Connected progress gates across recaps, quizzes, rankings, and discovery.",
        "Built a shared Harbour and a crew-building game around the same saved logbook.",
        "Integrated external metadata with conservative fallbacks and explicit spoiler controls."
      ],
      "note": "Unofficial fan project. Source artwork belongs to its respective rights holders. Account and community capabilities are documented in the repository.",
      "live": "https://log-pose-companion.vercel.app",
      "source": "log-pose-companion",
      "tags": [
        "Technology"
      ]
    },
    {
      "id": "income",
      "sector": "finance",
      "name": "IncomeLens",
      "jp": "収入の流れを読む",
      "kind": "CASH-FLOW ANALYSIS",
      "image": "project-income.webp",
      "stack": "Python · FastAPI · Plaid Sandbox",
      "summary": "From messy transactions to understandable income patterns.",
      "body": "A financial-data prototype for understanding how much income arrives, where it comes from, and how it varies. The cleaning and classification rules remain inspectable.",
      "points": [
        "Classified income, excluded transfers and refunds, and grouped recurring sources.",
        "Built monthly comparisons, cash-flow summaries, and a historical stability measure.",
        "Made original and cleaned transaction records available for inspection and export."
      ],
      "note": "Simulated data and Plaid Sandbox only. The stability measure is not a credit score or forecast.",
      "live": "https://incomelens-olive.vercel.app",
      "source": "incomelens",
      "tags": [
        "Finance",
        "Technology"
      ]
    },
    {
      "id": "monte",
      "sector": "finance",
      "name": "Monte Carlo Engine",
      "jp": "不確実性を可視化する",
      "kind": "PORTFOLIO RISK & DERIVATIVES",
      "image": "project-monte.webp",
      "stack": "Python · NumPy · Pandas · SciPy · Matplotlib",
      "summary": "Explore the distribution, not just the expected outcome.",
      "body": "A simulation engine for equity paths, correlated portfolios, European option prices, and downside-risk measures. A browser simulator makes the assumptions explorable.",
      "points": [
        "Geometric Brownian motion for stock paths and Cholesky decomposition for correlated returns.",
        "Risk-neutral European call and put pricing benchmarked against Black-Scholes.",
        "VaR, CVaR, loss probabilities, and convergence analysis."
      ],
      "note": "Educational models use fixed assumptions and no live market feed. Results do not capture every source of real-world market risk.",
      "live": "https://neil-314.github.io/Monte-Carlo-Engine/",
      "source": "Monte-Carlo-Engine",
      "tags": [
        "Finance",
        "Technology"
      ]
    },
    {
      "id": "tvm",
      "sector": "finance",
      "name": "TVM Study Desk",
      "jp": "お金と時間",
      "kind": "FINANCIAL MATHEMATICS WORKBOOK",
      "image": "project-tvm.webp",
      "stack": "React · TypeScript · Vite",
      "summary": "Understand the cash flows behind the calculator keys.",
      "body": "A finance workbook with lessons, practice questions, progressive hints, worked solutions, and a calculator trainer for present value, future value, payments, rates, and periods.",
      "points": [
        "Made cash-flow signs, compounding, and END/BGN timing visible.",
        "Built a five-register trainer with key history and worked substitutions.",
        "Kept practice history on-device with export and reset controls."
      ],
      "note": "Independent teaching tool. It is not a complete BA II Plus emulator or a Texas Instruments product.",
      "live": "https://tvm-study-desk.vercel.app/",
      "source": "finance-tvm-solver",
      "tags": [
        "Finance",
        "Technology"
      ]
    },
    {
      "id": "golf",
      "sector": "research",
      "name": "Golf-ball trajectories",
      "jp": "軌道を考える",
      "kind": "IB MATHEMATICS AA HL / MAR-APR 2026",
      "stack": "Kinematics · Calculus · TrackMan data",
      "summary": "How does launch angle change the shape of a shot?",
      "body": "Derived a projectile model from kinematics, then used differential calculus to explore launch angle, maximum height, and carry distance.",
      "points": [
        "Applied the model to Tiger Woods’ 1997 Masters equipment.",
        "Compared theoretical outputs with PGA Tour TrackMan data.",
        "Considered the gap between a simplified mathematical model and physical flight."
      ],
      "note": "IB research, not a published paper. The full report has not been supplied for this site.",
      "tags": [
        "Research"
      ],
      "paper": null
    },
    {
      "id": "thermal",
      "sector": "research",
      "name": "Thermal efficiency",
      "jp": "熱の行方",
      "kind": "IB PHYSICS HL / FEB-MAR 2026",
      "stack": "Calorimetry · Experimental design · Excel",
      "summary": "Where does electrical energy go in an immersion heater?",
      "body": "Designed five controlled trials of a nichrome immersion heating system and evaluated energy transfer, heat loss, uncertainty, and experimental limitations.",
      "points": [
        "Measured efficiencies from 56.35% to 68.81%.",
        "Reported an average efficiency of 62.41% ± 6.73%.",
        "Found that water mass had a weak influence on overall efficiency in the tested setup."
      ],
      "note": "Results describe this student experiment and its limitations. A full report is not currently linked.",
      "tags": [
        "Research"
      ],
      "paper": null
    },
    {
      "id": "chemistry",
      "sector": "research",
      "name": "Reaction kinetics",
      "jp": "反応の速さ",
      "kind": "IB CHEMISTRY HL",
      "stack": "Controlled concentrations · Experimental analysis",
      "summary": "An experimental look at concentration and reaction behaviour.",
      "body": "Investigated reaction kinetics across five acetic-acid concentrations as part of IB Chemistry HL.",
      "points": [
        "Compared controlled concentration conditions.",
        "Practised experimental design and data interpretation."
      ],
      "note": "A student investigation across five acetic-acid concentrations. The full report and numerical findings are not currently available on this site.",
      "tags": [
        "Research"
      ],
      "paper": null
    },
    {
      "id": "literature",
      "sector": "research",
      "name": "Ambition, freedom, and control",
      "jp": "物語を読み解く",
      "kind": "COMPARATIVE LITERARY RESEARCH",
      "stack": "Close reading · Comparative analysis",
      "summary": "Lord of the Flies meets One Piece.",
      "body": "Comparative research examining ambition, freedom, control, and corruption in Lord of the Flies and One Piece.",
      "points": [
        "Brought two very different fictional societies into the same analytical frame.",
        "Used close reading and comparison to investigate shared themes."
      ],
      "note": "Student literary research. Ask me about the argument and its development.",
      "tags": [
        "Research"
      ],
      "paper": null
    }
  ],
  "experience": [
    {
      "title": "Swim Instructor & Lifeguard",
      "place": "City of Mississauga",
      "date": "Mar 2024-Aug 2026",
      "context": "Teaching & safety",
      "detail": "Delivered group and private instruction, made time-sensitive safety decisions, and communicated progress clearly with swimmers and families."
    },
    {
      "title": "Private Mathematics Tutor",
      "place": "Independent / private clients",
      "date": "Aug 2023-Apr 2025",
      "context": "Mathematics education",
      "detail": "Provided paid one-on-one tutoring with individualized practice plans, clear solution methods, and recurring client sessions."
    }
  ],
  "certs": [
    {
      "title": "AI Fluency: Framework & Foundations",
      "issuer": "Anthropic",
      "date": "7 May 2026",
      "detail": "Foundational learning in effective, responsible AI collaboration.",
      "context": "AI & practical tools",
      "url": "https://verify.skilljar.com/c/vfthdvg5h7z3",
      "label": "Verify certificate"
    },
    {
      "title": "Introduction to Agent Skills",
      "issuer": "Anthropic",
      "date": "7 May 2026",
      "detail": "Introductory learning on reusable agent skills and workflows.",
      "context": "AI & practical tools",
      "url": "https://verify.skilljar.com/c/x2dezrwkk5r6",
      "label": "Verify certificate"
    },
    {
      "title": "Introduction to Subagents",
      "issuer": "Anthropic",
      "date": "7 May 2026",
      "detail": "Introductory learning on agent delegation and subagent workflows.",
      "context": "AI & practical tools",
      "url": "https://verify.skilljar.com/c/mn3acnz8jgrg",
      "label": "Verify certificate"
    },
    {
      "title": "How to Boost Your Productivity with AI Tools",
      "issuer": "LinkedIn Learning",
      "date": "13 Oct 2026",
      "detail": "Practical use of AI tools for productivity and everyday workflows.",
      "context": "AI & practical tools",
      "url": "assets/certificates/ai-productivity.pdf",
      "label": "View completion certificate"
    },
    {
      "title": "Amplify Your Business Writing with AI",
      "issuer": "LinkedIn Learning",
      "date": "14 Oct 2026",
      "detail": "Practical AI and professional communication. Includes associated PMI 1.00 PDU/contact hour and NASBA 2.00 CPE records.",
      "url": "assets/certificates/business-writing-ai.pdf",
      "label": "View completion certificate",
      "records": [
        {
          "url": "assets/certificates/business-writing-ai-pmi.pdf",
          "label": "PMI credit record"
        },
        {
          "url": "assets/certificates/business-writing-ai-nasba.pdf",
          "label": "NASBA credit record"
        }
      ],
      "context": "AI & practical tools"
    },
    {
      "title": "Bloomberg Market Concepts",
      "issuer": "Bloomberg for Education",
      "date": "13 Oct 2026",
      "detail": "Financial-markets course completion through Bloomberg for Education.",
      "context": "Financial markets",
      "url": "https://portal.bloombergforeducation.com/certificates/nPdNKD5tzT2VieoFqK2Q6ApZ",
      "label": "Verify certificate"
    },
    {
      "title": "WHMIS",
      "issuer": "AIX Safety",
      "date": "6 Jul 2023",
      "detail": "Safety training completion relevant to laboratory settings.",
      "url": "assets/certificates/whmis-2023.pdf",
      "label": "View training record",
      "context": "Safety training"
    }
  ],
  "photographyCode": {
    "id": "gallery",
    "sector": "tech",
    "name": "Photography gallery generator",
    "jp": "写真を届ける仕組み",
    "kind": "A SMALL C PROGRAM, A REAL GALLERY",
    "image": "project-photo.webp",
    "stack": "C11 · HTML · CSS · GitHub Actions",
    "summary": "A dependency-free publishing system for my photographs.",
    "body": "A C11 generator turns a photo manifest and template into a static gallery. The browser receives HTML and CSS, with no client-side JavaScript or frontend framework.",
    "points": [
      "Generated subject collections and accessible fullscreen photo viewers.",
      "Prepared responsive, watermarked image derivatives without GPS metadata.",
      "Used automated compilation, validation, and generated-page checks."
    ],
    "note": "64 original photographs across wildlife, landscapes, water, and architecture. Visit Ueno in this portfolio for the photography side of the story.",
    "live": "https://photography-portfolio-sigma-ochre.vercel.app",
    "source": "photography-portfolio"
  },
  "schoolActivities": [
    {
      "title": "President & Executive",
      "place": "STEM Club",
      "date": "2023-2026",
      "detail": "Led a 30-member student organization and executive team, coordinating technical learning, programming, competitions, and recurring initiatives.",
      "context": "Technical leadership"
    },
    {
      "title": "Executive & Member",
      "place": "Common Cents Xavier / Target Alpha Canada",
      "date": "Executive: 2023-2025 · Member: 2022-2023",
      "detail": "Supported finance education, stock-pitch preparation, market concepts, company analysis, and investment reasoning.",
      "context": "Finance education"
    },
    {
      "title": "Economics Competition Director",
      "place": "Canadian Economics Olympiad / school chapter",
      "date": "2025-2026",
      "detail": "Organized structured review and competition preparation for approximately 25 recurring participants. Coordinated resources, session plans, and logistics.",
      "context": "Finance education"
    },
    {
      "title": "Director of Logistics",
      "place": "Physics Club",
      "date": "2025-2026",
      "detail": "Coordinated sessions for approximately 20 participants and supported a peer-tutoring network of roughly 15 tutors.",
      "context": "Academic coordination"
    }
  ]
};
