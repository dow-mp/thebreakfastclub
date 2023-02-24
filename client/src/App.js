import "./Styles/Styles.css"
import { useState, useEffect } from "react";
// import required elements from react router dom for browser router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import the components being rendered by the route component
import { Navbar } from "./components/Navbar/Navbar";
import { Exams } from './components/Exams/Exams';
import { Admin } from './components/Admin/Admin';
import { NotFound } from "./components/NotFound/NotFound";
import { Search } from "./components/Search/Search";
import { TestSearch } from "./components/Search/TestSearch";
import { Footer } from "./components/Footer/Footer";
// import { TestForm } from "./components/Create/TestForm";
// import { Admin } from "./components/Admin/Admin";
// import { ExamForm } from "./components/Create/ExamForm";
// import { NotFound } from "./components/Notfound/NotFound";
import { ExamForm } from "./components/Create/ExamForm";
// import { Pagination } from "./components/Pagination/Pagination";
import { CreateBtn } from "./components/Create/CreateBtn";

const App = () => {
  const [data, setData] = useState([]);
  const [localData, setLocalData] = useState([]);

  useEffect(() => {
    fetch("https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams")
      .then((res) => res.json())
      .then((res) => setData(res.exams))
      .catch((error) => console.error("Error:", error));
  }, []);

  // save the fetched data to local storage
  useEffect(() => {
    localStorage.setItem('localData', JSON.stringify(data));
    setLocalData(data);
  }, [data]);

  // get the local data to display on the page by setting the state of the localData variable to whatever is in local storage
  useEffect(() => {
    setLocalData(JSON.parse(localStorage.getItem('localData')))
  }, []);

  const handleDelete = (id) => {
    const examArr = JSON.parse(localStorage.getItem('localData'));
    const updatedExamArr = examArr.filter((exam) => exam._id !== id);
    localStorage.setItem('localData', JSON.stringify(updatedExamArr));
    setLocalData(updatedExamArr);
    console.log(localData);
    // return data;
  };

  return (
    <>
      <div className="relative bg-gray-100 min-h-screen min-w-fit h-screen w-screen ">
        <TestSearch/>
        <Exams />
        <Footer/>
      </div>
    </>
  );
}

export default App;
