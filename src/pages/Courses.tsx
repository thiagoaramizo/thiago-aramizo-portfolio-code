import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { Breadcrumbs } from "../components/Breadcrumbs"
import { ContentContainer } from "../components/ContentConteiner"
import { ContentText } from "../components/ContentText"
import { ContentTitle } from "../components/ContentTitle"
import { AppContext } from "../context/AppContext"

export const Courses = () => {

    const {cursosComplementares} = useContext(AppContext)
    const [lines, setLines] = useState(146)

    useEffect( () => {
        const contentElement = document.querySelector('#mainContent')
        setLines( contentElement ? Math.floor(contentElement?.clientHeight / 24) : lines )
    },[])

    return (
        <CoursesWrapper id='mainContent'>
            <Breadcrumbs name='cursos.ts' to='/courses' />
            <ContentContainer lines={lines}>
                <ContentTitle><span>export const</span> <strong>cursos</strong> {'= {'} </ContentTitle>
                
                <ContentText breakline={true}>
                    <span>academicos:</span> {'['}

                    <ContentText breakline={true}><br/>{'{'}
                        <span>nome:</span>'<strong>Análise e Desenvilvimento de sistemas</strong>',<br/>
                        <span>faculdade:</span>'Pitágoras',<br/>
                        <span>periodo:</span>'2022-Atual'
                    {'},'}</ContentText>

                    <ContentText breakline={true}>{'{'}
                        <span>nome:</span>'<strong>Ciência da Computação</strong>',<br/>
                        <span>faculdade:</span>'UFU',<br/>
                        <span>periodo:</span>'2016-2018(Incompleto)'
                    {'}'}</ContentText>
                    
                    {'],'}
                </ContentText>
                
                <ContentText breakline={true}>
                    <span>complementares:</span> {'['}<br/><br/>
                    <div>
                    { cursosComplementares.map( (curso, i) => { 
                        return (
                        <ContentText breakline={true}>
                            {'{'}
                            <span>nome:</span>'<strong>{curso.name}</strong>',<br/>
                            <span>instituicao:</span>'{curso.trainingProgram}'
                            {'},'}
                        </ContentText>
                    )})}
                    </div>
                    {']'}
                </ContentText>
                
                {'}'}
            </ContentContainer>
        </CoursesWrapper>
        
    )
}

const CoursesWrapper = styled.div`

`
    