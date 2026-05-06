import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  Stack,
  BtnGroup,
} from "./ProjectCardElements";

function ProjectCard() {
  return (
    <div style={{ 
      display: "flex", 
      flexWrap: "wrap", 
      gap: "20px",
      justifyContent: "center"
    }}>
      {ProjectList.map((list, index) => (
        <Card key={index}>
          <CardLeft>
            <img src={list.img} alt={list.title} />
          </CardLeft>

          <CardRight>
            <h4>{list.title}</h4>
            <p>{list.description}</p>

            <Stack>
              <span className="stackTitle">Tech Stack -</span>
              <span className="tags">{list.tech_stack}</span>
            </Stack>

            <BtnGroup>
              <a className="btn btn2 SecondarBtn" href={list.github_url}>
                Github
              </a>
              <a className="btn PrimaryBtn" href={list.demo_url}>
                Preview ➜
              </a>
            </BtnGroup>
          </CardRight>
        </Card>
      ))}
    </div>
  );
}

export default ProjectCard;