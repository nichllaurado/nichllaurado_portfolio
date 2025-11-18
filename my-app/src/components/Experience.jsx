
const experiences = [
  {
    role: "Lead Programmer",
    company: "CareCheck Health",
    time: "Oct 2025 - Present",
    bullets: [
      "Developed an AI medical bill analysis model with a team of fellow classmates with python and OpenAI API.",
      "Built frontend components with Javascript and the React framework to deliver a responsive experience.",
      "Maintained databases for patient and bill error data with Azure SQL.",
    ],
  },
  {
    role: "Research Assistant",
    company: "JHU Lab Name",
    time: "March 2023 - December 2024",
    bullets: [
      "Programmed robotic models to replicate movement dynamics with 90% accuracy, applying quantitative analysis and algorithmic optimization.",
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