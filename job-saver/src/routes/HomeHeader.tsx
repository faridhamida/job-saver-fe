import React from "react";
import { OriginalBackground, Logo, StyledButton } from "../utils/styles.js";
import { Button, Container, Header } from "semantic-ui-react";
import logo from "../images/job-saver-logo.png";
import movie from "../images/movie.mp4";
import Styled from "styled-components";

const OverLay = Styled.div`
position: fixed;
top: 0;
left: 0;
width:100%;
height:100%;
z-index: -1;
display: flex;
justify-content: center;
align-items: center;
`;


function HomeHeader() {
    return (
        <div>
            <video width="100%" height="100%" autoPlay loop muted>
                <source src={movie} type="video/mp4"/>
                   
            </video>
            <Logo src={logo} alt="logo"/>
                    <Header as="h2" content="Keep your job search organized and all in one place"/>
            <OriginalBackground>
                <Container textAlign="center">
                        
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
    </div>
    );
}

export default HomeHeader;