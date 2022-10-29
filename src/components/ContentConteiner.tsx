import { ReactNode } from "react"
import styled from "styled-components"

interface ContentContainerProps {
    children: ReactNode,
    lines: number
}

export const ContentContainer = ({ children, lines }: ContentContainerProps) => {

    const arrayLines = Array.from(Array(lines).keys())

    return (
        <ContentContainerWrapper>
            <Lines>
                {arrayLines.map( line => <span key={line}>{line+1}</span> )}
            </Lines>
            <div className="content">
                {children}
            </div>
        </ContentContainerWrapper>
    )

}

const ContentContainerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 16px;
    font-family: 'Ubuntu Mono', 'Courier New', Courier, monospace;

    & div.content {
        padding: 0 20px;
        max-width: 700px;
    } 
`


const Lines = styled.div`
    width: 20px;
    display: flex;
    flex-direction: column;
    color: #aaaaaf;

    & span {
        text-align: right;
        line-height: 24px;
    }
`