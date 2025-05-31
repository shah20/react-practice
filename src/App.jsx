import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ReduxCounter } from './components/ReduxCounter'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { StateCounter } from './components/StateCounter'
import { CountContext } from './context/countContext'
import { ContextCounter } from './components/ContextCounter'
import { HookCounter } from './components/HookCounter'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={store}>
        <CountContext.Provider value={{ count }}>
          <Router>
            <nav>
              <Link to="/reduxCounter">Redux Counter</Link>
              <Link to="/stateCounter">State Counter</Link>
              <Link to="/contextCounter">Context Counter</Link>
              <Link to="/hookCounter">Hook Counter</Link>
            </nav>
            <Routes>
              <Route path="/reduxCounter" element={<ReduxCounter />} />
              <Route path="/stateCounter" element={<StateCounter count={count} setCount={setCount} />} />
              <Route path="/contextCounter" element={<ContextCounter />} />
              <Route path="/hookCounter" element={<HookCounter />} />
            </Routes>
          </Router>
        </CountContext.Provider>
      </Provider>
    </>
  )
}

export default App
