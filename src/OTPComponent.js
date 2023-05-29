import React, { useState } from 'react';
import { MuiOtpInput } from 'mui-one-time-password-input';
import "./OTPComponent.scss"
import { Container } from 'react-bootstrap';
import { styled } from '@mui/system';




const OTPComponent = () => {
  const [otp, setOtp] = useState('');

  const handleChange = (newValue) => {
    setOtp(newValue);
  };

  
  const MuiOtpInputStyled = styled(MuiOtpInput)`
  display: flex;
  gap: 30px;
  max-width: 650px;
  margin-inline: auto;

//   input {
//     border: 1px solid gray;
//     padding: 8px;
//     border-radius: 5px;
//   }
`;

  return (
    <Container>
< MuiOtpInputStyled TextFieldsProps={{ size: 'small', placeholder: '-' }} value={otp} onChange={handleChange}  length={6}/>
  {/* <MuiOtpInput class="input" 
  length={6}
  value={otp} onChange={handleChange} 
  
  TextFieldsProps={{ size: 'small', placeholder: '-' }}
  /> */}
  </Container>
  );
};

export default OTPComponent;
