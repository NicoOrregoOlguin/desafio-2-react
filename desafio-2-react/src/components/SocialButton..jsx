import React from 'react';
import { Button } from 'react-bootstrap';
import { IconContext } from 'react-icons';

function SocialButton({ icon: Icon, ...props }) {
  return (
<Button variant="outline-secondary" className="social-button" {...props}>
  <IconContext.Provider value={{ size: '30px' }}>
    <Icon />
  </IconContext.Provider>
</Button>

  );
}

export default SocialButton;
