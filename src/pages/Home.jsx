import Contact from '../components/Contact'
import Food from '../components/Food'
import FoodMenu from '../components/FoodMenu'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ShowCase from '../components/ShowCase'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <>
        <Navbar/>
        <ShowCase/>
        <Food/>
        <FoodMenu/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Home