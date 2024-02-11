import './App.css';
import Navbar from './components/Navbar';
import Middle from './components/MiddleSection';



function App() {
  return (
    <div className="min-w-100 app-container border m-4 overflow-x-hidden mb-4">
       
      <Navbar />
      <Middle/>
    </div>
  );
}

export default App;
