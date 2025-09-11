import './App.css'
import ExploreApartment from './components/ExploreApartment'
import ExploreApartmentSlider from './components/ExploreApartmentSlider'
import HeroSection from './components/HeroSection'
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
     <HeroSection/>
     <Testimonials/>
    </div>
  )
}

export default App
