import Styled, { withTheme } from "styled-components";
import { Button, Grid, Header, Image, Segment, Container } from "semantic-ui-react";
//home page initial

export const OriginalBackground = Styled.div`

`;

export const Logo = Styled.img`
  font-size: 2em;
  margin-bottom: 0;
  padding-top: 1em;
`;

export const StyledButton = Styled(Button)({
  color: "black !important",
  width: "40%",
  background:"#4abdac"
});


//Home Body styles

export const StyledBody = Styled(Segment)({
  marginTop: "200px, !important"
});

export const StyledHeader = Styled(Header)({
  fontSize: "2em",
  paddingTop: "30px",
});

export const StyledIcon = Styled.img`
  width: 120px;
  height: 100px;
`;
export const StyledParagraph = Styled.p`
  font-size: 1.33em;
`;
export const StyledLove = Styled(Image)({
  marginBottom: "1.5em"
});

