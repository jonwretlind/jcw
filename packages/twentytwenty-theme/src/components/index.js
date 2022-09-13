import { connect, Global, Head, styled } from "frontity";
import RobotIcon from "./icons/robot.js"
import Switch from "@frontity/components/switch";
import Footer from "./footer";
import globalStyles from "./styles/global-styles";
import FontFaces from "./styles/font-faces";
import Header from "./header";
import Archive from "./archive";
import Portfolio from "./portfolio";
import Loading from "./loading";
import Post from "./post";
import Page from "./page";
import HomePage from "./home";
import SearchResults from "./search/search-results";
import SkipLink from "./styles/skip-link";
import MetaTitle from "./page-meta-title";
import PageError from "./page-error";
import JCW from "../js/jcw";
import JcwStyle from "../js/jcw_css";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add global styles for the whole site, like body or a's or font-faces.
        Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Loader className="loader">
        <RobotIcon />
      </Loader>
      <Global styles={globalStyles(state.theme.colors)} />
      <FontFaces />
      <JcwStyle />

      {/* Add some metatags to the <head> of the HTML. */}
      <MetaTitle />
      <JCW />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>
      {/* Accessibility: Provides ability to skip to main content */}
      <SkipLink as="a" href="#main">
        Skip to main content
      </SkipLink>

      <div style={{ minHeight: "calc(100vh - 190px)" }}>
        {/* Add the header of the site. */}
        <Header />

        {/* Add the main section. It renders a different component depending
        on the type of URL we are in. */}
        <Main id="main">
          <Switch>
            <Loading when={data.isFetching} />
            <SearchResults when={data.isSearch} />
            <HomePage when={data.isHome} />
            <Portfolio when={data.isArchive} />
            <Archive when={data.isPostArchive} />
            <Page when={data.isPage} />
            <Post when={data.isPostType} />
            <PageError when={data.isError} />
          </Switch>
        </Main>
      </div>

      <Footer />
    </>
  );
};

export default connect(Theme);

const Main = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 93rem;
  margin: 0 auto;
`;


const Loader = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  content: " ";
  background-color: #222;
  z-index: 100;
  display: flex;
  justify-content: center;
`;
