import Link from "next/link";

import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer
      className="
        flex items-center justify-center gap-4
        py-8
      "
    >
      <div className="w-full h-1 bg-gradient-to-br from-fuchsia-700 to-pink-500 rounded-r-lg animate-pulse"></div>
      <Link
        href="https://www.linkedin.com/in/alan-junqueira/"
        target="_blank"
        className="
          flex items-center gap-1
          text-xs text-gray-200 hover:text-blue-600
          group
        "
      >
        <span
          className="
            hidden md:block
            transition-all ease-in duration-200
          "
        >
          Linkedin
        </span>
        <FaLinkedinIn
          className="
              md:opacity-0 md:group-hover:opacity-100
              text-lg md:text-xs
            "
        />
      </Link>
      <Link
        href="https://www.instagram.com/_alanjunqueira/"
        target="_blank"
        className="
          flex items-center gap-1
          text-xs text-gray-200 hover:text-rose-500
          group
        "
      >
        <span
          className="
            hidden md:block
            transition-all ease-in duration-200
          "
        >
          Instagram
        </span>
        <FaInstagram
          className="
              md:opacity-0 md:group-hover:opacity-100
              text-lg md:text-xs
            "
        />
      </Link>
      <Link
        href="https://github.com/Alan-Junqueira"
        target="_blank"
        className="
          flex items-center gap-1
          text-xs text-gray-200 hover:text-neutral-950 font-bold
          group
        "
      >
        <span
          className="
            hidden md:block
            transition-all ease-in duration-200
          "
        >
          Github
        </span>
        <FaGithub
          className="
              md:opacity-0 md:group-hover:opacity-100
              text-lg md:text-xs
            "
        />
      </Link>
      {/* <Link
        href="https://wa.me/64992391327"
        target="_blank"
        className="
          flex items-center gap-1
          text-xs text-gray-200 hover:text-emerald-600
          group
        "
      >
        <span
          className='
            hidden md:block
            transition-all ease-in duration-200
          '
        >
          Whatsapp
        </span>
        <FaWhatsapp
          className='
              md:opacity-0 md:group-hover:opacity-100
              text-lg md:text-xs
            '
        />
      </Link> */}
      <Link
        href="https://twitter.com/_alanjunqueira"
        target="_blank"
        className="
          flex items-center gap-1
          text-xs text-gray-200 hover:text-blue-600
          group
        "
      >
        <span
          className="
            hidden md:block
            transition-all ease-in duration-200
          "
        >
          Twitter
        </span>
        <FaTwitter
          className="
              md:opacity-0 md:group-hover:opacity-100
              text-lg md:text-xs
            "
        />
      </Link>
      <div className="w-full h-1 bg-gradient-to-br from-fuchsia-700 to-pink-500 rounded-l-lg animate-pulse"></div>
    </footer>
  );
};
