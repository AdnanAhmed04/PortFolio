import React, { useEffect, useState, useRef } from 'react';
import './Counter.css';

const Counter = ({ label, targetNumber, duration, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 } 
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const stepTime = 10; 
    const steps = duration / stepTime;
    const increment = Math.ceil(targetNumber / steps);

    const updateCounter = () => {
      start += increment;
      if (start > targetNumber) start = targetNumber;
      setCount(start);
      if (start < targetNumber) {
        setTimeout(updateCounter, stepTime);
      }
    };

    updateCounter();
  }, [hasStarted, targetNumber, duration]);

  return (
    <div className='counter_mian' ref={counterRef}>
      <div className="counter ">
        <span className="count number">{count}{suffix}</span>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default Counter;
