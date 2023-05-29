// import { grey } from '@mui/material/colors';
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import OtpInput from "react-otp-input";

export default function App() {
  const [otp, setOtp] = useState("");

  return (
    <Container>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1 style={{ marginBottom: " 40px" }}>OTP input</h1>
        <OtpInput
          value={otp}
          onChange={setOtp}
          inputStyle={{
            gap: "1px",
            margin: "0 5px",
            width: "45px",
            height: "50px",

            border: "1px solid lightgray",
            borderRadius: "10px",
            color: "black",
            fontSize: "1rem",
            background: "#DDE6ED",
            // background:'lightblue'
          }}
          numInputs={6}
          placeholder="******"
          renderInput={(props) => (
            <input {...props} type="text" pattern="[0-9]*" />
          )}
          // renderInput={(props) => (
          //     <input {...props} type="number" onKeyPress={(e) => e.preventDefault()} />
          //   )}
        />
      </div>
    </Container>
  );
}
