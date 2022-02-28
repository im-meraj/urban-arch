import './header.css';
import { Link } from 'react-router-dom';
import { Squash as Hamburger } from "hamburger-react";
import { useState } from 'react';

const Header = () => {
    const [isOpen, setOpen] = useState(false);
  return (
    <header>
      <div className="logo">
        <img
          src="https://res.cloudinary.com/immeraj/image/upload/v1646047376/urbanhexad_assets/UrbanLogo2_x1n6ry.svg"
          alt=""
        />
      </div>
        <Hamburger
          className="hamburger-icon"
          toggled={isOpen}
          toggle={setOpen}
        />
      <nav>
        <ul className={`nav-links${isOpen ? ' showMenu' : ''}`}>
          <li className="link-item">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="link-item">
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li className="link-item">
            <Link className="link" to="/projects">
              Projects
            </Link>
          </li>
          <li className="link-item">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
