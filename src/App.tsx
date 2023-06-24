import './App.css'
import LandingPage from './components/landingPage'
import { Route, Routes } from 'react-router'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default App
