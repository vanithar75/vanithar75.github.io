---
title: "Exploring the Dynamic Landscape of Edge Computing in Singapore"
date: 2023-11-04
sourceUrl: https://www.linkedin.com/pulse/exploring-dynamic-landscape-edge-computing-singapore-ramaswami-ouhqc
description: "“My opinions are my own and do not represent the views of my employer”"
coverImage: /images/blogs/edge-computing-singapore/cover.jpg
---

![Exploring the Dynamic Landscape of Edge Computing in Singapore](/images/blogs/edge-computing-singapore/cover.jpg)

“My opinions are my own and do not represent the views of my employer”

Edge computing has gained attention from both academia and industry by addressing two significant challenges i) moving latency-critical services closer to users and ii) saving network bandwidth by aggregating the data before sending them to the public cloud. While the initial rationale for edge computing appeared robust at its inception almost a decade ago, recent trends have reshaped its course. These include i) geographic proliferation of public cloud services, ii) advancements in mobile phone computing capabilities, and iii) improved network bandwidth enabled by the introduction of 5G technology.

Singapore being a small nation poses some unique requirements for edge deployments. All Hyper-scalers have regions (AWS, Microsoft, Google, etc.,) in Singapore. There are multiple ways to provide dedicated/private connectivity to the public cloud regions (e.g., AWS Direct Connect, Azure Express Route, Google Interconnect, etc.).

A recent study from Facebook shows that most users can reach their services in the cloud within 40 ms.[Source: Refer below*]. The end-to-end latency between the telco central office to the public cloud region (Singapore) ranges from 2 to 5 ms. These trends impact the original assumptions for edge. I’m going to provide some perspective on the shifts in the MNO's priority, barriers to 5G service enablement, and the implications for edge ecosystem development.

Impact of 5G Development

Singapore, as a global technology hub, has pioneered the deployment of a standalone 5G SA network, marking a significant milestone in becoming the first in the world to be covered by a standalone 5G SA network [ Source ]. The 3 major mobile network operators (MNOs) are SingTel. Starhub and M1. Starhub and M1 share the 5G SA network (Band n78 - 3500 MHz), marking the first 5G standalone (“SA”) RAN Sharing network in South East Asia deployed by Nokia [ Source ]. Though the shared configuration has some cost savings it introduces some additional operational complexity in terms of network management and/or edge service development for the MNOs.

Source: https://www.opensignal.com/reports/2023/06/singapore/mobile-network-experience

Challenges in Edge deployment models: With the absence of a dedicated spectrum for commercial enterprise customers, the prevalent edge deployment models have some local adaptations and place some limits on service development. Enterprise customers can’t have dedicated access to 5GC signaling infrastructure, as it is done in other regions viz., USA, and Europe, through private 5G.

Early 5G/Edge Trials in Singapore

The early 5G trials focus on the network performance (air interface performance verification). These are traditional edge computing solutions (use GPU acceleration for data and/or compute-intensive workloads). These solutions don’t integrate any network capabilities (QoS APIs or any other unique 5G network service capabilities) to offer any service differentiation.

Edge Deployment Models

Below are the two common edge deployment models

Source : 3GPP NPN - https://www.3gpp.org/technologies/npn

Broadly the MNO edge offerings could be classified as below:

Pre-Integrated Networking + Compute + Solutions

In these offerings, the Customer Facing Services (CFS) are the bespoke solutions. The underlying infrastructure (connectivity + compute) is fully managed by MNOs.

· All-in-one-orchestrator + Solutions

· Industry solutions

· 5G Solution in a Box

Pre-integrated networking + compute offering

In this offering the telco networking and compute is pre-integrated and offered as a managed service. There are two categories of solution offerings i.e., an Public MEC or Multi-Vendor edge platforms a.k.a open edge platforms.

Hyperscaler Public MEC

This is offered by SingTel. E.g., Azure Public MEC . The solution development needs to be done by partners or enterprise customers. The end-to-end latency between the telco central office to the public cloud region (Singapore) ranges from 2 to 5 ms, so I would think the Hyperscaler solutions like Azure for operators could be overkill in the Singapore context.

This approach works well for enterprise customers who are aligned with a single cloud/looking to solve a specific business problem/use case. The limitation of this approach is the edge solutions are designed to work with a single cloud, which might not be ideal from a solution provider perspective. i.e., additional overhead to support multiple public cloud services (portability challenges). Introduces operational overhead to the MNO, to operate another full stack hyperscaler infrastructure and creates fragmentation of the edge ecosystem.

o Azure Public MEC@SingTel

Multi-Vendor edge platforms

Though the MNO edge platforms are an extension of the Telco NFV cloud, since the initial Telco NFV cloud is implemented using a vertical stack design, the MEC platform is designed as an independent infrastructure initiative.

Networking only solutions

In this offering, the Customer Facing Services (CFS) are the telco networking services. E.g. Enterprise DNN service, Slicing service ( SingTel 5G security as a Slice ).

Compute services are external and have the below options

· MNO-managed compute services e.g., the edge platforms

· Hyperscaler edge compute services (Azure stack edge, AWS Outpost, GDCE/Google distributed cloud edge)

· DIY - enterprise customers' private cloud/edge infrastructure

The Singapore MNOs started with bespoke solutions and are now focusing more on networking and security services. MNO's moving down the value chain help to provide a permanent solution for the global connectivity challenge.

5G Service Enablement Barriers

5G as a new technology promises several things, however, the actual Vs theoretical performance still has some gaps.

5GC design: 5G-SA networks were rolled out based on the solutions available a couple of years ago i.e., vertically integrated stack design.

o This has created a scaling challenge. i.e. unable to scale the control plane and user plane independently.

o Inadequate access to network functions for new service development. E.g., NEF, PCF, CHF. (To create differentiating solutions i.e. OTT Vs Telco-Native).

Lack of Network automation impacts the agility of service delivery and elasticity for networking services. Unlike the earlier telecom network generations to enable the new dynamic services supported by 5G, it requires end-to-end network automation. Hyperscaler direct engagement with Enterprise customers. E.g. Microsoft mixed reality solutions with National University Hospital/ NUHS . In this specific context, 5G and associated network services could help to improve the customer experience (reducing the motion to photon latency). If the solutions are developed using vendor-specific interfaces (e.g., 5G network service integration using Azure for operators) this could fragment the 5G device ecosystem development. Pre-integration of the of the 5GC Signaling infrastructure with the platform services of hyperscaler could result in a device that is supported with a specific cloud. To promote interoperability it is desirable the interfaces between the Device and the 5G network services are leveraging open standards.

Road Ahead for Edge Ecosystem Development

As MNOs delve deeper into addressing last-mile connectivity issues, the alignment of their strategies with the broader goal of global connectivity for IoT/Edge services represents a significant step forward. A continued focus on network modernization remains pivotal in harnessing the full potential of cloud-native 5G, ultimately fostering a conducive environment for the development and adoption of edge computing solutions. The success of the network modernization initiatives is crucial to the development and adoption of edge computing offerings from the MNOs.

* B. Schlinker, I. Cunha, Y.-C. Chiu, S. Sundaresan, and E. Katz-Bassett. Internet

performance from Facebook’s edge. In Proceedings of the Internet Measurement

Conference, IMC ’19, page 179–194, New York, NY, USA, 2019. Association for

---

_Originally published on [LinkedIn](https://www.linkedin.com/pulse/exploring-dynamic-landscape-edge-computing-singapore-ramaswami-ouhqc)._