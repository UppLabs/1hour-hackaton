const getToken = () => {
    const locaToken = localStorage.getItem('token');
  
    if (locaToken) {
      const token = JSON.parse(locaToken);
      
      return token;
    }
  
    return null;
  };
  
  const removeToken = () => {
    const locaToken = localStorage.getItem('token');
  
    if (locaToken) {
      localStorage.removeItem('token');
    }
  
    return null;
  };
  
  const setToken = (value) => {
    localStorage.setItem('token', value);
  };

  export default {
    getToken,
    setToken,
    removeToken,
  };
  