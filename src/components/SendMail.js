import React, { useState } from 'react';
import './SendMail.css';

const SendMail = () => {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    // Handle the send action here, such as making an API call
    console.log('Email:', email);
    console.log('Company:', company);
    console.log('Message:', message);
  };

  return (
    <div className="send_mail">
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
      </label>
      <label>
        Company:
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Enter company"
        />
      </label>
      <label>
        Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter message"
        />
      </label>
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default SendMail;
