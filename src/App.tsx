import { useEffect, useState, createContext } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Home } from './pages/Home';
export const AppContext = createContext('');


function App() {
  // const [navColor, setNavColor] = useState('bg-transparent');
  const [buttonStyles, setButtonStyles] = useState('bg-transparent');
  const position = 'sticky top-0 z-10';
  
  const handleScroll = async () => {
    // console.log(window.innerHeight)
    if(window.scrollY > window.innerHeight*0.15){
      // setNavColor( 'bg-gray-900' );
    }
    if(window.scrollY < window.innerHeight*0.15){
      // setNavColor( 'bg-transparent' );
      setButtonStyles(' ');
    }
    /**
    * @type {HTMLCanvasElement}
    */
    // const heroImage = document.getElementById('heroImage');
    // console.log("heroImageHeight",heroImage?.offsetHeight);
    // console.log("scrollY", window.scrollY);
    // console.log("innerHeight", window.innerHeight);
    
    // if(window.scrollY > (heroImage?.clientHeight() window.innerHeight ) console.log(10)
  };

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll, { passive: true });
  }, [])
  return (
    <div className="App">
      <AppContext.Provider value={buttonStyles}>
        <NavBar position={position} />
          <Home />

      </AppContext.Provider>
      <header className="App-header">
        {/* <img id='heroImage'src={logo} className="App-logo -mt-72" alt="logo" /> */}
        <p>
          Text I need to change later
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Me!
        </a>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
      </header>
    </div>
  );
}

export default App;
