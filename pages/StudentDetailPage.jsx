import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

export const StudentDetailPage = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      const response = await fetch(`http://localhost:3000/students/${id}`);
      const data = await response.json();
      setStudent(data);
    };
    fetchStudent();
  }, [id]);

  return <div> {student ? student.major : "Loading.."}</div>;
};
