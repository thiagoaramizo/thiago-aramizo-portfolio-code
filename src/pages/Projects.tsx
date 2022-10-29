import { useContext } from "react"
import styled from "styled-components"
import { Breadcrumbs } from "../components/Breadcrumbs"
import { ContentHtml } from "../components/ContentHtml"
import { AppContext } from "../context/AppContext"

export const Projects = () => {

    const {projetos} = useContext(AppContext)
    
    return (
        <ProjectsWrapper>
            <Breadcrumbs name='projetos.html (Modo visualização)' to='/projects'/>
                <ContentHtml>
                    <Project>
                        oi
                    </Project>
                </ContentHtml>
        </ProjectsWrapper>
    )
}

const ProjectsWrapper = styled.div`
    & div.container {
        background-color: red;
    }
`

const Project = styled.div`
    
`