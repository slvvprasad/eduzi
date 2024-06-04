import React from 'react';
import './HomePlacedStudents.css';

const students = [
  { name: 'Gokul Shanmugam', company: 'Placed at Axis Bank, Chennai', image: 'https://eduzi.s3.amazonaws.com/gokul.png' },
  { name: 'P.Jyothi Babu', company: 'Placed at IDFC First Bank, Hyderabad', image: 'https://eduzi.s3.amazonaws.com/p.jyothi_babu.png' },
  { name: 'Swetha Mohanty', company: 'Placed at HSBC, Hyderabad', image: 'https://eduzi.s3.amazonaws.com/swetha.png' },
  { name: 'Ladi Rabiteja', company: 'Placed at Techfino Capital, Bangalore', image: 'https://eduzi.s3.amazonaws.com/Ladi_rabiteja.png' },
  { name: 'Abhishek Gurajala', company: 'Placed at Goldman Sachs, Bangalore', image: 'https://eduzi.s3.amazonaws.com/abhishek.png' },
  { name: 'Subhash', company: 'Placed at IIFL, Banaglore', image: 'https://eduzi.s3.amazonaws.com/subash.png' },
  { name: 'G.Prannoy Kumar', company: 'Placed at ICICI Bank, Hyderabad', image: 'https://eduzi.s3.amazonaws.com/g.prannoy.png' },
  { name: 'Vignesh Vishwanathan', company: 'Placed at CRISIL, Chennai', image: 'https://eduzi.s3.amazonaws.com/g.vignesh.png' },
];

const HomePlacedStudents = () => {
  return (
    <div className="about-us-container">
      {/* <h2>Placed Students</h2> */}
      <div className="students-container">
        {students.map((student, index) => (
          <div className="student-card" key={index}>
            <img src={student.image} alt={student.name} className="student-image" />
            <h3 className="student-name">{student.name}</h3>
            <p className="student-company">{student.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePlacedStudents;
