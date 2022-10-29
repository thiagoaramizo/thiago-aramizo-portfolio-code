import { ReactNode } from "react"
import styled from "styled-components"

interface ContentTitleProps {
    children: ReactNode
}

export const ContentTitle = ({children}: ContentTitleProps) => {
    return (
        <ContentTitleWrapper>
            {children}
        </ContentTitleWrapper>
    )
}

const ContentTitleWrapper = styled.h1`
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 24px;

        & span {
            font-weight: 400;
            color: #aaf;
            font-weight: bold;
        }

        & strong {
            font-weight: bold;
        }
`