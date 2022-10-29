import classNames from "classnames"
import { ReactNode } from "react"
import styled from "styled-components"

interface ContentTextProps {
    children: ReactNode,
    breakline?: boolean
    color?: boolean
}

export const ContentText = ({ children, breakline, color }: ContentTextProps) => {

    return (
        <ContentTextWrapper className={classNames({
            'breakline' : breakline,
            'color': color
        })}>
            {children}
        </ContentTextWrapper>
    )

}

const ContentTextWrapper = styled.div`
    line-height: 24px;
    padding-left: 12px;
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    & span {
        color: #aaf;
        font-weight: 600;
    }
    
    & strong {
            font-weight: bold;
    }

    &.breakline {
        padding-bottom: 24px;
    }

    &.color {
        color: #e07ef2;
        font-weight: 600;
    }

    & a {
        color: inherit;
        text-decoration: none;
        flex-direction: row;
        align-items: center;
        justify-items: center;
        gap: 4px;

        &:hover {
            background-color: rgba(255,255,255, 0.1);
        }

        & svg {
            width: 12px;
            height: 12px;
        }
    }
`
