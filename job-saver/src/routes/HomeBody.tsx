import React from "react";
import { 
    StyledTop,
    StyledHeader, 
    StyledIcon, 
    StyledParagraph, 
    StyledLove, 
    StyledGridCol, 
    StyledMiddle, 
    StyledH3, 
    StyledBottom,
    StyledDivider,
    StyledButton
} from "../utils/styles";
import love from "../images/love.jpg";
import icon from "../images/logoicon.png";
import { Grid, Container, Button} from "semantic-ui-react";

function HomeBody() {


    return (
        <>
        {/* Top */}
        <StyledTop vertical>
            <Grid container stackable verticalAlign="middle">
                <Grid.Row>
                    <Grid.Column width={8}>
                        <StyledHeader as="h3">
                            <StyledIcon src={icon} alt="icon" /> Job-Saver
                        </StyledHeader>

                        <StyledParagraph>
                            <strong>Job-Saver</strong> is a chrome extension that allows to save jobs.

                        </StyledParagraph>
                        <StyledHeader as="h3">
                        <StyledIcon src={icon} alt="icon"/> Make life easier 
                        </StyledHeader>
                        <StyledParagraph>
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </StyledParagraph>

                    </Grid.Column>
                    <Grid.Column floated="right" width={6}>
                        <StyledLove  
                        bordered
                        rounded
                        size="large"
                        src={love}
                        data-testid="time" />
                        
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign='center'>

                    </Grid.Column>
                </Grid.Row>

            </Grid>


        </StyledTop>

        {/* middle */}

        <StyledMiddle vertical>
            <Grid celled="internally" columns="equal" stackable>
                <Grid.Row textAlign="center">
                    <StyledGridCol>
                        <StyledH3 as="h3">
                            <StyledIcon src={icon} alt="icon" />
                            Chrome Extension
                        </StyledH3>
                        <StyledParagraph>
                                Download the Chrome extension now and organize your job search today!
                            </StyledParagraph>
                    </StyledGridCol>
                    <StyledGridCol>
                        <StyledH3 as="h3">
                            <StyledIcon src={icon} alt="icon" /> 
                            Get The Extension
                        </StyledH3>
                        <StyledParagraph>
                            This extension is available for download in the chrome web store.
                            See below or click{" "}
              <a
                data-testid="chromeLink"
                href=""
              >
                here
              </a>{" "}
              to get started.
                        </StyledParagraph>
                    </StyledGridCol>
                </Grid.Row>
            </Grid>

        </StyledMiddle>

            {/* Bottom  */}
                <StyledBottom vertical>
                    <Container text>
                        <StyledH3 as="h3">
                            <StyledIcon src={icon} alt="icon" />
                            Kanban Board
                        </StyledH3>
                        <img src={love} alt="board" style={{width:"100%"}} />
                        <StyledParagraph>
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                        </StyledParagraph>
                        <StyledButton 
                                 data-testid="login-button"
                                 animated="fade"
                                 size="huge"
                                 href={`${window.location.origin}/login`}
                                 >
                                     <Button.Content visible>Get Started</Button.Content>
                                     <Button.Content hidden>Sign-Up</Button.Content>
                        </StyledButton>

                        <StyledDivider horizontal>
                            <StyledIcon src={icon} alt="icon" />
                        </StyledDivider>

                        <StyledH3 as ="h3">
                            <StyledIcon src={icon} alt="icon" />
                            Get Organized
                        </StyledH3>
                        <img src={love} alt='example' style={{width:"100%"}} />
                        <StyledParagraph>
                        It has survived not only five centuries, but also the leap into electronic typesetting.
                        </StyledParagraph>
                        <StyledButton 
                                 data-testid="login-button"
                                 animated="fade"
                                 size="huge"
                                 href={`${window.location.origin}/login`}
                                 >
                                     <Button.Content visible>Chrome Extension</Button.Content>
                                     <Button.Content hidden>Install</Button.Content>
                        </StyledButton>
                    </Container>
                </StyledBottom>
        </>

    )
}

export default HomeBody;


