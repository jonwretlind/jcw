import { styled, connect } from "frontity";
import { useEffect } from "react";
import FeaturedMedia from "../common/featured-media";
import Switch from "@frontity/components/switch";
import {
  EntryContent,
  Page as _Page,
  PageHeader,
  PageInner,
  PageTitle,
  SectionContainer,
} from "./page-item"
import AnimatedCircles from "../common/animated-circles";
import AnimatedConstellation from "../common/animated-constellation";
import AnimatedSquares from "../common/animated-squares";

const Page = ({ state, id, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the Page.
  const page = state.source[data.type][data.id];

  // Get the data of the author.
  // const author = state.source.author[Page.author];
  // Get a human readable date.
  // const date = new Date(Page.date);
/*
    let component = "";
    let bodyClass = document.querySelector('body');
      switch ( bodyClass ) {
        case "services" :
          component = "<AnimatedConstellation />";
          break;
        default :
          component = "<AnimatedCircles />";
      }
      return component;
*/
let pg = state.router.link.match(/[^\/]+/g);

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  /**
   * Once the Page has loaded in the DOM, prefetch both the
   * home Pages and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
  }, []);

  // Load the Page, but only if the data is ready.
  return data.isReady ? (
    <PageArticle>
        <PageInner size="thin">
          <EntryContent>
            <Html2React html={page.content.rendered} />
          </EntryContent>
        </PageInner>
        {/*
         * If the want to show featured media in the
         * list of featured Pages, we render the media.
         */}
        {state.theme.featuredMedia.showOnPage && (
          <>
            <Switch>
              <AnimatedConstellation when={pg == "services"} />
              <AnimatedSquares when={pg == "about"} />
              <AnimatedCircles when={pg == "contact"} />
            </Switch>
            <FeaturedMedia id={page.featured_media} isSinglePage={true} />
          </>
        )}
    </PageArticle>
  ) : null;
};

export default connect(Page);


const PageArticle = styled(_Page)`
  padding-top: 0 !important;
  min-height: 80vh;
  margin-bottom: 100px;

  figure {
    position: absolute;
    right: -10vw;
    top: 31vh;
    opacity: 0;
    width: 500px;
    overflow: hidden;
    z-index: -1;

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
  }
  @media screen and (max-width: 768px) {
    figure {
      right: -220px;
      top: 230px;
      width: 400px;
    }
  }
  @media screen and (max-width: 520px) {
    figure {
      right: -12vw;
      top: 13vh;
      width: 43vw;
    }
  }
`;


const FeaturedImage = styled(FeaturedMedia)`
  margin-top: 0 !important;
  position: relative;

  > div {
    position: relative;
  }

  &:before {
    background: #fff;
    content: "";
    display: block;
    position: absolute;
    bottom: 50%;
    left: 0;
    right: 0;
    top: 0;
  }
`;

const Animation = styled.div`

`;
