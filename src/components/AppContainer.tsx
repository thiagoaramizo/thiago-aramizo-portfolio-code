import { ReactNode } from "react"
import styled from "styled-components"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Navigator } from "./Navigator"

interface AppContainerProps {
    children: ReactNode
}

export const AppContainer = ({ children }: AppContainerProps) => {

    return (
        <AppWrapper>
            <div className={"container"}>
                <header>
                    <Header />
                </header>
                <nav>
                    <Navigator />
                </nav>
                <main>
                    {children}
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </AppWrapper>
    )

}

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background: rgb(0,113,188);
  background: linear-gradient(-60deg,  #853ebc 0%, #0764a1 100%);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100vw;
    height: 100%;
    background: url('background.svg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: bottom;
  }
  
  & div.container {
    background-color: #33333f;
    color: #f0f0ff;
    width: calc(100% - 48px);
    max-width: 1080px;
    height: calc(100vh - 64px);
    border-top: 0.5px solid #556;
    border-left: 0.5px solid #556;
    border-radius: 8px;
    overflow: hidden;
    display: grid;
    grid-template-areas: 'head head' 'nav main' 'foot foot';
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
    box-shadow: 1px 1px 32px rgba(0,0,0, 0.3);
    z-index: 999;
    -webkit-animation: scale-up-bottom 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) 100ms both;
	animation: scale-up-bottom 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) 100ms both;

    & header {
        grid-area: head;
    }

    & nav {
        grid-area: nav;
    }

    & main {
        grid-area: main;
        overflow-y: auto;
    }


    & footer {
        grid-area: foot;
    }


    @-webkit-keyframes scale-up-bottom {
        0% {
            -webkit-transform: scale(0.1);
                    transform: scale(0.1);
            -webkit-transform-origin: 50% 100%;
                    transform-origin: 50% 100%;
        }
        100% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-transform-origin: 50% 100%;
                    transform-origin: 50% 100%;
        }
        }
        @keyframes scale-up-bottom {
        0% {
            -webkit-transform: scale(0.1);
                    transform: scale(0.1);
            -webkit-transform-origin: 50% 100%;
                    transform-origin: 50% 100%;
        }
        100% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-transform-origin: 50% 100%;
                    transform-origin: 50% 100%;
        }
    }
  }

  
`