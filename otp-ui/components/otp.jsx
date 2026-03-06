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

    if (value && !/^\d+$/.test(value)) return;

    if (index !== 0 && otp == ["", "", "", "", "", ""]) {
      inputs.current[0].focus();
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
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      inputs.current[index - 1].focus();
      setDisabled(true);
    }
      
  };

  return (
    <div className="text-center flex flex-col gap-10 h-screen justify-center">
      <div className="flex gap-10 justify-center">
        <SubOtpBox
          onChange={(e) => HandleChange(e.target.value, 0)}
          onKeyDown={(e) => HandleKeyDown(0, e)}
          forwardref={(el) => (inputs.current[0] = el)}
        />
        <SubOtpBox
          onChange={(e) => HandleChange(e.target.value, 1)}
          onKeyDown={(e) => HandleKeyDown(1, e)}
          forwardref={(el) => (inputs.current[1] = el)}
        />
        <SubOtpBox
          onChange={(e) => HandleChange(e.target.value, 2)}
          onKeyDown={(e) => HandleKeyDown(2, e)}
          forwardref={(el) => (inputs.current[2] = el)}
        />
        <SubOtpBox
          onChange={(e) => HandleChange(e.target.value, 3)}
          onKeyDown={(e) => HandleKeyDown(3, e)}
          forwardref={(el) => (inputs.current[3] = el)}
        />
        <SubOtpBox
          onChange={(e) => HandleChange(e.target.value, 4)}
          onKeyDown={(e) => HandleKeyDown(4, e)}
          forwardref={(el) => (inputs.current[4] = el)}
        />
        <SubOtpBox
          onChange={(e) => HandleChange(e.target.value, 5)}
          onKeyDown={(e) => HandleKeyDown(5, e)}
          forwardref={(el) => (inputs.current[5] = el)}
        />
      </div>
      <div>
        <Button disabled={disabled} />
      </div>
    </div>
  );
}

const SubOtpBox = ({ onChange, onKeyDown, forwardref }) => {
  return (
    <div>
      <input
        onChange={onChange}
        onKeyDown={onKeyDown}
        ref={forwardref}
        className="w-12 h-15 text-center text-xl border rounded-lg outline-none "
      ></input>
    </div>
  );
};
