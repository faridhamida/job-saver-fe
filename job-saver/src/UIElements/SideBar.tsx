import React, { useState, useEffect } from "react";
import {
  Header,
  Image,
  Icon,
  Button,
  Menu,
  Ref,
  Segment,
  Sidebar,
  List
} from "semantic-ui-react";
import SideNavTab from "./SideNavTab";
import SearchAndFilter from "./SearchAndFilter";

export default function SideBar(props) {
  const [visible, setVisible] = useState(false);
  return (
    <Sidebar.Pushable
      style={{ height: "100%", overflowY: "hidden", minWidth: "1500px" }}
    >
      <div onMouseLeave={() => setVisible(false)}>
        <Sidebar
          as={Segment}
          animation="overlay"
          icon="labeled"
          direction="left"
          style={{ paddingTop: "100px", width: "200px", background: "#fdfdfd" }}
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
        >
          <List selection>
            <h5>{`Welcome Back, ${props.user && props.user.firstName}`}</h5>
            <SearchAndFilter />
            <List.Item
              style={{
                fontSize: "1.2rem",
                color: "#ff5757",
                textAlign: "center",
                marginTop: "5px"
              }}
            >
            </List.Item>
            <List.Item style={{ marginTop: "10px" }}>
              <Icon color={"red"} name={"briefcase"} />
              <List.Content>
                <List.Header
                  style={{ textAlign: "center", fontSize: "1.2rem" }}
                >
                  {" "}
                  Find Jobs
                </List.Header>
              </List.Content>
            </List.Item>
            <List.Item style={{ textAlign: "center" }}>
              <Icon color={"red"} name={"globe"} />
              <List.Content>
                <a target="_blank" style={{color:"#ff5757"}} href="https://careerbuilder.com">
                  Career Builder
                </a>
              </List.Content>
            </List.Item>
            <List.Item style={{ textAlign: "center" }}>
              <Icon color={"red"} name={"globe"} />
              <List.Content>
                <a target="_blank" style={{color:"#ff5757"}} href="https://glassdoor.com">
                  Glassdoor
                </a>
              </List.Content>
            </List.Item>
            <List.Item style={{ textAlign: "center" }}>
              <Icon color={"red"} name={"globe"} />
              <List.Content>
                <a
                  target="_blank"
                  style={{color:"#ff5757"}} href="https://careers.google.com/jobs/results/"
                >
                  Google for Jobs
                </a>
              </List.Content>
            </List.Item>
            <List.Item style={{ textAlign: "center" }}>
              <Icon color={"red"} name={"globe"} />
              <List.Content>
                <a target="_blank" style={{color:"#ff5757"}} href="https://indeed.com">
                  Indeed
                </a>
              </List.Content>
            </List.Item>
            <List.Item style={{ textAlign: "center" }}>
              <Icon color={"red"} name={"globe"} />
              <List.Content>
                <a target="_blank" style={{color:"#ff5757"}} href="https://linkedin.com">
                  LinkedIn
                </a>
              </List.Content>
            </List.Item>
            <List.Item style={{ textAlign: "center" }}>
              <Icon color={"red"} name={"globe"} />
              <List.Content>
                <a target="_blank" style={{color:"#ff5757"}} href="https://monster.com">
                  Monster
                </a>
              </List.Content>
            </List.Item>
            <List.Item style={{ textAlign: "center" }}>
              <Icon color={"red"} name={"globe"} />
              <List.Content>
                <a target="_blank" style={{color:"#ff5757"}} href="https://snagajob.com">
                  Snag a Job
                </a>
              </List.Content>
            </List.Item>
            <List.Item style={{ textAlign: "center" }}>
              <Icon color={"red"} name={"globe"} />
              <List.Content>
                <a target="_blank" style={{color:"#ff5757"}} href="https://simplyhired.com">
                  Simply Hired
                </a>
              </List.Content>
            </List.Item>
            <List.Item style={{ textAlign: "center" }}>
              <Icon color={"red"} name={"globe"} />
              <List.Content>
                <a target="_blank" style={{color:"#ff5757"}} href="https://ziprecruiter.com">
                  Zip Recruiter
                </a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Header style={{ textAlign: "center", fontSize: "1.2rem" }}>
                {" "}
                Cost of Living
              </List.Header>
            </List.Item>
            <List.Item style={{ textAlign: "center" }}>
              <Image
                style={{ width: "15px", color:"#ff5757" }}
                 src="https://a.omappapi.com/users/b7a235343fc6/images/db14e90f97e61563891076-04-Social-square-B.png"
              />

              <List.Content style={{ width: "91%" }}>
                <a
                  target="_blank"
                  style={{color:"#ff5757"}} href="https://www.bankrate.com/calculators/savings/moving-cost-of-living-calculator.aspx"
                >
                  Bankrate
                </a>
              </List.Content>
            </List.Item>
          </List>
        </Sidebar>
      </div>
      <Sidebar.Pusher>
        <>
          <SideNavTab setVisible={setVisible} />

          {props.children}
        </>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
}
