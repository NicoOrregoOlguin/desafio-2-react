import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Formulario({ onRegister }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      onRegister(false, 'Por favor, completa todos los campos.');
    } else if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      onRegister(false, 'Por favor, introduce un email válido.');
    } else if (password !== confirmPassword) {
      onRegister(false, 'Las contraseñas no coinciden.');
    } else {
      onRegister(true, 'Registro exitoso!');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="form-group" controlId="formBasicName">
        <Form.Control type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="form-group" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="tuemail@ejemplo.com" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="form-group" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="form-group" controlId="formConfirmPassword">
        <Form.Control type="password" placeholder="Confirma tu contraseña" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Registrarse
      </Button>
    </Form>
  );
}

export default Formulario;
