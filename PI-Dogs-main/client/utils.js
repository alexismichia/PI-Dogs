export const fetchDogs = async () => {
    try {
      const response = await fetch('/dogs');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  