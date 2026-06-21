---
title: "Optimally Distributing Intelligence - Prioritizing Interoperability, Portability - Part 2"
date: 2024-03-19
sourceUrl: https://www.linkedin.com/pulse/optimally-distributing-intelligence-prioritizing-part-ramaswami-xncdf
description: "“My opinions are my own and do not represent the views of my employer”"
coverImage: /images/blogs/distributing-intelligence-part-2/cover.jpg
---

![Optimally Distributing Intelligence - Prioritizing Interoperability, Portability - Part 2](/images/blogs/distributing-intelligence-part-2/cover.jpg)

“My opinions are my own and do not represent the views of my employer”

In today’s fast-moving and complex business, the capability to provide Real-time response has become a key competitive differentiator for enterprises. The previous post [ 1 ] explains how an event driven data pre-processing pipeline can enhance performance for real-time AI analytics and reduce compute cost by leveraging upstream device intelligence.

In this post, I will further elaborate on the design considerations from the perspective of an Enterprise Customer (Buyer).

From the standpoint of an enterprise customer and Solution Provider (OEM, ISV) platforms enable the core activities of the business and connects different entities (internal/external stakeholders). To integrate AI into business processes (IT/OT) based on a platform-based architecture, the key enabling platforms helps to accelerate and reduce risk with the bespoke or DIY solutions.

Generic Platform Design Considerations

Optimal distribution of ML inferencing environment: Achieving optimal distribution across different locations involves considering various factors such as performance, cost, latency, data privacy and scalability. Moving data around is costly and adds governance and security considerations. AI safety consideration : When automated ML model decisions are costly or irreversible, human approval becomes necessary. This is known as human-in-the-loop AI system. On the other hand if the model predictions are high confidence, there is a provision for human oversight. i.e. a small sample of high-confidence predictions is sent to a human expert for ongoing validation. This is known as human-over-the loop. Decoupling compute and Storage : Combining storage and processing into a single stage for data management leads to tight coupling and result in wasted resources. E.g. if the data sizes grow, you will need to scale both storage and compute resources. Centralized multi-cloud control plane : The cost of moving data between cloud providers is not sustainable to any enterprise. A centralized multi-cloud control plane enables consistent configurations and governance across diverse environments (massively scalable). Hybrid multi-cloud infrastructure : This could be a strategic choice for AI, data platform that allows combining the best of breed solutions deployed on edge and multiple public cloud environments. Integrated Vs Modular Design: The scale of deployment would help to decide whether modular or integrated platform design with a general-purpose or purpose-built device is a better fit. Aligning Video Analytics use-cases to hot and cold path helps to identify the optimal design.

In the fragmented ecosystem, finding the optimal technology stack is challenging. Sometimes fulfilling a Video Analytics Use case might involve using multiple ML models and pre- and post-processing filters. Each of this model has to be trained in its own data from scratch or from ML building block models. E.g., a facial recognition usecase may require multiple models for tasks such as face detection, feature extraction and face recognition. If multiple ML models are packaged using containers and orchestrated via an automation pipeline it provides the flexibility in deployment.

Kubernetes has become the de-facto compute platform infrastructure to run micro services based applications spanning from edge 2 cloud.

Accelerating Enterprise AI Implementation with Platform based design

Enterprises use multiple IT/OT systems, requiring multiple platforms to optimally leverage both the edge and cloud capabilities. Typically, enterprises buy platforms and do not necessarily build it from scratch. Regardless of vertical, below are the core enabling platforms for scaling Enterprise AI initiatives.

All the above platforms share a common design trait. To mitigate the complexity, the platform capabilities are separated into control plane, data plane a.k.a compute plane and/or management plane (optional). The control plane is involved with establishing and enforcing policy, while the data plane is carrying out the policy. This link explains this concept further. This concept is originated from networking.

Edge platforms - - These are modern alternatives of infrastructure management platforms a.k.a edge orchestration platforms. These platforms typically helps to reduce the cost & complexity of edge deployments by automating the application, infrastructure lifecycle management, optionally last-mile service provisioning. They support a diverse range of edge hardware and servers. They also support multiple platforms (e.g. Redhat open shift, VMWare, DIY kubernetes etc.,)

