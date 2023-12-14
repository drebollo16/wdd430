import { fetcher } from "@/pages/api/fetcher";
import { useRouter } from "next/router";
import { useState } from "react";

const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    console.log("Before if-statement");

    if (email.trim() === '' || password.trim() === '') {
      setErrorMessage('All fields are required!');
      console.log("After if-statement - Error message set");
      return;
    }
    
    console.log("After if-statement - No error");

    const data = {
      email,
      password,
    };

    try {
      const postLogin = await fetcher('/api/login', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (!postLogin.ok) {
        // Check if the response is a valid Response object
        if (postLogin instanceof Response) {
          // Check if the response is JSON
          const contentType = postLogin.headers.get('Content-Type');
          if (contentType && contentType.includes('application/json')) {
            const errorResponse = await postLogin.json();
            setErrorMessage(`Something went wrong. Error code: ${postLogin.status}, message: ${errorResponse.message}`);
          } else {
            // If not JSON, use text() to get the error message
            const errorText = await postLogin.text();
            setErrorMessage(`Something went wrong. Error code: ${postLogin.status}, message: ${errorText}`);
          }
        } else {
          // If not a valid Response object, handle accordingly
          setErrorMessage(`Something went wrong. Invalid response object: ${postLogin}`);
        }
        return;
      }

      // Redirect to the profile page after successful login
      console.log("profile");
      await router.push('/profile');
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('Internal Server Error');
    }
  };

  return {
    onSubmit,
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
  };
};

export default useLogin;
