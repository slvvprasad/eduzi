import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import './Educators.css';

export default function App() {
  return (
    <MDBContainer className="py-5">
      {/* <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
          <h3 className="mb-4">Testimonials</h3>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
        </MDBCol>
      </MDBRow> */}
      <MDBRow className="text-center d-flex align-items-stretch">
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#9d789b" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <img
                src="https://eduzi.s3.amazonaws.com/krishnagopal.jpg"
                className="rounded-circle img-fluid"
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4"><a href="https://www.linkedin.com/in/krishna-gopal-srinivasa-142393a7" target="_blank" rel="noopener noreferrer">
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "1px"
      }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/256/174/174857.png"
        className="company-img"
        loading="lazy"
        alt="Bandhan Bank Logo"
        width="40px"
      />
    </div>
  </a>Krishna Gopal</h4>
              <h4 className="mb-4">Total experience – 15+ years.<br/>
Companies - Kotak Securities, CRISIL, Axis Bank, IDFC First Bank, HSBC.</h4>
              
              <hr />
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                With an illustrious career in Finance and Banking of over 15 years, Krishna is one of the main pillars of this program’s success. His career spanned over multiple strategic and leadership roles in Indian and International organizations like CRISIL, Axis Bank, IDFC Bank, HSBC, etc.

              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#7a81a8" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <img
                src="https://eduzi.s3.amazonaws.com/satyasharma.jpg"
                className="rounded-circle img-fluid"
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4"><a href="https://www.linkedin.com/in/satya-sharma-nittala-frm-474411108" target="_blank" rel="noopener noreferrer">
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "1px"
      }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/256/174/174857.png"
        className="company-img"
        loading="lazy"
        alt="Bandhan Bank Logo"
        width="40px"
      />
    </div>
  </a>Satya Sharma</h4>
              <h4 className="mb-4">Total experience – 15+ years<br/>
Companies – Bank of Baroda, CRISIL, HSBC.</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                A true and a passionate credit analyst, Satya Sharma comes with a long-standing experience in credit and Finance. He has over 15+ years in various domestic rating agencies, banks and MNCs. In his current role as Vice President with a major global bank, Mr. Satya heads the under-writing team for the North American market. He is an FRM fellow and an MBA from IMT Ghaziabad.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#6d5b98" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <img
                src="https://eduzi.s3.amazonaws.com/aditya.jpg"
                className="rounded-circle img-fluid"
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4"><a href="https://www.linkedin.com/in/aditya-gupta-18053464" target="_blank" rel="noopener noreferrer">
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "1px"
      }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/256/174/174857.png"
        className="company-img"
        loading="lazy"
        alt="Bandhan Bank Logo"
        width="40px"
      />
    </div>
  </a>Aditya Gupta</h4>
              <h4 className="mb-4">Total experience – 16+ years<br/>
Companies - HDFC bank, ICICI bank, Kotak Mahindra Bank, IDFC First Bank.
</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                A seasoned banker, Aditya Gupta is one of our distinguished mentors. He has more than 16 years of experience in sales and credit with his career spanning major Indian banks including HDFC Bank, ICICI Bank, Kotak Mahindra Bank and IDFC First Bank. He is currently Vice President with IDFC First Bank.

              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <br/>
      <MDBRow className="text-center d-flex align-items-stretch">
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#9d767b" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <img
                src="https://eduzi.s3.amazonaws.com/sushama.jpg"
                className="rounded-circle img-fluid"
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4"> <a href="https://www.linkedin.com/in/sushama-kambhampati-7a71b1a9" target="_blank" rel="noopener noreferrer">
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "1px"
      }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/256/174/174857.png"
        className="company-img"
        loading="lazy"
        alt="Bandhan Bank Logo"
        width="40px"
      />
    </div>
  </a>Sushama K</h4>
              <h4 className="mb-4">Total experience – 15+ years<br/>
Companies – Ernst & Young (E&Y), CRISIL.</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Sushama K is a dynamic and highly qualified mentor with nearly 15 years of professional experience in Finance and Consulting. After her Engineering from Vasavi College of Engineering, Hyderabad, she did her MBA from the reputed T A Pai Management Institute, Manipal (TAPMI)before embarking on her illustrious career. As an Associate Director in CRISIL, she handled the real estate and infrastructure sector in Credit Ratings and achieved great professional success.

              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#9d897b" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <img
                src="https://eduzi.s3.amazonaws.com/sandesh.jpg"
                className="rounded-circle img-fluid"
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4"><a href="https://www.linkedin.com/in/sandesh-gangapatnam-78689b37" target="_blank" rel="noopener noreferrer">
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "1px"
      }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/256/174/174857.png"
        className="company-img"
        loading="lazy"
        alt="Bandhan Bank Logo"
        
        width="40px"
      />
    </div>
  </a><br/>Sandesh Gangapatnam</h4>
              <h4 className="mb-4">Total experience – 12+ years<br/>
Companies – CRISIL, HDFC Bank, Citi Bank.</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Sandesh is the most dynamic of all, a very fast-talking, and a compassionate human being. After his MBA from IIT Chennai, he has embarked on his career with CRISIL as a rating analyst and moved his way up to a team leader. He later shifted to sales and marketing and served as a very successfulrelationship manager in HDFC and is currently working as Vice President in Citi Bank.

              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}