import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import ToDoListPage from './Pages/TodoListPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/todolist' element={<ToDoListPage />} />
        {/* <Route path="/maintenance" element={<MaintenancePage />} />
        <Route
          path="*"
          element={
            <Navigate to={ '/maintenance' } replace />
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
