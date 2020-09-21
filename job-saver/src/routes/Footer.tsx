import React, { useEffect } from "react";
import Styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Segment, Container, Grid, Header, List } from "semantic-ui-react";
const StyledFooter = Styled(Segment)`
  padding: 4em 0em !important;
  background: #FF5757 !important;
  width:100%;
  position:relative;
  margin-top:4em !important;
`;

function Footer(props) {
  return (
    <>
      {!props.loading && (
        <StyledFooter id="footer" inverted vertical>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={5}>
                  <Header inverted as="h4" content="About" />
                  <List link inverted>
                    {/* <List.Item as="a">Sitemap</List.Item> */}
                    <List.Item
                      as="a"
                      href="https://linkedin.com"
                      target="_blank"
                    >
                      LinkedIn
                    </List.Item>
                    <List.Item
                      as="a"
                      href="https://angel.co"
                      target="_blank"
                    >   
                      AngelList
                    </List.Item>
                    <List.Item
                      as="a"
                      href="https://hired.com"
                      target="_blank"
                    >
                      Hired
                    </List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={6}>
                  <Header as="h4" inverted>
                    Chrome Extensions
                  </Header>
                  <List.Item
                    as="a"
                    href="https://chrome.google.com/webstore"
                    target="_blank"
                  >
                    Chrome Web Store
                  </List.Item>
                  <p>
                    Check out Google Web Store for this and other cool Chrome
                    extensions for your computer. Happy hunting!
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </StyledFooter>
      )}
    </>
  );
}
function mapStateToProps(state) {
  return {
    loading: state.loading,
    jobs: state.jobs
  };
}
export default connect(mapStateToProps, null)(Footer);
