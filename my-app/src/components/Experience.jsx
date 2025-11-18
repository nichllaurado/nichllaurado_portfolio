
const experiences = [
  {
    role: "Software Engineering Intern",
    company: "Company Name",
    time: "Summer 2025",
    bullets: [
      "Built a full-stack feature using React and Node.js used by X+ users.",
      "Improved API response time by ~Y% through query optimization.",
      "Collaborated with designers and PMs to ship features on schedule.",
    ],
  },
  {
    role: "Research Assistant",
    company: "JHU Lab Name",
    time: "2024 – Present",
    bullets: [
      "Implemented data processing pipelines in Python for robotics experiments.",
      "Analyzed and visualized experimental results using NumPy and Matplotlib.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      <div className="card-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="card">
            <h3>{exp.role}</h3>
            <p className="card-subtitle">
              {exp.company} · {exp.time}
            </p>
            <ul>
              {exp.bullets.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;