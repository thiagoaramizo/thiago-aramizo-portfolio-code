import styled from "styled-components"

export const Header = () => {

    return (
        <HeaderWrapper>
            <div>
                <CircularButton/>
                <CircularButton/>
                <CircularButton/>
            </div>
            <h1>thiago-aramizo-portfolio</h1>
        </HeaderWrapper>
    )

}

const HeaderWrapper = styled.div`
    padding: 8px;
    font-size: 12px;
    font-weight: 300;
    background-color: #11111f;
    display: grid;
    grid-template-columns: 60px 1fr 60px;
    align-items: center;

    & h1 {
        text-align: center;
    }
`

const CircularButton = styled.div`
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.2);
    margin-right: 8px;
`