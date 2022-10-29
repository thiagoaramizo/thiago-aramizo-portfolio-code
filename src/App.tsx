import { AppContextProvider } from './context/AppContext'
import { Home } from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppContainer } from './components/AppContainer'
import { Courses } from './pages/Courses'
import { Projects } from './pages/Projects'
import { Project } from './pages/Project'

export const App = () => {

  return (
   <AppContextProvider>
    <BrowserRouter>
      <AppContainer>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/courses' element={<Courses/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/project/:id' element={<Project/>}/>
        </Routes>
      </AppContainer> 
    </BrowserRouter>
   </AppContextProvider>
  )

}