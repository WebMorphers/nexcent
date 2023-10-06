
import './App.css'
import MNavbar  from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Clients from './components/clients/clients'
import Unlock from './components/unlock/unlock'
import Achievements from './components/achievements/achievements'

import Unlock2 from './components/unlock2/unlock2'

function App() {

  return (
    <> 
    <MNavbar />
        <Hero /> 
        <Clients />
        <Achievements />
        <Unlock />

        <Unlock2 />

    </>
  )
}

export default App
