import React from "react";
import { OriginalBackground, Logo, StyledButton } from "../utils/styles.js";
import { Button, Container, Header } from "semantic-ui-react";
import logo from "../images/job-saver-logo.png";

function HomeHeader() {
    return (
        <div>
            <OriginalBackground>
                <Container text textAlign="center">
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
    </div>
    );
}

export default HomeHeader;