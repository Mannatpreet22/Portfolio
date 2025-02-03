'use client'

import { CiMail } from "react-icons/ci";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-6 px-4">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="mb-4 md:mb-0">
          <p className="text-lg text-center md:text-left">
            &copy; {new Date().getFullYear()}{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Mannatpreet Singh Khurana
            </span>
            . All rights reserved.
          </p>
        </div>

        {/* Right Section (Social Icons) */}
        <nav className="flex items-center space-x-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mannatpreet-singh-khurana"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/Mannatpreet22"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          {/* Gmail (MailTo) */}
          <a
            href="mailto:khurana.mannat22@gmail.com"
          >
            <CiMail size={26} />
          </a>
        </nav>
      </div>
    </footer>
  );
}
