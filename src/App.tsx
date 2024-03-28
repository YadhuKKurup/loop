import { useState } from "react";
import "./App.css";
import LoginScreen from "./Screens/Login/LoginScreen";
import Register from "./Screens/Login/Register";
import CustomerRouter from "./Router/CustomerRouter";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const [currentForm, setCurrentForm] = useState("loginScreen");
  const toggleForm = () => {
    setCurrentForm(currentForm === "loginScreen" ? "register" : "loginScreen");
  };

  return (
    <div className="App">
      {currentForm === "loginScreen" ? (
        <>
          <Routes>
            <Route
              path="/login"
              element={<LoginScreen onFormSwitch={toggleForm} />}
            ></Route>
            <Route path="/" element={<Navigate replace to="/login" />}></Route>
          </Routes>
          <CustomerRouter />
        </>
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}
export default App;
