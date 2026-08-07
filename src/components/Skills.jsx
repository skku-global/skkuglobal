import './Skills.css'

const groups = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'React Native', 'Vite', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'REST APIs', 'JWT', 'bcrypt', 'Email OTP'],
  },
  {
    title: 'Data',
    skills: ['MongoDB', 'MongoDB Atlas', 'Prisma', 'Schema design'],
  },
  {
    title: 'Tooling & Deploy',
    skills: ['Git', 'GitHub', 'Vercel', 'ESLint', 'Resend', 'face-api.js'],
  },
]

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="shell">
        <div className="section-header animate">
          <div className="section-label">STACK</div>
          <h2>What I build with</h2>
          <p>
            The tools behind the products above — chosen for shipping speed and
            security, not novelty.
          </p>
        </div>

        <div className="skills-grid">
          {groups.map((group, i) => (
            <div
              className={`skill-group animate animate-delay-${i + 1}`}
              key={group.title}
            >
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
