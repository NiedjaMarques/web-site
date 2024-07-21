import './index.css'
import MainLayout from './componentes/Main'
import Header from './componentes/Header'
import SectionHome from './componentes/SectionHome'
import SectionCarrossel from './componentes/SectionCarrossel.jsx'
import SectionDados from './componentes/SectionDados.jsx'
import SectionServices from './componentes/SectionServices.jsx'
import SectionAboutus from './componentes/SectionAboutUs.jsx'

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
        {/* <SectionAboutus/> */}
      </MainLayout>
      
    </>
  )
}
export default App
