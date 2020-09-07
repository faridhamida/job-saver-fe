import React from "react";
import { Logo, StyledButton, That, VidWrap, HeaderOverlay, HeaderStuff, StyledVideo  } from "../utils/styles.js";
import { Button, Container, Header, HeaderContent } from "semantic-ui-react";
import logo from "../images/jobsaverlogo.png";
const movie = require("../images/movie.mp4")


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
                    <Header style={{color:"white"}} as="h2" content="Keep your job search organized and all in one place!"/>
            
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
        </HeaderStuff>
    </That>
    );
}

export default HomeHeader;