// script.js

// Data from the assessment including all tasks
const assessmentData = {
  competencies: [
    "Feature Specification",
    "Product Delivery",
    "Product Quality Assurance",
    "Fluency with Data",
    "Voice of the Customer",
    "User Experience Design",
    "Business Outcome Ownership",
    "Product Vision and Roadmapping",
    "Strategic Impact",
    "Stakeholder Management",
    "Team Leadership",
    "Managing Up",
  ],
  tasks: [
    // Feature Specification - Gathering and Defining Requirements
    {
      competency: "Feature Specification",
      skillArea: "Gathering and Defining Requirements",
      task: "Gather and Document Requirements",
      description: "Actively engage with users, stakeholders, and team members to collect and document detailed product requirements.",
      resources: {
        books: "User Story Mapping, Chapter 1",
        articleTitle: "How to Gather Product Requirements",
        articleLink: "https://www.productplan.com/glossary/product-requirements/",
        courseTitle: "Udemy: Product Management 101",
        courseSection: "Section 2: Understanding Requirements",
        courseLink: "https://www.udemy.com/course/product-management-101/",
      },
    },
    {
      competency: "Feature Specification",
      skillArea: "Gathering and Defining Requirements",
      task: "Define Clear Goals and Objectives",
      description: "Set meaningful and achievable goals for features, ensuring they align with overall product strategy.",
      resources: {
        books: "Measure What Matters, Chapter 1",
        articleTitle: "Setting Effective Goals",
        articleLink: "https://www.whatmatters.com/",
        courseTitle: "Udemy: OKR Goal Setting 101",
        courseSection: "Section 1: Introduction to OKRs",
        courseLink: "https://www.udemy.com/course/okr-goal-setting-101/",
      },
    },
    {
      competency: "Feature Specification",
      skillArea: "Gathering and Defining Requirements",
      task: "Prioritize Requirements",
      description: "Evaluate and rank requirements based on business value, feasibility, and stakeholder input.",
      resources: {
        books: "Prioritizing Web Usability, Chapter 2",
        articleTitle: "Requirement Prioritization Techniques",
        articleLink: "https://www.agilebusiness.org/page/ProjectFramework_17_Prioritisation",
        courseTitle: "Udemy: Business Analysis Fundamentals",
        courseSection: "Section 4: Prioritizing Requirements",
        courseLink: "https://www.udemy.com/course/business-analysis-fundamentals/",
      },
    },
    // Feature Specification - Creating Effective Specifications
    {
      competency: "Feature Specification",
      skillArea: "Creating Effective Specifications",
      task: "Create Detailed Feature Specifications",
      description: "Write comprehensive specifications that clearly describe functionality, user flows, and acceptance criteria.",
      resources: {
        books: "Writing Effective User Stories, Chapter 2",
        articleTitle: "Writing Detailed Specifications",
        articleLink: "https://www.mountaingoatsoftware.com/agile/user-stories",
        courseTitle: "Udemy: Agile Product Owner Role: Foundations",
        courseSection: "Section 3: Writing User Stories",
        courseLink: "https://www.udemy.com/course/agile-product-owner-role-foundations/",
      },
    },
    {
      competency: "Feature Specification",
      skillArea: "Creating Effective Specifications",
      task: "Use Appropriate Specification Formats",
      description: "Leverage various formats (e.g., documents, prototypes, diagrams) to effectively communicate specifications.",
      resources: {
        books: "Lean UX, Chapter 4",
        articleTitle: "Effective Communication in UX",
        articleLink: "https://www.oreilly.com/library/view/lean-ux/9781449311650/",
        courseTitle: "Udemy: Writing Effective Requirements and Specifications",
        courseSection: "Section 2: Specification Formats",
        courseLink: "https://www.udemy.com/course/writing-effective-requirements-and-specifications/",
      },
    },
    {
      competency: "Feature Specification",
      skillArea: "Creating Effective Specifications",
      task: "Maintain and Update Specifications",
      description: "Regularly revise specifications to reflect changes in requirements or scope.",
      resources: {
        books: "Writing Effective Use Cases, Chapter 5",
        articleTitle: "Maintaining Documentation in Agile",
        articleLink: "https://www.agilealliance.org/agile101/agile-essentials/",
        courseTitle: "Udemy: Agile Documentation: Strategy and Execution",
        courseSection: "Section 3: Maintaining Documentation",
        courseLink: "https://www.udemy.com/course/agile-documentation/",
      },
    },
    // Product Delivery - Agile Methodologies
    {
      competency: "Product Delivery",
      skillArea: "Agile Methodologies",
      task: "Participate in Agile Ceremonies",
      description: "Engage in sprint planning, daily stand-ups, sprint reviews, and retrospectives to support the Agile process.",
      resources: {
        books: "Scrum: The Art of Doing Twice the Work in Half the Time, Chapter 2",
        articleTitle: "Understanding Agile Ceremonies",
        articleLink: "https://www.scrum.org/resources/blog/agile-ceremonies-explained",
        courseTitle: "Udemy: Agile Crash Course",
        courseSection: "Section 3: Scrum Framework",
        courseLink: "https://www.udemy.com/course/agile-crash-course/",
      },
    },
    {
      competency: "Product Delivery",
      skillArea: "Agile Methodologies",
      task: "Apply Agile Principles",
      description: "Utilize Agile principles and practices to enhance team collaboration and product delivery.",
      resources: {
        books: "Agile Project Management with Scrum, Chapter 3",
        articleTitle: "Applying Agile Principles",
        articleLink: "https://www.agilealliance.org/agile101/12-principles-behind-the-agile-manifesto/",
        courseTitle: "Udemy: Agile Fundamentals",
        courseSection: "Section 2: Agile Principles",
        courseLink: "https://www.udemy.com/course/agile-fundamentals/",
      },
    },
    {
      competency: "Product Delivery",
      skillArea: "Agile Methodologies",
      task: "Facilitate Agile Practices",
      description: "Actively support and lead Agile practices like backlog grooming and retrospectives.",
      resources: {
        books: "Coaching Agile Teams, Chapter 4",
        articleTitle: "Facilitating Agile Teams",
        articleLink: "https://www.scrumalliance.org/community/articles/2015/december/facilitation-in-agile-teams",
        courseTitle: "Udemy: Agile Product Owner Role: Foundations",
        courseSection: "Section 5: Facilitating Agile Practices",
        courseLink: "https://www.udemy.com/course/agile-product-owner-role-foundations/",
      },
    },
    // Product Delivery - Collaborative Development
    {
      competency: "Product Delivery",
      skillArea: "Collaborative Development",
      task: "Develop Effective Working Relationships",
      description: "Build strong collaborations with engineering, design, and other immediate team members.",
      resources: {
        books: "People Skills for Product Managers, Chapter 2",
        articleTitle: "Building Team Relationships",
        articleLink: "https://www.atlassian.com/team-playbook/plays/open-team",
        courseTitle: "Udemy: Teamwork Skills: Communicating Effectively in Groups",
        courseSection: "Section 1: Building Collaboration",
        courseLink: "https://www.udemy.com/course/teamwork-skills-communicating-effectively-in-groups/",
      },
    },
    {
      competency: "Product Delivery",
      skillArea: "Collaborative Development",
      task: "Contribute to Iterative Development",
      description: "Participate in sprint planning and reviews to facilitate continuous improvement.",
      resources: {
        books: "Scrum: The Art of Doing Twice the Work in Half the Time, Chapter 3",
        articleTitle: "Agile Practices in Development",
        articleLink: "https://www.agilealliance.org/agile101/",
        courseTitle: "Udemy: Scrum Certification Prep + Scrum Master + Agile Scrum Training",
        courseSection: "Section 4: Iterative Development",
        courseLink: "https://www.udemy.com/course/scrum-certification/",
      },
    },
    {
      competency: "Product Delivery",
      skillArea: "Collaborative Development",
      task: "Resolve Cross-Functional Issues",
      description: "Address challenges between different teams to ensure smooth product development.",
      resources: {
        books: "The Cross-Functional Collaboration Handbook, Chapter 3",
        articleTitle: "Managing Cross-Functional Teams",
        articleLink: "https://www.mindtools.com/pages/article/newLDR_86.htm",
        courseTitle: "Udemy: Cross-Functional Collaboration",
        courseSection: "Section 2: Resolving Team Issues",
        courseLink: "https://www.udemy.com/course/cross-functional-collaboration/",
      },
    },
    // Product Delivery - Risk Management
    {
      competency: "Product Delivery",
      skillArea: "Risk Management",
      task: "Identify Project Risks",
      description: "Recognize potential risks in product development and deployment.",
      resources: {
        books: "The Project Manager's Guide to Handling Risk, Chapter 2",
        articleTitle: "Identifying Risks",
        articleLink: "https://www.pmi.org/learning/library/risk-identification-methods-approaches-6595",
        courseTitle: "Udemy: Risk Management for Projects",
        courseSection: "Section 1: Identifying Risks",
        courseLink: "https://www.udemy.com/course/risk-management-for-projects/",
      },
    },
    {
      competency: "Product Delivery",
      skillArea: "Risk Management",
      task: "Mitigate and Monitor Risks",
      description: "Develop strategies to mitigate risks and monitor them throughout the project lifecycle.",
      resources: {
        books: "Managing Project Risk, Chapter 3",
        articleTitle: "Risk Mitigation Strategies",
        articleLink: "https://www.projectmanager.com/blog/risk-mitigation-strategies",
        courseTitle: "Udemy: Risk Management for Projects",
        courseSection: "Section 2: Mitigating Risks",
        courseLink: "https://www.udemy.com/course/risk-management-for-projects/",
      },
    },
    {
      competency: "Product Delivery",
      skillArea: "Risk Management",
      task: "Communicate Risks to Stakeholders",
      description: "Regularly update stakeholders on potential risks and mitigation plans.",
      resources: {
        books: "Risk Communication, Chapter 2",
        articleTitle: "Effective Risk Communication",
        articleLink: "https://www.pmi.org/learning/library/communicating-project-risks-stakeholders-10415",
        courseTitle: "Udemy: Risk Management for Projects",
        courseSection: "Section 3: Communicating Risks",
        courseLink: "https://www.udemy.com/course/risk-management-for-projects/",
      },
    },
    // Product Quality Assurance - Quality Testing and Bug Management
    {
      competency: "Product Quality Assurance",
      skillArea: "Quality Testing and Bug Management",
      task: "Perform Comprehensive QA Testing",
      description: "Test features across all relevant devices, platforms, and use cases to ensure high quality.",
      resources: {
        books: "Agile Testing, Chapter 4",
        articleTitle: "Effective QA Practices",
        articleLink: "https://www.agilealliance.org/glossary/qa/",
        courseTitle: "Udemy: Software Testing QA: Complete Training Course",
        courseSection: "Section 3: QA Testing Techniques",
        courseLink: "https://www.udemy.com/course/software-testing-qa/",
      },
    },
    {
      competency: "Product Quality Assurance",
      skillArea: "Quality Testing and Bug Management",
      task: "Identify and Document Bugs",
      description: "Log issues with detailed descriptions and steps to reproduce.",
      resources: {
        books: "Lessons Learned in Software Testing, Chapter 2",
        articleTitle: "Bug Reporting Best Practices",
        articleLink: "https://www.atlassian.com/agile/project-management/bug-tracking",
        courseTitle: "Udemy: Bug Tracking and Software Testing Lifecycle",
        courseSection: "Section 2: Bug Reporting",
        courseLink: "https://www.udemy.com/course/software-testing-lifecycle/",
      },
    },
    {
      competency: "Product Quality Assurance",
      skillArea: "Quality Testing and Bug Management",
      task: "Track Bug Resolution Progress",
      description: "Monitor the status of reported bugs and ensure timely resolution.",
      resources: {
        books: "Effective Software Testing, Chapter 6",
        articleTitle: "Bug Tracking Best Practices",
        articleLink: "https://www.atlassian.com/agile/project-management/bug-tracking",
        courseTitle: "Udemy: Bug Tracking and Software Testing Lifecycle",
        courseSection: "Section 3: Tracking Bug Resolution",
        courseLink: "https://www.udemy.com/course/software-testing-lifecycle/",
      },
    },
    // Product Quality Assurance - Quality Standards Compliance
    {
      competency: "Product Quality Assurance",
      skillArea: "Quality Standards Compliance",
      task: "Ensure Regulatory Compliance",
      description: "Verify that the product meets all relevant regulatory and compliance standards.",
      resources: {
        books: "Regulatory Compliance in the Technology Sector, Chapter 4",
        articleTitle: "Understanding Compliance Requirements",
        articleLink: "https://www.techrepublic.com/article/how-to-achieve-regulatory-compliance-in-it/",
        courseTitle: "Udemy: Compliance Training Essentials",
        courseSection: "Section 1: Understanding Compliance",
        courseLink: "https://www.udemy.com/course/compliance-training-essentials/",
      },
    },
    {
      competency: "Product Quality Assurance",
      skillArea: "Quality Standards Compliance",
      task: "Implement Quality Assurance Processes",
      description: "Establish QA processes that align with industry standards and best practices.",
      resources: {
        books: "Total Quality Management, Chapter 5",
        articleTitle: "Implementing QA Processes",
        articleLink: "https://asq.org/quality-resources/quality-assurance-vs-control",
        courseTitle: "Udemy: Quality Assurance Masterclass",
        courseSection: "Section 2: QA Processes",
        courseLink: "https://www.udemy.com/course/quality-assurance-masterclass/",
      },
    },
    {
      competency: "Product Quality Assurance",
      skillArea: "Quality Standards Compliance",
      task: "Conduct Quality Audits",
      description: "Perform regular audits to verify adherence to quality standards and identify improvement areas.",
      resources: {
        books: "Quality Audits for Improved Performance, Chapter 4",
        articleTitle: "The Importance of Quality Audits",
        articleLink: "https://asq.org/quality-resources/auditing",
        courseTitle: "Udemy: Quality Assurance Masterclass",
        courseSection: "Section 3: Conducting Quality Audits",
        courseLink: "https://www.udemy.com/course/quality-assurance-masterclass/",
      },
    },
    // Fluency with Data - Data Analysis and Insights
    {
      competency: "Fluency with Data",
      skillArea: "Data Analysis and Insights",
      task: "Analyze Post-Launch Data",
      description: "Review data to assess whether features meet their goals.",
      resources: {
        books: "Lean Analytics, Chapter 4",
        articleTitle: "Post-Launch Analysis",
        articleLink: "https://www.intercom.com/blog/product-metrics/",
        courseTitle: "Udemy: Data Analytics for Business",
        courseSection: "Section 3: Analyzing Data",
        courseLink: "https://www.udemy.com/course/data-analytics-for-business/",
      },
    },
    {
      competency: "Fluency with Data",
      skillArea: "Data Analysis and Insights",
      task: "Generate Data-Driven Insights",
      description: "Derive actionable recommendations based on data analysis.",
      resources: {
        books: "Storytelling with Data, Chapter 3",
        articleTitle: "Interpreting Data Insights",
        articleLink: "https://www.datastorytellingbook.com/",
        courseTitle: "Udemy: Data Storytelling and Data Visualization",
        courseSection: "Section 2: Telling Stories with Data",
        courseLink: "https://www.udemy.com/course/data-storytelling-and-data-visualization/",
      },
    },
    {
      competency: "Fluency with Data",
      skillArea: "Data Analysis and Insights",
      task: "Visualize Data Effectively",
      description: "Present data in clear and compelling ways to facilitate understanding and decision-making.",
      resources: {
        books: "Storytelling with Data, Chapter 5",
        articleTitle: "Best Practices in Data Visualization",
        articleLink: "https://www.tableau.com/learn/articles/data-visualization",
        courseTitle: "Udemy: Data Visualization with Tableau",
        courseSection: "Section 2: Effective Visualization",
        courseLink: "https://www.udemy.com/course/data-visualization-with-tableau/",
      },
    },
    // Fluency with Data - Defining and Tracking Metrics
    {
      competency: "Fluency with Data",
      skillArea: "Defining and Tracking Metrics",
      task: "Define Analytics Requirements",
      description: "Specify what data needs to be collected to measure feature success.",
      resources: {
        books: "Lean Analytics, Chapter 2",
        articleTitle: "Defining Metrics and KPIs",
        articleLink: "https://www.productplan.com/glossary/kpis/",
        courseTitle: "Udemy: Product Management: Building Metrics and Measuring Success",
        courseSection: "Section 1: Defining Metrics",
        courseLink: "https://www.udemy.com/course/product-management-building-metrics/",
      },
    },
    {
      competency: "Fluency with Data",
      skillArea: "Defining and Tracking Metrics",
      task: "Set Realistic, Quantified Goals",
      description: "Establish measurable objectives for features and track progress.",
      resources: {
        books: "Measure What Matters, Chapter 3",
        articleTitle: "Setting Quantified Goals",
        articleLink: "https://www.whatmatters.com/get-examples/",
        courseTitle: "Udemy: OKR Goal Setting 101",
        courseSection: "Section 2: Setting Measurable Goals",
        courseLink: "https://www.udemy.com/course/okr-goal-setting-101/",
      },
    },
    {
      competency: "Fluency with Data",
      skillArea: "Defining and Tracking Metrics",
      task: "Monitor Key Performance Indicators (KPIs)",
      description: "Regularly track KPIs to measure product performance and inform strategic decisions.",
      resources: {
        books: "Lean Analytics, Chapter 6",
        articleTitle: "Monitoring KPIs for Success",
        articleLink: "https://www.klipfolio.com/resources/articles/what-is-a-key-performance-indicator",
        courseTitle: "Udemy: Product Management: Building Metrics and Measuring Success",
        courseSection: "Section 2: Monitoring KPIs",
        courseLink: "https://www.udemy.com/course/product-management-building-metrics/",
      },
    },
    // Voice of the Customer - User Research and Feedback Collection
    {
      competency: "Voice of the Customer",
      skillArea: "User Research and Feedback Collection",
      task: "Conduct User Research Activities",
      description: "Facilitate sessions to gather feedback directly from users.",
      resources: {
        books: "Rocket Surgery Made Easy, Chapter 2",
        articleTitle: "Running User Research Sessions",
        articleLink: "https://www.usability.gov/how-to-and-tools/methods/",
        courseTitle: "Udemy: User Experience Research Fundamentals",
        courseSection: "Section 2: Conducting Research",
        courseLink: "https://www.udemy.com/course/user-experience-research-fundamentals/",
      },
    },
    {
      competency: "Voice of the Customer",
      skillArea: "User Research and Feedback Collection",
      task: "Analyze and Synthesize User Feedback",
      description: "Distill insights to understand user sentiment and needs.",
      resources: {
        books: "Observing the User Experience, Chapter 4",
        articleTitle: "Analyzing User Data",
        articleLink: "https://www.nngroup.com/articles/affinity-diagram/",
        courseTitle: "Udemy: User Experience Research Fundamentals",
        courseSection: "Section 3: Analyzing Data",
        courseLink: "https://www.udemy.com/course/user-experience-research-fundamentals/",
      },
    },
    {
      competency: "Voice of the Customer",
      skillArea: "User Research and Feedback Collection",
      task: "Implement Feedback Mechanisms",
      description: "Set up systems to continually collect user input (e.g., surveys, feedback forms).",
      resources: {
        books: "The User Experience Team of One, Chapter 7",
        articleTitle: "Implementing User Feedback Systems",
        articleLink: "https://www.nngroup.com/articles/user-feedback/",
        courseTitle: "Udemy: User Experience Research Fundamentals",
        courseSection: "Section 4: Feedback Mechanisms",
        courseLink: "https://www.udemy.com/course/user-experience-research-fundamentals/",
      },
    },
    // Voice of the Customer - Customer Journey Mapping
    {
      competency: "Voice of the Customer",
      skillArea: "Customer Journey Mapping",
      task: "Map Customer Journeys",
      description: "Create visual representations of the customer experience to identify pain points and opportunities.",
      resources: {
        books: "Mapping Experiences, Chapter 2",
        articleTitle: "Customer Journey Mapping",
        articleLink: "https://www.nngroup.com/articles/customer-journey-mapping/",
        courseTitle: "Udemy: Customer Journey Mapping",
        courseSection: "Section 1: Creating Journey Maps",
        courseLink: "https://www.udemy.com/course/customer-journey-mapping/",
      },
    },
    {
      competency: "Voice of the Customer",
      skillArea: "Customer Journey Mapping",
      task: "Identify Opportunities for Improvement",
      description: "Use journey maps to suggest enhancements to the product or service.",
      resources: {
        books: "Mapping Experiences, Chapter 3",
        articleTitle: "Improving the Customer Experience",
        articleLink: "https://www.forbes.com/sites/forbesbusinessdevelopmentcouncil/2020/02/26/three-ways-to-improve-customer-experience/",
        courseTitle: "Udemy: Customer Journey Mapping",
        courseSection: "Section 2: Identifying Improvements",
        courseLink: "https://www.udemy.com/course/customer-journey-mapping/",
      },
    },
    {
      competency: "Voice of the Customer",
      skillArea: "Customer Journey Mapping",
      task: "Validate Journey Maps with Users",
      description: "Engage users to confirm the accuracy of journey maps and gather deeper insights.",
      resources: {
        books: "Mapping Experiences, Chapter 4",
        articleTitle: "Validating Customer Journey Maps",
        articleLink: "https://www.smashingmagazine.com/2015/01/using-customer-journey-maps-ux/",
        courseTitle: "Udemy: Customer Journey Mapping",
        courseSection: "Section 3: Validating Journey Maps",
        courseLink: "https://www.udemy.com/course/customer-journey-mapping/",
      },
    },
    // User Experience Design - Design Collaboration and Wireframing
    {
      competency: "User Experience Design",
      skillArea: "Design Collaboration and Wireframing",
      task: "Collaborate with Design Teams",
      description: "Work closely with designers to develop interfaces that meet user and business needs.",
      resources: {
        books: "The Design of Everyday Things, Chapter 5",
        articleTitle: "Collaborative Design Practices",
        articleLink: "https://www.smashingmagazine.com/2018/10/design-team-collaboration/",
        courseTitle: "Udemy: User Experience Design Essentials",
        courseSection: "Section 2: Design Collaboration",
        courseLink: "https://www.udemy.com/course/ux-design-essentials/",
      },
    },
    {
      competency: "User Experience Design",
      skillArea: "Design Collaboration and Wireframing",
      task: "Create Low-Fidelity Wireframes",
      description: "Use tools like sketches or basic software to outline design concepts.",
      resources: {
        books: "Sketching User Experiences, Chapter 3",
        articleTitle: "Wireframing Techniques",
        articleLink: "https://www.nngroup.com/articles/wireframing-101/",
        courseTitle: "Udemy: Wireframing with Balsamiq",
        courseSection: "Section 1: Introduction to Wireframing",
        courseLink: "https://www.udemy.com/course/wireframing-with-balsamiq/",
      },
    },
    {
      competency: "User Experience Design",
      skillArea: "Design Collaboration and Wireframing",
      task: "Provide Usability Feedback",
      description: "Review design prototypes and offer feedback to improve usability and user experience.",
      resources: {
        books: "About Face, Chapter 6",
        articleTitle: "Providing Usability Feedback",
        articleLink: "https://www.nngroup.com/articles/usability-101-introduction-to-usability/",
        courseTitle: "Udemy: User Experience Design Essentials",
        courseSection: "Section 4: Usability Feedback",
        courseLink: "https://www.udemy.com/course/ux-design-essentials/",
      },
    },
    // User Experience Design - Ensuring Design Consistency
    {
      competency: "User Experience Design",
      skillArea: "Ensuring Design Consistency",
      task: "Ensure Consistency with Design Standards",
      description: "Align new features with existing design patterns and company style guides.",
      resources: {
        books: "Design Systems, Chapter 2",
        articleTitle: "Maintaining Design Consistency",
        articleLink: "https://www.invisionapp.com/inside-design/guide-to-design-systems/",
        courseTitle: "Udemy: Design Systems with Figma",
        courseSection: "Section 3: Design Standards",
        courseLink: "https://www.udemy.com/course/design-systems-with-figma/",
      },
    },
    {
      competency: "User Experience Design",
      skillArea: "Ensuring Design Consistency",
      task: "Evaluate Existing User Interfaces",
      description: "Assess current designs for usability and alignment with best practices.",
      resources: {
        books: "Don't Make Me Think, Chapter 1",
        articleTitle: "Principles of Usable Design",
        articleLink: "https://www.nngroup.com/articles/ten-usability-heuristics/",
        courseTitle: "Udemy: User Experience Design Essentials",
        courseSection: "Section 3: Evaluating UX",
        courseLink: "https://www.udemy.com/course/ux-design-essentials/",
      },
    },
    {
      competency: "User Experience Design",
      skillArea: "Ensuring Design Consistency",
      task: "Update Design Guidelines",
      description: "Contribute to the evolution of design guidelines based on new insights.",
      resources: {
        books: "Design Systems, Chapter 5",
        articleTitle: "Evolving Design Systems",
        articleLink: "https://www.smashingmagazine.com/2019/04/design-systems-guide/",
        courseTitle: "Udemy: Design Systems with Figma",
        courseSection: "Section 4: Updating Design Systems",
        courseLink: "https://www.udemy.com/course/design-systems-with-figma/",
      },
    },
    // Business Outcome Ownership - Aligning Features with Business Goals
    {
      competency: "Business Outcome Ownership",
      skillArea: "Aligning Features with Business Goals",
      task: "Align Features with Business Objectives",
      description: "Ensure that product features contribute to team and company goals.",
      resources: {
        books: "Measure What Matters, Chapter 2",
        articleTitle: "Aligning with Business Goals",
        articleLink: "https://www.aha.io/roadmapping/guide/product-strategy/how-to-align-your-product-and-company-strategy",
        courseTitle: "Udemy: Strategic Thinking for Product Managers",
        courseSection: "Section 2: Aligning Product Goals",
        courseLink: "https://www.udemy.com/course/strategic-thinking-for-product-managers/",
      },
    },
    {
      competency: "Business Outcome Ownership",
      skillArea: "Aligning Features with Business Goals",
      task: "Articulate Project Goals Clearly",
      description: "Communicate the intended outcomes and benefits of projects.",
      resources: {
        books: "Start with Why, Chapter 2",
        articleTitle: "Communicating the Why",
        articleLink: "https://www.pmi.org/learning/library/importance-project-goals-objectives-2009",
        courseTitle: "Udemy: Effective Communication for Product Managers",
        courseSection: "Section 1: Defining Goals",
        courseLink: "https://www.udemy.com/course/effective-communication-product-managers/",
      },
    },
    {
      competency: "Business Outcome Ownership",
      skillArea: "Aligning Features with Business Goals",
      task: "Adjust Priorities Based on Business Changes",
      description: "Reassess features when business goals or market conditions change.",
      resources: {
        books: "The Lean Product Playbook, Chapter 8",
        articleTitle: "Agile Prioritization Techniques",
        articleLink: "https://www.scrum.org/resources/blog/prioritizing-product-backlog-agile-way",
        courseTitle: "Udemy: Agile Product Owner Role: Foundations",
        courseSection: "Section 6: Adjusting Priorities",
        courseLink: "https://www.udemy.com/course/agile-product-owner-role-foundations/",
      },
    },
    // Business Outcome Ownership - Measuring and Communicating Outcomes
    {
      competency: "Business Outcome Ownership",
      skillArea: "Measuring and Communicating Outcomes",
      task: "Conduct Post-Launch Analysis",
      description: "Measure the impact of features against predefined goals.",
      resources: {
        books: "Lean Analytics, Chapter 5",
        articleTitle: "Analyzing Results",
        articleLink: "https://www.productplan.com/post-launch-product-evaluation/",
        courseTitle: "Udemy: Data Analytics for Business",
        courseSection: "Section 4: Post-Launch Analysis",
        courseLink: "https://www.udemy.com/course/data-analytics-for-business/",
      },
    },
    {
      competency: "Business Outcome Ownership",
      skillArea: "Measuring and Communicating Outcomes",
      task: "Communicate Results to Stakeholders",
      description: "Share outcomes and insights with relevant team members and management.",
      resources: {
        books: "Radical Candor, Chapter 7",
        articleTitle: "Effective Communication of Results",
        articleLink: "https://www.mindtools.com/pages/article/newTMC_83.htm",
        courseTitle: "Udemy: Effective Communication for Product Managers",
        courseSection: "Section 3: Reporting Results",
        courseLink: "https://www.udemy.com/course/effective-communication-product-managers/",
      },
    },
    {
      competency: "Business Outcome Ownership",
      skillArea: "Measuring and Communicating Outcomes",
      task: "Recommend Future Actions",
      description: "Propose next steps or iterations based on outcome analysis.",
      resources: {
        books: "Lean Analytics, Chapter 7",
        articleTitle: "Using Analytics for Actionable Insights",
        articleLink: "https://www.intercom.com/blog/actionable-insights/",
        courseTitle: "Udemy: Data Analytics for Business",
        courseSection: "Section 5: Actionable Recommendations",
        courseLink: "https://www.udemy.com/course/data-analytics-for-business/",
      },
    },
    // Product Vision and Roadmapping - Understanding and Contributing to Vision
    {
      competency: "Product Vision and Roadmapping",
      skillArea: "Understanding and Contributing to Vision",
      task: "Understand the Product Vision",
      description: "Familiarize yourself with the long-term goals and direction of the product.",
      resources: {
        books: "Inspired, Chapter 1",
        articleTitle: "Defining Product Vision",
        articleLink: "https://svpg.com/product-vision/",
        courseTitle: "Udemy: Product Management: Building a Product Strategy",
        courseSection: "Section 1: Product Vision",
        courseLink: "https://www.udemy.com/course/product-management-strategy/",
      },
    },
    {
      competency: "Product Vision and Roadmapping",
      skillArea: "Understanding and Contributing to Vision",
      task: "Assist in Roadmap Development",
      description: "Support the creation and maintenance of the product roadmap.",
      resources: {
        books: "Product Roadmaps Relaunched, Chapter 2",
        articleTitle: "Building Effective Roadmaps",
        articleLink: "https://www.productplan.com/guide-to-product-roadmaps/",
        courseTitle: "Udemy: Product Roadmapping Fundamentals",
        courseSection: "Section 2: Building Roadmaps",
        courseLink: "https://www.udemy.com/course/product-roadmapping-fundamentals/",
      },
    },
    {
      competency: "Product Vision and Roadmapping",
      skillArea: "Understanding and Contributing to Vision",
      task: "Communicate Vision to Team",
      description: "Ensure that the team understands and is aligned with the product vision.",
      resources: {
        books: "Inspired, Chapter 3",
        articleTitle: "Communicating Product Vision",
        articleLink: "https://www.productplan.com/product-vision/",
        courseTitle: "Udemy: Product Management: Building a Product Strategy",
        courseSection: "Section 2: Communicating Vision",
        courseLink: "https://www.udemy.com/course/product-management-strategy/",
      },
    },
    // Product Vision and Roadmapping - Communicating and Adjusting Roadmaps
    {
      competency: "Product Vision and Roadmapping",
      skillArea: "Communicating and Adjusting Roadmaps",
      task: "Communicate Roadmap Updates",
      description: "Keep the team informed about changes in priorities or timelines.",
      resources: {
        books: "Product Leadership, Chapter 5",
        articleTitle: "Roadmap Communication",
        articleLink: "https://www.productplan.com/effective-roadmap-communication/",
        courseTitle: "Udemy: Product Roadmapping Fundamentals",
        courseSection: "Section 3: Communicating the Roadmap",
        courseLink: "https://www.udemy.com/course/product-roadmapping-fundamentals/",
      },
    },
    {
      competency: "Product Vision and Roadmapping",
      skillArea: "Communicating and Adjusting Roadmaps",
      task: "Identify Dependencies and Priorities",
      description: "Help determine the sequence of feature development based on value and feasibility.",
      resources: {
        books: "Essential Scrum, Chapter 6",
        articleTitle: "Managing Dependencies",
        articleLink: "https://www.scrum.org/resources/blog/prioritizing-product-backlog-agile-way",
        courseTitle: "Udemy: Agile Product Owner Role: Foundations",
        courseSection: "Section 4: Backlog Prioritization",
        courseLink: "https://www.udemy.com/course/agile-product-owner-role-foundations/",
      },
    },
    {
      competency: "Product Vision and Roadmapping",
      skillArea: "Communicating and Adjusting Roadmaps",
      task: "Collect Feedback on Roadmaps",
      description: "Gather input from stakeholders to ensure the roadmap meets business and user needs.",
      resources: {
        books: "Product Roadmaps Relaunched, Chapter 4",
        articleTitle: "Engaging Stakeholders with Roadmaps",
        articleLink: "https://www.romanpichler.com/blog/engaging-stakeholders-with-product-roadmaps/",
        courseTitle: "Udemy: Product Roadmapping Fundamentals",
        courseSection: "Section 4: Gathering Feedback",
        courseLink: "https://www.udemy.com/course/product-roadmapping-fundamentals/",
      },
    },
    // Strategic Impact - Understanding and Aligning with Strategy
    {
      competency: "Strategic Impact",
      skillArea: "Understanding and Aligning with Strategy",
      task: "Align Work with Strategic Objectives",
      description: "Ensure your tasks contribute to the broader company strategy.",
      resources: {
        books: "Good Strategy Bad Strategy, Chapter 2",
        articleTitle: "Understanding Strategic Objectives",
        articleLink: "https://www.mindtools.com/pages/article/newSTR_56.htm",
        courseTitle: "Udemy: Strategic Thinking for Product Managers",
        courseSection: "Section 1: Understanding Strategy",
        courseLink: "https://www.udemy.com/course/strategic-thinking-for-product-managers/",
      },
    },
    {
      competency: "Strategic Impact",
      skillArea: "Understanding and Aligning with Strategy",
      task: "Communicate Strategic Alignment",
      description: "Explain how your work supports the company's long-term objectives.",
      resources: {
        books: "Start with Why, Chapter 4",
        articleTitle: "Connecting Work to Vision",
        articleLink: "https://hbr.org/2018/07/why-do-we-undervalue-competent-management",
        courseTitle: "Udemy: Strategic Communication for Leaders",
        courseSection: "Section 2: Aligning Messages",
        courseLink: "https://www.udemy.com/course/strategic-communication-for-leaders/",
      },
    },
    {
      competency: "Strategic Impact",
      skillArea: "Understanding and Aligning with Strategy",
      task: "Identify Strategic Opportunities",
      description: "Propose new opportunities that align with the company's strategic direction.",
      resources: {
        books: "Blue Ocean Strategy, Chapter 2",
        articleTitle: "Identifying Strategic Opportunities",
        articleLink: "https://hbr.org/2012/02/finding-your-companys-second-act",
        courseTitle: "Udemy: Strategic Thinking for Product Managers",
        courseSection: "Section 4: Identifying Opportunities",
        courseLink: "https://www.udemy.com/course/strategic-thinking-for-product-managers/",
      },
    },
    // Strategic Impact - Staying Informed and Contributing Ideas
    {
      competency: "Strategic Impact",
      skillArea: "Staying Informed and Contributing Ideas",
      task: "Stay Informed About Business Strategy",
      description: "Make an effort to understand the company's strategic plans and initiatives.",
      resources: {
        books: "Playing to Win, Chapter 1",
        articleTitle: "Understanding Business Strategy",
        articleLink: "https://hbr.org/topic/strategy",
        courseTitle: "Udemy: Business Strategy Execution: Agile Organization Design",
        courseSection: "Section 1: Business Strategy Overview",
        courseLink: "https://www.udemy.com/course/business-strategy-execution/",
      },
    },
    {
      competency: "Strategic Impact",
      skillArea: "Staying Informed and Contributing Ideas",
      task: "Contribute Ideas to Strategy Discussions",
      description: "Share insights or suggestions that could influence strategic direction.",
      resources: {
        books: "Blue Ocean Strategy, Chapter 5",
        articleTitle: "Innovative Strategic Thinking",
        articleLink: "https://www.blueoceanstrategy.com/tools/blue-ocean-ideas/",
        courseTitle: "Udemy: Strategic Thinking for Product Managers",
        courseSection: "Section 3: Contributing Ideas",
        courseLink: "https://www.udemy.com/course/strategic-thinking-for-product-managers/",
      },
    },
    {
      competency: "Strategic Impact",
      skillArea: "Staying Informed and Contributing Ideas",
      task: "Monitor Industry Trends",
      description: "Keep abreast of industry developments to inform product strategy and innovation.",
      resources: {
        books: "The Innovator's Dilemma, Chapter 1",
        articleTitle: "Monitoring Industry Trends",
        articleLink: "https://www.mckinsey.com/business-functions/strategy-and-corporate-finance/our-insights/trends",
        courseTitle: "Udemy: Market Research Fundamentals",
        courseSection: "Section 2: Industry Analysis",
        courseLink: "https://www.udemy.com/course/market-research-fundamentals/",
      },
    },
    // Strategic Impact - Market Analysis and Competitive Intelligence
    {
      competency: "Strategic Impact",
      skillArea: "Market Analysis and Competitive Intelligence",
      task: "Conduct Market Research",
      description: "Analyze market trends, customer needs, and competitor strategies to inform product decisions.",
      resources: {
        books: "Competitive Strategy, Chapter 2",
        articleTitle: "Market Analysis Techniques",
        articleLink: "https://www.businessnewsdaily.com/15754-conduct-market-analysis.html",
        courseTitle: "Udemy: Market Research Fundamentals",
        courseSection: "Section 1: Market Research Basics",
        courseLink: "https://www.udemy.com/course/market-research-fundamentals/",
      },
    },
    {
      competency: "Strategic Impact",
      skillArea: "Market Analysis and Competitive Intelligence",
      task: "Develop Competitive Positioning",
      description: "Define how the product differentiates from competitors and communicate this positioning internally and externally.",
      resources: {
        books: "Positioning: The Battle for Your Mind, Chapter 3",
        articleTitle: "Competitive Positioning Strategies",
        articleLink: "https://www.mindtools.com/pages/article/newSTR_80.htm",
        courseTitle: "Udemy: Product Positioning",
        courseSection: "Section 2: Competitive Positioning",
        courseLink: "https://www.udemy.com/course/product-positioning/",
      },
    },
    {
      competency: "Strategic Impact",
      skillArea: "Market Analysis and Competitive Intelligence",
      task: "Monitor Competitor Activities",
      description: "Keep track of competitors' offerings and market moves to inform product decisions.",
      resources: {
        books: "Competitive Strategy, Chapter 5",
        articleTitle: "Competitive Intelligence Gathering",
        articleLink: "https://www.mindtools.com/pages/article/newTMC_05.htm",
        courseTitle: "Udemy: Competitive Analysis and Market Intelligence",
        courseSection: "Section 3: Monitoring Competitors",
        courseLink: "https://www.udemy.com/course/competitive-analysis-market-intelligence/",
      },
    },
    // Stakeholder Management - Identifying and Engaging Stakeholders
    {
      competency: "Stakeholder Management",
      skillArea: "Identifying and Engaging Stakeholders",
      task: "Identify Key Stakeholders",
      description: "Recognize all teams and individuals affected by your projects.",
      resources: {
        books: "Project Stakeholder Management, Chapter 1",
        articleTitle: "Identifying Stakeholders",
        articleLink: "https://www.mindtools.com/pages/article/newPPM_07.htm",
        courseTitle: "Udemy: Stakeholder Management Skills",
        courseSection: "Section 1: Identifying Stakeholders",
        courseLink: "https://www.udemy.com/course/stakeholder-management-skills/",
      },
    },
    {
      competency: "Stakeholder Management",
      skillArea: "Identifying and Engaging Stakeholders",
      task: "Gather Stakeholder Requirements",
      description: "Collect input and expectations from stakeholders.",
      resources: {
        books: "Business Analysis Techniques, Chapter 2",
        articleTitle: "Eliciting Requirements",
        articleLink: "https://www.batimes.com/articles/the-importance-of-requirements-gathering.html",
        courseTitle: "Udemy: Business Analysis Fundamentals",
        courseSection: "Section 3: Eliciting Requirements",
        courseLink: "https://www.udemy.com/course/business-analysis-fundamentals/",
      },
    },
    {
      competency: "Stakeholder Management",
      skillArea: "Identifying and Engaging Stakeholders",
      task: "Maintain Stakeholder Relationships",
      description: "Regularly interact with stakeholders to build trust and ensure ongoing engagement.",
      resources: {
        books: "Project Stakeholder Management, Chapter 3",
        articleTitle: "Building Stakeholder Relationships",
        articleLink: "https://www.pmi.org/learning/library/building-effective-stakeholder-relationships-8766",
        courseTitle: "Udemy: Stakeholder Management Skills",
        courseSection: "Section 3: Building Relationships",
        courseLink: "https://www.udemy.com/course/stakeholder-management-skills/",
      },
    },
    // Stakeholder Management - Managing Expectations and Collaboration
    {
      competency: "Stakeholder Management",
      skillArea: "Managing Expectations and Collaboration",
      task: "Manage Stakeholder Expectations",
      description: "Communicate clearly about what will be delivered and when.",
      resources: {
        books: "Crucial Conversations, Chapter 4",
        articleTitle: "Managing Expectations",
        articleLink: "https://www.projecttimes.com/articles/7-tips-for-managing-stakeholder-expectations.html",
        courseTitle: "Udemy: Stakeholder Management Skills",
        courseSection: "Section 2: Managing Expectations",
        courseLink: "https://www.udemy.com/course/stakeholder-management-skills/",
      },
    },
    {
      competency: "Stakeholder Management",
      skillArea: "Managing Expectations and Collaboration",
      task: "Collaborate to Find Solutions",
      description: "Work with stakeholders to address concerns and find mutually beneficial outcomes.",
      resources: {
        books: "Team of Teams, Chapter 4",
        articleTitle: "Collaborative Problem Solving",
        articleLink: "https://hbr.org/2016/01/collaboration-doesnt-just-happen-by-chance",
        courseTitle: "Udemy: Collaborative Leadership Skills",
        courseSection: "Section 3: Solving Problems Together",
        courseLink: "https://www.udemy.com/course/collaborative-leadership-skills/",
      },
    },
    {
      competency: "Stakeholder Management",
      skillArea: "Managing Expectations and Collaboration",
      task: "Facilitate Stakeholder Meetings",
      description: "Organize and lead meetings to align stakeholders on objectives and progress.",
      resources: {
        books: "Facilitation Skills for Team Leaders, Chapter 4",
        articleTitle: "Effective Stakeholder Meetings",
        articleLink: "https://www.projectmanagement.com/articles/335864/6-Steps-for-Effective-Stakeholder-Meetings",
        courseTitle: "Udemy: Effective Stakeholder Management",
        courseSection: "Section 4: Facilitating Meetings",
        courseLink: "https://www.udemy.com/course/effective-stakeholder-management/",
      },
    },
    // Stakeholder Management - Managing External Providers
    {
      competency: "Stakeholder Management",
      skillArea: "Managing External Providers",
      task: "Identify and Evaluate External Providers",
      description: "Assess potential external providers to determine their suitability for collaboration.",
      resources: {
        books: "Vendor Management, Chapter 2",
        articleTitle: "Best Practices in Vendor Selection",
        articleLink: "https://www.projectmanagement.com/articles/284699/Best-Practices-in-Vendor-Selection",
        courseTitle: "Udemy: Vendor Management Basics",
        courseSection: "Section 1: Evaluating Vendors",
        courseLink: "https://www.udemy.com/course/vendor-management-basics/",
      },
    },
    {
      competency: "Stakeholder Management",
      skillArea: "Managing External Providers",
      task: "Manage Relationships with External Providers",
      description: "Build and maintain effective working relationships with external providers.",
      resources: {
        books: "Managing Supplier Relationships, Chapter 3",
        articleTitle: "Communication with Vendors",
        articleLink: "https://www.forbes.com/sites/forbesbusinessdevelopmentcouncil/2019/05/06/eight-ways-to-improve-vendor-relationship-management/",
        courseTitle: "Udemy: Vendor Management Basics",
        courseSection: "Section 2: Managing Vendor Relationships",
        courseLink: "https://www.udemy.com/course/vendor-management-basics/",
      },
    },
    {
      competency: "Stakeholder Management",
      skillArea: "Managing External Providers",
      task: "Negotiate Contracts and Agreements",
      description: "Participate in contract negotiations to ensure terms meet project and company needs.",
      resources: {
        books: "Negotiation Genius, Chapter 6",
        articleTitle: "Effective Contract Negotiation",
        articleLink: "https://www.harvard.edu/about-harvard/procurement/contracts/negotiating-contracts/",
        courseTitle: "Udemy: Negotiation Skills for Business",
        courseSection: "Section 2: Contract Negotiation",
        courseLink: "https://www.udemy.com/course/negotiation-skills-for-business/",
      },
    },
    // Team Leadership - Building Team Trust and Collaboration
    {
      competency: "Team Leadership",
      skillArea: "Building Team Trust and Collaboration",
      task: "Provide Peer Support",
      description: "Offer assistance and share knowledge with fellow team members.",
      resources: {
        books: "Leaders Eat Last, Chapter 5",
        articleTitle: "Supporting Your Team",
        articleLink: "https://www.mindtools.com/pages/article/newTMM_57.htm",
        courseTitle: "Udemy: Team Leadership & Management",
        courseSection: "Section 2: Supporting Team Members",
        courseLink: "https://www.udemy.com/course/team-leadership-management/",
      },
    },
    {
      competency: "Team Leadership",
      skillArea: "Building Team Trust and Collaboration",
      task: "Encourage Team Collaboration",
      description: "Foster an environment where team members feel comfortable sharing ideas.",
      resources: {
        books: "The Five Dysfunctions of a Team, Chapter 2",
        articleTitle: "Building Collaborative Teams",
        articleLink: "https://www.atlassian.com/team-playbook/plays/open-team",
        courseTitle: "Udemy: Team Leadership & Management",
        courseSection: "Section 3: Fostering Collaboration",
        courseLink: "https://www.udemy.com/course/team-leadership-management/",
      },
    },
    {
      competency: "Team Leadership",
      skillArea: "Building Team Trust and Collaboration",
      task: "Promote a Positive Team Culture",
      description: "Foster a supportive and inclusive environment that motivates team members.",
      resources: {
        books: "Leaders Eat Last, Chapter 7",
        articleTitle: "Building a Positive Team Culture",
        articleLink: "https://www.mindtools.com/pages/article/building-positive-team.htm",
        courseTitle: "Udemy: Team Leadership & Management",
        courseSection: "Section 4: Team Culture",
        courseLink: "https://www.udemy.com/course/team-leadership-management/",
      },
    },
    // Team Leadership - Leading by Example and Mentorship
    {
      competency: "Team Leadership",
      skillArea: "Leading by Example and Mentorship",
      task: "Demonstrate Reliability",
      description: "Consistently meet commitments, building trust within the team.",
      resources: {
        books: "The Speed of Trust, Chapter 3",
        articleTitle: "Building Trust Through Reliability",
        articleLink: "https://www.mindtools.com/pages/article/building-trust-team.htm",
        courseTitle: "Udemy: Building Trust in Leadership",
        courseSection: "Section 1: Demonstrating Reliability",
        courseLink: "https://www.udemy.com/course/building-trust-in-leadership/",
      },
    },
    {
      competency: "Team Leadership",
      skillArea: "Leading by Example and Mentorship",
      task: "Participate in Mentorship Opportunities",
      description: "Seek mentorship from senior team members and mentor newer colleagues when possible.",
      resources: {
        books: "Mentoring 101, Chapter 1",
        articleTitle: "The Value of Mentorship",
        articleLink: "https://www.forbes.com/sites/forbescoachescouncil/2018/09/12/11-ways-to-be-an-exceptional-mentor/",
        courseTitle: "Udemy: Coaching and Mentoring for Leadership Success",
        courseSection: "Section 2: Being a Mentee/Mentor",
        courseLink: "https://www.udemy.com/course/coaching-and-mentoring-for-leadership-success/",
      },
    },
    {
      competency: "Team Leadership",
      skillArea: "Leading by Example and Mentorship",
      task: "Develop Leadership Skills",
      description: "Continuously work on personal leadership abilities to better guide the team.",
      resources: {
        books: "The 21 Irrefutable Laws of Leadership, Chapter 1",
        articleTitle: "Developing Leadership Skills",
        articleLink: "https://www.mindtools.com/pages/main/newLDR.htm",
        courseTitle: "Udemy: Leadership Mastery",
        courseSection: "Section 2: Developing Leadership Skills",
        courseLink: "https://www.udemy.com/course/leadership-mastery/",
      },
    },
    // Managing Up - Effective Upward Communication
    {
      competency: "Managing Up",
      skillArea: "Effective Upward Communication",
      task: "Communicate Progress Regularly",
      description: "Provide your manager with updates on project status and any issues encountered.",
      resources: {
        books: "Managing Up, Chapter 3",
        articleTitle: "Effective Upward Communication",
        articleLink: "https://www.themuse.com/advice/how-to-talk-to-your-boss-about-career-goals",
        courseTitle: "Udemy: Managing Up: Build Effective Relationships with Upper Management",
        courseSection: "Section 1: Regular Updates",
        courseLink: "https://www.udemy.com/course/managing-up/",
      },
    },
    {
      competency: "Managing Up",
      skillArea: "Effective Upward Communication",
      task: "Seek Clarification When Needed",
      description: "Ask questions to ensure understanding of expectations and objectives.",
      resources: {
        books: "Crucial Conversations, Chapter 5",
        articleTitle: "Clarifying Expectations",
        articleLink: "https://www.mindtools.com/pages/article/newCS_96.htm",
        courseTitle: "Udemy: Effective Communication Skills",
        courseSection: "Section 2: Asking Questions",
        courseLink: "https://www.udemy.com/course/effective-communication-skills/",
      },
    },
    {
      competency: "Managing Up",
      skillArea: "Effective Upward Communication",
      task: "Propose Solutions to Challenges",
      description: "When presenting issues to management, also offer potential solutions.",
      resources: {
        books: "Managing Up, Chapter 5",
        articleTitle: "Proactive Problem Solving",
        articleLink: "https://www.themuse.com/advice/how-to-manage-up-at-work",
        courseTitle: "Udemy: Managing Up",
        courseSection: "Section 2: Proposing Solutions",
        courseLink: "https://www.udemy.com/course/managing-up/",
      },
    },
    // Managing Up - Proactive Feedback and Development
    {
      competency: "Managing Up",
      skillArea: "Proactive Feedback and Development",
      task: "Request Feedback for Improvement",
      description: "Actively seek input on your performance to aid professional growth.",
      resources: {
        books: "Thanks for the Feedback, Chapter 2",
        articleTitle: "Receiving Feedback Well",
        articleLink: "https://hbr.org/2019/03/how-to-ask-for-feedback-that-will-actually-help-you",
        courseTitle: "Udemy: Receiving and Implementing Feedback",
        courseSection: "Section 1: Seeking Feedback",
        courseLink: "https://www.udemy.com/course/receiving-and-implementing-feedback/",
      },
    },
    {
      competency: "Managing Up",
      skillArea: "Proactive Feedback and Development",
      task: "Align on Career Development Goals",
      description: "Discuss your career aspirations and seek guidance on how to achieve them.",
      resources: {
        books: "The First 90 Days, Chapter 5",
        articleTitle: "Planning Your Career Path",
        articleLink: "https://www.mindtools.com/pages/article/newCDV_71.htm",
        courseTitle: "Udemy: Career Development Masterclass",
        courseSection: "Section 2: Setting Career Goals",
        courseLink: "https://www.udemy.com/course/career-development-masterclass/",
      },
    },
    {
      competency: "Managing Up",
      skillArea: "Proactive Feedback and Development",
      task: "Implement Feedback Received",
      description: "Act on the feedback provided to improve performance and demonstrate growth.",
      resources: {
        books: "Thanks for the Feedback, Chapter 4",
        articleTitle: "Acting on Feedback",
        articleLink: "https://hbr.org/2014/10/how-to-actually-apply-feedback",
        courseTitle: "Udemy: Receiving and Implementing Feedback",
        courseSection: "Section 2: Implementing Feedback",
        courseLink: "https://www.udemy.com/course/receiving-and-implementing-feedback/",
      },
    },
  ],
};

