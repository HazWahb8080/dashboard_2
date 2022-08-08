import './App.css';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <div className="App overflow-y-hidden ">
     <Header/>
     <div className='w-full min-h-[90vh] flex items-start justify-start '>
     <NavBar/>
     </div>
    </div>
  );
}

export default App;
