import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import MagicButton from "./MagicButton";
import SectionHeading from "./SectionHeading";

const socialLinks = [
  {
    id: 1,
    icon: <FaGithub className="w-5 h-5" />,
    link: "https://github.com/mo7amedaliEbaid",
    label: "GitHub",
  },
  {
    id: 2,
    icon: <FaLinkedinIn className="w-5 h-5" />,
    link: "https://www.linkedin.com/in/mo7amedebaid/",
    label: "LinkedIn",
  },
];

const Footer = () => {
  return (
    <footer className="w-full pt-12 pb-8" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 pointer-events-none">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <SectionHeading title="Let's" highlight="work together" />
        <p className="text-gray-400 mt-4 mb-5 text-center max-w-lg text-sm">
          Looking for a Senior Flutter Engineer? Let&apos;s discuss how I can help
          bring your mobile app ideas to life.
        </p>
        <a href="mailto:mo7amedaliebaid@gmail.com" target="_blank" rel="noopener noreferrer">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="relative z-10 flex mt-12 md:flex-row flex-col justify-between items-center gap-4">
        <p className="text-xs text-gray-500 font-light">
          Mohamed Ali Ebaid &middot; Senior Mobile Engineer
        </p>

        <div className="flex items-center gap-3">
          {socialLinks.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={info.label}
              className="w-9 h-9 flex justify-center items-center bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-purple/30 transition-all duration-300 text-gray-400 hover:text-white"
            >
              {info.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
