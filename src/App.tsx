import { useEffect, useState, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Home } from './pages/Home';
export const AppContext = createContext('');


function App() {
  const [navColor, setNavColor] = useState('bg-transparent');
  const [buttonStyles, setButtonStyles] = useState('bg-transparent');
  const position = 'sticky top-0 z-10';
  
  const handleScroll = () => {
    console.log(window.innerHeight*0.6)
    if(window.scrollY >window.innerHeight*0.6-63){
      setNavColor( 'bg-gray-900' );
      console.log(window.scrollY);
    }
    if(window.scrollY < window.innerHeight*0.6-63){
      setNavColor( 'bg-transparent' );
      setButtonStyles(' ');
    }
  };

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll, { passive: true });
  }, [])
  return (
    <div className="App">
      <AppContext.Provider value={buttonStyles}>
        <NavBar position={position} color={navColor}/>
        <Home />

      </AppContext.Provider>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>1</p>
        <p>2</p>
        <p>3</p>
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
