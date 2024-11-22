import React from "react";
import Slider from "react-slick";
import "./Carousel.css";

// Importa as imagens diretamente
import trabalhistaImg from "../assets/trabalhista.jpg";
import civilImg from "../assets/civil.jpg";
import penalImg from "../assets/penal.jpg";

// Dados dos slides
const slides = [
  {
    title: "Direito Trabalhista",
    description: "Orientação sobre direitos trabalhistas e rescisões contratuais.",
    image: trabalhistaImg,
  },
  {
    title: "Direito Civil",
    description: "Atuação em causas familiares, contratuais e patrimoniais.",
    image: civilImg,
  },
  {
    title: "Direito Penal",
    description: "Defesa em processos criminais com ética e excelência.",
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
            <img src={slide.image} alt={slide.title} className="carousel-image" />
            <div className="carousel-content">
              <h3 className="carousel-title">{slide.title}</h3>
              <p className="carousel-description">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
