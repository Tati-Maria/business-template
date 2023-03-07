import React from 'react';
import { Link } from 'react-router-dom';

const MobileNav = () => {
  return (
    <ul>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="work">Work</Link>
        </li>
        <li>
          <Link to="team">Team</Link>
        </li>
        <li>
          <Link to="blog">Blog</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
  )
}

export default MobileNav