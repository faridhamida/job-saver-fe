import Styled from "styled-components";
import { Button, Grid, Header, Image, Segment, Container } from "semantic-ui-react";
//home page initial

export const OriginalBackground = Styled.div`

`;

export const Logo = Styled.img`
  font-size: 2em;
  margin-bottom: 0;
  padding-top: 2em;
  width:600px;
  height:300px;
`;

export const StyledButton = Styled(Button)({
  color: "black !important",
  width: "40%"
});


//Home Body styles

export const StyledBody = Styled(Segment)({
  marginTop: "200px, !important"
});

export const StyledHeader = Styled(Header)({
  fontSize: "2em",
  paddingTop: "30px"
});

export const StyledIcon = Styled.img`
  width: 50px;
  height: 37px;
`;
export const StyledParagraph = Styled.p`
  font-size: 1.33em;
`;
export const StyledLove = Styled(Image)({
  marginBottom: "1.5em"
});

