import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Saim Qazi</span> from{" "}
            <span className="purple">India</span>.
            <br />
            I’m an aspiring{" "}
            <span className="purple">AI Engineer</span> passionate about
            building intelligent and data-driven systems that solve
            real-world problems.
            <br />
            I’ve worked on projects involving{" "}
            <span className="purple">
              Computer Vision, Machine Learning, Deep Learning, and Generative AI
            </span>
            , integrating them with tools like{" "}
            <span className="purple">LangChain</span>,{" "}
            <span className="purple">OpenAI</span>, and{" "}
            <span className="purple">FastAPI</span>.
            <br />
            <br />
            I enjoy exploring how AI, automation, and MLOps can come together to
            build scalable and production-ready systems.
            <br />
            <br />
            Beyond coding, I love engaging in activities that keep me creative
            and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Working on AI side projects 🤖
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new AI and MLOps tools ⚙️
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading about emerging tech & innovation 📚
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build AI solutions that create real impact."{" "}
          </p>
          <footer className="blockquote-footer">Saim Qazi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
