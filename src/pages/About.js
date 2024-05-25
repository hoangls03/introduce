import React, { useState, useEffect } from 'react'
import { NavBar } from '../components/NavBar';

export const About = () => {
  const [count, setPageViews] = useState(0);

  useEffect(() => {
    const storedPageViews = localStorage.getItem('pageViews');
    if (storedPageViews) {
      setPageViews(parseInt(storedPageViews, 10));
    }
  }, []);
  return (
    <div>
      <h1>Welcome to the About page</h1>
      <NavBar />
      <p> Home page has been viewed {count} times </p>
    </div>
    
  )
}
