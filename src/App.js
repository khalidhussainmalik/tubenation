import { Container } from 'react-bootstrap';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screens/HomeScreen';
import './App.scss'
import { useState } from 'react';

function App() {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar(value => !value )
  return (
    <>
    <Header handleToggleSidebar={handleToggleSidebar}/>
    <div className='app__container border border-info'>
      <Sidebar sidebar={sidebar}
      handleToggleSidebar={handleToggleSidebar}/>
      <Container fluid className='app_main border border-warning'>
        <HomeScreen/>
      </Container>

    </div>
    </>
  );
}

export default App;
