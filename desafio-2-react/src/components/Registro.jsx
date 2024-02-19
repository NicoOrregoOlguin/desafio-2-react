import React, { useState } from 'react';
import SocialButton from './SocialButton.';
import Formulario from './Formulario';
import CustomAlert from './Alert';
import '../App.css';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Card } from 'react-bootstrap';

function Registro() {
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('');

  const handleRegister = (success, message) => {
    setAlertMessage(message);
    setAlertVariant(success ? 'success' : 'danger');
  };

  return (
    <Card>
      <Card.Body>
        <h2>Crea una cuenta</h2>
        <div className="social-buttons">
          <SocialButton icon={FaFacebookF} />
          <SocialButton icon={FaGithub} />
          <SocialButton icon={FaLinkedinIn} />
        </div>
        <p className="social-text">O usa tu email para registrarte:</p>
        <Formulario onRegister={handleRegister} />
        {alertMessage && <CustomAlert message={alertMessage} variant={alertVariant} />}
      </Card.Body>
    </Card>
  );
}

export default Registro;
