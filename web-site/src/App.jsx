import './index.css'
import MainLayout from './componentes/Main'
import Header from './componentes/Header'
import SectionHome from './componentes/SectionHome'
import SectionCarrossel from './componentes/SectionCarrossel.jsx'
import SectionDados from './componentes/SectionDados.jsx'
import SectionServices from './componentes/SectionServices.jsx'

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
      </MainLayout>
      
    </>
  )
}
export default App
