import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../images/motivation_bot.jpg";
import projImg2 from "../images/poke.jpg";
import projImg3 from "../images/website.jpg"
import projImg4 from "../images/sillyql.jpg"

export const Projects = () => {

  const projects = [
    {
      title: "Motivation Bot",
      description: "Created a Twitter Bot dedicated to tweeting every hour a motivational quote by specific motivational influencers and replying a motivational statement to followers when they tweet. Used the Twitter API and OpenAI API to create and produce responses for the Twitter Bot running on a Google Cloud virtual machine. Gained 21 followers in a month of running.",
      imgUrl: projImg1,
    },
    {
      title: "Personal Website",
      description: "Built a personal website with three sections: About me, Skills, and Projects. Used the React framework alongside front-end development tools to create the website’s sections and animations.",
      imgUrl: projImg3,
    },
    {
      title: "SillyQL",
      description: "Created a relational database similar to SQL through the use of Hashmaps. Implemented functions that were used to Create, Insert Into,  Delete From, Generate Index, Join, and Remove elements within the database.",
      imgUrl: projImg4,
    },
    {
      title: "Pokémon Finder",
      description: "Implemented various algorithms to find an efficient and clear path between numerous points. Used the Minimum Spanning Tree algorithm, branch and bound, and a modified version of the nearest neighbor heuristic to find an optimal solution to the Traveling Salesperson problem.",
      imgUrl: projImg2,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
                <h2>Projects</h2>
                <p>Under this section you will see both personal and university projects. Each of these projects demonstrates a new milestone that I accomplished. Although I have been accustomed to using C++ for my entire university time, my personal projects have pushed me to learn different languages, how to interact with APIs, and how to use frameworks. This portfolio highlights my growth in coding in a timeline.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                            <ProjectCard
                              key = {index}
                              {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
