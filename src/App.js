import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./screens/HomeScreen";
import "./App.scss";
import { useState } from "react";
import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const Layout = ({children}) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app_main">
          {children}
          {/* <HomeScreen /> */}
        </Container>
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomeScreen/></Layout>}/>
        <Route path="/auth" element={<LoginScreen/>}/>
        <Route path="/search" element={<Layout><h1>search</h1></Layout>}/>
        {/* <Route path="/" element={<Navigate replace to={<Layout><HomeScreen/></Layout>} />}/> */}
      </Routes>
    </Router>
  )
}

export default App;
