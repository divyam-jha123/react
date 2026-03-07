import "../src/App.css";
import { useState, useRef } from "react";
import { Button } from "./button";

export function Otp() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef([]);
  const [disabled, setDisabled] = useState(true);

  const HandleChange = (value, index) => {
    if (value.length > 1) {
      return;
    }

    value = value.replace(/[^0-9]/g, "");

    if (index !== 0 && otp.every((digit) => digit === "")) {
      inputs.current[0].focus();
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }

    const allFilled = newOtp.every((digit) => digit !== "");

    setDisabled(!allFilled);
  };

  const HandleKeyDown = (index, e) => {
    
    const newOtp = [...otp];

    if (e.key === "Backspace") {
      if (otp[index]) {
        newOtp[index] = "";
        setOtp(newOtp);
       } else if(index > 0){
        newOtp[index - 1] = "";
        setOtp(newOtp);
        inputs.current[index - 1].focus();
      }
    }

    const allFilled = newOtp.every((digit) => digit !== "");
    setDisabled(!allFilled);
      
  };

  return (
    <div className="text-center flex flex-col gap-10 h-screen justify-center">
      <div className="flex gap-10 justify-center">

        {Array(6).fill("").map((x, index) => <SubOtpBox
          key={index}
          onChange={(e) => HandleChange(e.target.value, index)}
          onKeyDown={(e) => HandleKeyDown(index, e)}
          forwardref={(el) => (inputs.current[index] = el)}
          maxLength={1}
          inputMode="numeric"
          pattern="[0-9]*"
        />)}

      </div>
      <div>
        <Button disabled={disabled} />
      </div>
    </div>
  );
}

const SubOtpBox = ({ onChange, onKeyDown, forwardref , maxLength , inputMode , pattern }) => {
  return (
    <div>
      <input
        onChange={onChange}
        onKeyDown={onKeyDown}
        ref={forwardref}
        className="w-12 h-15 text-center text-xl border rounded-lg outline-none "
        maxLength={maxLength}
        inputMode={inputMode}
        pattern={pattern}
      ></input>
    </div>
  );
};
