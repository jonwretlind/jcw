import { styled, connect } from "frontity";
import Link from "./link";
import SectionContainer from "./styles/section-container";
import Social from "./common/social"

// Component that provides scroll to top functionality
const BackToTop = () => {
  // scroll to top function
  const scrollToTop = (event) => {
    // prevent the default behaviors
    event.preventDefault();
    // scroll to the top smoothly
    scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <a href="#site-header" onClick={scrollToTop} style={{ cursor: "pointer" }}>
      <span style={{ marginRight: 8 }}>To the top</span>
      <span className="bot-arrow" aria-hidden="true">
        ↑
      </span>
    </a>
  );
};

const Footer = ({ state }) => {
  const currentYear = new Date().getFullYear();
  const { footerBg } = state.theme.colors;

  return (
    <SiteFooter bg={footerBg} role="contentinfo">
      <SiteFooterInner>
        <Credits>
          <Copyright>
            &copy; {currentYear}{" "}
            <Link link={state.frontity.url}>{state.frontity.title}</Link>
          </Copyright>
        </Credits>
        <Social />
        <BackToTop />
      </SiteFooterInner>
    </SiteFooter>
  );
};

export default connect(Footer);

const SiteFooterInner = styled(SectionContainer)`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const SiteFooter = styled.footer`
  margin-top: 5rem;
  padding: 1rem 0;
  background-color: #1e2a34;
  color: #fff;
  position: fixed;
  width: 100vw;
  bottom: 0px;
  z-index: 10;

  @media (min-width: 700px) {
    margin-top: 8rem;
    font-size: 1.2rem;
  }
  @media (max-width: 768px) {
    padding-left: 3rem;
    padding-right: 3rem;
    font-size: 1.8rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    color: inherit;
  }
`;

const Credits = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
  @media (max-width: 768px) {
    max-width: 25%;
  }
`;

const Copyright = styled.p`
  font-weight: 300;
  margin: 0;
  font-size: 1rem;

  @media (min-width: 700px) {
    font-weight: 300;
  }
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const PoweredBy = styled.p`
  color: #6d6d6d;
  display: none;
  margin: 0 0 0 2.4rem;

  @media (min-width: 700px) {
    display: block;
  }
`;
