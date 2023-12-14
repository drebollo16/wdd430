 

const login = async (req: any, res: any) => {
  try {
    console.log('Request Body:', req.body);

    // Destructure email and password directly from req.body, as it's already an object
    const { email, password } = req.body;

    console.log('Email:', email);
    console.log('Password:', password);

    // Your logic here...

    // Send a success response
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error in login handler:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export default login;
