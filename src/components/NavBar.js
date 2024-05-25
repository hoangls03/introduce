import React, { useState, useEffect } from 'react'

export const NavBar = () => {
  return (
    <div className="bar">
        <ul><a href='/'>Home</a></ul>
        <ul><a href='/About'>About</a></ul>
        <ul><a href='/Contact'>Contact</a></ul>
      </div>
  )
}
