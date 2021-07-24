import Slider from "react-slick";

const SilckSlider = ({ children, arrows = false, dots = false }) => {
  const settings = {
    dots,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows,
    autoplay: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default SilckSlider;
