// import React, { useState } from 'react';
// import './Programbrochure.css';

// function Programbrochure() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     whatsapp: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     console.log(formData);
//   };

//   return (
//     <div className="container">
//       <div className="heading">Fill the form to get the Brouchure</div>
//       <form className="form" onSubmit={handleSubmit}>
//         <input
//           placeholder="Your Name"
//           id="name"
//           name="name"
//           type="text"
//           className="input"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           placeholder="Your Email"
//           id="email"
//           name="email"
//           type="email"
//           className="input"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           placeholder="Your WhatsApp Number"
//           id="whatsapp"
//           name="whatsapp"
//           type="text"
//           className="input"
//           value={formData.whatsapp}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           placeholder="Your Message"
//           id="message"
//           name="message"
//           className="input"
//           value={formData.message}
//           onChange={handleChange}
//           required
//         />
//         <input
//           value="Submit"
//           type="submit"
//           className="login-button"
//         />
//       </form>
//     </div>
//   );
// }

// export default Programbrochure;

import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function App() {
  return (
    <div style={{ marginLeft: 'auto', marginRight: '20%' }}>
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{ fontWeight: 'bold' , fontSize: '30px'}}>Fill the details to get the brochure</p>
             <br/>
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'style={{ fontSize: '24px' }}/>
                <MDBInput label='Your Name' id='form1' type='text' className='w-100'style={{ fontSize: '24px' }}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'style={{ fontSize: '24px' }}/>
                <MDBInput label='Your Email' id='form2' type='email' style={{ fontSize: '24px' }}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="phone me-3" size='lg'style={{ fontSize: '24px' }}/>
                <MDBInput label='Whatsapp number' id='form3' type='tel'style={{ fontSize: '24px' }}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="message me-3" size='lg'style={{ fontSize: '24px' }}/>
                <MDBInput label='Message' id='form4' type='text'style={{ fontSize: '24px' }}/>
              </div>

              {/* <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div> */}

              <MDBBtn className='mb-4' size='lg'>Submit</MDBBtn>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
    </div>
  );
}

export default App;
