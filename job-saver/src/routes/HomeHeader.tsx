import React from "react";
import { OriginalBackground, Logo, StyledButton } from "../utils/styles.js";
import { Button, Container, Header } from "semantic-ui-react";
import logo from "../images/job-saver-logo.png";
import movie from "../images/movie.mp4";
import Styled from "styled-components";

const VHeader = Styled.div`
    height:25vh;
    display:absolute
    align-items:center;
    z-index: -1;
`

const OverLay = Styled.div`
    position: absolute;
    top: 0;
    left: 0;
    min-width:100%;
    min-height:100%;
    height:100vh;
    z-index: -1;
    justify-content: center;
    align-items: center;
    width:100vw;
`


function HomeHeader() {
    return (
        <VHeader>
            <OriginalBackground>
                <Container textAlign="center">
                    <OverLay>
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
                </OverLay>
            </Container>
        </OriginalBackground>
    </VHeader>
    );
}

export default HomeHeader;