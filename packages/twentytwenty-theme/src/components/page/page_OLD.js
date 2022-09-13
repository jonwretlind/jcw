import { styled, connect } from "frontity";
import { useEffect } from "react";
import FeaturedMedia from "../common/featured-media";
import {
  EntryContent,
  Page as _Page,
  PageHeader,
  PageInner,
  PageTitle,
  SectionContainer,
} from "./page-item"

const Page = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the Page.
  const page = state.source[data.type][data.id];

  // Get the data of the author.
  // const author = state.source.author[Page.author];
  // Get a human readable date.
  // const date = new Date(Page.date);

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
      <Header>
        <SectionContainer>

          <PageTitle
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
        <FeaturedImage id={page.featured_media} isSinglePage={true} />
      )}

      {/* If the Page has an excerpt (short summary text), we render it */}
      {Page.content && (
        <PageInner size="thin">
          <EntryContent>
            <Html2React html={page.content.rendered} />
          </EntryContent>
        </PageInner>
      )}
    </PageArticle>
  ) : null;
};

export default connect(Page);

const Header = styled(PageHeader)`
  background-color: #fff;
  margin: 0;
  padding: 4rem 0;
  @media (min-width: 700px) {
    padding: 8rem 0;
  }
`;

const PageArticle = styled(_Page)`
  padding-top: 0 !important;
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
