import './index.css'
import MainLayout from './componentes/Main'
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
import Carousel from './componentes/SectionTestmonial.jsx'
import SectionBlog from './componentes/SectionBlog.jsx'
import SectionContact from './componentes/SectionContact.jsx'

function App() {
  return (
    <>
      <MainLayout>
        <Header/>
        <SectionHome/>
        <SectionCarrossel/>        
      </MainLayout >

      <SectionDados/>

      <MainLayout>
        <SectionServices/>
        <SectionAboutus/>
        <SectionFetures/>
        <SectionProjects/>
      </MainLayout>

      <SectionNewsletter/>
      
      <MainLayout>
        <SectionTeam/>
        <SectionPricing/>
      </MainLayout>
      
      <Carousel/>

      <MainLayout>
        <SectionBlog/>
        <SectionContact/>
      </MainLayout>
    </>
  )
}
export default App
