---
title: "Design Considerations for Brownfield telecom network modernization- Part 2"
date: 2023-07-13
sourceUrl: https://www.linkedin.com/pulse/design-considerations-brownfield-telecom-network-part-ramaswami
description: "Enterprises will almost always need to integrate key resources and processes in unique ways to get the job done and create competitive differentiation. Oftentimes, it’s not the individual resources an"
coverImage: /images/blogs/brownfield-telecom-modernization-part-2/cover.jpg
---

![Design Considerations for Brownfield telecom network modernization- Part 2](/images/blogs/brownfield-telecom-modernization-part-2/cover.jpg)

Enterprises will almost always need to integrate key resources and processes in unique ways to get the job done and create competitive differentiation. Oftentimes, it’s not the individual resources and processes that make the difference but their relationship to one another.

Brownfield projects are much more complicated in comparison to Greenfield projects since it requires obsoleting or redevelopment or upgrade of existing infrastructure, processes, and tools. In this complex process sometimes, new systems get integrated against legacy/near obsolescence systems costing time & money without generating enough business value.

I’m going to share some views on how to navigate the brownfield transformation project complexity and how the platform engineering approach could help to manage the complexity of the cloud-native deployment of 5G and accelerate service development.

In an MNO environment, the software architecture of systems can be influenced in several ways e.g., a procurement process. This can have a potential impact on other areas e.g., scaling service enablement as the costs can rapidly escalate to a point where it is not commercially viable to develop new services. Therefore, it is desirable to plan for future scalability based on a platform approach instead of isolated independent technology stacks to provide not just cost savings, but also agility and enablement of new services/applications.

Cloud Native 5G Design

5G demands a cloud-native design, at the outset the telecom network architecture design patterns resemble a massively scalable web application, but with deterministic/real-time performance needs of telecommunication networks.

In 5G CUPS (Control Plane User Plane Separation) is a critical enabler for new service enablement. Decoupling the control plane from the user plane enables a more distributed network architecture that provides massive scalability, flexibility, and new capabilities like edge computing and provides a more cost-effective approach to the 5GC network implementation. The CUPS implementation in a network is directly influenced by the system architecture and is a bottleneck for 5G service development.

Delivering network services over geographically diverse edge infrastructure is a very complex task. This means the 5G network needs to be designed and delivered as a cloud-native network function that can be dynamically deployed and scaled up/down based on demand in a completely automated manner.

5GC Deployment Models

Given the number of deployment options available for 5GC network design, I classified them broadly into 4 different options based on ETSI wp54.

To assess the business impact of the technical architecture, these options could be further aggregated as below.

· Single Vendor - Vertically integrated stack or Full stack solutions - Pre-integrations of Hardware, Platform, and Network Function is managed by 1 vendor) i.e., Network Equipment vendor or Public cloud provider.

· Multi-vendor or disaggregated stack

Vertically integrated stack i.e., purpose-built stack from network equipment vendors or public cloud providers shares a similar set of pros & cons . As this author explains, I would think the hyper scaler edge propositions are more geared towards the long-term (6G) business opportunity. Telecom Network function capabilities are based on standards, the key distinction between the offerings from network equipment vendors and hyperscalers is the management capabilities.

Business Impact of Single-vendor Solution on 5G Service Enablement

· Distributed Edge services development: The Single vendor 5GC or Vertically Integrated stack are often On-Premise deployment and impacts the scaling of the CUPS implementation. In this approach, there is a heavy reliance on a single vendor for Network Functions e.g., UPF. The integration cost is typically the barrier to new service development.

· Service Exposure layer Development : Expose the network and or edge service capabilities. This is a critical enabler for integrating telecom network services into Enterprise IT/OT platforms and solutions.

Scaling CUPS Implementation in a Vertically Integrated/Full Stack Architecture

The compute, storage, and network resources need to be able to scale independently. On-Prem infrastructure has fixed capacity (compute, storage, etc.,) and scaling is CapEx intensive.

To cost-effectively scale the control plane functions, alternative options for scaling the control plane could be explored E.g., moving the control plane function to the middle mile edge (better performance than the public cloud region) or to the public cloud region. The telecom network control plane function latency requirements are around 10 ~ 20 ms, and hence for MNOs looking for an option to scale without CapEx investment middle-mile edge or public cloud region could be leveraged.

A Telecom data plane a.k.a user plane can never be hosted in the public cloud. It always has to be on-premises (i.e. the nature of the traffic due to heavy egress charges and to support high-performance applications with low latency). To scale the data plane i.e., UPF, and provide choice, and flexibility for the emerging new applications a UPF implementation (desirable to be independent of the other NF vendor i.e. multi-vendor ) to lower the TCO in the long term.

Having better control of the telecom network infrastructure helps to achieve lower costs and could be a differentiator to add support for emerging new applications. With 5G, the traffic aggregation at each segment of the network from the device to the 5GC (packet processing core) challenges the traditional network capacity planning methods. It is the whole system approach that helps to create a sustainable strategy to create more value for customers.

Procurement Process Influencing the network design

