import { useRouter } from 'next/router';

import React, { useState } from 'react';

import {fetcher} from '@/pages/api/fetcher';

const useSignup = () => {
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [bio, setBio] = useState('');



  const [errorMessage, setErrorMessage] = useState('')

  const router = useRouter()

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (name.trim() === ''  || email.trim() === '' || password.trim() === '' || city.trim()=== '' || state.trim()=='' || bio.trim() === '') {
      setErrorMessage('all fields are required!');
      return
    }

    const data = {
      name,
      email,
      password,
      city,
      state,
      bio
    }

    const postSignup = await fetcher('/api/signup', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (!postSignup.ok) {
      const errorMessage = await postSignup.json()
      setErrorMessage(`something wen wrong error code: ${postSignup.status}, message: ${errorMessage.message}`)
      return
    }

    await router.push('/login')
  }

  return {
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
    errorMessage
  }
}

export default useSignup;
