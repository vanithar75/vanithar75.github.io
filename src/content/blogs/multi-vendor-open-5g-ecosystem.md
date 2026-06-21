---
title: "Multi-Vendor Open ecosystem - The Accelerator for 5G Service enablement"
date: 2023-07-21
sourceUrl: https://www.linkedin.com/pulse/multi-vendor-open-ecosystem-accelerator-5g-service-ramaswami
description: "“My opinions are my own and do not represent the views of my employer”"
coverImage: /images/blogs/multi-vendor-open-5g-ecosystem/cover.jpg
---

![Multi-Vendor Open ecosystem - The Accelerator for 5G Service enablement](/images/blogs/multi-vendor-open-5g-ecosystem/cover.jpg)

“My opinions are my own and do not represent the views of my employer”

In a fragmented market, it takes a great deal of effort to understand the long-term effects of the selected solution to solve a business problem. Sometimes the solution itself is a barrier to new service development . It is essential to understand how to leverage a multi-vendor and open approach for network design and accelerate the 5G service and ecosystem development.

I’m going to share some design patterns for a multi-vendor 5G network so MNOs can have better control of the network and accelerate service development and help develop an open 5G ecosystem. The goal is to identify the Network Functions that have a direct or play a critical role in Enterprise 5G service enablement. The solution is to make those network functions from multiple vendors so that MNOs have better control of the network infrastructure and hence facilitate the development of an open ecosystem for 5G and edge services.

The signaling in 5G networks is quite different from the previous generations. The key difference of 5G is the Service Based Architecture (SBA) that is enabled by SCP (Secure Communications Proxy).

With 5G the network now needs to support not just the traditional services but also support new high bandwidth, low latency applications, and massive machine-to-machine communications as well as handle complex interworking across multiple domains.

In the new 5G Service Based Architecture (SBA) the 5G network signaling shares the control plane with ‘Any to Any’ communications between NFs or Application Functions (AFs) and uses HTTPS or HTTP/2 protocol resembling a typical web-scale application server. I’ll share a summary of the key points to understand some concepts of 5G signaling from this article .

Service-based design is a new architectural style adopted by 3GPP for 5G NFs. This enables a programmable architecture in which the network functions are interconnected and accessed using a message bus. Service Based Interface (SBI) is the term given to the API-based communication that takes place between the xNFs (Virtualized/Containerized Network Functions) within the 5G SBA (Service Based Architecture).

Enterprise Customer Needs

Enterprise 5G services have some distinct requirements compared to consumer services which are statically provisioned and provide less control to consumers.

· Network Function Agility - Incrementally scale up/down a Network Function or a group of Network Functions, based on enterprise service requirements.

· More control to enterprise customers - For IoT and edge services, enterprises need to have more visibility and control to monitor the service performance of Key Quality Indicators (KQI), Key Performance Indicators (KPI), manage the lifecycle of the SIMs, enforce device management policies, etc.,

· Security - A Shared responsibility – Enterprise is responsible for securing Application Data in the MNO Edge network and MNO is responsible for securing the network.

5G Network Design - Design-in Multi-vendor

To have greater flexibility, and control of the 5G network, enable new services, and scale the service development it is desirable to have the 5GC network functions from multiple vendors. The criteria for the multi-vendor xNF selection shall be based on the impact of the network function against the potential for new 5G service development.

The below table summarises the impact of the multi-vendor on the service enablement potential, from an MNO perspective.

* This is a simplistic view and doesn’t factor in RAN for the 5G service enablement (much more complex to kickstart development compared to 5GC).

From the Enterprise customer (service development) perspective and based on the functional capabilities the Network Functions are grouped into the below categories, excluding the core telecommunications service network functions.

Option - 1 - Network Function Groups

Designing in multi-network into the planning phase of the 5G network could be based on network function groups (i.e., functional/logical grouping and/or based on the availability of 3rd party solutions from network function vendors)

· Subscription Management

Option - 2 - Network Functions based on Service Enablement Potential

5G System Architecture

Key principles and design considerations

Below excerpt from 3GPP TS 23.501 V16.11.0 (2021-12)

- Separate the User Plane (UP) functions from the Control Plane (CP) functions, allowing independent scalability, evolution, and flexible deployments e.g., centralized location or distributed (remote) location.

- Modularize the function design, e.g., to enable flexible and efficient network slicing.

- Wherever applicable, define procedures (i.e., the set of interactions between network functions) as services, so that their re-use is possible.

- Enable each Network Function and its Network Function Services to interact with other NF and its Network Function Services directly or indirectly via a Service Communication Proxy if required.

- Minimize dependencies between the Access Network (AN) and the Core Network (CN). The architecture is defined with a converged core network with a common AN - CN interface which integrates different Access Types e.g., 3GPP access and non-3GPP access.

