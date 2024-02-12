import './App.css';
import Navbar from './components/Navbar';
import Middle from './components/MiddleSection';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CategoryExpenseFoods, { CategoryExpenseBills, CategoryExpenseEntertainment } from './components/CategoryExpense';
import CategoryElement from './components/CategoryElement';
import MyStats from './components/MyStats';



function App() {
  return (
    <div className="min-w-100 app-container border m-4 overflow-x-hidden mb-4">
       
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Middle />} />
          <Route path="/category/foods" element={<CategoryExpenseFoods />} />
          <Route path="/category/bills" element={<CategoryExpenseBills />} />
          <Route path="/category/entertainment" element={<CategoryExpenseEntertainment />} />
          <Route path="/category/:id" element={<CategoryElement />} />
          <Route path="/mystats" element={<MyStats />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
