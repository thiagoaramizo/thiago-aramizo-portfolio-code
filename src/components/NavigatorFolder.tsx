import { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { VscGist, VscChevronRight, VscChevronDown } from "react-icons/vsc";

import { AppContext } from "../context/AppContext"


export const NavigatorFolder = () => {
    
    const { projetos } = useContext(AppContext)
    const [open, setOpen] = useState(true)

    return (
        <NavigatorFolderWrapper>
            <button type="button" onClick={ e => setOpen(!open) }>
                { open ? <VscChevronDown/> : <VscChevronRight/> }
                projetos
            </button>
            
            {open && projetos.map( (projeto, i) => {
                return (
                    <li key={projeto.code}>
                        <NavLink to={`/project/${projeto.code}`}>
                            <VscGist color="#ff4fdf"/>
                            {projeto.code}.html
                        </NavLink>
                    </li>
                )
            } )}

        </NavigatorFolderWrapper>
    )    
}

const NavigatorFolderWrapper = styled.ul`
    
    & button {
        background-color: #292933;
        border: none;
        color: inherit;
        font-size: 15px;
        display: flex;
        gap: 4px;
        padding: 6px 16px 6px 24px;
        cursor: pointer;

        &:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }
    }

    /* Herda as prorpiedades do pai */
    & li a {
        background-color: #292933;
        position: relative;

        &::before {
            content: '';
            width: 12px;
        }

        &::after {
            content: '';
            display: block;
            height: 100%;
            width: 1px;
            background-color: #555;
            position: absolute;
            top: 0;
            left: 28px;
            
        }
    }
`