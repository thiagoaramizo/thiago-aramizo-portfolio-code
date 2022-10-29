import { NavLink } from "react-router-dom";
import styled from "styled-components"
import { VscFile, VscFiles, VscGist } from "react-icons/vsc";
import { useContext, useEffect, useState } from "react";
import  classnames from 'classnames'

import { AppContext } from "../context/AppContext";
import { NavigatorFolder } from "./NavigatorFolder";


export const Navigator = () => {

    const [showItens, setShowItens] = useState(true)
    const {projetos} = useContext(AppContext)

    useEffect( () => {
        const windowWidth = window.screen.width
        const screenWidth = window.innerWidth
        const breakpoint = 600
        
        if ( windowWidth < breakpoint || screenWidth < breakpoint ) {
            setShowItens( false )
        }
    }, [])

    return (
        <NavigatorWrapper>
            <div className="side-nav">
                <button type="button" 
                    className={ classnames( {'active': showItens })}
                    onClick={ e => setShowItens(!showItens)}
                >
                    <VscFiles />
                </button>
            </div>
            
            {showItens ? (<ul>

                <span className="title">EXPLORADOR</span>

                <li>
                    <NavLink to={'/'} end>
                        <VscFile />
                        <span>Index.tsx</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/courses'}>
                        <VscFile />
                        <span>cursos.ts</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/projects'} end>
                        <VscGist color="#ff4fdf"/>
                        <span>projetos.html</span>
                    </NavLink>
                </li>

                <NavigatorFolder />


            </ul>) : ''}
            
        </NavigatorWrapper>
    )
}

const NavigatorWrapper = styled.div`
    
    font-size: 14px;
    display: flex;
    flex-direction: row;
    height: 100%;

    & div.side-nav {

        display: flex;
        flex-direction: column;
        background-color: rgba(255, 255, 255, 0.03);

        & button {
            width: 44px;
            height: 44px;
            font-size: 24px;
            color: rgba(255, 255, 255, 0.3);
            background-color: transparent;
            border: none;
            cursor: pointer;

            &:hover, &.active {
                background-color: rgba(255, 255, 255, 0.1);
                color: #fff;
            }
        }

    }

    & ul {

        background-color: rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        min-width: 200px;

        & span.title {
            font-size: 11px;
            padding: 12px;
        }
    
        & li {
            
            & a {
                text-decoration: none;
                color: inherit;
                display: flex;
                gap: 4px;
                padding: 8px 16px 8px 24px;

                svg {
                    color: yellow;
                }

                &:hover {
                    background-color: rgba(255, 255, 255, 0.05);
                }

                &.active {
                    background-color: rgba(255, 255, 255, 0.1);
                }
            }

        }

    }
`