- Support a unified authentication framework.

- Support capability exposure.

- Support concurrent access to local and centralized services. To support low latency services and access to local data networks, UserPlane functions can be deployed close to the Access Network.

Network Repository Function (NRF)

In simple terms, the NRF is like a DNS server. In Release 16, 3GPP introduced Model C and Model D for large-scale production networks with indirect NRF communication via a new network function - the Service Communications Proxy (SCP). The SCP provides routing, redirection, load management, and traffic optimization.

Service Communications Proxy (SCP) - Simplifies Routing and Management on the Control Plane

The SCP acts as the routing intermediary that manages the requests and responses between all the Network Functions (NF) in the 5G core. The Network Exposure Function (NEF) and the Policy Control Function (PCF) in 5G limits which NFs can communicate with one another, there are a very large number of possible interactions if every NF can talk directly to every other authorized NF.

The SCP dramatically simplifies flow management and aggregates traffic efficiently in a highly distributed cloud-native environment, regardless of the location of NF microservice instances i.e. local or remote.

SCP - Enabler for 5G SA service development

1. Massive scalability of signaling transactions due to

* Transactions volume

2. Multi-Generation Network service Support

* Seamless Delivery of converged 4G and 5G services

3. End to End Service Delivery across Multiple Domains

* Multi-Carrier Domain Networking

* Intercarrier signaling across multiple carrier domains

4. Security for Signalling Network

5G Service-Based Interface Application - Similarity to Webscale application

5G-Service Based Interface (SBI) Application synthesizes the HTTP2 transactions with proper L2, L3, and L4 headers that it receives from the UDP-GRE or VXLAN ingress TEPs (Tunnel End Point). Once the headers are synthesized and a complete HTTP2 transaction is formed, the packets are sent to the egress TEP (Tunnel End Point) in the SCP.

This link explains how the SBI application works in greater detail.

As illustrated in the 3GPP specs the 5G NF or AF communication model is thru pub/sub or request/response, like any web scale application.

If a 5G AF is a hyperscale web application, what is the barrier to 5G service development?

The barrier is the solution itself . As explained in this post, the network equipment vendor solution doesn’t facilitate 3rd party innovation (predominantly has more proprietary/vendor specific extensions and proposes its own AF which is cost-prohibitive to scale).

To fulfill the cloud-native requirements of 5G, some MNOs partnered with public cloud providers for 5GC deployment + network edge MEC. The challenge that is addressed by the public cloud offerings is the management aspect and doesn’t address the 5G service enablement. i.e., new AF development requires Telco ISV (cloud-native skills + telco domain expertise) to create platform services for the application developers and/or enterprise customers.

Vertically Integrated 5GC Stack - Proprietary AF Integrations

The AF (Application Function) implementation in the vertically integrated stack design from network equipment vendors or public cloud providers is not based on open standards. E.g., Onboarding a new AF vendor to the MNO network.

To scale the 5G service development there is a need to onboard more 3rd party Application Function (AF) developers. However, the telecom network is fully managed by the MNO and isn’t open to 3rd party Application Function developers. (Guidelines for qualification and validation of AF need to be defined).

This is where I think the closed or proprietary nature of the Application Function (AF) and solution development with the vertically integrated NFV stack design from public cloud providers or network equipment vendors is a barrier to new service enablement (less control to the MNO). A solution that is put in place for 5G SA network modernization is a barrier to scale 5G service enablement. These full-stack solutions try to solve the network management challenge and provide some tools for application developers and have the potential to create vendor lock-in for 6G to the MNO.

Accelerating 5G service enablement thru an Open multi-vendor ecosystem

Standard bodies like 3GPP, GSMA, and TMForum are defining service enablement standards to facilitate open 5G ecosystem development, it is essential to understand the producer/consumer relationship as well. The telecom domain is complex, and there would be a need to develop new platform services using telecom network services to further simplify and scale the consumption and integration into solutions. Scaling the Application Function developer ecosystem is critical to the success of the multi-vendor open 5G ecosystem.

* The assumption is disaggregated 5G network, where MNO manages the IaaS and PaaS. Network Function vendors provide multi-vendor network functions

Open standards for distributed edge services are still evolving for a hyper-converged deployment of network functions and application functions to fulfill the needs of emerging applications.

In the cloud-native network design when telecom network functions are running as IT applications whether the MNO needs to procure full stack solutions to do undifferentiated heavy lifting of the infrastructure or take control of the infrastructure is a choice.

---

_Originally published on [LinkedIn](https://www.linkedin.com/pulse/multi-vendor-open-ecosystem-accelerator-5g-service-ramaswami)._