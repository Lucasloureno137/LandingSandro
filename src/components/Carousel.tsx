import React from "react";
import Slider from "react-slick";
import "./Carousel.css"; 

const slides = [
  {
    title: "Direito Trabalhista",
    description: "Auxiliamos em casos de rescisões e direitos no ambiente de trabalho.",
    image: "/images/trabalhista.jpg",
  },
  {
    title: "Direito Civil",
    description: "Especialistas em contratos, causas familiares e danos morais.",
    image: "/images/civil.jpg",
  },
  {
    title: "Direito Penal",
    description: "Defesa técnica em processos criminais com ética e comprometimento.",
    image: "/images/penal.jpg",
  },
];

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <img src={slide.image} alt={slide.title} />
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
