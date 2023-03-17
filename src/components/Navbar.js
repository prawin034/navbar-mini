import React, { useState } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import logo from '../components/logo.svg';
import { links, social } from './data';
const Navbar = () => {
  const [showlinks, setshowlinks] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar_header">
        <img className="navbar_header_img" src={logo} alt="logo" />
        <button
          onClick={() => setshowlinks((prev) => !prev)}
          className="navbar_header_btn"
        >
          <FaBars />
        </button>
      </div>

      <div
        className={` ${
          showlinks ? 'showcontainer navbar_links' : 'navbar_links'
        } `}
      >
        <ul className="navbar_links_list">
          {links.map((item) => {
            const { id, url, text } = item;

            return (
              <li className="navbar_links_li" key={id}>
                <a className="navbar_links_link" href={url}>
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <ul className="navbar_social">
        {social.map((item) => {
          const { id, url, icon } = item;
          return (
            <li className="navbar_social_list" key={id}>
              <a className="navbar_social_link" href={url}>
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
