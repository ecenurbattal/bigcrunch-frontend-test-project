import { useState } from 'react';
import './App.css';
import Slider from './components/Slider/Slider';
import slides from '../src/config/slides';
import Header from './components/Header/Header';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

function App() {

  const [activeIndex,setActiveIndex] = useState(0);
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const handleIndexChange = (index) => {
    setActiveIndex(index)
  }

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen((prevState) => !prevState)
  }

  const backdropClickHandler = () => {
    setSideDrawerOpen(false)
  }

  const closeClickHandler = () => {
    setSideDrawerOpen(false);
  }


  return (
    <div className="App">
      <Header drawerClickHandler={drawerToggleClickHandler}/>
      <SideDrawer onCloseClick={closeClickHandler} show={sideDrawerOpen}/>
      {sideDrawerOpen && <Backdrop onClick={backdropClickHandler} />}
      <Slider
        slides={slides}
        activeIndex={activeIndex}
        onIndexChange={handleIndexChange}
      />
    </div>
  );
}

export default App;
