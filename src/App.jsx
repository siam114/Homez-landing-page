import './App.css'
import ExploreApartment from './components/ExploreApartment'
import ExploreApartmentSlider from './components/ExploreApartmentSlider'
import Navbar from './components/Navbar'
import RealtorHelp from './components/RealtorHelp'
import Testimonials from './components/Testimonials'

function App() {

  return (
    <div className=''>
     <Navbar/>
     <ExploreApartment/>
     <RealtorHelp/>
     <ExploreApartmentSlider/>
     <Testimonials/>
    </div>
  )
}

export default App
