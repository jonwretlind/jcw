import { styled, connect, decode } from "frontity";
import { Fragment, useEffect } from "react";
import Article from "./portfolio-item";
import PortfolioHeader from "./portfolio-header";
import Pagination from "./portfolio-pagination";
import PostSeparator from "../post/post-separator";
import Post from "../post";

const Portfolio = ({ state, showExcerpt, showMedia }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  const { primary } = state.theme.colors;

  // Whether the show the excerpt instead of the full content
  // If passed as prop, we'll respect that. Else, we'll use the theme settings
  const _showExcerpt = showExcerpt || !state.theme.showAllContentOnPortfolio;

  useEffect(() => {
    Post.preload();
  }, []);

  return (
    <div data-isportfolio="true" >
      <>
      {/* Iterate over the items of the list. */}
      {data.items.map(({ type, id }, index) => {
        const isLastArticle = index === data.items.length - 1;
        const item = state.source[type][id];
        // Render one Item component for each one.
        return (
          <Fragment key={item.id}>
            <Article
              key={item.id}
              item={item}
              showExcerpt={_showExcerpt}
              showMedia={showMedia}
              index={index}
            />
          </Fragment>
        );
      })}
      </>
    </div>
  );
};

export default connect(Portfolio);
