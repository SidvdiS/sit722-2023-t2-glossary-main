var express = require("express");
var router = express.Router();

const glossary = [
  // Demo Item
  { Term: "a", Description: "a", References: [] },
  // Only items below this are printed
  {
    Term: "Docker",
    Description:
      "Docker is a technology that allows users to package applications in self-contained containers. These containers hold the application code along with any other application dependencies which makes Docker containers platform independent. ",
    References: [
      "Opensource.com. (2019). What is Docker? [online] Available at: https://opensource.com/resources/what-docker.",
    ],
  },
  {
    Term: "DevOps",
    Description:
      "DevOps is a set of practices that combines software development and IT operations to improve collaboration and streamline the software delivery process.",
    References: [
      "Alvarenga, G. (2022). DevOps vs DevSecOps: Understanding the Difference | CrowdStrike. [online] crowdstrike.com. Available at: https://www.crowdstrike.com/cybersecurity-101/cloud-security/devops-vs-devsecops/",
    ],
  },
  {
    Term: "Microservices",
    Description:
      "Microservices are architectural approaches where large applications are broken down into smaller, loosely coupled services, enabling agility, easier maintenance, and concurrent work on different services.",
    References: [
      "“What are Microservices?,” Amazon Web Services, Inc. [Online]. Available: https://aws.amazon.com/microservices/. [Accessed: 30-Jul-2023].",
    ],
  },
  {
    Term: "Containerization",
    Description:
      "Containerization packages applications and dependencies together in lightweight, portable containers, such as Docker. ",
    References: [
      "“Why Docker,” Docker, 11-Nov-2021, https://www.docker.com/why-docker/.",
    ],
  },
  {
    Term: "SDLC: Waterfall Model",
    Description:
      "The Waterfall Model is a traditional software development lifecycle model.",
    References: [],
  },
  {
    Term: "Cyber Security",
    Description:
      "Cybersecurity is the practice of protecting computer systems, networks and applications from security breaches and attacks.",
    References: [
      "Kaspersky. “What Is Cyber Security?” Kaspersky.com, 2019, www.kaspersky.com/resource-center/definitions/what-is-cyber-security.",
    ],
  },
  {
    Term: "Infrastructure as Code (IaC)",
    Description:
      "Infrastructure as Code (IaC) manages and provisions infrastructure using code and configuration files, leading to more reliable and consistent environments.",
    References: [
      "“What is Infrastructure as Code (IaC)?,” Redhat.com. [Online]. Available: https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac. [Accessed: 30-Jul-2023].",
    ],
  },
  {
    Term: "Monolith application",
    Description:
      "Monolith arcitecture is the traditional way of development where an application no matter how large is developed in a single unit.",
    References: [
      "Gnatyk, Romana. “Microservices vs Monolith: Which Architecture Is the Best Choice for Your Business?” Www.n-Ix.com, 3 Oct. 2018, www.n-ix.com/microservices-vs-monolith-which-architecture-best-choice-your-business/.",
    ],
  },
  {
    Term: "Kubernetes",
    Description:
      "Kubernetes is an open-source container orchestration platform that allows users to easily automate the deployment, scaling, and management of their containerized applications.",
    References: [
      "Casey, Kevin. “How to Explain Kubernetes in Plain English.” Enterprisersproject.com, 17 Sept. 2020, enterprisersproject.com/article/2017/10/how-explain-kubernetes-plain-english.",
    ],
  },
  {
    Term: "Agile Software Development",
    Description:
      "Agile Software Development is an iterative and incremental software development methodology that promotes collaboration, flexibility, and customer feedback.",
    References: [
      "K. Brush and V. Silverthorne, “What is Agile Software Development (Agile Methodologies)?,” Software Quality, 15-Nov-2022. [Online]. Available: https://www.techtarget.com/searchsoftwarequality/definition/agile-software-development. [Accessed: 30-Jul-2023].",
    ],
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "SIT722 Glossary", glossary });
});

module.exports = router;
