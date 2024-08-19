import './index.css'
//import MainLayout from './componentes/Main'
import Header from './componentes/Header'
import SectionHome from './componentes/SectionHome'
import SectionCarrossel from './componentes/SectionCarrossel.jsx'
import SectionDados from './componentes/SectionDados.jsx'
import SectionServices from './componentes/SectionServices.jsx'
import SectionAboutus from './componentes/SectionAboutUs.jsx'
import SectionFetures from './componentes/SectionFetures.jsx'
import SectionProjects from './componentes/SectionProjects.jsx'
import SectionNewsletter from './componentes/SectionNewsletter.jsx'
import SectionTeam from './componentes/SectionTeam.jsx'
import SectionPricing from  './componentes/SectionPricing.jsx'
import Testmonial from './componentes/SectionTestmonial.jsx'
import SectionBlog from './componentes/SectionBlog.jsx'
import SectionContact from './componentes/SectionContact.jsx'
import SectionMoreWithUs from './componentes/SectionMoreWithUs.jsx'
import SectionEnd from './componentes/SectionEnd.jsx'

function App() {
  return (
    <>
      <Header/>
      <SectionHome/>
      <SectionCarrossel/>        
      <SectionDados/>      
      <SectionServices/>      
      <SectionAboutus/>
      
      <SectionFetures/>
      <SectionProjects/>
      <SectionNewsletter/>
      <SectionTeam/>
      <SectionPricing/>
      <Testmonial/>
      <SectionBlog/>
      <SectionContact/>
      <SectionMoreWithUs/>        
      <SectionEnd/>
    </>
  )
}
export default App
