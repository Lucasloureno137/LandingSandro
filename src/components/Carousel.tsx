import React from "react";
import Slider from "react-slick";
import "./Carousel.css"; // Importe o CSS personalizado

// Importa as imagens diretamente
import trabalhistaImg from "../assets/trabalhista.jpg";
import civilImg from "../assets/civil.jpg";
import penalImg from "../assets/penal.jpg";

const slides = [
  {
    title: "Direito Trabalhista",
    description: "Auxiliamos em casos de rescisões e direitos no ambiente de trabalho.",
    image: trabalhistaImg,
  },
  {
    title: "Direito Civil",
    description: "Especialistas em contratos, causas familiares e danos morais.",
    image: civilImg,
  },
  {
    title: "Direito Penal",
    description: "Defesa técnica em processos criminais com ética e comprometimento.",
    image: penalImg,
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