While implementing large systems components could be procured in full or in parts and this could also result in a vertical stack design. The system architecture is influenced by the procurement process.

An Usecase-driven RFP could result in purchasing a Vertically Integrated/Full stack design. E.g., RFP for gaming solutions or any use-case-driven RFP. In this context, the decision is made for a specific use case, and the infrastructure is provisioned for the use case in isolation influencing the system architecture.

Disaggregated Network Function Stack - The Management Challenge

The use of the public cloud for telecom network function deployments has a significant impact on the MANO (Management and Orchestration layer).

Navigating the telecom standards for products and service development is also a challenge for the MNO. To achieve interoperability MNOs, prefer COTS (Commercial Of the Shelf) products. Not all the standards are authoritative, some are led by non-authoritative standards. COTS products with support for standards viz., ETSI MANO the COTS solution choices are quite limited. This requires exploring alternative solution options from the new entrants (viz., cloud-native Telco ISVs typically follow de-facto standards to achieve agility).

Cloud Native orchestration platforms - For the Buyers

MNOs always have relied on procuring pre-integrated systems and solutions for telecom network functions (5GC).

The traditional way of procuring might not work well for 5GC. To cost-effectively enable new services, it is desirable that the 5GC environment is multi-vendor and disaggregated.

Cloud Native Network Function Deployment - Where do standards matter?

As more and more telecom network functions are deployed on general-purpose hardware (moving away from a purpose-built design), a wide range of automation tools are used. E.g., 3rd party orchestration platforms or vendor-specific automation tools viz., AWS cloud formation, Azure Resource Manager, Google cloud deployment manager, etc.,

The network or service orchestration products with legacy assumptions (software interfaces) might create overhead when integrating with systems that are using cloud-native interfaces.

The Network Function vendors (new entrants) predominantly have aligned with helm charts, and Kubernetes operators to manage the NF deployments, and the existing standards like ETSI MANO (SOL0015) for VIM, VIMMgr, etc. could potentially add overhead while integrating with cloud-native orchestration platforms. The cloud-native orchestration platforms leverage alternate ways (defacto standards) to manage the lifecycle of network functions. These cloud orchestration platforms support open APIs(RESTful/GraphQL) to provide abstraction at the domain and cross-domain levels. The API-driven model helps easy integration with 3rd party software components and hence enables best-of-breed orchestration.

Orchestration Products from traditional network equipment vendors follow traditional telecom interfaces which might not add too much value with the new emerging substitutes offerings from Telco ISV (COTS orchestration products).

On the other hand, the Full Stack solutions from Hyperscalers (Azure for Operator, AWS Wavelength, etc.,) leverage proprietary orchestration and management interfaces that add additional complexity to the MNO OSS/BSS integration. (MNOs typically leverage open Telecom Standards)

Disaggregated Network Function Stack - How to Achieve Interoperability

I would think MNO need to take ownership and manage the IaaS, and PaaS dependencies with the Network Function (NF) function Lifecycle management using automation tools and orchestration platforms.

Buying the orchestration platforms to manage the Network Function lifecycle management from Telco ISVs has merits over DIY automation tools (e.g., AWS CloudFormation, or Azure RAM) for MNOs without too much in-house development capability (reduce risk and time to value).

Interoperability Testing

To ensure continuous testing of the disaggregated stack of hardware, platform, and network functions dedicated test facilities need to be set up to manage the hardware variants, platform, software versions, etc., and to continuously monitor & optimize the disaggregated stack design.

Managing the Cloud-Native 5G Operational Complexity

With 5G, there is an increasing need to design and operate IP network-like clouds with hardware-decoupled, software functions and platforms in a similar way to public cloud providers.

Shifting towards a Platforms Operations Model

“Platform engineering is the discipline of designing and building toolchains and workflows that enable self-service capabilities for software engineering organizations in the cloud-native era. Platform engineers provide an integrated product most often referred to as an “Internal Developer Platform” covering the operational necessities of the entire lifecycle of an application.”

Source: Platform engineering

By investing in platforms enterprises can

Reduce the cognitive load on product teams and thereby accelerate product development and delivery Improve reliability and resiliency of products relying on platform capabilities by dedicating experts to configure and manage them Accelerate product development and delivery by reusing and sharing platform tools and knowledge across many teams in an enterprise Reduce the risk of security, regulatory and functional issues in products and services by governing platform capabilities and the users, tools, and processes surrounding them Enable cost-effective and productive use of services from public clouds and other managed offerings by enabling delegation of implementations to those providers while maintaining control over user experience

Source: CNCF Platforms

Shifting the operations from a vertical to a horizontal platform operational model could help to manage the complexity of the 5G network deployment and accelerate service enablement.

With 5G and beyond (6G) cloud-native, disaggregated IP network clouds will lead to the convergence of network, cloud, and application layer technologies on a unified, multi-service platform. The shift towards a platform engineering way of operations could help MNOs deal with the complexity of the next-generation NaaS platform development.

I hope you gained some information to navigate the 5G operational complexity.

---

_Originally published on [LinkedIn](https://www.linkedin.com/pulse/design-considerations-brownfield-telecom-network-part-ramaswami)._