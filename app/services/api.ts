export const fetchServices = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Example API
    if (!response.ok) {
      throw new Error('Failed to fetch services');
    }
    return response.json();
  };