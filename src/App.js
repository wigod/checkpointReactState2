//import logo from './logo.svg';
import './App.css';
//import ClassComponent from './ClassComponent';
import { useState } from 'react';
import Timer from './Timer';

function App() {
  const [visible, setVisible] = useState(false);

  const handleToggle = () => {
    setVisible((current) => !current);
  };

  return (
    <div className="App">

      {/*<ClassComponent />*/}
      <Timer />
      <button onClick={handleToggle}>AFFICHER/MASQUER</button>
      {visible && 
        <p>
        <div className='profileBox'>          
          <div ><span className='info'>fullName :</span> <span>KOFFI PATRICE</span></div>
          <div ><span className='info'>bio :</span> <span>ETUDIANT GOMYCODE</span></div>
          <div ><span className='info'>profession :</span> <span>INFORMATIQUE</span></div>
          <div className='info'><img src='PhotoPatrice.jpg' alt=''></img></div>          
        </div>
        </p>
        }


    </div>
  );
}

export default App;
