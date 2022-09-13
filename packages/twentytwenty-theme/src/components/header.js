import { connect, styled } from "frontity";
import Link from "./link";
import Navigation from "./navigation/navigation";
import SearchButton from "./search/search-button";
import SearchModal from "./search/search-modal";
import MobileSearchButton from "./mobile/search-button";
import MobileMenuButton from "./mobile/menu-button";
import MobileMenuModal from "./mobile/menu-modal";

const Header = ({ state }) => {
  const { title, description } = state.frontity;
  const { headerBg } = state.theme.colors;

  return (
    <PageHeader bg={headerBg} id="site-header">
      <HeaderInner>
        <TitleWrapper>
          {/* Search button on mobile */}
          {/*state.theme.showSearchInHeader && <MobileSearchButton />*/}

          {/* Heading and Description of the site */}
          <TitleGroup className="container">
            <div className="logo">
              <img id="Logo" src="/wp-content/uploads/2019/04/cropped-JCW-logo-cropped.png" alt="JCW Logo" />
            </div>
            <SiteTitle className="title">
              <StyledLink link="/">{title}</StyledLink>
              <SiteDescription className="description">{description}</SiteDescription>
            </SiteTitle>
          </TitleGroup>

          {/* Mobile menu button and modal */}
          <MobileMenuButton />
          <MobileMenuModal />
        </TitleWrapper>

        <HeaderNavigationWrapper>
          {/* Desktop navigation links */}
          <Navigation />
        {/* Desktop search button */}
          {/*state.theme.showSearchInHeader && <SearchButton />*/}
        </HeaderNavigationWrapper>
      </HeaderInner>
      {/* Global search modal */}
      <SearchModal />
    </PageHeader>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const TitleGroup = styled.div`

  @media screen and (max-width: 1200px) {
    display: flex;
    @media screen and (orientation:landscape) {
      display: flex;
    }
  }

  @media (min-width: 1200px) {
    align-items: baseline;
    display: grid;
    grid-template-columns:25% 75%;
    gap: 0px 0px;
    grid-template-areas:
      "logo title";
    align-items: center;
    width: 60rem;

  .logo {
    grid-area: logo;
    position: absolute;
    top: 0px;
  }

  .title {
    grid-area: title;
    width: 100%;
    font-size: 1.8rem;
    line-height: .9em;
    margin-top: 15rem;
    > a::after {
      content: " Human Experience Design";
      font-weight: 300;
    }
  }

  .description { width: max-content; font-size: 75%; line-height: .8em; }

  #Logo {
    max-width: 20rem;
  }
}
@media (max-width: 1200px) {
  #Logo {
    max-width: 15rem;
    height: 8rem;
  }
  .title {
    font-size: 1.8rem;
  }
  .description {
    font-size: 1.2rem;
  }
}
@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }
  .description {
    font-size: 2.1rem;
  }
}
@media (max-width: 375px) {
  .description {
    font-size: 2rem;
  }
}
@media (max-width: 320px) {
  .description {
    font-size: 1.6rem;
  }
}

`;

const TitleWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0 4rem;
  width: 100%;

  @media (min-width: 1200px) {
    width: auto;
    margin-right: 4rem;
    max-width: 50%;
    padding: 0;
    text-align: left;
  }

  @media (max-width: 1200px) {
    justify-content: unset;
    padding: unset;
  }

`;

const PageHeader = styled.header`
  background: #222;
  position: relative;
  margin-bottom: 5rem;
  height: 22rem;
  position: fixed;
  z-index: 99;
  width: 100%;
  transition: all 0.15s linear;

  @media screen and (min-width: 1200px) {
    &.scroll {
      height: 9rem;
    }
    &.scroll .container {
      display: flex;
      flex-direction: row;
      align-items: flex-start !important;
    }
    &.scroll .logo {
      position: relative;
      #Logo {
        max-width: 8rem;
      }
    }
    &.scroll .title {
      margin-top: 2rem;
    }
  }

  @media (max-width: 1200px) {
    height: 9rem;
    margin-bottom: 0px;
    @media screen and (orientation:landscape) {
      height: 8rem;
    }
  }
`;

const HeaderInner = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0;
  z-index: 100;
  margin-left: auto;
  margin-right: auto;
  max-width: 100vw;

  @media (min-width: 1200px) {
    width: 100%;
  }
`;

const SiteTitle = styled.h1`
  font-size: 2.1rem;
  font-weight: 600;
  line-height: 1;
  margin: 0;
  color: #ddd;

  @media (max-width: 1200px) {
    margin: 1rem 0 0 2.1rem;
  }
  @media (min-width: 1200px) {
    margin: 1rem 0 0 2.1rem;
    font-size: 16px;
    font-weight: 700;
  }
`;

const SiteDescription = styled.div`
  margin: 0;
  margin-top: 1rem;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: -0.0311em;

  @media (min-width: 1200px) {
    display: block;
    font-size: 14px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;

  &:hover {
    text-decoration: underline;
  }
`;

const HeaderNavigationWrapper = styled.div`
  display: none;

  @media (min-width: 1200px) {
    align-items: center;
    display: flex;
  }
`;
