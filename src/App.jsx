import React, { useEffect, useState } from "react";
import "./App.css";
import { StudentInfo } from "./StudentInfo";
import { Link } from "react-router-dom";

export function App() {
  const [students, setStudents] = useState([]); //init students as studentList

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/students");
      const data = await response.json();
      setStudents(data);
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <h1>Welcome to CTP</h1>
      <p>List of Students</p>
      {students.map((student) => {
        return (
          <Link key={student.sId} to={`/student/${student.sId}`}>
            {" "}
            <StudentInfo key={student.sId} {...student} />{" "}
          </Link>
        );
      })}
      <Link to="/student/submit">Submit a new student</Link>
      <button
        onClick={async () => {
          setStudents((oldStudents) => [
            ...oldStudents,
            {
              firstName: "bruH",
              lastName: "Doe",
              sId: "12",
              school: "NYU",
              major: "cs",
            },
          ]);
          await fetch("http://localhost:3000/students", {
            body: JSON.stringify({
              major: "cs",
              sId: "12",
              firstName: "bruH",
              lastName: "Doe",
              school: "NYU",
            }),
            headers: {
              "content-type": "application/json",
            },
            method: "POST",
          });
        }}
      >
        Add a new student
      </button>
      <button
        onClick={() => {
          setStudents((oldStudents) => [oldStudents.splice(-1, 1)]);
        }}
      >
        {" "}
        Remove last student
      </button>
    </React.Fragment>
  );
}

export default App;
