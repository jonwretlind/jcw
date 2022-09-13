import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../common/featured-media";
import ChevronLeft from "../icons/chevron-left";
import ChevronRight from "../icons/chevron-right";

/**
 * Article Component
 *
 * It renders the preview of a blog Page. Each blog Page contains
 * - Title: clickable title of the Page
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the Page
 */
const PageItem = ({
  state,
  item,
  libraries,
  showExcerpt,
  showMedia = true,
  index,
}) => {
  // Get all categories
  const allCategories = state.source.category;

  /**
   * The item's categories is an array of each category id
   * So, we'll look up the details of each category in allCategories
   */
  const categories =
    item.categories && item.categories.map((catId) => allCategories[catId]);

  // Get all tags
  const allTags = state.source.tag;

  /**
   * The item's categories is an array of each tag id
   * So, we'll look up the details of each tag in allTags
   */
  const tags = item.tags && item.tags.map((tagId) => allTags[tagId]);

  const content = showExcerpt ? item.excerpt : item.content;
  const { Component: Html2React } = libraries.html2react;

  return (
    <Page
      id={"Page-" + item.id}
      className={"idx-" + index}
      size="thin"
      >
      <LeftArrow className="arrow left">
        <ChevronLeft className="icon"/>
      </LeftArrow>
      <PageContainer>
      <PageHeader>
        <SectionContainer>
            <PageTitle
              className="heading-size-1"
              dangerouslySetInnerHTML={{ __html: item.title.rendered }}
            />
            <PageInner size="thin">
              <EntryContent>
                <Html2React html={content.rendered} />
              </EntryContent>
            </PageInner>
        </SectionContainer>
      </PageHeader>
      </PageContainer>
      {/*
       * If the want to show featured media in the
       * list of featured Pages, we render the media.
       */}
      {state.theme.featuredMedia.showOnPage && showMedia && (
        <FeaturedMedia id={item.featured_media} />
      )}
      <RightArrow className="arrow right">
        <ChevronRight className="icon"/>
      </RightArrow>
    </Page>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(PageItem);

// All styles :)

export const Page = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: flex-start;
  text-align: left;
  justify-content: space-between;
  border: 1px solid #eee;
  box-shadow: 3px 3px 3px #ccc;
  background-color: white;
  margin: 2em auto;
  width: 100%;
  z-index: 10;
  overflow: hidden;
  height: 450px;

  &:not(.active) {
    display: none;
  }

`;

export const PageContainer = styled.div`
  animation-name: shutter;
  animation-duration: 1s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  opacity: 0;

  @keyframes shutter {
    0%      { opacity: 0; }
    100%    { opacity: 1; }
  }
`;

export const PageHeader = styled.header`
  text-align: left;
  padding: 2em;
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
  max-width: ${getMaxWidth};
  text-align: left;
  -webkit-transition: all 0.15s linear;
  transition: all 0.15s linear;
`;

export const PageTitle = styled.h1`
    font-size: 2rem !important;
`;

export const PageInner = styled(SectionContainer)`
  text-align: left;
  -webkit-transition: all 0.15s linear;
  transition: all 0.15s linear;
`;

export const EntryContent = styled.div`
  line-height: 1.5;
  max-width: 58rem;
  font-family: inherit;
  letter-spacing: normal;
  max-width: 350px;

  @media (min-width: 700px) {
    font-size: 1.2rem;
  }

  > *:first-of-type {
    margin-top: 0;
  }

  figure {
    max-width: 100%;
  }
`;

export const LeftArrow = styled.div`
  position: absolute;
  left: 0px;
  width: 150px;
  height: 450px;
  border: 1px solid #ddd;
  border-right: 3px solid #6d6d6d;
  background-color: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    opacity: .3;
    color: #222;
  }

  &:hover {
    background-color: #ddd;
    .icon {
        opacity: .8;
    }
  }
`;

export const RightArrow = styled.div`
  position: absolute;
  right: 0px;
  height: 450px;
  width: 150px;
  border: 1px solid #ddd;
  border-left: 3px solid #6d6d6d;
  background-color: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    opacity: .3;
    color: #222;
    }

  &:hover {
    background-color: #ddd;
    .icon {
        opacity: .8;
    }
  }

`;
