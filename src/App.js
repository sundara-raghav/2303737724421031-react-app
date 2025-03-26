import React, { useState } from "react";
import './App.css';
const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12); // Default password length

  const generatePassword = (length) => {
    const charset =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?";
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }
    return generatedPassword;
  };

  const handleGenerate = () => {
    setPassword(generatePassword(length));
  };

  return (
    <div>
      <h2>Password Generator</h2>
      <label>
        Password Length:
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          min="6"
        />
      </label>
      <br />
      <button onClick={handleGenerate}>Generate Password</button>
      <div>
        <h3>Your Generated Password:</h3>
        <input type="text" value={password} readOnly />
      </div>
    </div>
  );
};

export default PasswordGenerator;