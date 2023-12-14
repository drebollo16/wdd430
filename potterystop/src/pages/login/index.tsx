import React from 'react';
import NavBar from '@/components/NavBar';
import FooterBar from '@/components/footer';
import HeaderBar from '@/components/header';
import useLogin from '../../../backend/controllers/login/login';

const Login = () => {
  const {
    onSubmit,
    email,
    setEmail,
    password,
    setPassword,
  } = useLogin();

  return (
    <>
 

      <HeaderBar />
      <NavBar />
      <main className="flex items-center justify-center min-h-screen">
        <div className="max-w-md p-4 rounded-md">
          <h2 className="text-2xl font-bold mb-4">Login Page</h2>
          <form onSubmit={onSubmit} className="space-y-4">
          
            <label>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required/>

            <label>Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required/>

            <button type="submit">
              Login
            </button>
            <div>
          <p>{`Register?`} <a href='/signup'>Register</a></p>
        </div>
          </form>
        </div>
      </main>

      <FooterBar />
    </>
  );
}
export default Login;
