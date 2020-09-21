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
import organize from "../images/organize.png";
import { Grid, Container, Button} from "semantic-ui-react";
const kanban = require("../images/kanbanboardvid1.gif");

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
                            <strong>Jobsaver</strong> is a Chrome extension that allows to save jobs, more organized.

                        </StyledParagraph>
                        <StyledHeader as="h3">
                        <StyledIcon src={icon} alt="icon"/> Make life easier 
                        </StyledHeader>
                        <StyledParagraph>
                            Job searching is already a pain as it already is, and it can be absolute nuisance to keep track of postings on various sites. Inefficient spreadsheets and constant reminders can become overwhelming, and redundant.
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
                            This extension is available for download in the Chrome web store.
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
                        <img src={kanban} alt="board" style={{width:"100%"}} />
                        <StyledParagraph>
                            Visualize what your job search actually is, in real time. 
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
                        <img src={organize} alt='example' style={{width:"100%"}} />
                        <StyledParagraph>
                            A lack of central organization for job postings can be overwhelming to keep track of relevant jobs. Jobsaver lets you copy and save job posting information and categorize them in how interested or where you are in your job search.
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


