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

      <div className="flex justify-center gap-4 w-[90%] mx-auto mt-6 class-grid-manage">
        <div>
          <div className="flex justify-center gap-3 class-grid ">
            <img
              src={Image3}
              alt=""
              className=""
              onClick={() => openModal(Image3)}
            />
            <img src={Image2} alt="" onClick={() => openModal(Image2)} />
          </div>
          <img
            src={Image1}
            alt=""
            className="mt-3"
            onClick={() => openModal(Image1)}
          />
        </div>

        <div className="mt-[1px]">
          <img src={Image4} alt="" onClick={() => openModal(Image4)} />
          <div className="flex justify-center gap-4 mt-[17px] class-grid">
            <img src={Image5} alt="" onClick={() => openModal(Image5)} />
            <img src={Image6} alt="" onClick={() => openModal(Image6)} />
          </div>
        </div>
      </div>
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img
              className="modal-image"
              src={selectedImage}
              alt=""
              style={{ width: "700px", height: "500px" }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Image;
