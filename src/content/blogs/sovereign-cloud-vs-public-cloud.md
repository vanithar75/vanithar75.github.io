---
title: "Sovereign Cloud Vs Public Cloud: Balancing control and agility"
date: 2024-10-15
sourceUrl: https://www.linkedin.com/pulse/sovereign-cloud-vs-public-balancing-control-agility-vanitha-ramaswami-fdpdc
description: "“My opinions are my own and do not represent the views of my employer”"
coverImage: /images/blogs/sovereign-cloud-vs-public-cloud/cover.jpg
---

![Sovereign Cloud Vs Public Cloud: Balancing control and agility](/images/blogs/sovereign-cloud-vs-public-cloud/cover.jpg)

“My opinions are my own and do not represent the views of my employer”

Collecting data in a way that supports informed decision-making places significant demands on the infrastructure and the security measures that protect it. With advancements in wireless networking, compute, and storage many industries and use cases now have the potential to enable data-driven decision making.

There are numerous solution design options available that provides a wide range of Security, Performance, and Reliability choices. However the key consideration for solution design is often the level of control required. A typical enterprise environment comprise of diverse, heterogeneous infrastructure and consumes cloud-based digital services in multiple forms viz., IaaS, PaaS, and SaaS from the public cloud regions, besides the on-prem/private cloud infrastructure within enterprise premises

In this post, I’ll analyse the key differences between public cloud region and sovereign cloud and key considerations for application migration to the sovereign cloud.

The public cloud regions provide on-demand resources (compute, storage, network, database etc.,) on a global scale but typically offer less control over the underlying infrastructure. Enterprises that require greater control of the infrastructure use a variant of the public cloud a.k.a. sovereign cloud.

While both public cloud regions and sovereign cloud environments share fundamental infrastructure components (compute, storage, and networking), their level of control, isolation and capabilities varies significantly. Public cloud regions are connected to a global backbone network (provided by AWS, Microsoft, Google, etc.), offering "always-on" connectivity and centralized management, whereas the connectivity is “On-Demand” in sovereign cloud.

In contrast, a sovereign cloud environment provides full isolation, without requiring connection to the public cloud or internet to manage infrastructure, services, APIs, or tools. This isolation ensures compliance with local data regulations, enabling better control over data residency, operational oversight, and encryption management.

Management Experience: Both public cloud and sovereign cloud environments provide a similar management experience. However, the number of managed services between these two infrastructures vary significantly. Public cloud regions offer a significantly broader set of services. Migration Challenges: The disparity in the number of managed services and/or usage of 3rd party SaaS services poses a challenge when migrating solutions from public cloud to sovereign cloud. Enterprises must carefully assess the capabilities of the sovereign cloud to ensure compatibility with existing applications. Scaling and Resource Planning: Sovereign (air-gapped) environments face challenges similar to traditional on-premise infrastructure, such as fixed or limited capacity, requiring careful upfront resource planning.

Based on the above definition from google, the terms software sovereignty and application portability are interchangeable. Both concepts refer to applications that are agnostic to the underlying hardware infrastructure/software, meaning they rely less on proprietary managed services from cloud providers. Ensuring software sovereignty allows for greater flexibility and reduces vendor lock-in.

Sovereign or air-gapped solutions provided by hyperscalers (viz., AWS Outposts, Google distributed edge etc.,) are typically delivered as appliances/racks. These appliances consist of a chassis containing blades and a computing switch, and users need to supply their own workstation for installation and management. [ Source ]

Although isolation reduces certain risks, it doesn’t eliminate all vulnerabilities. The threat attack surface are different for the different types of cloud environments. In public cloud regions, misconfiguration is the most common source of security breache. On the other hand, sovereign or air-gapped environments may be more susceptible to supply chain attacks.

The public cloud regions are well known for its agility providing global infrastructure and a consistent management interface with real-time platform updates. In Public cloud regions the management is centralised (providing economies of scale) and updates are delivered in real-time.

In an air-gapped or sovereign cloud environment, platform updates cannot be delivered in real-time due to the lack of external network connectivity. This introduces a delay between when a cloud service provider releases an update and when they are implemented in the sovereign cloud.

The air-gapped environments has the potential to create management silos as opposed to the centralised management, visibility which is the key value proposition of public cloud regions.

Despite the challenges involved in the operations of sovereign cloud and the delayed platform updates, below are the drivers for the use of sovereign cloud.

Management Interface : It’s ideal for customers who prefer the cloud provider’s management interface (single-cloud). Data Privacy & Compliance : For workloads with stringent data privacy requirements, sovereign cloud offers greater isolation compared to public cloud regions, ensuring compliance with local regulations. AI/ML Capabilities : Sovereign clouds can support the compute-intensive needs of AI/ML training while providing the necessary isolation for sensitive data.

For workloads with stringent “Data Privacy” requirements, sovereign clouds offer better isolation than the public cloud regions.

The differences between public cloud and sovereign cloud environments present new challenges for both solution providers (OEMs/ISVs) and enterprise customers for AI solutions.

Challenges in running cloud-hosted (regions) solutions in Sovereign Cloud

Environment Ownership :

Data sovereignty influences the solution provider's (OEM/ISV) access to the various ML environments. This dictates the training,fine-tuning and inferencing a.k.a serving environment setup and ongoing maintenance.

As discussed in the earlier post , when an enterprise customer BUY AI platforms, there are some nuances to the ownership of the various AI/ML environments (Training, Fine-Tuning, Inferencing/Serving) between the Solution Provider (OEM/ISV) and the Enterprise Customer.

Integrating AI capabilities in business/operational support systems:

The AI/ML capabilities are now being infused (deeply integrated) into business and operational support systems. This means, the AI/ML inferencing/serving environment (which run predictions) need to be closer/co-located with the business/operational support systems.

Scaling AI deployments - Distinct/Isolated ML environments Vs Federated Learning ?

Hyperscaler solutions typically provides the same toolset for multiple ML environments (Training, Fine Tuning, Inferencing) in form of managed services. For greater flexibility the ML inferencing/serving environment need to be co-located with the business/operational support systems.

Having distinction between the various ML environments help to scale the deployment of AI solutions. Depending on the level of control these environments could share the same MLOps toolset or have distinct toolset supported by multiple solution providers. This allows better collaboration and faster iterations. The MLOps toolsets and platforms, responsible for managing the AI/ML model lifecycle, are best co-located with training and fine-tuning environments. Inferencing environment has a different considerations for realtime or batch predictions. i.e. location sensitive. Federated Learning could be an alternate approach that could be explored to mitigate this challenge.

Sovereign cloud shares many similarities with traditional on-premise environments. It offers modern operational tools, software defined networking and automation capabilities. It is ideal for enterprises with stringent data privacy and regulatory requirements, providing localised control and access to the technologies powering the hyperscale cloud.

---

_Originally published on [LinkedIn](https://www.linkedin.com/pulse/sovereign-cloud-vs-public-balancing-control-agility-vanitha-ramaswami-fdpdc)._