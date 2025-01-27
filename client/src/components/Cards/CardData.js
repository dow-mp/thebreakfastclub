import { useState } from "react";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import Pagination from "../Pagination/Pagination";
import { ExamDataPopUp } from "../PopUp/ExamDataPopUp";
import { Navbar } from "../Navbar/Navbar";

export const CardData = ({ data, selectedPatientId, setSelectedPatientId }) => {

  const [showExamDataPopUp, setShowExamDataPopUp] = useState(false);
  const [currentExam, setCurrentExam] = useState({});
  const handleExamDataClose = () => setShowExamDataPopUp(false);

  // Function to group data by patient ID starts
  const groupByPatientId = (data) => {
    return data.reduce((acc, cur) => {
      acc[cur._id] = acc[cur._id] || [];
      acc[cur._id].push(cur);
      return acc;
    }, {});
  };
  const groupedData = groupByPatientId(data);
  // Function to group data by patient ID ends

  // Function to handle button click and set selected patient ID starts
  const handleButtonClick = (_id) => {
    setSelectedPatientId(_id);
  };

  // Function to clear selected patient ID starts
  const handleCloseModal = () => {
    setSelectedPatientId(null);
  };

  return (
      <>
        {/* bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] */}
      {/* <div className="bg-gradient-to-tl from-[#68a6d8] via-[#9bbeed] to-[#8fb7f9] shadow-xl shadow-cyan-600 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-xl gap-3 mx-2 px-2 py-6 md:gap-6 md:py-12 md:px-6"> */}
      <div className="bg-gradient-to-b from-[#a6dde9] via-[#96c9d4] to-[#a6dde9] shadow-lg shadow-stone-600 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-xl gap-3 mx-2 px-2 py-6 md:gap-6 md:py-12 md:px-6">
        {Object.entries(groupedData).map(([_id, exams]) => (
          <button
            key={_id}
            className=" flex items-center justify-center border-2 border-[#d1e1f3] bg-[#fefefd]  rounded-lg shadow-md shadow-stone-600 hover:shadow-md hover:shadow-stone-400 h-14 mx-2 md:h-20 lg:h-24 xl:h-28 2xl:h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition hover:-translate-y-1 hover:scale-105 "
            onClick={() => handleButtonClick(_id)}
          >
            <table className="flex flex-col items-center w-full mx-2">
              <thead className="">
                <tr className="mb-2 lg:mb-1 xl:mb-2 2xl:mb-6">
                  <th className="text-base font-bold text-[#393939]  2xl:text-xl">
                    Patient ID
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-sm font-medium text-[#393939]  2xl:text-lg">
                    {_id}
                  </td>
                </tr>
              </tbody>
            </table>
          </button>
        ))}
      </div>
      {/* Modal window */}
      {selectedPatientId && (
        <div className="fixed flex flex-col justify-center items-center top-0 left-0 w-full h-full bg-gray-800 bg-opacity-30 backdrop-blur-sm ">
          <div className=" bg-white rounded-xl shadow-lg overflow-y-auto p-4 ">
            <div className="flex items-center justify-end 2xl:p-3">
              <button
                className="transform transition hover:translate-y-1 hover:scale-105 shadow-lg rounded-full text-gray-800 border-2 text-sm p-1 md:text-sm md:p-1.5 lg:text-base lg:p-1.5 xl:text-xl xl:font-bold xl:p-2 2xl:text-lg 2xl:font-bold 2xl:p-2"
                onClick={() => setSelectedPatientId(null)}
              >
                <GrClose className="" />
              </button>
            </div>

            <div className="flex justify-center items-center w-full pt-6 mb-3 md:pt-2 md:mb-3 lg:mb-4 xl:mb-6 2xl:mb-10 2xl:h-auto ">
              <table className="flex flex-col w-full justify-center items-center mt-2 xl:gap-y-2  2xl:gap-y-4 ">
                <thead className="">
                  <tr className="flex flex-col items-center ">
                    <th className="text-lg font-semibold  text-[#393939] md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl">
                      Patient ID
                    </th>
                  </tr>
                </thead>
                <tbody className="flex flex-col justify-center items-center w-full ">
                  <tr className="">
                    <td className="w-full text-center text-sm font-semibold whitespace-normal break-words text-gray-500 md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl border-b-4 border-gray-200">
                      {selectedPatientId}
                    </td>
                  </tr>
                  {/* <hr className="border-b-2 2xl:border-b-4 border-gray-200 w-11/12 mt-2 2xl:mt-6" /> */}
                </tbody>
              </table>
            </div>

            <div className="flex justify-center items-center 2xl:px-6 2xl:h-1/2">
              {groupedData[selectedPatientId].map((exams) => (
                <div
                  key={exams._id}
                  className=" border-gray-200 h-full w-full"
                >
                  <div className="w-full 2xl:pb-16">
                    <table className="flex flex-col items-center ">
                      <thead className="w-full px-4 2xl:mb-2">
                        <tr className="grid grid-cols-6 text-center w-full ">
                          <th className="text-sm  font-medium text-gray-900  2xl:text-2xl">
                            Exams
                          </th>
                          <th className="text-sm font-medium text-gray-900  2xl:text-2xl">
                            Age
                          </th>
                          <th className="text-sm font-medium text-gray-900  2xl:text-2xl">
                            Sex
                          </th>
                          <th className="text-sm font-medium text-gray-900  2xl:text-2xl">
                            Zip Code
                          </th>
                          <th className="text-sm font-medium text-gray-900  2xl:text-2xl">
                            Weight
                          </th>
                          <th className="text-sm font-medium text-gray-900  2xl:text-2xl">
                            BMI
                          </th>
                        </tr>
                      </thead>
                      <tbody className="w-full pb-4 px-4 2xl:mb-2">
                        <tr className=" grid grid-cols-6 text-center w-full whitespace-normal break-words ">
                          <td className="text-sm font-medium text-gray-500 md:text-lg lg:text-xl xl:text-2xl 2xl:text-5xl">
                            {exams.exams.sort().map(function (exam, index) {
                              return (
                                <>
                                  <Link
                                    onClick={() => {
                                      setShowExamDataPopUp(true);
                                      setCurrentExam({ exam: exam, index });
                                    }}
                                  >
                                    <p className="text-sm text-blue-600 hover:font-bold hover:underline font-medium  2xl:text-xl">
                                      Exam {index + 1}
                                    </p>
                                  </Link>
                                  <ExamDataPopUp
                                    key={currentExam._id}
                                    currentExam={currentExam}
                                    examNum={currentExam.index + 1}
                                    onClose={handleExamDataClose}
                                    visible={showExamDataPopUp}
                                    // closePatientCard={handleClosePatientCard}
                                  />
                                </>
                              );
                            })}
                          </td>
                          <td className="text-sm font-medium text-gray-500 2xl:text-xl">
                            {exams.age}
                          </td>
                          <td className="text-sm font-medium text-gray-500 2xl:text-xl">
                            {exams.sex}
                          </td>
                          <td className="text-sm font-medium text-gray-500 2xl:text-xl">
                            {exams.zip}
                          </td>
                          <td className="text-sm font-medium text-gray-500 2xl:text-xl">
                            {exams.weight}
                          </td>
                          <td className="text-sm font-medium text-gray-500 2xl:text-xl">
                            {exams.bmi}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
