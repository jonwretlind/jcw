import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "./post-featured-media";
import PostCategories from "./post-categories";
import PostTags from "./post-tags";
import ChevronLeft from "../icons/chevron-left";
import ChevronRight from "../icons/chevron-right";

/**
 * Article Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const PostItem = ({
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
    <Post
      id={"post-" + item.id}
      className={"idx-" + index}
      size="thin"
      >
      <LeftArrow className="arrow left">
        <ChevronLeft className="icon"/>
      </LeftArrow>
      <PostContainer className="post-container">
      <PostHeader className="post-header">
        <SectionContainer className="section-container">
          {/* If the post has categories, render the categories */}
          <PostCategories categories={categories} className="entry-categories" />

          {/* The clickable heading for the post */}
          <PostLink link={item.link} className="post-link">
            <PostTitle
              className="heading-size-1 post-title"
              dangerouslySetInnerHTML={{ __html: item.title.rendered }}
            />
          </PostLink>
          {/* If the post has an excerpt (short summary text), we render it */}
          {content && (
            <PostInner size="thin" className="post-inner">
              {/* TODO: Change this to HTML2React */}
              {/* dangerouslySetInnerHTML={{ __html: content.rendered }} */}
              <Overlay className="overlay"/>
              <EntryContent className="entry-content">
                <Html2React html={content.rendered} />
              </EntryContent>
              {/* If the post has tags, render it */}
              {item.tags && <PostTags tags={tags} className="post-tags"/>}
            </PostInner>
          )}
        </SectionContainer>
      </PostHeader>
      </PostContainer>
      {/*
       * If the want to show featured media in the
       * list of featured posts, we render the media.
       */}
      {state.theme.featuredMedia.showOnArchive && showMedia && (
        <FeaturedMedia id={item.featured_media} />
      )}
      <RightArrow className="arrow right">
        <ChevronRight className="icon"/>
      </RightArrow>
    </Post>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(PostItem);

// All styles :)
export const Post = styled.article`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: flex-start;
  text-align: left;
  justify-content: space-between;
  border: 1px solid #eee;
  box-shadow: 3px 3px 3px #ccc;
  background-color: white;
  margin: 0 auto 2em auto;
  width: 100%;
  z-index: 10;
  overflow: hidden;
  height: 70vh;

  &:not(.active) {
    display: none;
  }

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: start;
  }

  @media (max-width: 700px) {
    height: 80vh;
  }
`;

export const PostContainer = styled.div`
  animation-name: shutter;
  animation-duration: .5s;
  animation-timing-function: ease-in;
  animation-delay: .5s;
  animation-fill-mode: forwards;
  opacity: 0;
  margin-left: 80px;

  @keyframes shutter {
    0%      { opacity: 0; }
    100%    { opacity: 1; }
  }

  @media (max-width: 1000px) {
    width: 80%;
    margin-left: unset;
  }

`;

export const PostHeader = styled.header`
  text-align: left;
  padding: 2em;
  width: 100%;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
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

export const PostTitle = styled.h1`
    font-size: 2rem !important;
`;

const PostLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  display: inline-block;
  &:hover {
    text-decoration: underline;
  }
`;

export const PostInner = styled(SectionContainer)`
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
  width: 40px;
  border: 1px solid #ddd;
  border-right: 3px solid #6d6d6d;
  background-color: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  height: 70vh;

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
  @media (max-width: 700px) {
    height: 80vh;
  }
`;

export const RightArrow = styled.div`
  position: absolute;
  right: 0px;
  width: 40px;
  border: 1px solid #ddd;
  border-left: 3px solid #6d6d6d;
  background-color: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  height: 70vh;

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
  @media (max-width: 700px) {
      height: 80vh;
    }

`;
