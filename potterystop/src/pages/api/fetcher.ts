export const fetcher = async (path: string, options?: RequestInit): Promise<any> => {
  try {
    const requestOptions: RequestInit = {
      ...options,
      headers: {
        'Content-Type': 'application/json', // Set Content-Type to application/json by default
        ...(options?.headers || {}),
      },
    };

    const response = await fetch(path, requestOptions);

    const contentType = response.headers.get('Content-Type');
    let responseData;

    if (contentType && contentType.includes('application/json')) {
      responseData = await response.json();
    } else {
      responseData = await response.text();
    }

    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}, Body: ${JSON.stringify(responseData)}`);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return responseData;
  } catch (error) {
    console.error('Error in fetcher:', error);
    throw error;
  }
};
