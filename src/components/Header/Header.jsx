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
          src="https://res.cloudinary.com/immeraj/image/upload/v1646054579/urbanhexad_assets/Group_3_mhxjew.png"
          alt=""
        />
      </div>
      <Hamburger className="hamburger-icon" toggled={isOpen} toggle={setOpen} />
      <nav>
        <ul className={`nav-links${isOpen ? " showMenu" : ""}`}>
          <li className="link-item">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="link-item">
            <Link className="link" to="/about">
              About Us
            </Link>
          </li>
          <li className="link-item">
            <Link className="link" to="/projects">
              Projects
            </Link>
          </li>
          <li className="link-item contact">
            <Link className="link" to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
