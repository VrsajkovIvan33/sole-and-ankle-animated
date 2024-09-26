import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

const NavLink = ({ href, children }) => {
    return (
        <NavlinkWrapper>
            <Link href={href}>{children}</Link>
            <BoldLink href={href}>{children}</BoldLink>
        </NavlinkWrapper>
    );
}

const Link = styled.a`
    display: block;
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--color-gray-900);
    font-weight: ${WEIGHTS.medium};

    transform: translateY(0);
    transition: transform 200ms;
    will-change: transform;
`;

const BoldLink = styled(Link)`
    position: absolute;
    font-weight: ${WEIGHTS.bold};
`;

const NavlinkWrapper = styled.div`
    position: relative;
    overflow: hidden;

    &:first-of-type > ${Link}  {
        color: var(--color-secondary);
    }

    &:hover > ${Link} {
        transform: translateY(-100%);
    }
`;

export default NavLink;