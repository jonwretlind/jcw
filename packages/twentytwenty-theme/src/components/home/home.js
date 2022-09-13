import { styled, connect } from "frontity";
import { useEffect } from "react";
import BackgroundMedia from "../common/background-media";


const HomePage = ({ state, id, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the HomePage.
  const page = state.source.page[data.id];

  // Get the data of the author.
  // const author = state.source.author[HomePage.author];
  // Get a human readable date.
  // const date = new Date(HomePage.date);

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;
  /**
   * Once the HomePage has loaded in the DOM, prefetch both the
   * home HomePages and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
  }, []);

  // Load the HomePage, but only if the data is ready.
  return data.isReady ? (
    <HomePageArticle data-ishome="true">
      <Header>
        <SectionContainer>

          <HomePageTitle
            as="h1"
            className="heading-size-1"
            dangerouslySetInnerHTML={{ __html: page.title.rendered }}
          />

        </SectionContainer>
      </Header>

      {/*
       * If the want to show featured media in the
       * list of featured Pages, we render the media.
       */}
      {state.theme.featuredMedia.showOnPage && (
        <BackgroundImage id={page.featured_media} isSinglePage={true} />
      )}

      <HomePageInner size="medium">
          <EntryContent>
            <Html2React html={page.content.rendered} />
          </EntryContent>
        </HomePageInner>
    </HomePageArticle>
  ) : null;
};


export const HomePageHeader = styled.header`
  text-align: left;
  width: 100%;
`;

// Header sizes bases on style.css
const maxWidths = {
  thin: "58rem",
  small: "80rem",
  medium: "100rem",
};

const getMaxWidth = (props) => maxWidths[props.size] || maxWidths["medium"];

export const SectionContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  text-align: left;
  -webkit-transition: all 0.15s linear;
  transition: all 0.15s linear;
`;

export const HomePageTitle = styled.h1`
    font-weight: 100;
    color: #C55400;
    letter-spacing: -6px;
    word-spacing: 0.1em;

    span {
      color: #777;
    }
`;

export const HomePageInner = styled(SectionContainer)`
  text-align: left;
  -webkit-transition: all 0.15s linear;
  transition: all 0.15s linear;
  margin-top: 2em;

  @media (max-width: 768px) {
    margin-top: 0.5em;
  }
`;

export const EntryContent = styled.div`
  line-height: 1.5;
  font-family: inherit;
  letter-spacing: normal;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
  @media (max-width: 768px) {
    padding-left: 2rem;
  }

  > *:first-of-type {
    margin-top: 0;
  }

  figure {
    max-width: 100%;
  }

  p, .btn-container, ul, ol, h3, h4, h5, h6 {
      display: block;
      position: relative;
      opacity: 0;
      animation: slide-up;
      animation-timing-function: ease-in;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
      max-width: 75%;
  }
  @media (max-width: 1200px) {
    .btn-container {
      display: flex;
    }
    p {
      max-width: 65%;
    }
  }
  @media (max-width: 768px) {
    p, .btn-container, ul, ol, h3, h4, h5, h6 {
          font-size: 145%;
      }
    p {
      max-width: 65%;
    }
  }
  @keyframes slide-up {
    0%      { opacity: 0; transform: translateY( 20px) ;}
    100%    { opacity: 1; transform: translateY(  0px );}
  }
`;

const BackgroundImage = styled(BackgroundMedia)`
  margin-top: 0 !important;
  position: absolute;

`;

const Header = styled(HomePageHeader)`
  margin: 0;
`;

const HomePageArticle = styled.content`
  padding-top: 0 !important;
  min-height: 80vh;
  margin-top: 23vh;
  margin-bottom: 100px;

  @media (max-width: 650px) {
    max-width: 470px;
  }
  @media (max-width: 1200px) {
    margin-top: 50px !important;
    @media screen and (orientation:landscape) {
      margin-top: 40px;
    }
  }

  figure {
    position: absolute;
    right: -175px;
    top: 350px;
    opacity: 0;
    width: 500px;
    overflow: hidden;

    &.loaded {
      animation: ppl;
      animation-timing-function: ease-in;
      animation-delay: 1s;
      animation-duration: .5s;
      animation-fill-mode: forwards;
    }

    img {
        transform: rotate(-30deg);
      }

    @keyframes ppl {
      0%    { opacity: 0; transform: scale(1.8); }
      100%  { opacity: 1; transform: scale(1.3); }
    }
  }

  @media screen and (max-width: 1200px) {
    figure {
      right: -175px;
      top: 350px;
      width: 400px;
    }
    @media screen and (orientation: landscape) {
      figure {
        top: 42vh;
      }
    }
  }
  @media screen and (max-width: 768px) {
    figure {
      right: -22vw;
      top: 21vh;
      width: 400px;
    }
  }
  @media screen and (max-width: 675px) {
    figure {
      right: -266px;
      top: 21vh;
      width: 400px;
    }
  }
`;

export default connect(HomePage);