// Global variables
let userName = "";
let userEmail = "";
let userResponses = [];

// Elements
const landingPage = document.getElementById("landing-page");
const assessmentPage = document.getElementById("assessment-page");
const resultsPage = document.getElementById("results-page");

const startButton = document.getElementById("start-assessment");
const finishButton = document.getElementById("finish-assessment");
const sendEmailButton = document.getElementById("send-email");

const assessmentForm = document.getElementById("assessment-form");
const radarChartCanvas = document.getElementById("radarChart");
const resourcesTableBody = document.querySelector("#resources-table tbody");

// Event Listeners
startButton.addEventListener("click", startAssessment);
finishButton.addEventListener("click", finishAssessment);
sendEmailButton.addEventListener("click", sendEmailReport);

// Functions

function startAssessment() {
  userName = document.getElementById("name").value.trim();
  userEmail = document.getElementById("email").value.trim();

  if (userName === "" || userEmail === "") {
    alert("Please enter your name and email.");
    return;
  }

  landingPage.style.display = "none";
  assessmentPage.style.display = "block";

  renderAssessmentForm();
}

function renderAssessmentForm() {
  assessmentForm.innerHTML = "";

  assessmentData.tasks.forEach((task, index) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("form-group");

    const taskLabel = document.createElement("label");
    taskLabel.textContent = `${task.task}: ${task.description}`;

    const select = document.createElement("select");
    select.name = `task-${index}`;
    select.required = true;

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Select a score (0-5)";
    select.appendChild(defaultOption);

    for (let i = 0; i <= 5; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = i;
      select.appendChild(option);
    }

    taskDiv.appendChild(taskLabel);
    taskDiv.appendChild(select);
    assessmentForm.appendChild(taskDiv);
  });
}

