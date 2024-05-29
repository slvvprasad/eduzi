import React, { useState, useEffect } from 'react';
import './Hometestimonials.css';

const testimonials = [
  {
    quote: "EDUZI is the reason I got placed at my dream company. Thank you, Team EDUZI!",
    author: "Abhishek Gurajala - Placed at Goldman Sachs, Bangalore"
  },
  {
    quote: "I'm thrilled to say that EDUZI helped me secure a position at my dream company. A huge thanks to the EDUZI team for their incredible guidance!",
    author: "D.Tejaswi - Placed at Bandhan Bank, Hyderabad"
  },
  {
    quote: "I owe my placement at my dream job to EDUZI. The team's dedication and resources were instrumental. Thank you, EDUZI!",
    author: "B.Rama Krishna - Placed at Morgan Stanley, Mumbai"
  }
];

const Hometestimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-container">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`testimonial-card ${index === current ? 'active' : ''}`}
        >
             <p className="quote-symbol">“</p>
          <p className="quote">"{testimonial.quote}"</p>
          <p className="author">- {testimonial.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Hometestimonials;
