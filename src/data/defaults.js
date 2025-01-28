const defaultEmployments = [
    {
        id: crypto.randomUUID(),
        role: "Barista",
        employer: "San Gennaro",
        startDate: "Nov 2021",
        endDate: "Present",
        city: "Montreal",
        description: "Serve coffees to clients and providing excellent service."
    },
    {
        id: crypto.randomUUID(),
        role: "Bag boy",
        employer: "IGA",
        startDate: "Nov 2019",
        endDate: "Aug 2020",
        city: "Montreal",
        description: "Put the groceries in the bag"
    },
];

const defaultSkills = [
    {
        id: crypto.randomUUID(),
        skill: "Punctual"
    },
    {
        id: crypto.randomUUID(),
        skill: "Quick learner"
    },
    {
        id: crypto.randomUUID(),
        skill: "Team oriented"
    },
    {
        id: crypto.randomUUID(),
        skill: "Computer literate"
    },
    {
        id: crypto.randomUUID(),
        skill: "Adaptable"
    }
];

const defaultSchools = [
    {
        id: crypto.randomUUID(),
        schoolName: "Concordia University",
        degree: "Bachelor of Arts in Economics",
        startDate: "Sep 2021",
        endDate: "July 2025"
    },
    {
        id: crypto.randomUUID(),
        schoolName: "Concordia University",
        degree: "Bachelor of Arts in Economics",
        startDate: "Sep 2021",
        endDate: "July 2025"
    },
]

const defaultLanguages = [
    {
        id: crypto.randomUUID(),
        language: "English"
    },
    {
        id: crypto.randomUUID(),
        language: "French"
    },
    {
        id: crypto.randomUUID(),
        language: "Spanish"
    },
    {
        id: crypto.randomUUID(),
        language: "Italian"
    }
]

export { defaultEmployments, defaultSkills, defaultSchools, defaultLanguages};