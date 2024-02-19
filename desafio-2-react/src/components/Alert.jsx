import React from 'react';
import { Alert } from 'react-bootstrap';

function CustomAlert({ message, variant }) {
  return (
    <Alert variant={variant} className="mt-3">
      {message}
    </Alert>
  );
}

export default CustomAlert;
