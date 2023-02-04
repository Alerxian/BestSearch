import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import SearchPage from './pages/search/Search';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search/:searchVal" element={<SearchPage />}></Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
