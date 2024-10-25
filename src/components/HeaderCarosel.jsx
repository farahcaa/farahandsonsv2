import Slider from "react-slick";
import { headpic, headpic2, headpic3, headpic4 } from "../assets";
import { useEffect, useState } from "react";

const HeaderCarosel = ({ homepage }) => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const images = [headpic, headpic2, headpic3, headpic4];
    const promises = images.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
      });
    });

    Promise.all(promises).then(() => {
      setIsLoaded(true);
    });
  }, []);
  return (
    <>
      {homepage ? (
        <div className="relative">
          <div className="absolute -left-[100px] z-50 w-[50%] h-[70vh] bg-Blue skew-x-12" />
          <div className="">
            {isLoaded && (
              <Slider
                {...settings}
                className=" xs:w-full md:w-3/4  flex float-end border-b border-black"
              >
                <div className="divimage">
                  <img className="image" src={headpic2} />
                </div>
                <div className="divimage">
                  <img className="image" src={headpic} />
                </div>
                <div className="divimage">
                  <img className="image" src={headpic3} />
                </div>
                <div className="divimage">
                  <img className="image" src={headpic4} />
                </div>
              </Slider>
            )}
          </div>
        </div>
      ) : (
        <div className="relative">
          <div className="absolute -right-[100px] z-50 w-[50%] h-[70vh] bg-Blue -skew-x-12 border-b border-black" />
        </div>
      )}
    </>
  );
};

export default HeaderCarosel;
