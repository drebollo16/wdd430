import React from 'react';
import useSignup from '../../../backend/controllers/signup/signup';
import FooterBar from '@/components/footer';
import HeaderBar from '@/components/header';
import NavBar from '@/components/NavBar';

const MyComponent: React.FC = () => {
  const {
    onSubmit,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    city,
    setCity,
    state,
    setState,
    bio,
    setBio,
  } = useSignup();

  return (
    <>
      <link href="/styles/global.css" rel="stylesheet" />

      <HeaderBar />
      <NavBar />
      <main className="max-w-7xl mx-auto p-6 flex items-center justify-center h-screen">
        <div className="max-w-md p-4 rounded-md">
          <h2 className="text-2xl mb-4">Sign up Page</h2>

          <form onSubmit={onSubmit} method="POST">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(n) => setName(n.target.value)}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(n) => setEmail(n.target.value)}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(n) => setPassword(n.target.value)}
              required
            />

            <label htmlFor="city">City:</label>
            <input
              id="city"
              name="city"
              type="text"
              value={city}
              onChange={(n) => setCity(n.target.value)}
              required
            />

            <label htmlFor="state">State:</label>
            <input
              id="state"
              name="state"
              type="text"
              value={state}
              onChange={(n) => setState(n.target.value)}
              required
            />

            <label htmlFor="bio">Description:</label>
            <textarea
              id="bio"
              name="bio"
              value={bio}
              onChange={(n) => setBio(n.target.value)}
              required
            />

            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
              Signup
            </button>
            
          </form>
        </div>
      </main>
      <FooterBar />
    </>
  );
};

export default MyComponent;
