import './App.css';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import LeftPart from './components/leftPart/LeftPart';
import RightPart from './components/rightPart/RightPart';

function App() {
  return (
    <div className="App overflow-y-hidden ">
     <Header/>
     <div className='w-full min-h-[90vh] flex items-start justify-start '>
     <NavBar/>
     <div className='flex-1 grid grid-cols-1 xl:grid-cols-5'>
      <LeftPart/>
      <RightPart/>
     </div>
     </div>
    </div>
  );
}

export default App;
