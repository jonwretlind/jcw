import { connect, styled } from "frontity";
import Img from "@frontity/components/image";
import SectionContainer from "../styles/section-container";

/**
 * The featured image/video of the post.
 *
 * @param props -
 * - `state`: The Frontity state
 * - `id`: The ID of the featured image/video.
 * - `className`: Required in order to wrap the component with `styled()`.
 * @returns React element.
 */
const PostFeaturedMedia = ({ state, id, className }) => {
  const media = state.source.attachment[id];

  if (!media) return null;

  const srcset =
    Object.values(media.media_details.sizes)
      // Get the url and width of each size.
      .map((item) => [item.source_url, item.width])
      // Recude them to a string with the format required by `srcset`.
      .reduce(
        (final, current, index, array) =>
          final.concat(
            `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
          ),
        ""
      ) || null;
  return (
    <Figure id="image" className={className}>
      <SectionContainer size="medium">
        <Image
          alt={media.title.rendered}
          src={media.source_url}
          srcSet={srcset}
          rel="preload"
        />
      </SectionContainer>
    </Figure>
  );
};

export default connect(PostFeaturedMedia);

const Figure = styled.figure`
  position: relative;
  border-left: 1px solid #eee;
  background: linear-gradient(120deg, #ddd, #fff);
  width: calc(50% + 80px);
  animation: fadein;
  animation-duration: 0.5s;
  animation-timing-function: ease-in;
  right: 0px;
  height: 80vh;
  display: flex;
  align-items: center;
  padding-bottom: 15%;
  padding-right: 37px;

  @keyframes fadein {
    from   { opacity: 0; width: 0%; }
    to     { opacity: 1; width: 80%; }
  }
  @media (max-width: 1000px) {
    width: 100%;
    height: 40vh;
    padding-bottom: unset;
    padding-right: unset;
  }
`;

const Image = styled(Img)`
  margin: 0 auto;
  display: block;
  height: 40vh;
  max-width: 90%;
  object-fit: contain;
  width: auto;

  @media (max-width: 1000px) {
    height: 250px;
  }
`;
