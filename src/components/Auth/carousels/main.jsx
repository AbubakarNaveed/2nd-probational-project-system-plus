import React from "react";
import { Carousel, CarouselItem, CarouselCaption } from "react-bootstrap";
import Slide from "./slide";
import { carousalData } from "./carouselData";
const CarouselComponent = () => {
  return (
    //
    <div className="carouselBody">
      <div className="circleContainer">
        <div className="circle"></div>
      </div>
      <div className="carouselContainer">
        <Carousel controls={false} style={{ height: "100%", width: "100%" }}>
          {carousalData.map((slide) => (
            <CarouselItem key={slide.id}>
              <Slide {...slide} />
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComponent;
