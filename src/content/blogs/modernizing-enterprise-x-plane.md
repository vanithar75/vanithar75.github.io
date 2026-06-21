---
title: "Modernizing Enterprise Infrastructure - The X-Plane platform approach"
date: 2024-05-21
sourceUrl: https://www.linkedin.com/pulse/modernizing-enterprise-infrastructure-x-plane-vanitha-ramaswami-oaxcc
description: "“My opinions are my own and do not represent the views of my employer”"
coverImage: /images/blogs/modernizing-enterprise-x-plane/cover.jpg
---

![Modernizing Enterprise Infrastructure - The X-Plane platform approach](/images/blogs/modernizing-enterprise-x-plane/cover.jpg)

“My opinions are my own and do not represent the views of my employer”

Enterprises are increasingly adopting “Software defined everything” approach, leveraging AI powered tools. While this enhances efficiency it also adds complexity to the technology stack.

Public cloud providers offer proprietary services and guidelines for application modernization. E.g. Application modernization guidelines on how best to utilize the respective public cloud services. E.g. Cloud Adoption Framework from Microsoft , AWS Migration strategies , Google cloud application modernisation . Likewise for edge computing, edge native application principles from CNCF provides guidance.

However, networking is often not considered in the cloud based application modernisation efforts. Cloud based frameworks often address the application and network modernization separately. i.e. cloud-out pattern, as I discussed in my earlier post [ 1 ]. Regardless of choosing cloud-native or edge-native design, some additional considerations are needed for the system infrastructure design, implementation and scaling.

To fully harness the capabilities of edge and cloud, enterprises need an effective integration approach. In this post, I will explore an effective integration mechanism, using an X-Plane based platform approach, leveraging the latest advancements in compute, storage and network technologies to perform the undifferentiated heavy lifting required for modern enterprise environments. This approach, distinct from the cloud providers PaaS model, simplifies the cloud/edge native system implementation reduces risk and accelerates the deployment of emerging applications.

Effective Integration of Edge AND Cloud

In an Enterprise Context, Edge and Cloud infrastructure can’t (not desirable) be purchased in isolation. To leverage the capabilities of edge and cloud effectively a platform based system design is essential prior to infrastructure selection.

Traditionally in an enterprise environment compute, storage modernization is done independently from networking infrastructure modernization. To take advantage of the latest advancements in compute, storage, networking technologies it is desirable to combine the networking + compute, storage modernization initiatives to explore new options of system architecture & design.

Leveraging the right pre-integrated or modular solution helps to accelerate innovation (more flexibility to do new development with more control of the infrastructure and platforms). This also helps to optimize the TCO for enterprises (Long-term Large scale infrastructure).

The trade off with the pre-integrated vs modular networking, compute and storage is the level of infrastructure control to the enterprise customer.

Disaggregation & Platform approach: Vertical Vs Horizontal Integration

Selecting the appropriate integration strategy for networking, compute, storage solutions is crucial for optimising the technology stack and reducing the total cost of ownership (TCO). Based on the specific needs and use cases enterprises can choose between vertically integrated full stack solution and/or horizontal disaggregated platforms.

It might be useful to classify the enterprise workloads based on their network awareness requirements. This helps to identify workloads that requires differentiated networking services as opposed to normal workloads. The performance, cost optimisation is done collectively considering the network, compute, storage requirements and not just compute, storage. This approach helps to determine when to leverage pre-integrated solutions or disaggregated platforms for maximum efficiency (solution-workload fit). This approach also helps to offload the complex system operations to specialized solution providers.

Enterprise workload categorization

Network aware (Or) Application aware Network dependent Network tolerant Network Isolated

Network aware/Application aware workloads : These are workloads that require a high level of network awareness and real-time performance optimization. They are designed to take advantage of network capabilities and might require dynamic resource allocation (performance, cost optimization). There are multiple implementation options available. E.g. SD-WAN is a transformative approach to managing and operating wide area networks, extending software-defined networking (SDN) concepts to WAN connections. SD-WAN is able to combine inexpensive networks to a very resilient network. Application aware routing is a networking methodology that involves directing network traffic based on the specific requirements and characteristics of the application or service being used. It aims to optimize performance, enhance security, and improve overall user experience by intelligently routing traffic based on application-specific criteria.

Network-Dependent Workloads : This category includes workloads that heavily rely on network connectivity for their functionality. They may require consistent and reliable network connection for normal operation.

Network-Tolerant Workloads : These are workloads that can tolerate certain network limitations or disruptions without significant impact. They do not heavily rely on real-time or consistent network connectivity. Examples include batch processing jobs, offline data analysis, and non-critical backup systems.

Network-Isolated or Air Gapped Workloads : This category includes workloads that are intentionally isolated from the external network for security or compliance reasons. These workloads operate within a closed or isolated network environment for security, privacy, or compliance reasons, with limited or no external network connectivity (e.g. Internet). They typically use private/dedicated connectivity end 2 end.

By considering the network awareness requirements, the various application categories provide a perspective on how enterprise workloads interact with and depend on network connectivity for their functionality and optimal performance.

Enhancing Infrastructure & Operations with X-Plane

SaaS platforms offer quick and easy access to solutions but introduce complexities in enterprise data management including data sharing and integration.

As most enterprises use a combination of buy and build approach for infrastructure, there is a need to balance the control of the infrastructure setup and the software. Procuring platforms with the right level of control of the X-Plane (Control Plane, Data Plane, and Management Plane) helps to improve agility and scale on demand.

I will analyze the multi-domain aspect of this X-Plane approach in a separate post. For ease of management there need to be distinction between the various domains (multiple stakeholders).

Balancing Control, Cost, Innovation

Among the 3 infrastructure planes, having control of the data plane ensures that you have full control over and access to your data. Depending on the control plane design of the platform, it also gives you the flexibility to use any cloud provider or hardware in the future. E.g. If the platform supports a hybrid multi-cloud control plane, it gives you the flexibility to use any cloud or edge hardware vendor for data plane and also helps to process data closer to the source.

The enterprise data plane could be broadly classified into Operational data Plane, Analytical data Plane, Business Data Plane etc. that can be mapped to various applications/systems.

Enterprises use either a shared or dedicated Infrastructure for all the workloads. Platforms provide a way to abstract the infrastructure heterogeneity, manages the complexity and provides a simplified interface.

To improve the resiliency, redundancy could be built in multiple forms in the multi-carrier network services, carrier agnostic solutions etc.

Typically in most platforms the control plane is complex to operate (vendor managed). The control plane is typically shared (multi-tenanted) for cost efficiency. However the data plane could be dedicated (i.e. hosted in enterprise customer’s premise or public cloud account).

Procuring platforms using the X-Plane approach allows enterprises to manage their control, data and management planes independently or from a unified platform offering options for multi-vendor infrastructure and network services, unlike the single-vendor PaaS model. There are other considerations impacting the choice of workload deployment location viz., data sovereignty, localization, performance (reliability, latency).

This alignment helps enhance performance, security, and reliability while reducing cost thru infrastructure sharing across an enterprise.

---

_Originally published on [LinkedIn](https://www.linkedin.com/pulse/modernizing-enterprise-infrastructure-x-plane-vanitha-ramaswami-oaxcc)._