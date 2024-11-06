export function StudentInfo(props) {
  return (
    <div>
      <div>
        {props.lastName}, {props.firstName}
      </div>
      <ul>
        <li>
          <strong>ID:</strong> {props.ID}
        </li>
        <li>
          <strong>School:</strong> {props.college}
        </li>
        <li>
          <strong>Major:</strong> {props.major}
        </li>
      </ul>
    </div>
  );
}

function ClassList() {
  return (
    <div>
      <h1>Welcome to CTP</h1>
      <p>List of Students</p>
      <StudentInfo />
    </div>
  );
}
