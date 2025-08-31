const skills = [
  {
    title: "Javascript",
    competency: 4,
    category: ["Web Development", "Languages", "Javascript"],
  },
  {
    title: "Node.JS",
    competency: 5,
    category: ["Web Development", "Javascript"],
  },
  {
    title: "React",
    competency: 4,
    category: ["Web Development", "Javascript"],
  },
  {
    title: "Next.JS",
    competency: 4,
    category: ["Web Development", "Javascript"],
  },
  {
    title: "Bash",
    competency: 3,
    category: ["Tools", "Languages"],
  },
  {
    title: "Amazon Web Services",
    competency: 4,
    category: ["Web Development", "Tools"],
  },
  {
    title: "Heroku",
    competency: 2,
    category: ["Web Development", "Tools"],
  },
  {
    title: "MongoDB",
    competency: 4,
    category: ["Web Development", "Databases"],
  },
  {
    title: "ElasticSearch",
    competency: 2,
    category: ["Web Development", "Databases"],
  },
  {
    title: "PostgreSQL/SQLite3/SQL/Redshift",
    competency: 2,
    category: ["Web Development", "Databases", "Languages"],
  },
  {
    title: "Redis",
    competency: 3,
    category: ["Web Development", "Databases"],
  },
  {
    title: "Express.JS",
    competency: 2,
    category: ["Web Development", "Javascript"],
  },

  {
    title: "Git/Mercurial",
    competency: 3,
    category: ["Tools"],
  },
  {
    title: "Kubernetes",
    competency: 2,
    category: ["Tools"],
  },
  {
    title: "Google Cloud Compute",
    competency: 2,
    category: ["Tools", "Web Development"],
  },
  {
    title: "AWS",
    competency: 3,
    category: ["Tools", "Web Development"],
  },
  {
    title: "Docker",
    competency: 3,
    category: ["Tools"],
  },
  {
    title: "AWS Lambda",
    competency: 3,
    category: ["Tools", "Web Development"],
  },
  {
    title: "Typescript",
    competency: 3,
    category: ["Web Development", "Languages", "Javascript"],
  },
  {
    title: "HTML + SASS/SCSS/CSS",
    competency: 3,
    category: ["Web Development", "Languages"],
  },
  {
    title: "Python",
    competency: 4,
    category: ["Languages", "Python"],
  },
  {
    title: "Machine Learing",
    competency: 3,
    category: ["Python"],
  },
  {
    title: "Data Analysis",
    competency: 3,
    category: ["Python"],
  },
  {
    title: "Solidity",
    competency: 3,
    category: ["Languages"],
  },
  {
    title: "Java",
    competency: 3,
    category: ["Languages"],
  },
  {
    title: "C++",
    competency: 1,
    category: ["Languages"],
  },
  {
    title: "Golang",
    competency: 2,
    category: ["Languages"],
  },
  {
    title: "kotlin",
    competency: 3,
    category: ["Languages"],
  },
  {
    title: "Data Visualization",
    competency: 4,
    category: [, "Javascript"],
  },
  {
    title: "GraphQL",
    competency: 2,
    category: ["Web Development", "Databases"],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  "#6968b3",
  "#0077cc",
  "#40494e",
  "#515dd4",
  "#e47272",
  "#cc7b94",
  "#3896e2",
  "#c3423f",
  "#d75858",
  "#747fff",
  "#64cb7b",
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
