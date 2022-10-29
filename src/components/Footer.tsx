import styled from "styled-components"
import { VscDatabase, VscError, VscWarning, VscSymbolNamespace, VscBellDot, VscFeedback } from "react-icons/vsc";


export const Footer = () => {

    return (
        <FooterWrapper>
            <div className='icons-section'>
                <IconFooter>
                    <VscError/>
                    <p>0</p>
                </IconFooter>
                <IconFooter>
                    <VscWarning/>
                    <p>0</p>
                </IconFooter>
                <IconFooter>
                    <VscDatabase/>
                    <p>Conectado</p>
                </IconFooter>
            </div>

            <div className='info-section'>
                <span>UTF-8</span>
                <IconFooter>
                    <VscSymbolNamespace/>
                    <p>TypeScript</p>
                </IconFooter>
                <VscFeedback />
                <VscBellDot/>
            </div>
            
        </FooterWrapper>
    )

}

const FooterWrapper = styled.div`
    padding: 8px;
    font-size: 12px;
    font-weight: 300;
    background-color: #11111f;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    justify-content: flex-end;

    & div.icons-section {
        display: flex;
        gap: 8px;
        padding-left: 8px;
    }

    & div.info-section {
        display: flex;
        gap: 12px;
        justify-content: end;
        padding-right: 8px;
    }

`

const IconFooter = styled.span`
    display: flex;
    gap: 4px;
`