import AwesomeSlider from "react-awesome-slider";
import Carousel from "react-grid-carousel";

const Slider = () => {
  return (
    <div className="bg-pink-300 shadow-lg">
      <Carousel cols={1} rows={1} gap={10} loop>
        <Carousel.Item>
          <img
            width="1440px"
            src="/img1.png"
            className="m-auto justify-center"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/img2.png"
            width="1440px"
            className="m-auto justify-center"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/img3.png"
            width="1440px"
            className="m-auto justify-center"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
