import { Routes, Route } from 'react-router-dom';
import { Auth } from './pages/Auth';
import { Classes } from './pages/Classes';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Classes />}/>
      <Route path="/auth" element={<Auth />}/>
      <Route path="/classes" element={<Classes />}/>
    </Routes>
  )
}

export default App;