import React, { useState } from "react";
import styled from "styled-components";

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;

  .slider {
    position: relative;
    width: 600px;
    min-height: 400px;
    max-height: 400px;
    display: block;
    border: 2px solid #4168f2;
    background: #000;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    .slider {
      width: 350px;
    }
    .ScreenImages {
      width: 230px !important;
    }
    .right-arrow {
      img {
        max-width: fit-content;
        margin-left: -19px;
      }
    }
    .left-arrow {
      img {
        max-width: fit-content;
        margin-right: -19px;
      }
    }
  }
  .header {
    position: relative;
    top: -35px;
  }
  .sub-header {
    color: #b0adad;
    font-size: 12px;
  }
  .right-arrow {
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
    margin: 0px 40px;
  }
  .left-arrow {
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
    margin: 0px 40px;
  }
  .slide {
    position: relative;
    top: -15px;
    opacity: 0;
    transition-duration: 1s ease;
  }
  .slide.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
  }
  .ScreenImages {
    width: 400px;
  }
`;

const Dot = styled.span.attrs((props: active) => props)`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
  background: ${(props) => (props.active ? "#fff" : "#b0adad")};
  margin: 0px 8px;
`;

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  const leftArrowStyle = current ? null : { opacity: 0, zIndex: -1 };
  const rightArrowStyle =
    current !== images.length - 1 ? null : { opacity: 0, zIndex: -1 };

  return (
    <SliderWrapper>
      <div
        className="slider"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <div className="left-arrow" onClick={prevSlide} style={leftArrowStyle}>
          <img src="/img/slider-arrow-left.png" alt="left Arrow" width="15px" />
        </div>
        {images.map((imgUrl, idx) => {
          return (
            <div
              className={idx === current ? "slide active" : "slide"}
              key={idx}
            >
              {idx === current && (
                <img
                  src={imgUrl}
                  className="ScreenImages"
                  width="500px"
                  height="300px"
                />
              )}
            </div>
          );
        })}

        <div
          className="right-arrow"
          onClick={nextSlide}
          style={rightArrowStyle}
        >
          <img
            src="/img/slider-arrow-right.png"
            alt="right arrow"
            width="15px"
          />
        </div>
        <div style={{ display: "flex", position: "absolute", bottom: "20px" }}>
          {images.map((_, idx) => {
            return <Dot key={idx} active={idx === current} />;
          })}
        </div>
      </div>
    </SliderWrapper>
  );
};
export default ImageSlider;
