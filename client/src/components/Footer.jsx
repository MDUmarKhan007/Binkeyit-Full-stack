import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto p-4 text-center flex flex-col lg:flex-row lg:justify-between gap-2">
        <p>All Right Reserved &copy; 2026</p>

        <div className="flex item-center gap-4 justify-center text-2xl">
          <a href="" className="hover:text-yellow-400">
            <FaFacebook />
          </a>
          <a href="" className="hover:text-yellow-400">
            <FaInstagram />
          </a>
          <a href="" className="hover:text-yellow-400">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
