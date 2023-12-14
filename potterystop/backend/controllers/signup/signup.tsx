import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { fetcher } from '@/pages/api/fetcher';

const useSignup = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (name.trim() === '' || bio.trim() === '' || email.trim() === '' || password.trim() === '' || city.trim() === '' || state.trim() === '') {
      setErrorMessage('All fields are required!');
      return;
    }

    const data = {
      name,
      email,
      bio,
      city,
      state,
      password,
    };

    setIsLoading(true);

    try {
      const postSignup = await fetcher('/api/signup', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (!postSignup.ok) {
        const errorMessage = await postSignup.json();
        setErrorMessage(`Something went wrong. Error code: ${postSignup.status}, message: ${errorMessage.message}`);
        return;
      }

      await router.push('/login');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    onSubmit,
    name,
    setName,
    bio,
    setBio,
    email,
    setEmail,
    password,
    setPassword,
    city,
    setCity,
    state,
    setState,
    isLoading,
  };
};

export default useSignup;
