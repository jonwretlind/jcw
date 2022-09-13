import { connect, styled, decode } from "frontity";
import ScreenReaderText from "../styles/screen-reader";
import Link from "../link";

const PostCategories = ({ categories }) => {
  // Remove empty or undefined categories
  const postCategories = categories.filter(Boolean);

  if (postCategories.length === 0) {
    return null;
  }

  return (
    <EntryCategories>
      <ScreenReaderText>Categories</ScreenReaderText>

      <EntryCategoriesInner>
        {postCategories.map((category) => (
          <CategoryTag key={category.id} link={category.link}>
            {decode(category.name)}
          </CategoryTag>
        ))}
      </EntryCategoriesInner>
    </EntryCategories>
  );
};

export default connect(PostCategories);

const EntryCategories = styled.div`
  line-height: 1.25;
  margin-bottom: .5rem;

  @media (min-width: 1000px) {
    margin-bottom: 2rem;
  }
`;

const EntryCategoriesInner = styled.div`
  justify-content: left;
  display: flex;
  flex-wrap: wrap;
`;

const CategoryTag = styled(Link)`
  border-bottom: 0.15rem solid transparent;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.036666667em;
  text-decoration: none;
  text-transform: uppercase;


  transition: border-bottom-color 150ms;
  :hover {
    border-bottom-color: currentColor;
  }
`;
