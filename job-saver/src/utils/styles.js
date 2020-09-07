import Styled, { withTheme } from "styled-components";
import { Button, Grid, Header, Image, Segment, Container, Divider} from "semantic-ui-react";
//home page header

export const That = Styled.div`
height:100vh;
display:flex;
justify-content:center;
align-content:center;
align-items:center;
color:#fff;
`;

export const VidWrap = Styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100vh;
overflow:hidden;
@media (min-width:376px){
    object-fit:cover;
}
@media (max-width:375px){
    object-fit:cover;
    width:100%;
}
`;
export const HeaderOverlay = Styled.div`
height:100vh;
position: absolute;
top:0;
left:0;
width:100%;
z-index:1;
background:#225470;
opacity:0.20;

`;

export const HeaderStuff = Styled.div`
z-index:2;
font-size:1.5rem;
display:block;
padding-bottom:2rem;
`;

export const StyledVideo = Styled.video`
width:100%;
object-fit:cover;
left:50%;
top:50%;
height:100%;
transform:"translate(-50%, -50%)";
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

export const StyledTop = Styled(Segment)({
  marginTop: "200px, !important"
});

export const StyledHeader = Styled(Header)({
  fontSize: "2em",
  paddingTop: "30px",
});

export const StyledH3 = Styled(Header)({
  fontSize: "2em",
  paddingTop: "30px"
});

export const StyledIcon = Styled.img`
  width: 25px;
  height: 25px;
`;

export const StyledParagraph = Styled.p`
  font-size: 1.33em;
`;

export const StyledLove = Styled(Image)({
  marginBottom: "1.5em"
});

export const StyledGridCol = Styled(Grid.Column)({
  paddingBottom: "5em",
  paddingTop: "5em"
});


export const StyledMiddle = Styled(Segment)({
  padding: "0em"
});

export const StyledDivider = Styled(Divider)({
  margin: "3em 0em",
  marginTop: "5em !important"
});

export const StyledBottom = Styled(Segment)({
  padding: "8em 0em"
});

//Footer 

export const StyledFooter = Styled(Segment)`
  padding: 4em 0em !important;
  background: #ff5757 !important;
  width:100%;
  position:relative;
  margin-top:4em !important;
`;
