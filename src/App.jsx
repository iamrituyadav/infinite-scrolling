import { useState, useRef, useCallback } from "react";
import StudentList from "../Components/StudentsList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <StudentList />
    </div>
  );
}

export default App;
