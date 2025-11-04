import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m an AI Engineer passionate about building intelligent systems
              that combine data-driven insights with scalable architectures.
              My journey in AI has led me to work on projects involving
              <b className="purple"> computer vision, NLP, and Generative AI</b>,
              integrating them into real-world applications.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, JavaScript, and C++{" "}
                </b>
              </i>
              — and I love designing end-to-end solutions that blend
              data, models, and cloud infrastructure.
              <br />
              <br />
              My key areas of interest include
              <i>
                <b className="purple">
                  {" "}
                  Machine Learning, Deep Learning, MLOps, and Generative AI{" "}
                </b>
              </i>
              — focusing on building real-time AI systems that make an impact.
              <br />
              <br />
              I frequently work with
              <b className="purple"> PyTorch </b>,{" "}
              <b className="purple">TensorFlow</b>, and modern frameworks like{" "}
              <i>
                <b className="purple">LangChain</b>,{" "}
                <b className="purple">FastAPI</b>, and{" "}
                <b className="purple">Streamlit</b>{" "}
              </i>
              to develop intelligent and interactive AI solutions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
