import React from "react";

function ModalBook({ closeModal }) {
//   const [selectedFileName, setSelectedFileName] = useState(null);

//   const handleFileChange = (e) => {
//     setSelectedFileName(e.target.files[0]);
//   };

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [Contact, setContact] = useState("");
//   const [filelink, setFileLink] = useState("");
//   const [Requirements, setRequirements] = useState("");
//   const [attachment, setAttachment] = useState(null);
//   const [disableButton, setDisableButton] = useState(true);
    
//   const Emailchangefunction = (e) => {
//     setEmail(e.target.value);
//     setDisableButton(!disableButton);
//   };
//   console.log(email);
//   const onFormSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("email", email);
//     formData.append("Contact", Contact);
//     formData.append("attachment", selectedFileName);
//     formData.append("link", filelink);
//     formData.append("Requirements", Requirements);

//     try {
//       const response = await fetch("http://localhost/backEnd-ContactUs/", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.status === 200) {
//         alert("Email sent successfully");
//         setEmail("");
//         setName("");
//         setContact("");
//         setFileLink("");
//         setRequirements("");
//         setAttachment("");
//         setSelectedFileName("");
//       } else {
//         alert("Email sending failed");
//       }
//     } catch (error) {
//       console.error("Error sending email:", error);
//       alert("Email sending failed");
//     }
//   };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 h-[1200px] z-[9999] pt-[200px]">
        <div className="absolute lg:w-[30%]  w-[90%]  h-full  ">
          <div className="z-50 bg-white p-4 rounded-lg shadow-md relative">
            <button
              onClick={closeModal}
              className="absolute top-0 left-0 text-black font-bold px-3 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="33"
                viewBox="0 0 34 33"
                fill="none"
                className="w-6 h-6 "
              >
                <path
                  d="M17 0C26.384 0 34 7.392 34 16.5C34 25.608 26.384 33 17 33C7.616 33 0 25.608 0 16.5C0 7.392 7.616 0 17 0ZM17 14.85V9.9L10.2 16.5L17 23.1V18.15H23.8V14.85H17Z"
                  fill="black"
                />
              </svg>
            </button>
            <div className="bg-[#F2FFFF] rounded-md p-6 mt-3">
              <h2 className="text-lg font-bold mb-10 text-[#36A7A7]">
                Book an Appointment
              </h2>
              <form>
                <div className="grid grid-cols-1  gap-6 container mx-auto">
                  <div className="col-span-1">
                    <div className="">
                      <input
                        id="name"
                        type="text"
                        // value={name}
                        // onChange={(e) => setName(e.target.value)}
                        className="block w-full bg-transparent text-white border-[#36A7A7] "
                        placeholder="Name"
                      />
                    </div>
                    <div className="">
                      <input
                        id="contact"
                        type="number"
                        // value={Contact}
                        // onChange={(e) => setContact(e.target.value)}
                        className="block w-full border mt-6 bg-transparent text-white border-[#36A7A7]"
                        placeholder="Contact number"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="">
                      <input
                        required
                        type="email"
                        // value={email}
                        // onChange={Emailchangefunction}
                        className="block w-full bg-transparent text-white border-[#36A7A7] border"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>
                <div className=" w-[50%] h-[50px] text-[18px] cursor-pointer rounded-md font-bold mx-auto bg-black hover:border-[#15A7AD] border text-white flex justify-center items-center mt-12">
                  <button
                    // disabled={disableButton}
                    // onClick={onFormSubmit}
                    className=""
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalBook;
