import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Btn from "../Components/Btn";

const Footer = () => {
  return (
    <div className="flex justify-center items-center w-full px-5 py-10 bg-black-900">
      <div className="flex justify-start lg:gap-0 gap-10 lg:justify-between flex-col lg:flex-row items-start w-full max-w-[1400px]">
        <div className="flex justify-start items-start flex-col gap-6">
          <h1 className="text-orange text-[40px] font-bold ">QLS</h1>
          <p className="text-white text-base font-light max-w-[400px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ut
            illo aut rem totam neque deserunt necessitatibus fugiat sapiente
            enim?
          </p>
          <div className="flex flex-col justify-start items-start gap-2">
            <h1 className="uppercase text-white font-bold text-[25px]">
              Get In touch
            </h1>
            <div className="flex justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray h-[50px] md:h-[60px] pl-3 text-white text-base border-none w-full min-w-[200px]"
              />
              <Btn text={"Submit"} />
            </div>
          </div>
        </div>
        <div className="flex justify-start items-start flex-col gap-6">
          <h1 className="text-orange invisible pointer-events-none select-none text-[40px] font-bold lg:block hidden ">
            QLS
          </h1>
          <a
            href="#home"
            className="text-white text-base font-normal uppercase"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-white text-base font-normal uppercase"
          >
            Services
          </a>
          <a href="#faq" className="text-white text-base font-normal uppercase">
            FAQ
          </a>
          <a
            href="#about"
            className="text-white text-base font-normal uppercase"
          >
            About us
          </a>
        </div>
        <div className="flex justify-start items-start flex-col gap-6">
          <h1 className="text-orange invisible pointer-events-none select-none text-[40px] font-bold lg:block hidden ">
            QLS
          </h1>
          <a href="#" className="text-white text-base font-normal uppercase">
            Terms and conditions
          </a>
          <a href="#" className="text-white text-base font-normal uppercase">
            Privacy policy
          </a>
          <a href="#" className="text-white text-base font-normal uppercase">
            Partners
          </a>
          <a href="#" className="text-white text-base font-normal uppercase">
            Contact Us
          </a>
        </div>
        <div className="flex justify-start items-start flex-col gap-6">
          <h1 className="text-orange invisible pointer-events-none select-none text-[40px] font-bold lg:block hidden ">
            QLS
          </h1>
          <div className="flex justify-start items-center gap-6">
            <a
              href="#"
              className="bg-gray flex justify-center items-center rounded-full w-[40px] h-[40px] text-[20px]  text-white"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="#"
              className="bg-gray flex justify-center items-center rounded-full w-[40px] h-[40px] text-[20px]  text-white"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="#"
              className="bg-gray flex justify-center items-center rounded-full w-[40px] h-[40px] text-[20px]  text-white"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              href="#"
              className="bg-gray flex justify-center items-center rounded-full w-[40px] h-[40px] text-[20px]  text-white"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
