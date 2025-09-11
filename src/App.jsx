import './App.css'
import ExploreApartment from './components/ExploreApartment'
import ExploreApartmentSlider from './components/ExploreApartmentSlider'
import Navbar from './components/Navbar'
import RealtorHelp from './components/RealtorHelp'

function App() {

  return (
    <div className=''>
     <Navbar/>
     <ExploreApartment/>
     <RealtorHelp/>
     <ExploreApartmentSlider/>
    </div>
  )
}

export default App
