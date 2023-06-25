import { RecoilRoot } from 'recoil'
import './App.css'
import LandingPage from './components/landingPage'
import { Route, Routes } from 'react-router'

function App() {

  return (
    <>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </RecoilRoot>
    </>
  )
}

export default App
