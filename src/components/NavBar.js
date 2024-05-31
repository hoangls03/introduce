import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="bar">
        <ul><Link to = "/"> Home</Link></ul>
        <ul><Link to ='/About'>About</Link></ul>
        <ul><Link to='/Contact'>Contact</Link></ul>
      </div>
  )
}
