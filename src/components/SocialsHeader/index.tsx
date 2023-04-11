import Link from 'next/link'
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa'

export const SocialsHeader = () => {
  return (
    <>
      <div className="h-[3px] w-full sm:w-[3px] sm:h-full bg-fuchsia-700 mr-2 sm:mr-0 sm:mb-2 rounded-lg"></div>
      <div className="flex sm:flex-col gap-2">
        <Link
          href="https://www.linkedin.com/in/alan-junqueira/"
          target="_blank"
        >
          <FaLinkedinIn className="text-gray-200 hover:text-blue-600 ease-in duration-300 " />
        </Link>
        <Link href="https://www.instagram.com/_alanjunqueira/" target="_blank">
          <FaInstagram className="text-gray-200 hover:text-orange-500 ease-in duration-300" />
        </Link>
        <Link href="https://github.com/Alan-Junqueira" target="_blank">
          <FaGithub className="text-gray-200 hover:text-black ease-in duration-300" />
        </Link>
        <Link href="https://wa.me/64992391327" target="_blank">
          <FaWhatsapp className="text-gray-200 hover:text-emerald-600 ease-in duration-300" />
        </Link>
        <Link href="https://twitter.com/_alanjunqueira" target="_blank">
          <FaTwitter className="text-gray-200 hover:text-blue-600 ease-in duration-300" />
        </Link>
        <Link href="https://www.facebook.com/Allann.Junnkh" target="_blank">
          <FaFacebookF className="text-gray-200 hover:text-blue-600 ease-in duration-300" />
        </Link>
      </div>
      <div className="h-[3px] w-full sm:w-[3px] sm:h-full bg-fuchsia-700 ml-1 sm:ml-0 sm:mt-2 rounded-lg"></div>
    </>
  )
}
