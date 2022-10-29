import { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { VscLinkExternal } from "react-icons/vsc"

import { Breadcrumbs } from "../components/Breadcrumbs"
import { ContentContainer } from "../components/ContentConteiner"
import { ContentText } from "../components/ContentText"
import { ErrorContent } from "../components/ErrorContent"
import { ContentTitle } from "../components/ContentTitle"
import { ContentPopUp } from "../components/ContentPopUp"


export const Home = () => {

    const [showPopUp, setShowPopUp ] = useState(false)
    const [lines, setLines] = useState(23)

    useEffect( () => {
        const contentElement = document.querySelector('#mainContent')
        setLines( contentElement ? Math.floor(contentElement?.clientHeight / 24) : lines )
    },[])

    return (
        <HomeWrapper id="mainContent">
            <Breadcrumbs name='Index.tsx' to='/' />
            <ContentContainer lines={lines}>
                
                <ContentTitle><span>export const</span> <strong>ThiagoAramizo</strong>: Dev {'= () => {'} </ContentTitle>
                
                <ContentText breakline={true} color={true}>
                    /* Olá, sou Desenvolvedor e UI designer em busca de novos desafios. Trabalhei durante mais de 10 anos na área jurídica, desde 2020 migrei definitivamente para a tecnologia, com foco em React. */
                </ContentText>

                <ContentText breakline={true}>
                    
                    <span>const</span> <strong>contato</strong> = {'{'}
                    
                    <ContentText>
                        <span>celular: </span> '(34) 99814-8911',<br></br>
                        <span>email: </span> 'aramizo@icloud.com',<br></br>
                        <span>github: </span> <a target='_blank'
                            href={'https://github.com/thiagoaramizo'} >
                            'thiagoaramizo'<VscLinkExternal/>
                        </a>, <br></br>
                        <span>linkedin: </span> <a target='_blank'
                            href={'https://www.linkedin.com/in/aramizo/'} >
                            'aramizo'<VscLinkExternal/>
                        </a>, <br></br>
                    </ContentText>
                
                    {'}'}
                
                </ContentText>

                <ContentText breakline={true}>
                
                    <span>const</span> <strong>habilidades</strong> = {'['}
                
                    <ContentText>
                        'Typescript', 'ReactJs', 'Git', 'Figma', 'XD'
                    </ContentText>
                
                    {']'}
                
                </ContentText>

                <ContentText>
                
                    <span>return </span>
                
                    <ErrorContent
                        onClick={ (e) => setShowPopUp(!showPopUp) }
                    >
                        resultadoParaVoce
                    </ErrorContent>
                    
                    {'('} <strong>habilidades</strong> {')'}
                
                </ContentText>
                
                {'}'}

                {showPopUp && <ContentPopUp/>}

            </ContentContainer>
        </HomeWrapper>

    )
}

const HomeWrapper = styled.div`
        
`

