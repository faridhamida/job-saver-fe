import React from "react";
import { StyledBody, StyledHeader, StyledIcon, StyledParagraph, StyledLove } from "../utils/styles";
import love from "../images/love.jpg";
import icon from "../images/logo-icon.png";
import { Grid } from "semantic-ui-react";

function HomeBody() {


    return (
        <StyledBody vertical>
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


        </StyledBody>

    )
}

export default HomeBody;


