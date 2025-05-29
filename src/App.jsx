import './App.css'
import Counter from './components/counter'
import { Provider } from 'react-redux'
import store from './redux/store'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { SubCounter } from './components/subCounter'
import { CompWithStore } from './components/CompWithStore'
import { useState } from 'react'
import { CusomHookCounter } from './components/customHookCounter'

function App() {
  const [count, setCount] = useState(0);
  const [memDep, setMemDep] = useState(0);
  return (
    <>
      <Router>
        <nav>
          <Link to="/">Counter With Store</Link>
          <Link to="/subCounter">Sub Counter</Link>
          <Link to="/customHookCounter">SCustom Hook Counter</Link>
        </nav>
        <Routes>
          <Route path="/" element={<CompWithStore />} />
          <Route path="/subCounter" element={<SubCounter count={count} setCount={setCount} memDep={memDep} />} />
          <Route path="/customHookCounter" element={<CusomHookCounter />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
