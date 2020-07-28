import React from "react";
import { OriginalBackground, Logo, StyledButton } from "../utils/styles.js";
import { Button, Container, Header, HeaderContent } from "semantic-ui-react";
import logo from "../images/job-saver-logo.png";
import movie from "../images/movie2.mp4";
import Styled from "styled-components";

const That = Styled.div`
height:100vh;
display:flex;
justify-content:center;
align-content:center;
align-items:center;
color:#fff;

`;

const VidWrap = Styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100vh;
overflow:hidden;

`;
const HeaderOverlay = Styled.div`
height:100vh;
position: absolute;
top:0;
left:0;
width:100%;
z-index:1;
background:#225470;
opacity:0.20;

`;
const HeaderStuff = Styled.div`
z-index:2;
font-size:1.5rem;
display:block;
padding-bottom:2rem;
`;

const StyledVideo = Styled.video`
max-width:100%;
@media (max-width:1000px){
max-height:auto;

}
@media (max-width:760px){
    height:auto;
   
    }
    @media (max-width:480px){
        height:auto;
        }
`;
function HomeHeader() {
    return (
        <That>
            <VidWrap>
            <StyledVideo autoPlay loop muted>
                <source src={movie} type="video/mp4"/>
                   
            </StyledVideo>
            </VidWrap>
            <HeaderOverlay></HeaderOverlay>
            <HeaderStuff>
            <Logo src={logo} alt="logo"/>
                    <Header as="h2" content="Keep your job search organized and all in one place"/>
            <OriginalBackground>
                <Container textAlign="center">
                    
                        <video width="100%" height="100%" autoPlay loop muted>
                            <source src={movie} type="video/mp4"/>
                        </video>
                    <Logo src={logo} alt="logo"/>
                    <Header as="h2" content="Keep your job search organized and all in one place"/>
                        
                        <StyledButton
                            animated="fade"
                            size="huge"
                            href="#"
                        >

                        <Button.Content visible>Get Started</Button.Content>
                        <Button.Content hidden>Install Extension</Button.Content>
                        
                    </StyledButton>
               
            </Container>
        </OriginalBackground>
        </HeaderStuff>
    </That>
    );
}

export default HomeHeader;