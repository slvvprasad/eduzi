// import React, { useState } from 'react';
// import './Programbrochure.css'; 

// const Programbrochure = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     whatsapp: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Implement your form submission logic here
//     console.log(formData);
//   };

//   return (
//     <div  className="contact-form">
//       <h2>Contact Us</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Your Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="whatsapp">WhatsApp Number</label>
//           <input
//             type="text"
//             id="whatsapp"
//             name="whatsapp"
//             value={formData.whatsapp}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email Address</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="message">Message</label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Programbrochure;

import React, { useState } from 'react';
import './Programbrochure.css';

function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="container">
      <div className="heading">Fill the form to get the Brouchure</div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          placeholder="Your Name"
          id="name"
          name="name"
          type="text"
          className="input"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          placeholder="Your Email"
          id="email"
          name="email"
          type="email"
          className="input"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          placeholder="Your WhatsApp Number"
          id="whatsapp"
          name="whatsapp"
          type="text"
          className="input"
          value={formData.whatsapp}
          onChange={handleChange}
          required
        />
        <textarea
          placeholder="Your Message"
          id="message"
          name="message"
          className="input"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <input
          value="Submit"
          type="submit"
          className="login-button"
        />
      </form>
    </div>
  );
}

export default MyForm;
