import React, { useState } from "react";
import Image1 from "../../src/assets/png/image1.png";
import Image2 from "../../src/assets/png/image2.png";
import Image3 from "../../src/assets/png/image3.png";
import Image4 from "../../src/assets/png/image4.png";
import Image5 from "../../src/assets/png/image5.png";
import Image6 from "../../src/assets/png/image6.png";

function Image() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <h2 className="text-[22px] font-poppins font-semibold text-center mt-6">
        Our Projects
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 w-[100%] mx-auto mt-6">
        <div className="col-span-1 md:col-span-2 lg:col-span-1 mx-auto">
          <div className="lg:flex grid justify-start gap-3 mb-3">
            <img
            
              src={Image3}
              alt=""
              onClick={() => openModal(Image3)}
              style={{ cursor: "pointer" }}
            />
            <img
              src={Image2}
              alt=""
              onClick={() => openModal(Image2)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <img
            src={Image1}
            alt=""
            onClick={() => openModal(Image1)}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1 mx-auto">
          <img
            src={Image4}
            alt=""
            onClick={() => openModal(Image4)}
            style={{ cursor: "pointer" }}
          />

          <div className="md:flex grid justify-start gap-4 mt-4">
            <img
              src={Image5}
              alt=""
              onClick={() => openModal(Image5)}
              style={{ cursor: "pointer" }}
            />
            <img
              src={Image6}
              alt=""
              onClick={() => openModal(Image6)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img
              className=""
              src={selectedImage}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Image;
