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
          className="
            relative
            before:absolute before:flex before:items-center before:justify-center
            hover:before:px-4 hover:before:py-2 hover:before:h-8
            before:w-0 hover:before:w-fit
            hover:before:content-['Linkedin']
            hover:before:-top-2 hover:before:bottom-0 hover:before:right-10
            hover:before:bg-black hover:before:bg-opacity-70 hover:before:text-blue-600
            hover:before:rounded-ss-xl hover:before:rounded-ee-xl
            
          "
        >
          <FaLinkedinIn className="text-gray-200 hover:text-blue-600 ease-in duration-300 " />
        </Link>
        <Link
          href="https://www.instagram.com/_alanjunqueira/"
          target="_blank"
          className="
            relative
            before:absolute before:flex before:items-center before:justify-center
            hover:before:px-4 hover:before:py-2 hover:before:h-8
            before:w-0 hover:before:w-fit
            hover:before:content-['Instagram']
            hover:before:-top-2 hover:before:bottom-0 hover:before:right-10
            hover:before:bg-black hover:before:bg-opacity-70 hover:before:text-rose-500
            hover:before:rounded-ss-xl hover:before:rounded-ee-xl
          "
        >
          <FaInstagram className="text-gray-200 hover:text-rose-500 ease-in duration-300" />
        </Link>
        <Link
          href="https://github.com/Alan-Junqueira"
          target="_blank"
          className="
            relative
            before:absolute before:flex before:items-center before:justify-center
            hover:before:px-4 hover:before:py-2 hover:before:h-8
            before:w-0 hover:before:w-fit
            hover:before:content-['Github']
            hover:before:-top-2 hover:before:bottom-0 hover:before:right-10
            hover:before:bg-neutral-950 hover:before:bg-opacity-70 hover:before:text-neutral-50
            hover:before:rounded-ss-xl hover:before:rounded-ee-xl
          "
        >
          <FaGithub className="text-gray-200 hover:text-neutral-950 ease-in duration-300" />
        </Link>
        <Link
          href="https://wa.me/64992391327"
          target="_blank"
          className="
            relative
            before:absolute before:flex before:items-center before:justify-center
            hover:before:px-4 hover:before:py-2 hover:before:h-8
            before:w-0 hover:before:w-fit
            hover:before:content-['WhatsApp']
            hover:before:-top-2 hover:before:bottom-0 hover:before:right-10
            hover:before:bg-black hover:before:bg-opacity-70 hover:before:text-emerald-600
            hover:before:rounded-ss-xl hover:before:rounded-ee-xl
          "
        >
          <FaWhatsapp className="text-gray-200 hover:text-emerald-600 ease-in duration-300" />
        </Link>
        <Link
          href="https://twitter.com/_alanjunqueira"
          target="_blank"
          className="
            relative
            before:absolute before:flex before:items-center before:justify-center
            hover:before:px-4 hover:before:py-2 hover:before:h-8
            before:w-0 hover:before:w-fit
            hover:before:content-['Twitter']
            hover:before:-top-2 hover:before:bottom-0 hover:before:right-10
            hover:before:bg-black hover:before:bg-opacity-70 hover:before:text-blue-600
            hover:before:rounded-ss-xl hover:before:rounded-ee-xl
          "
        >
          <FaTwitter className="text-gray-200 hover:text-blue-600 ease-in duration-300" />
        </Link>
        <Link
          href="https://www.facebook.com/Allann.Junnkh"
          target="_blank"
          className="
            relative
            before:absolute before:flex before:items-center before:justify-center
            hover:before:px-4 hover:before:py-2 hover:before:h-8
            before:w-0 hover:before:w-fit
            hover:before:content-['Facebook']
            hover:before:-top-2 hover:before:bottom-0 hover:before:right-10
            hover:before:bg-black hover:before:bg-opacity-70 hover:before:text-blue-600
            hover:before:rounded-ss-xl hover:before:rounded-ee-xl
          "
        >
          <FaFacebookF className="text-gray-200 hover:text-blue-600 ease-in duration-300" />
        </Link>
      </div>
      <div className="h-[3px] w-full sm:w-[3px] sm:h-full bg-fuchsia-700 ml-1 sm:ml-0 sm:mt-2 rounded-lg"></div>
    </>
  )
}
