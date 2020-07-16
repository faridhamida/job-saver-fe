import Styled from "styled-components";

//home page initial

const OriginalBackground = Styled.div`
  background: dodgerblue
`;

const Logo = Styled.img`
  font-size: 4em;
  margin-bottom: 0;
  padding-top: 2em;
`;

const LineImage = Styled.img`
  margin-bottom: 4em
`;

const StyledButton = Styled(Button)({
  background: "dodgerblue !important",
  color: "black !important",
  width: "40%"
});

export default styles;