import { useContext } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { Breadcrumbs } from "../components/Breadcrumbs"
import { AppContext } from "../context/AppContext"

export const Project = () => {

    const {projetos} = useContext(AppContext)
    const {id} = useParams()
    
    return (
        <ProjectWrapper>
            <Breadcrumbs name={`projetos > ${id}.html (Modo visualização)`} to='/projects'/>
        </ProjectWrapper>
    )
}

const ProjectWrapper = styled.div`

`