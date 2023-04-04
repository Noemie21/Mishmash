import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import {StoreProvider} from './Providers/StoreProvider'
import HomePage from './Pages/HomePage';
import ToDoListPage from './Pages/TodoListPage';
import QuotePage from './Pages/QuotePage';

function App() {
  return (
    <BrowserRouter>
      <StoreProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/todolist' element={<ToDoListPage />} />
          <Route path='/quote' element={<QuotePage />} />
          {/* <Route path="/maintenance" element={<MaintenancePage />} />
          <Route
            path="*"
            element={
              <Navigate to={ '/maintenance' } replace />
            }
          /> */}
        </Routes>
      </StoreProvider>
    </BrowserRouter>
  );
}

export default App;
