import React, { useState} from 'react';
import emailjs from '@emailjs/browser';
import './SendMail.css';

const SendMail = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    if (!message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSend = async () => {
    if (validateForm()) {
      setSending(true);
      try {
        const templateParams = {
          name,
          email,
          company,
          message
        };
        console.log('Sending email with params:', templateParams);
        const result = await emailjs.send(
          'service_qo31vus',
          'template_lhuidep',
          templateParams,
          'wB_vqbUTAHsss2xAP'
        );
        console.log('Email sent successfully:', result.text);
        alert('Your message has been sent successfully!');
        // Reset form after successful submission
        setName('');
        setEmail('');
        setCompany('');
        setMessage('');
        setErrors({});
      } catch (error) {
        console.error('Error sending email:', error);
        if (error.text) {
          console.error('Error details:', error.text);
        }
        alert(`Failed to send the message. Error: ${error.message}`);
      } finally {
        setSending(false);
      }
    }
  };

  return (
    <div className="send_mail">
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          className={errors.name ? "error" : ""}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          className={errors.email ? "error" : ""}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
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
          className={errors.message ? "error" : ""}
        />
        {errors.message && <span className="error-message">{errors.message}</span>}
      </label>
      <button onClick={handleSend} disabled={sending}>
        {sending ? 'Sending...' : 'Send'}
      </button>
    </div>
  );
};

export default SendMail;