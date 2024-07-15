import React, { useState } from "react";
import "./Wsp-gallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const WspGallery = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };
  return (
    <div>
      {openModal && (
        <div className="sliderWrap">
          <FontAwesomeIcon icon={faCircleXmark} className="btnClose" />{" "}
          <FontAwesomeIcon icon={faCircleChevronLeft} className="btnPrev" />{" "}
          <FontAwesomeIcon icon={faCircleChevronRight} className="btnNext" />{" "}
           
           <div className="fullScreenImage"><img src={galleryImages[slideNumber].img} alt="" /></div>
        </div>
      )}
      <div className="galleryWrapper">
        {galleryImages &&
          galleryImages.map((slide, index) => {
            return (
              <div
                className="single"
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img src={slide.img} alt="" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default WspGallery;
