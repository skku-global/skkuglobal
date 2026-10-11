import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();   // lets us change page from code

  function handleSubmit(e) {
    e.preventDefault();
    // Demo only: no real check. Real apps would call a server here.
    navigate('/dashboard');
  }

  return (
    <section className="page narrow">
      <h2>Log in</h2>
      <form className="stack" onSubmit={handleSubmit}>
        <label>Email
          <input type="email" value={email} required
                 onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>Password
          <input type="password" value={password} required
                 onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button className="btn btn-green" type="submit">Log in</button>
      </form>
      <p>New here? <Link to="/signup">Create an account</Link></p>
    </section>
  );
}
export default Login;
