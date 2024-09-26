import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

const NavLink = ({ href, children }) => {
    return (
        <NavlinkWrapper>
            <Link href={href}>{children}</Link>
        </NavlinkWrapper>
    );
}

const Link = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
`;

const NavlinkWrapper = styled.div`
  &:first-of-type > ${Link}  {
    color: var(--color-secondary);
  }
`;

export default NavLink;