function finishAssessment() {
  const formElements = assessmentForm.elements;
  userResponses = [];

  for (let i = 0; i < formElements.length; i++) {
    const select = formElements[i];
    const value = select.value;

    if (value === "") {
      alert("Please answer all the tasks.");
      return;
    }

    userResponses.push({
      competency: assessmentData.tasks[i].competency,
      score: parseInt(value),
      resources: assessmentData.tasks[i].resources,
    });
  }

  assessmentPage.style.display = "none";
  resultsPage.style.display = "block";

  displayResults();
}

function displayResults() {
  const competencyScores = {};

  // Calculate average scores per competency
  assessmentData.competencies.forEach((competency) => {
    const responses = userResponses.filter((resp) => resp.competency === competency);
    const averageScore =
      responses.reduce((sum, curr) => sum + curr.score, 0) / responses.length || 0;
    competencyScores[competency] = averageScore;
  });

  // Prepare data for the radar chart
  const chartLabels = assessmentData.competencies;
  const chartData = chartLabels.map((comp) => competencyScores[comp]);

  // Create the radar chart
  new Chart(radarChartCanvas, {
    type: "radar",
    data: {
      labels: chartLabels,
      datasets: [
        {
          label: "Competency Scores",
          data: chartData,
          backgroundColor: "rgba(0, 82, 155, 0.2)",
          borderColor: "#00529B",
          borderWidth: 2,
          pointBackgroundColor: "#00529B",
        },
      ],
    },
    options: {
      scales: {
        r: {
          min: 0,
          max: 5,
          ticks: {
            stepSize: 1,
          },
        },
      },
    },
  });

  // Get lowest scoring tasks per competency
  const lowestScores = {};

  assessmentData.competencies.forEach((competency) => {
    const responses = userResponses.filter((resp) => resp.competency === competency);
    const minScore = Math.min(...responses.map((resp) => resp.score));
    const lowestTasks = responses.filter((resp) => resp.score === minScore);
    lowestScores[competency] = lowestTasks;
  });

  // Prepare learning resources
  const resources = [];

  for (const competency in lowestScores) {
    if (lowestScores.hasOwnProperty(competency)) {
      const tasks = lowestScores[competency];
      tasks.forEach((task) => {
        resources.push({
          competency: task.competency,
          ...task.resources,
        });
      });
    }
  }

  // Render resources table
  resourcesTableBody.innerHTML = "";

  resources.forEach((res) => {
    const row = document.createElement("tr");

    const competencyCell = document.createElement("td");
    competencyCell.textContent = res.competency;
    row.appendChild(competencyCell);

    const booksCell = document.createElement("td");
    booksCell.textContent = res.books;
    row.appendChild(booksCell);

    const articleTitleCell = document.createElement("td");
    articleTitleCell.textContent = res.articleTitle;
    row.appendChild(articleTitleCell);

    const articleLinkCell = document.createElement("td");
    const articleLink = document.createElement("a");
    articleLink.href = res.articleLink;
    articleLink.target = "_blank";
    articleLink.textContent = "Read Article";
    articleLinkCell.appendChild(articleLink);
    row.appendChild(articleLinkCell);

    const courseTitleCell = document.createElement("td");
    courseTitleCell.textContent = res.courseTitle;
    row.appendChild(courseTitleCell);

    const courseSectionCell = document.createElement("td");
    courseSectionCell.textContent = res.courseSection;
    row.appendChild(courseSectionCell);

    const courseLinkCell = document.createElement("td");
    const courseLink = document.createElement("a");
    courseLink.href = res.courseLink;
    courseLink.target = "_blank";
    courseLink.textContent = "View Course";
    courseLinkCell.appendChild(courseLink);
    row.appendChild(courseLinkCell);

    resourcesTableBody.appendChild(row);
  });
}

function sendEmailReport() {
  const subject = encodeURIComponent("Your Product Skills Assessment Report");
  const body = encodeURIComponent(`Hello ${userName},

Please find your assessment report attached or view it on the screen.

Best regards,
Product Skills Assessment Team`);

  // Since we can't send emails directly from client-side JavaScript without a server or email service,
  // we'll use a mailto link to open the user's email client.
  window.location.href = `mailto:${userEmail}?subject=${subject}&body=${body}`;
}
