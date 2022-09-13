import { connect, styled } from "frontity";
import Link from "../link";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Navigation = ({ state }) => (
  <NavWrapper>
    <MenuNav>
      <Menu>
        {state.theme.menu.map(([name, link]) => {
          // Check if the link matched the current page url
          const isCurrentPage = state.router.link === link;
          console.log(state.router.link, "link = " + link, isCurrentPage);
          return (
            <MenuItem key={name}>
              {/* If link url is the current page, add `aria-current` for a11y */}
              <MenuLink
                link={link}
                aria-current={isCurrentPage ? "page" : undefined}
                rel="prefetch"
              >
                {name}
              </MenuLink>
            </MenuItem>
          );
        })}
      </Menu>
    </MenuNav>
  </NavWrapper>
);

export default connect(Navigation);

const NavWrapper = styled.div`
  align-items: center;
  display: flex;
`;

const MenuNav = styled.nav`
  display: none;
  @media (min-width: 1200px) {
    display: block;
    width: 100%;
  }
`;

const Menu = styled.ul`
  display: flex;
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: -0.0277em;
  flex-wrap: wrap;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  right: 20px;
  top: 20px;

  @media (min-width: 1220px) {
    margin-top: -0.8rem;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: -2.5rem;

      #site-header.scroll & {
        flex-direction: row;
        text-align: center;
        margin-left: 0;
        margin-top: 2rem;
        bottom: 30px;
        top: unset;

        a[aria-current="page"]  {
          border-bottom: 3px solid #ddd;
          border-right: unset;
          font-size: 3rem;
          padding-bottom: 0.8rem;
          &:hover {
            padding-bottom: 0.8rem;
          }
        }
        a {
          padding-bottom: calc(0.9rem + 3px);
        }
        & li a {
          padding: 0 1rem;
        }
        & > li:hover > a {
          border-bottom: 3px solid #C45400;
          border-right: unset;
          padding-bottom: 0.9rem;
        }
      }
  }
`;

const MenuItem = styled.li`
  font-size: inherit;
  line-height: 1.25;
  position: relative;
  margin: 1.15rem 0 0 1.6rem !important;
  font-size: 75%;

  @media (min-width: 1220px) {
    margin: 0.8rem 0 0 2.5rem !important;

    #site-header.scroll & {
        margin-right: 0.8rem !important;
        text-align: center;
    }
  }
`;

const MenuLink = styled(Link)`
  display: block;
  line-height: 1.2;
  text-decoration: none;
  color: #fff;
  border-right: 3px solid transparent;
  padding-right: 20px;

  &:hover,
  &[aria-current="page"] {
    color: #C45400;
    text-decoration: none;
    font-size: 1.8rem;
    border-right: 2px solid #C45400;
  }

  &[aria-current="page"] {
    font-size: 4rem;
    border-right: 3px solid #ddd;
  }
  &[aria-current="page"]:hover {
    color: #6d6d6d;
  }
  #site-header.scroll & {
      padding-right: unset;
  }
`;
