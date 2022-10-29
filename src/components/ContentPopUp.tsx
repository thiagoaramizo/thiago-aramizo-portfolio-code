import styled from "styled-components"
import { VscLightbulbAutofix, VscLinkExternal } from "react-icons/vsc";
import { Link } from "react-router-dom";


export const ContentPopUp = () => {

    return (
        <ContentPopUpWrapper>
            <div className="popupHeader"><VscLightbulbAutofix color="yellow"/> Correção rápida</div>
            <div className="popupBody">
                <p>Você deve importar de 'NovaOportunidade'.</p>
            </div>
            <div className="popupFooter">
                <Link target='_blank'
                    to={'https://wa.me/5534998148911?text=Ol%C3%A1%21+Gostaria+de+implementar+a+NovaOportunidade%21'} >
                    Implementar e importar 'NovaOportunidade' <VscLinkExternal/>
                </Link>
            </div>
        </ContentPopUpWrapper>
    )
}

const ContentPopUpWrapper = styled.div`
    border: 2px solid #778;
    background-color: #33333f;
    max-width: 600px;
    margin-left: 24px;
    -webkit-animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
	animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;

    & div {
        
        padding: 12px;
        display: flex;

        &.popupHeader {
            font-size: 14px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-items: center;
            gap: 8px;
            font-family: 'Inter', sans-serif;
            font-weight: 300;
            
        }
        &.popupBody {
            border-top: 1px solid #778;
            line-height: 24px;
        }

        &.popupFooter {
            border-top: 1px solid #778;
            background-color: rgba(255,255,255, 0.05);
            font-family: 'Inter', sans-serif;
            font-size: 14px;


            & a {
                color: #88c1ff;
                text-decoration: none;
                flex-direction: row;
                align-items: center;
                justify-items: center;
                gap: 8px;

                &:hover {
                    background-color: rgba(255,255,255, 0.1);
                }
            }
        }
    }

    @keyframes swing-in-top-fwd {
        0% {
            -webkit-transform: rotateX(-100deg);
                    transform: rotateX(-100deg);
            -webkit-transform-origin: top;
                    transform-origin: top;
            opacity: 0;
        }
        100% {
            -webkit-transform: rotateX(0deg);
                    transform: rotateX(0deg);
            -webkit-transform-origin: top;
                    transform-origin: top;
            opacity: 1;
        }
    }
`