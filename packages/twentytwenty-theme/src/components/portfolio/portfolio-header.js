import { styled } from "frontity";
import SectionContainer from "../styles/section-container";

const Header = ({ label, children, labelColor }) => {
  return (
    <PortfolioHeader>
      <PortfolioHeaderInner>
        <PortfolioTitle>
          <ColoredText color={labelColor}>{label}: </ColoredText>
          {children}
        </PortfolioTitle>
      </PortfolioHeaderInner>
    </PortfolioHeader>
  );
};

export default Header;

const PortfolioHeader = styled.header`
  color: #000000;
  text-align: center;
  background-color: #fff;
  padding: 4rem 0;

  @media (min-width: 700px) {
    padding: 8rem 0;
  }
`;

const PortfolioHeaderInner = SectionContainer;

const PortfolioTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: -0.026666667em;
  margin: 0;

  @media (min-width: 700px) {
    font-size: 3.2rem;
  }
`;

const ColoredText = styled.span`
  color: ${(props) => props.color};
  text-transform: capitalize;
`;
