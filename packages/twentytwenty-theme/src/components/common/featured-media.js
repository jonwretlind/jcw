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
const FeaturedMedia = ({ state, id, className }) => {
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
    <ImgContainer className="img-container">
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
    </ImgContainer>
  );
};

export default connect(FeaturedMedia);


const ImgContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  z-index: -1;
`;

const Figure = styled.figure`
  position: relative;
`;

const Image = styled(Img)`
  margin: 0 auto;
  display: block;
  object-fit: cover;
  width: auto;
  padding: 2em;
`;
