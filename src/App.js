import './App.css';
import Navbar from './components/Navbar';
import Middle from './components/MiddleSection';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CategoryExpense from './components/CategoryExpense';
import CategoryElement from './components/CategoryElement';



function App() {
  return (
    <div className="min-w-100 app-container border m-4 overflow-x-hidden mb-4">
      {/* <Navbar />
      <Middle/> */}
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Navbar />} /> */}
          <Route path="/" element={<Middle />} />
          <Route path="/category/foods" element={<CategoryExpense />} />

          <Route path="/category/:id" element={<CategoryElement />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
