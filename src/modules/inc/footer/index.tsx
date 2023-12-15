import FacebookIcon from "@/lib/icons/facebook";
import InstaIcon from "@/lib/icons/insta";
import LinkedinIcon from "@/lib/icons/linkedin";
import XIcon from "@/lib/icons/x";

import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="flex w-full  bottom-2 text-justify  mt-auto bg-cyan-950 justify-center p-4 shadow-inner">
      <div className="flex flex-col w-1/2 m-4 pt-9 pl-4">
        <div className="mb-9 space-x-2.5">
          <span className="border-solid border-cyan-900 border bg-cyan-900 p-2 rounded-full">
            <FontAwesomeIcon icon={faEnvelope} color="white" size="lg" />
          </span>
          <a
            href="mailto:nabilrt51@gmail.com"
            className="mt-2 text-white font-semibold hover:text-gray-400"
          >
            nabilrt51@gmail.com
          </a>
        </div>
        <div className="mb-9 space-x-3">
          <span className="border-solid border-cyan-900 border bg-cyan-900 p-2 rounded-full">
            <FontAwesomeIcon icon={faLocationDot} color="white" size="xl" />
          </span>
          <span className="mt-2 text-white font-semibold">
            Dhaka, Bangladesh
          </span>
        </div>
        <div className="space-x-2">
          <span className="border-solid border-cyan-900 border bg-cyan-900 p-2 rounded-full">
            <FontAwesomeIcon icon={faPhone} color="white" size="lg" />
          </span>
          <a
            href="tele:+8801786523832"
            className="mt-2 text-white font-semibold hover:text-gray-400"
          >
            +880 1786523832
          </a>
        </div>
      </div>
      <div className="flex flex-col w-1/2 m-4 pt-4 pl-4 text-white">
        <div className="mb-9 ">
          <span className=" font-semibold">About This Site</span>
          <p className="mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            atque in, esse ut animi maiores laudantium sequi nostrum
            perspiciatis velit dolorem obcaecati tenetur asperiores suscipit
            iste? Quibusdam, tempore? Eos corporis odio suscipit animi
            distinctio!
          </p>
        </div>
        <div className="flex space-x-3">
          <a
            href="#"
            className="border-solid border-cyan-900 border bg-cyan-900 p-3 hover:bg-cyan-800"
          >
            <FacebookIcon />
          </a>
          <a
            href="#"
            className="border-solid border-cyan-900 border bg-cyan-900 p-3 hover:bg-cyan-800"
          >
            <XIcon />
          </a>
          <a
            href="#"
            className="border-solid border-cyan-900 border bg-cyan-900 p-3 hover:bg-cyan-800"
          >
            <InstaIcon />
          </a>
          <a
            href="#"
            className="border-solid border-cyan-900 border bg-cyan-900 p-3 hover:bg-cyan-800"
          >
           <LinkedinIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
