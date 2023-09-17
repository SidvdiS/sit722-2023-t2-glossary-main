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
  {
    Term: "Minimum Viable Product (MVP)",
    Description:
      "MVP is the initial version of a product that contains only the core features required to satisfy early customers and gather feedback for future development. It allows developers to quickly test the product's viability in the market and make improvements based on user input. The concept is popular in Agile and Lean Startup methodologies.",
    References: [
      "“Minimum Viable Product (MVP),” Productplan.com. [Online]. Available: https://www.productplan.com/glossary/minimum-viable-product/. [Accessed: 07-Aug-2023].",
    ],
  },
  {
    Term: "Definition of Done (DoD)",
    Description:
      "A user story or task must satisfy a specific set of requirements known as the Definition of Done in order to be deemed finished and prepared for deployment. Before releasing the feature, it makes sure that all factors, including coding, testing, documentation, and integration, have been taken care of.",
    References: [
      "D. Huether, “Definition of Done,” LeadingAgile, 08-Feb-2017. [Online]. Available: https://www.leadingagile.com/2017/02/definition-of-done/. [Accessed: 07-Aug-2023].",
    ],
  },
  {
    Term: "Domain-Driven Design (DDD)",
    Description:
      "Software development using the DDD methodology places a strong emphasis on precisely modelling the software's domain (business challenge). It facilitates the alignment of technological solutions with actual business objectives, resulting in systems that are easier to manage and more flexible.",
    References: [
      "M. Fowler, “DomainDrivenDesign,” martinfowler.com. [Online]. Available: https://martinfowler.com/bliki/DomainDrivenDesign.html. [Accessed: 07-Aug-2023].",
    ],
  },
  {
    Term: "Everything-as-Code",
    Description:
      "Everything-as-Code, a DevOps concept, encourages considering all facets of software development as code, including procedures, infrastructure, and configuration. Versioning, automation, and consistency are made possible across the whole lifespan of software delivery.",
    References: [
      "O. Deploy, “What is Everything as Code?,” Octopus Deploy. [Online]. Available: https://octopus.com/blog/what-is-everything-as-code. [Accessed: 07-Aug-2023].",
    ],
  },
  {
    Term: "Cross-Functional Autonomous Teams",
    Description:
      "Cross-functional autonomous teams are self-organizing groups of people with a range of abilities. They are able to independently make judgements and work together to provide finished features without relying on other departments. Decision-making is now more decentralised, which promotes flexibility and expedited product delivery.",
    References: [
      "pmateos, “Cross Functional Autonomous Teams - DevOps Principle #4,” Pufferfish Solutions, 19-Mar-2019.",
    ],
  },
  {
    Term: "UAT Testing",
    Description:
      "UAT testing is the software testing phase where the software is tested by its intended audience, i.e. end users of the software. During this phase the software is made available to a few members of the public  before its official release to see if any features have been overlooked or if it contains any issues.",
    References: [
      "Gillis, A. (n.d.). What is User Acceptance Testing (UAT)? [online] SearchSoftwareQuality. Available at: https://www.techtarget.com/searchsoftwarequality/definition/user-acceptance-testing-UAT.",
    ],
  },
  {
    Term: "Load Balancing",
    Description:
      "Load balancing is the process of evenly distributing incoming internet traffic across multiple servers to ensure no single server gets overwhelmed and to enhance the performance and reliability of applications.",
    References: [
      "AWS (n.d.) “What Is Load Balancing?” AWS ELB Documenatation, https://aws.amazon.com/what-is/load-balancing/",
    ],
  },
  {
    Term: "Kanban Development",
    Description:
      "Kanban is an agile development framework that uses visual aid (a board) that can be seen by all team members to depict various stages of progress. It aims to identify bottlenecks and solve problems quickly.",
    References: [
      "Planview. (n.d.). Kanban vs. Scrum: What are the Differences? [online] Available at: https://www.planview.com/resources/guide/introduction-to-kanban/kanban-vs-scrum/.",
      "Atlassian (n.d.). Kanban vs Scrum. [online] Atlassian. Available at: https://www.atlassian.com/agile/kanban/kanban-vs-scrum",
    ],
  },
  {
    Term: "SCRUM Development",
    Description:
      "SCRUM is an agile project management framework that can be used by treams that prefer agile developements. Scrum prescribes for teams to break work into goals to be completed within time-limited iterations, called sprints. Each sprint is can be as long as one month and commonly lasts two weeks. ",
    References: [
      "Atlassian (n.d.). Kanban vs Scrum. [online] Atlassian. Available at: https://www.atlassian.com/agile/kanban/kanban-vs-scrum",
      "Planview. (n.d.). Kanban vs. Scrum: What are the Differences? [online] Available at: https://www.planview.com/resources/guide/introduction-to-kanban/kanban-vs-scrum/.",
    ],
  },
  {
    Term: "Terraform",
    Description:
      "Terraform is an infrastructure-as-code tool used for building, changing, and versioning infrastructure safely and efficiently.",
    References: [
      "Gillis, Alexander S. “What Is Terraform?” SearchITOperations, Feb. 2021, www.techtarget.com/searchitoperations/definition/Terraform.",
    ],
  },
  {
    Term: "Docker compose",
    Description:
      "Docker compose is a tool for defining and running multi-container Docker applications by using a single file. It uses a YAML or JSON formats to configure application services and networking.",
    References: [
      "Docker (2017) Docker Compose. https://www.docker.com/blog/docker-compose/",
    ],
  },
  {
    Term: "Docker Image",
    Description:
      "Docker images are application templates built using the docker build command. Thes imares are read-only and they contain critical information on preconfigured operating system and application code. Images serves as the foundation for containers.",
    References: [
      "Docker (2021) 5 Ways to Build Better Docker Images Using Dockerfile Best Practices. https://www.docker.com/blog/5-ways-build-better-docker-images-using-dockerfile-best-practices/",
    ],
  },
  {
    Term: "Docker Registry",
    Description:
      "Docker registries are a storage and content delivery location for Docker images. It allows pushing and pulling images to store and distribute them, just like Github is for code.",
    References: [
      "Docker (2021) 5 Ways to Build Better Docker Images Using Dockerfile Best Practices. https://www.docker.com/blog/5-ways-build-better-docker-images-using-dockerfile-best-practices/",
      "Docker Inc. (2021) How to use a Registry with Docker Hub. https://www.docker.com/blog/how-to-use-registry-docker-hub/",
    ],
  },
  {
    Term: "Container",
    Description:
      "A container is a standardized, isolated environment for running applications. It packages code and dependencies into a deployable unit. Containers are highly flexible and portable. They are independednt of the host they are on.",
    References: [
      "Docker Inc. (2022) Containers 101: What are containers? https://www.docker.com/blog/containers-101-what-are-containers/",
    ],
  },
  {
    Term: "Docker Swarm",
    Description:
      "Docker Swarm is Docker's native container orchestration tool for clustering Docker hosts and scheduling containers. It allows scaline and simplifies container management.",
    References: [
      "Docker (2019) Docker Swarm mode on Windows Server 2016. https://www.docker.com/blog/docker-swarm-mode-on-windows-server-2016/",
    ],
  },
  {
    Term: "Docker Hub",
    Description:
      "Docker Hub is the name of a public registry from Docker.  It is a cloud-based registry service for building and distributing Docker images. It provides storage, distribution and collaboration services.",
    References: [
      "Docker (n.d.) Overview of Docker Hub. https://docs.docker.com/docker-hub/",
      "Docker (2017) Calling Developers: Containerize Your Apps on Docker Hub. https://www.docker.com/blog/calling-developers-containerize-apps-docker-hub/",
    ],
  },
  {
    Term: "Azure Storage",
    Description:
      "Azure Storate is Microsoft's cloud storage solution like AWS S3. It provides storage of objects, files, disks, tables, queues and more for Azure cloud services.",
    References: [
      "Microsoft (2019) 10 Things to know about Azure Storage. https://azure.microsoft.com/en-in/blog/10-things-to-know-about-azure-storage/",
      "Microsoft (n.d.) Azure Storage overview. https://azure.microsoft.com/en-us/products/storage/",
    ],
  },
  {
    Term: "MongoDB",
    Description:
      "MongoDB is a popular open-source NoSQL document database. It stores data in flexible JSON-like documents with dynamic schemas.",
    References: [
      "MongoDB Inc. (n.d.) Quick Start Guide to MongoDB. https://www.mongodb.com/blog/post/quick-start-guide-to-mongodb--the-document-database",
    ],
  },
  {
    Term: "Access Keys",
    Description:
      "Secure credentials used to authenticate and authorize access to AWS services and resources. Consists of an access key ID and secret access key.",
    References: [
      "AWS (2022) Where's My Secret Access Key? AWS Security Blog. https://aws.amazon.com/blogs/security/wheres-my-secret-access-key/",
    ],
  },
  {
    Term: "Dockerfile",
    Description:
      "Dockerfile is a text file that contains instructions for building a Docker image. It defines the application configuration like - operating system, dependencies, files to copy, commands to run, etc. needed for the image.",
    References: [
      "Docker (2021), Best practices for writing Dockerfiles. https://www.docker.com/blog/intro-guide-to-dockerfile-best-practices/",
    ],
  },
  {
    Term: "RabbitMQ",
    Description:
      "RabbitMQ is an open source message broker that implements the AMQP protocol. It can be used to enables direct/indirect communication between distributed applications.",
    References: [
      "www.cloudamqp.com. (n.d.). Part 1: RabbitMQ for beginners - What is RabbitMQ? - CloudAMQP. [online] Available at: https://www.cloudamqp.com/blog/part1-rabbitmq-for-beginners-what-is-rabbitmq.html.",
    ],
  },
  {
    Term: "Azure CLI",
    Description:
      "Azure CLI is a command-line interface tool for managing Azure resources. It provides commands for interacting with Azure services such as Azure Kubernetes Service, Virtual Machines and other Azure cloud resources.",
    References: [
      "Microsoft (2022) Azure CLI. https://docs.microsoft.com/en-us/cli/azure/",
    ],
  },
  {
    Term: "Infrastructure as Code",
    Description:
      "Infrastructure as Code, also known as IaC or IaaC is the approach of managing and provisioning infrastructure through code instead of manual processes. IaC allows infrastructure to be versioned, tested, and deployed consistently.",
    References: [
      "Red Hat (2021) What is infrastructure as code? https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac",
      "Microsoft (2022) What is Infrastructure as Code? https://docs.microsoft.com/en-us/devops/deliver/what-is-infrastructure-as-code",
    ],
  },
  {
    Term: "Managed Kubernetes",
    Description:
      'The term "Managed Kubernetes" is used to represent managed Kubernetes services offered by cloud providers like EKS for AWS, AKS for Azure etc. Having a manager kubernetes removes burden of managing and maintaining Kubernetes clusters.',
    References: ["AWS (2022) Amazon EKS. https://aws.amazon.com/eks/"],
  },
  {
    Term: "Azure Kubernetes Service (AKS)",
    Description:
      "AKS is the managed Kubernetes service offered by Microsoft Azure. It allows deploying and managing containerized applications on Kubernetes clusters.",
    References: [
      "Microsoft (2022) Azure Kubernetes Service. https://azure.microsoft.com/en-us/services/kubernetes-service/",
    ],
  },
  {
    Term: "HashiCorp Configuration Language (HCL)",
    Description:
      "HCL is a domain-specific language used to define IaaC configuration files in HashiCorp tools like Terraform.",
    References: [
      "Octopus Deploy (n.d.). Introduction to HCL and HCL tooling. [online] Octopus Deploy. Available at: https://octopus.com/blog/introduction-to-hcl-and-hcl-tooling.",
    ],
  },
  {
    Term: "Provider Plugins",
    Description:
      "Plugins for Terraform (or other IaC services) that allow it to interact with cloud providers, SaaS providers, etc. They can be used to extend Terraform's core functionality.",
    References: [
      "HashiCorp (2022) Providers. https://www.terraform.io/docs/providers/index.html",
    ],
  },
  {
    Term: "Azure Container Registry",
    Description:
      "Azure Container Registry is the managed container registry service on Azure cloud platoform. We can use ACR to mtore and manage container images for all types of deployments.",
    References: [
      "Bisson, S. (2020). Understanding Azure Container Registry. [online] InfoWorld. Available at: https://www.infoworld.com/article/3514575/understanding-azure-container-registry.html.",
    ],
  },
  {
    Term: "Pod",
    Description:
      "A pod is the smallest deployable unit in Kubernetes. It encapsulates one or more containers representing an application.",
    References: [
      "IT Operations. (n.d.). What is Kubernetes pod? | Definition from TechTarget. [online] Available at: https://www.techtarget.com/searchitoperations/definition/Kubernetes-Pod",
      "Kubernetes (2022) Pods. https://kubernetes.io/docs/concepts/workloads/pods/",
    ],
  },
  {
    Term: "Kubernetes Cluster",
    Description:
      "A Kubernetes cluster is a group of nodes running Kubernetes used to run containerized applications. In a Kubernetes Cluster a master node controls and manages worker nodes which are used of running apps.",
    References: [
      "VMware (2022) What is a Kubernetes cluster? https://www.vmware.com/topics/glossary/content/kubernetes-cluster.html",
    ],
  },
  {
    Term: "Kubernetes CLI (Kubectl)",
    Description:
      "Kubectl is a command line tool for interacting with Kubernetes clusters. Kubectl can be used to deploy, manage, and monitor containerized applications.",
    References: [
      "Kubernetes (2022) Overview of kubectl. https://kubernetes.io/docs/reference/kubectl/overview/",
    ],
  },
  {
    Term: "Kubernetes Dashboard",
    Description:
      "Kubernets dashboard is a web-based UI tool for managing Kubernetes clusters. We can use Kuebernetes dashboards to do similar tasks as Kubectl but from the UI.",
    References: [
      "Kubernetes (2022) Web UI (Dashboard). https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/",
      "VMware (2022) Kubernetes Dashboard. https://www.vmware.com/topics/glossary/content/kubernetes-dashboard.html",
    ],
  },
  {
    Term: "ReplicaSet",
    Description:
      "A ReplicaSet is a Kubernetes controller that ensures a specified number of pod replicas are always running at any given time. It helps provide high availability.",
    References: [
      "Kubernetes (2022) ReplicaSet. https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/",
    ],
  },
  {
    Term: "Code Coverage",
    Description:
      "Code coverage is a measure used to describe the degree to which code is tested by tests. It is represented as the percentage of code executed during test runs.",
    References: [
      "Pittet, S. (n.d.). Introduction to Code Coverage. [online] Atlassian. Available at: https://www.atlassian.com/continuous-delivery/software-testing/code-coverage.",
    ],
  },
  {
    Term: "StatefulSet",
    Description:
      "A StatefulSet is a Kubernetes controller providing stateful pods with persistent storage. It can be used to manage deployment and scaling of stateful applications.",
    References: [
      "Kubernetes (2022) StatefulSets. https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/",
    ],
  },
  {
    Term: "Terraform Resource Graph",
    Description:
      "It iss a terraform functionality that allows us to visualize dependencies between resources defined in configuration.",
    References: [
      "HashiCorp (2022) Resource Graph. https://www.terraform.io/docs/cli/commands/graph.html",
    ],
  },
  {
    Term: "Smoke Testing",
    Description:
      "Smoke testing is a software testing technique to check critical functions work. They are preliminary tests to reveal simple failures before further testing.",
    References: [
      "SearchSoftwareQuality. (n.d.). What is smoke testing? - Definition from WhatIs.com. [online] Available at: https://www.techtarget.com/searchsoftwarequality/definition/smoke-testing.",
    ],
  },
  {
    Term: "Cluster CA Certificate",
    Description:
      "CA Certificate is a digital certificate that provides trusted secure communication (using TLS) for the Kubernetes API server. It is used to secure cluster communication.",
    References: [
      "docs.giantswarm.io. (n.d.). Accepting your cluster’s CA certificate – Giant Swarm Documentation. [online] Available at: https://docs.giantswarm.io/getting-started/ca-certificate/",
    ],
  },
  {
    Term: "Test Driven Development (TDD)",
    Description:
      "Test driven development (TDD) is a software development process relying on short cycles driven by writing tests first. It focuses on software design and testing.",
    References: [
      "Unadkat, J. (2021). Test Driven Development (TDD) : Approach & Benefits. [online] BrowserStack. Available at: https://www.browserstack.com/guide/what-is-test-driven-development. ‌",
    ],
  },
  {
    Term: "Bitbucket Pipelines",
    Description:
      "Bitbucket Pipelines is a CI/CD service built into Bitbucket for automating software delivery. It allows creating pipelines to build, test, and deploy code.",
    References: [
      "Atlassian (2022) Bitbucket Pipelines. https://www.atlassian.com/software/bitbucket/features/pipelines",
      "Huang, S. (2022). How to do CI/CD in BitBucket Pipeline. [online] CodeX. Available at: https://medium.com/codex/how-to-do-ci-cd-in-bitbucket-pipeline-f6d96d5fa48b",
    ],
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "SIT722 Glossary", glossary });
});

module.exports = router;
