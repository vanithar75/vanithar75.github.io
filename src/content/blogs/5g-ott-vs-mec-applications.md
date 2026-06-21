---
title: "5G OTT Vs MEC Applications - The Differentiators"
date: 2023-06-23
sourceUrl: https://www.linkedin.com/pulse/5g-ott-vs-mec-applications-differentiators-vanitha-ramaswami
description: "“My opinions are my own and do not represent the views of my employer”"
coverImage: /images/blogs/5g-ott-vs-mec-applications/cover.jpg
---

![5G OTT Vs MEC Applications - The Differentiators](/images/blogs/5g-ott-vs-mec-applications/cover.jpg)

“My opinions are my own and do not represent the views of my employer”

As the key technology for next-generation information and communication 5G and edge computing provides a comprehensive digital infrastructure to Enterprises. 5G has changed the telecommunications industry, allowing a new generation of devices and applications to be connected. 5G provides service providers with an opportunity to optimize and monetize the 5GC networks.

MEC is envisaged to play an important role in the way 5G penetrates enterprise connectivity and is used to support enterprise applications and accelerate enterprise digital transformation initiatives. Multi-access Edge Computing (MEC) is a network infrastructure solution that offers application developers and content providers cloud-computing capabilities and an IT service environment at the edge of the telecom network. The key differentiation is that it offers trusted telecom in-network services viz., location, latency, privacy and data residency, and many more.

MNOs have launched MEC offerings in multiple variants viz., Public MEC, Private MEC, and Distributed MEC as multi-vendor solutions or as single-vendor Fullstack solutions partnering with public cloud providers. The single-vendor infrastructure acceleration solutions don’t offer much detail on how the MEC applications are deployed with support for multiple management domains. i.e., PLMN Trust Domain (MNO managed) Vs Un-Trusted domain a.k.a Edge Computing Service Providers (ECSP) domain, and how these MEC applications leverage the telco network capabilities to offer differentiation.

Given the choices of the vendor and infrastructure-agnostic edge platforms and solutions available, it is desirable to understand the MNO technical differentiators to assess the edge solution fit in an enterprise context. I will provide some perspective on MEC applications from a standards perspective in 5G Service Based Architecture and how MEC application differentiates from OTT application.

OTT Vs MNO MEC Application Differentiators

OTT services work on best-effort service delivery. The MNO MEC applications differentiate in three key areas i. Performance, ii. Security and iii. Reliability.

5G system provides support for a variety of services, each of them characterized by different Key Performance Indicators (KPIs) combining reliability, latency, throughput, positioning, and availability. Typically, 5G KPIs are grouped into the below categories. This link provides more detailed information on the service's technical characteristics.

• eMBB (Enhanced mobile broadband)

• URLLC (Ultra-reliable and low-latency communications)

• mMTC (Massive machine type communications)

MEC Application Categories

I would classify the MEC applications based on the below 2 factors

1. Managed domain (MNO managed vs 3rd party). 3rd party could be an edge computing service provider or an enterprise customer.

2. Data network of the MEC application. i.e., Trusted Vs External Data Network/Un-Trusted.

A trusted application resides in the trusted data network and would use the Network Repository Function (NRF) for communication with the 5G Core.

An Untrusted applicated resides in an untrusted data network and uses the Network Exposure Function (NEF) for communications with the 5G Core.

In either scenario, the MEC applications need to be onboarded following the MNO-specific guidelines (viz., security scanning, deployment approach, etc.,)

Telecom Network Service Enablers

The differentiations in Edge application service capabilities are enabled thru network services as below. These network services can be integrated into MEC applications in various forms.

5G Service-Based Architecture

The 5G System architecture follows cloud-native principles and is defined to support data connectivity and services enabling deployments to use techniques such as Network Function Virtualization and Software Defined Networking. The service-based architecture enables the flexible evolution of the network. This link provides an introduction to 5G core network architecture.

Few key concepts to understand

Control Plane User Plane Separation (CUPS): This allows independent scalability, evolution, and flexible deployments e.g., control plane deployed in a centralized location and distributed user plane deployment.

E.g., MMTC devices need a very less amount of data/network traffic to be sent. However, this requires an equal amount of signaling. The signaling infrastructure needs to be scaled accordingly.

eMBB devices consume lots of data. This means the UPF service needs to be scaled in proportion.

