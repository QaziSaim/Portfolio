import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import translation from "../../Assets/Projects/translation.jpg";
import textgen from "../../Assets/Projects/textgen.png";
import rag from "../../Assets/Projects/rag.jpg";
import signlang from "../../Assets/Projects/signlang.png";
import pdfsumm from "../../Assets/Projects/pdfsumm.jpg";
import finetune from "../../Assets/Projects/finetune.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I’ve worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={translation}
              isBlog={false}
              title="English to French Translation"
              description="Built a neural machine translation model that converts English sentences into French using Seq2Seq with attention mechanism in PyTorch. Achieved efficient translation through tokenization, embedding layers, and attention-based decoding."
              ghLink="https://github.com/sahimkazi/english-to-french-translation"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textgen}
              isBlog={false}
              title="Text Generation"
              description="Implemented a text generation model using transformer architecture to produce coherent and context-aware text sequences. Integrated with Hugging Face Transformers for fine-tuned GPT-style generation."
              ghLink="https://github.com/sahimkazi/text-generation"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rag}
              isBlog={false}
              title="Local Retrieval-Augmented Generation (RAG)"
              description="Developed a local RAG system that retrieves context-relevant data and generates answers using a local LLM. Integrated LangChain and FAISS for retrieval and context-aware generation."
              ghLink="https://github.com/sahimkazi/local-rag"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={signlang}
              isBlog={false}
              title="Object Detection – Sign Language Detection"
              description="Built a real-time sign language detection system using YOLOv5 for hand gesture recognition. Integrated with Flask for web deployment and Docker for containerized deployment."
              ghLink="https://github.com/sahimkazi/sign-language-detection"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pdfsumm}
              isBlog={false}
              title="PDF Summarizer using DeepSeek 1.5B"
              description="Created a Streamlit-based PDF summarizer powered by DeepSeek 1.5B model. Extracts text, processes embeddings, and summarizes context intelligently using LangChain and local inference."
              ghLink="https://github.com/sahimkazi/pdf-summarizer-deepseek"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={finetune}
              isBlog={false}
              title="Fine-tuning DeepSeek R1 1.5B"
              description="Fine-tuned the DeepSeek R1 1.5B model on domain-specific data for improved contextual understanding and response quality. Utilized LoRA-based fine-tuning and evaluation pipeline for custom dataset performance optimization."
              ghLink="https://github.com/sahimkazi/fine-tune-deepseek"
              demoLink="#"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
