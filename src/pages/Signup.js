import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
  // One state object for the whole form; [e.target.name] updates the right field.
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  function handleSubmit(e) {
    e.preventDefault();
    navigate('/dashboard');
  }

  return (
    <section className="page narrow">
      <h2>Create account</h2>
      <form className="stack" onSubmit={handleSubmit}>
        <label>Full name
          <input name="name" value={form.name} onChange={change} required />
        </label>
        <label>Email
          <input name="email" type="email" value={form.email} onChange={change} required />
        </label>
        <label>Password
          <input name="password" type="password" value={form.password} onChange={change} required minLength={6} />
        </label>
        <button className="btn btn-green" type="submit">Sign up</button>
      </form>
      <p>Have an account? <Link to="/login">Log in</Link></p>
    </section>
  );
}
export default Signup;