It provides a central control plane from edge(s) to public cloud. It also supports the lifecycle management of ML inferencing environment.

AI platform helps to accelerate and scale the Enterprise AI initiatives and provides out-of-the box support for AI usecases specific to the Vertical. Depending on the procured solution, this platform supports multiple environment i.e. ML Training, Inferencing and MLOps capabilities. MLOps is a set of processes and automated steps to manage code, data and models. It combines DevOps, DataOps and ModelOps as mentioned in this link .

MLOps platforms – This is an optional platform, depending on the procured AI platform capability. It is important to recognise the ML workflow is more than just model training and deployment/inferencing. The end-to-end ML workflow consists of 1. Training 2. Deployment 3. Evaluation 4. Invocation (inferencing) 5. Monitoring 6. Experimentation 7. Explanation 8. Troubleshooting and 9. Auditing.

Data Platforms : The data landscape is changing rapidly. Big data architectures are evolving LAMBDA, KAPPA, and Delta etc., Data platform(typically multi-cloud) helps to remove data silos within an enterprise (OT/IT systems). These platforms provide an environment for data processing, analytics, and machine learning enabling enterprises to leverage their data assets and derive insights to drive business outcome. There are multiple approaches to implement a data platform. E.g., Data mesh allows an enterprise to create a unified data platform without centralizing all the data in IT.

Databricks is a data platform that is composed of a control plane and a data plane. E.g. the control plane is on the Azure cloud and host services such as cluster management, jobs etc. The data plane is deployed in a customer-managed VNet/VPC, so that the customer can build a secure network architecture according to enterprise requirements. The actual compute resources runs in customer’s public cloud account and not the SaaS provider. i.e. Databricks.

Multi-cloud control plane : Tools such as Google BigQuery Omni provides a consistent control plane and query layer regardless of the storage (AWS, GCP or Azure). This helps to ensure that the same tooling can be used regardless of which hyperscaler’s storage a dataset lives in.

What is Edge AI platform?

These are vendor specific integrated offerings (pre-integrated hardware (GPU/compute accelerators) + software). However, decoupling the responsibilities into AI and Edge platform is feasible. The Edge platform focuses on the control and/or management plane (compute, storage infrastructure) while the AI platform provides pre-trained models and AI applications.

This is where using a general-purpose Kubernetes platform help to manage the distributed deployment complexity.

Why Not an ML platform?

This platform is for builders (OEM,ISV). While ML platform offer a unified and integrated environment for AI lifecycle stages, they require specialized skills for production grade enterprise AI applications. It is desirable to use a managed service provider for the ML activities. Given the maturity of AI platforms, it is desirable to start with the AI platforms from solution providers (OEM, ISV).

VA Use case Alignment to Hot and Cold path

Not all VA use cases require the same level of performance. Use cases that are constrained by latency requirement as assigned to the hot path, requires a different ML technology stack. VA use case alignment will also influence the platform requirements.

For real-time analytics, deploying the ML model as microservices packaged in containers offers flexibility in choosing deployment environments (device vs edge vs cloud). The trade-off is cost Vs complexity Vs business value.

For batch analytics, leverage device or edge servers for initial data pre-processing, and Data center AI infrastructure optimizes cost-effective AI analytics at scale.

Why prioritize Interoperability and Portability?

AI/ML space is evolving rapidly. Interoperable devices and portable ML inferencing environment lays the foundation for a successful large-scale AI implementation. Modernizing the enterprise IT/OT infrastructure with a platform-based design, helps to manage the complexity (introduced by the distributed deployment) and take advantage of the technology advancements in compute, storage and networking.

I hope you gained some understanding on how platforms helps to abstract the deployment complexity and support for multi-cloud control plane and data plane helps to bring compute closer to the data source.

---

_Originally published on [LinkedIn](https://www.linkedin.com/pulse/optimally-distributing-intelligence-prioritizing-part-ramaswami-xncdf)._