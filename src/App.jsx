import './App.css'
import BestDeals from './components/BestDeals'
import BlogSection from './components/BlogSection'
import ExploreApartment from './components/ExploreApartment'
import ExploreApartmentSlider from './components/ExploreApartmentSlider'
import Footer from './components/Footer'
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
     <BestDeals/>
     <BlogSection/>
     <Footer/>
    </div>
  )
}

export default App
