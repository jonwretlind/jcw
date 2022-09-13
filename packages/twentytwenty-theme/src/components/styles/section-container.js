import { styled } from "frontity";

// Header sizes bases on style.css
const maxWidths = {
  thirds: "33vw",
  thin: "50rem",
  small: "80rem",
  medium: "100rem",
};

const getMaxWidth = (props) => maxWidths[props.size] || maxWidths["medium"];

const SectionContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: ${getMaxWidth};
`;

export default SectionContainer;
