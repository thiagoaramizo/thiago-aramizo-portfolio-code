import { createContext, useEffect, useState } from "react"
import { CourseType , courses} from "./coursesList";
import { Project, projects } from "./projects";


interface IAppContext {
    name: string,
    cursosComplementares: CourseType[]
    projetos: Project[]
  }

export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({children} : any) => {

    const [appData, setAppData] = useState<IAppContext>(
      {
        name: 'Thiago Aramizo',
        cursosComplementares: courses,
        projetos: projects
      }
    );
    
  return (
    <AppContext.Provider value={appData}>
      {children}
    </AppContext.Provider>
  )
}