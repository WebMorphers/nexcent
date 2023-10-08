
import './App.css'
import MNavbar  from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Clients from './components/clients/clients'
import Unlock from './components/unlock/unlock'
import Achievements from './components/achievements/achievements'
import Footer from './components/footer/footer'
import Unlock2 from './components/unlock2/unlock2' 
import  Customers from './components/customers/customers'
import  Community from './components/community/community'
import Frame from './components/frame/frame'

function App() {

  return (
    <> 
    <MNavbar />
        <Hero /> 
        <Clients /> 
        <Unlock /> 
        <Achievements />
        <Unlock2 />
        <Customers />
        <Community />
        <Frame />
        <Footer />
        
    </>
  )
}

export default App
