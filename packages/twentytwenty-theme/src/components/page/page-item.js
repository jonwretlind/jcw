import { connect, styled } from "frontity";
import Link from "../link";
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
  width: 100%;
`;

export const PageHeader = styled.header`
  background-color: #fff;
  margin: 0;
  padding: 4rem 0;
  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`;

export const SectionContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  text-align: left;
  -webkit-transition: all 0.15s linear;
  transition: all 0.15s linear;
`;

export const PageTitle = styled.h1`
    font-weight: 100;
    color: #C55400;
    letter-spacing: -6px;
    word-spacing: 0.1em;

    span {
      color: #777;
    }
`;

export const PageInner = styled(SectionContainer)`
  text-align: left;
  -webkit-transition: all 0.15s linear;
  transition: all 0.15s linear;
  margin-top: 2em;
  max-width: 93rem;

  @media (max-width: 768px) {
    margin-top: 0.5em;
  }
`;

export const EntryContent = styled.div`
  line-height: 1.5;
  font-family: inherit;
  letter-spacing: normal;
  max-width: 66%;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
  @media (max-width: 768px) {
    padding-left: 2rem;
  }

  > *:first-of-type {
    margin-top: 0;
  }

  h2 {
      opacity: 0;
      animation: head-fade-in;
      animation-duration: 0.5s;
      animation-timing-function: ease-in;
      animation-fill-mode: forwards;
      display: block;
      left: -0.3rem;
      position: relative;
  }

  @keyframes head-fade-in {
    from    { opacity: 0; transform: translateX( -50px); }
    to      { opacity: 1; transform: translateX(   0px); }
  }

  h2, .heading-size-2 {
    font-size: 5rem;
    font-weight: 100;
    color: #C55400;
    letter-spacing: -0.3rem;
    word-spacing: 0.7rem;
  }
  @media (max-width: 1200px) {
    h2 {
          font-size: 42px;
      }
    }

  h3, .heading-size-3 {
      font-size: 2rem;
      font-weight: 500;
      color: #333;
  }
  @media (max-width: 768px) {
    h4 {
          font-size: 18px;
      }
    }

  h4, .heading-size-4 {
      font-size: 1.7rem;
      font-weight: 500;
      color: #C55400;
  }
  @media (max-width: 768px) {
    h4 {
          font-size: 16px;
      }
    }



  li {
      font-size: 1.4rem;
      line-height: 1.3;
      margin: 0.5rem 0 0 2rem;
      color: #333;
      margin-bottom: 1rem;
  }
  @media (max-width: 768px) {
    li {
          font-size: 14px;
      }
    }

  p, .btn-container, ul, ol, h3, h4, h5, h6 {
      display: block;
      position: relative;
      opacity: 0;
      animation: slide-up;
      animation-timing-function: ease-in;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
  }
  @media (max-width: 1200px) {
    p, .btn-container, ul, ol, h3, h4, h5, h6 {
          font-size: 120%;
    }
    li {
          font-size: 100%;
      }
    }
  @media (max-width: 768px) {
    p, .btn-container, ul, ol {
          font-size: 145%;
    }
    h3, h4 {
          font-size: 180%;
    }
    li {
          font-size: 100%;
      }
    }

  @keyframes slide-up {
    0%      { opacity: 0; transform: translateY( 20px) ;}
    100%    { opacity: 1; transform: translateY(  0px );}
  }

  .btn-container {
    display: flex;
    font-size: 16px;
    padding-top: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      flex-direction: column;
      width: 100%;
      justify-items: flex-start;
    }

    button {
      padding: .7rem 3rem;
      background-color: #C55400;
      color: white;
      &:hover {
        background-color: #222;
      }
    }
    a:last-child > button {
      margin-left: 2rem;
    }
    @media (max-width: 768px) {
      button {
        &:last-child {
          margin-top: 2rem;
          margin-left: unset;
        }
      }
    }
  }
`;
