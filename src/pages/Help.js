const faqs = [
  { q: 'How do I reset my password?', a: 'Use the reset link on the login page (demo only).' },
  { q: 'Is this a real bank?', a: 'No. This is a learning project with fake data.' },
  { q: 'How do I add money?', a: 'Real apps offer direct deposit or cash loading here.' },
];

function Help() {
  return (
    <section className="page narrow">
      <h2>Help center</h2>
      {faqs.map((f) => (
        <details key={f.q} className="faq">
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </section>
  );
}
export default Help;
