import React from 'react';
import { useHistory } from 'react-router-dom';

const LandingPage = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push('/home');
  };

  return (
    <div
    style={{
        backgroundImage: "url('https://media.istockphoto.com/id/1306641965/es/foto/cachorro-cobberdog-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=ifCUcCbMuEYHgBaNq2KI9XnWCJMAWn27H2FUlsJHipg=')",
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <button onClick={handleButtonClick}>Ingresar</button>
    </div>
  );
};

export default LandingPage;
