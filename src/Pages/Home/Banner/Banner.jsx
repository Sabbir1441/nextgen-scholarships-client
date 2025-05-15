


import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/banner1.jpg';
import img2 from '../../../assets/banner2.jpeg';
import img3 from '../../../assets/banner3.jpg';

const slides = [
  {
    image: img3,
    title: "Explore Scholarships",
    description: "Find the best scholarships that suit your needs.",
    btnText: "Get Started",
    btnLink: "/scholarships"
  },
  {
    image: img1,
    title: "Apply Easily",
    description: "Simple application process with full support.",
    btnText: "Apply Now",
    btnLink: "/apply"
  },
  {
    image: img2,
    title: "Achieve Your Dreams",
    description: "Let us help you fund your education journey.",
    btnText: "Learn More",
    btnLink: "/about"
  },
];

const Banner = () => {
  return (
    <Carousel
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      interval={6000}
      swipeable={true}
      stopOnHover={true}
      transitionTime={1000}
      emulateTouch={true}
    >
      {slides.map(({ image, title, description, btnText, btnLink }, index) => (
        <div key={index} className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-[70vh] object-cover"
          />
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-[70vh] bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-6 text-white animate-fadeInUp">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">{title}</h2>
            <p className="max-w-3xl text-lg md:text-xl mb-8 drop-shadow-md font-medium">{description}</p>
            <Link
              to={btnLink}
              className="bg-[#0A92B9] hover:bg-[#087a9c] transition duration-300 ease-in-out px-10 py-4 rounded-full font-semibold text-lg shadow-lg transform hover:scale-105"
            >
              {btnText}
            </Link>
          </div>
        </div>
      ))}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
      `}</style>
    </Carousel>
  );
};

export default Banner;
