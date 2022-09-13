import { Global, css, connect } from "frontity";

const fonts = {
  "us-ascii": "",
  latin: "",
  all: "",
};

const FontFace = ({ state }) => {
  const font = fonts[state.theme.fontSets] || fonts["all"];

  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;700;900&display=swap');
      `}
    />
  );
};

export default connect(FontFace);
