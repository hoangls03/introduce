import React, { useState, useEffect } from 'react'
import { NavBar } from '../components/NavBar';

export const Home = () => {
  const [count, setPageViews] = useState(0);

  useEffect(() => {
    const storedPageViews = localStorage.getItem('pageViews');

    if (storedPageViews) {
      setPageViews(parseInt(storedPageViews));
    }

    setPageViews((prevPageViews) => {
      const newPageViews = prevPageViews + 1;
      localStorage.setItem('pageViews', newPageViews.toString());
      return newPageViews;
    });
  }, []);
  return (
    <div>
        <h1>Welcome to the Home page</h1>
        <NavBar />
        <p> Banner Id: B00911889 </p>
        <p> Name: Hoang Le</p>
    </div>
  )
}
