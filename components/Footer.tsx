import { FaLocationArrow, FaDownload } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] pb-10 md:mb-5" id="contact">
      {/* background grid */}

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
        Let&apos;s get  <span className="text-purple">in touch</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
         Let&apos;s 01100011011011110110010001100101

  
        </p>

        <div className="flex flex-col md:flex-row gap-4">
        <a href="/PiyushResumeMay2025.pdf" download>
            <MagicButton
              title="Download Resume"
              icon={<FaDownload />}
              position="right"
            />
          </a>
          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=piyushsk2002@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Piyush Kumar
        </p>

        <div className="flex items-center md:gap-3 gap-6">
  {socialMedia.map((info) => (
    <a
      key={info.id}
      href={info.link}           // <-- Use the link here
      target="_blank"            // opens in new tab
      rel="noopener noreferrer"  // security best practice
      className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
    >
      <img src={info.img} alt="icons" width={20} height={20} />
    </a>
  ))}
</div>

      </div>
    </footer>
  );
};

export default Footer;