For latency-sensitive applications, the user plane function can be deployed in different locations within the telecommunication network as required (network edge or enterprise customer premise a.k.a enterprise edge)

As illustrated above the scaling of the signaling & data plane is not directly proportional and is dependent on the service type. The CUPS helps to optimize the compute, and storage resource utilization for the Network Functions scaling.

The CUPS architecture help MNOs to reduce data-center costs by hosting the control plane and the user plane in different geographic locations as well as saving transmission costs or providing distributed edge services to enterprise customers.

Network Exposure Function (NEF)

The Network Exposure Function (NEF) is used as the entry point in the 5G network for authorized third parties. NEF acts as a centralized point for service exposure and has a key role in authorizing all access requests originating from outside of the system. Using this function, it is possible to configure how appropriate application traffic in the user plane is directed toward MEC applications in Local Data Networks (LDN). Also, the NEF may be used for exposing network information such as mobility, radio resource information, etc. to the MEC system. To summarize, the NEF can handle control plane functions for third-party service providers to manage MEC operations. Network information exposed by the NEF is consumed by MEC services and can be exposed to MEC applications. This allows a clear separation between the MNO and the third-party service providers.

User plane traffic is directed towards MEC applications by proper placement and configuration of UPF functions. Authorized third-party service providers can influence the placement and configuration of UPF by using the control interface exposed through NEF.

Application Function (AF)

In simple terms, the Application Function fulfills the role of an Application Server. It interacts with the 3GPP core network to provide services. The Application Function is able to influence User Plane Function (UPF) selection and also traffic routing toward specific Data Networks.

The AF is defined in 3GPP TS 29.517(Rel 18), “The AF is a functional element that provides service or application-related information to Network Function service consumers. The AF allows NF service consumers to subscribe to and unsubscribe from periodic notifications and/or notifications related to the detection of subscribed events. “

The AF resides in the control plane of the 5G Service-Based Architecture (SBA), and its main responsibilities include:

Accessing the NEF for retrieving resources.

o Interacting with the Policy Control Function (PCF), enabling policy control.

o Traffic routing for applications

o Provides application services to subscribers.

The following are the types of events for which a subscription can be made

- Service Experience information for an application;

- UE mobility information;

- UE communication information;

- Exceptions information;

- User Data Congestion information;

- Performance Data information.

And many more. These standards are defined by 3GPP.

Every service or application each with specific performance parameter requirements may require its own AF. This is an implementation decision to be made by the MNO and or the application provider.

User Plane Function (UPF) for packet handling and QoS management, which acts as the gateway for external Data Network interconnectivity. UPF instances can be deployed very close to the end subscribers for Ultra-Reliable Low Latency Services Versus massive IoT services that can be better served with a centralized UPF, which does not require low-latency communications.

The N6 interface carries the data from the UPF to a data network. The data network could be an internet or enterprise customer-managed network or a trusted data network (managed by the MNO).

This capability enables global low-latency applications. This could prove quite useful for global IoT deployment.

Trusted Vs Un-Trusted Edge Applications

A trusted application resides in the trusted data network and would use the Network Repository Function (NRF) for communication with the 5G Core.

An Untrusted applicated resides in an untrusted data network and uses the Network Exposure Function (NEF) for communications with the 5G Core. 3rd Party applications are applications that are approved by the MNO to use the MNO’s core network, either directly or via an API (e.g., NEF)

As shown in the below figure the Edge Application server components can be installed in both the Trusted Data Network and External Data Network. For security reasons, it is not feasible to install 3rd party applications in the MNO Trusted Data Network. Hence most of the edge applications are installed in External Data Network, for ease of implementation.

There are enormous opportunities to offer differentiated services leveraging network capabilities. These are new revenue streams for the MNO to monetize the network and offer competitive differentiation. However, due to market fragmentation of single-vendor/full stack edge 2 cloud solution vs multi-vendor solutions the development of the edge ecosystem and solutions haven’t matured to offer these differentiated capabilities at scale.

I hope you gained some information on how the MEC applications differentiate from the OTT applications. I will explain the Edge enablers as defined by 3GPP and various approaches for API exposures and how standard bodies viz., GSMA facilitates the development of globally interoperable low latency applications in the next post.

---

_Originally published on [LinkedIn](https://www.linkedin.com/pulse/5g-ott-vs-mec-applications-differentiators-vanitha-ramaswami)._