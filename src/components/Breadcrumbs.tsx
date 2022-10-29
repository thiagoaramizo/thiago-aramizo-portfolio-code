import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

interface BreadcrumbsProps {
    name: string,
    to: string
}

export const Breadcrumbs = ( {name, to}: BreadcrumbsProps) => {

    return (
        <BreadcrumbsWrapper>
            <ul>
                <li>
                    <Link to={to}>{name}</Link>
                </li>
            </ul>
        </BreadcrumbsWrapper>
    )

}

const BreadcrumbsWrapper = styled.nav`

    padding: 8px;

    & a {
        text-decoration: none;
        color: #aaaaaf;
        font-size: 12px;
    }
`