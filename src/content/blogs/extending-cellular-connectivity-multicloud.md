---
title: "Extending cellular connectivity (4G/5G) securely to multi-cloud"
date: 2023-08-29
sourceUrl: https://www.linkedin.com/pulse/extending-cellular-connectivity-4g5g-securely-vanitha-ramaswami
description: "“My opinions are my own and do not represent the views of my employer”"
coverImage: /images/blogs/extending-cellular-connectivity-multicloud/cover.jpg
---

![Extending cellular connectivity (4G/5G) securely to multi-cloud](/images/blogs/extending-cellular-connectivity-multicloud/cover.jpg)

“My opinions are my own and do not represent the views of my employer”

As telecommunication networks are cloudified, it simplifies the extension of cellular connectivity to Business/IT or OT data networks and application servers. This enables new ways of how devices connect, authenticate, and access application servers.

I’m going to share how telco network security can be used to provide stronger and simpler security for IT/OT applications from edge 2 multi-cloud using telco networking products. These solutions enable enterprise devices (smartphones, IoT devices, etc.,) to securely communicate from UE to application servers residing in a diverse set of locations, without the need to set up several VPN services.

Data Network Name (DNN) Service

DNN is a “Telco Native” networking solution that helps to extend mobile network connectivity from UE to external data networks (On-premise or Public cloud).

DNN in 5G is the APN equivalent of 4G. DNN service provides a layer of network isolation and security for IoT Devices from UE to External Data Networks (Residing On-Premise or Any Public/Private cloud). This is an end-to-end security solution that has built-in security leveraging the telecom network capabilities.

They are used to isolate the customer access network (RAN) and deliver IP traffic to the transport network (from MNO) that can be further extended to multiple other network domains (Enterprise On-Premise network, Public cloud network, etc.,). They typically carry the IP traffic from the UPF N6 interface of the 5G core or the SGi interface of 4G.

Benefits of DNN over VPN

· Built-in 3GPP security with SIM as the Identity

· Reduce setup cost and complexity compared with VPN as it is a managed service from MNO.

Typical Cellular IoT Deployment Scenario - Using Internet DNN service

Every MNO has a public DNN that is shared with all the consumers. This is a shared best-effort network for enterprise customers. Security solutions (e.g., VPN) are overlaid on top to achieve the required end-to-end security and network isolation. This is an OTT solution and might not be desirable for critical OT workloads which have more stringent security, and privacy requirements.

Secure UE to Anywhere Communication - Enabled with Cellular Connectivity (4G/5G)

This could be achieved through the Enterprise DNN (Data Network Name) a.k.a Private DNN networking service from the MNO. This helps to extend the mobile network connectivity to data networks residing in a diverse set of locations i.e., multi-cloud or enterprise on-premises data center.

When do I need to use the Enterprise/Private DNN service?

It is desirable to use a dedicated Enterprise/Private DNN for access to all the critical enterprise resources (OT/IT).

OT networks are heterogeneous and use a wide range of wired and wireless connectivity. To take advantage of modern analytics and AI/ML services, there is a need to connect OT data sources (which might not have adequate security built-in) to analytics platforms residing in a diverse set of locations (On-Premises, or Public cloud PaaS/SaaS). The Private/Enterprise DNN service provides an end-to-end closed/private network design and reduces the attack surface for connected products/systems.

Unified Authentication Enabled with 5G

4G uses 4G EPS-AKA, and 5G has introduced three authentication methods - 5G-AKA, EAP-AKA, and EAP-TLS. 5G authentication improves upon 4G authentication through several new features, including a unified authentication framework that can support more use cases, and better user equipment identity protection.

The unified authentication framework makes 5G authentication both open (e.g., with the support of EAP) and access-network agnostic (i.e., supporting both 3GPP access networks and non-3GPP access networks such as Wi-Fi and cable networks.

Excerpt from: Cable Labs

“When EAP (Extensible Authentication Protocol) is used (e.g., EAP-AKA or EAP-TLS), EAP authentication is between the UE (an EAP peer) and the AUSF (an EAP server) through the SEAF (functioning as an EAP pass-through authenticator). When authentication is over untrusted, non-3GPP access networks, a new network function N3IWF (Non-3GPP Interworking Function) is required to function as a VPN server to allow the UE to access the 5G core over untrusted, non-3GPP networks through IPsec tunnels.

The network allows several security contexts to be established to allow the UE to move from a 3GPP access network to a non-3GPP network without having to be re-authenticated.”

The caveat here is support for capabilities like N3IWF could be specific to an MNO network. This might not be a globally consistent feature. Different MNO's might be in different stage of network cloudification.

Extending the Telecom Network to Public Cloud

As explained in an earlier post , the N6 interface is the reference point between the UPF and an External Data Network. The cloud-native deployment of 5G enables new low-latency compute services (distributed UPF deployed closer to the enterprise data source) and access to the enterprise data networks. This is enabled by deploying the User Plane Functions closer to the Access Network.

The Telco N6 data network can be extended to multiple public clouds as illustrated below. The direct connect solutions from public cloud providers are also private networking solutions (single vendor solutions), These solutions can help to securely connect the enterprise OT data sources to multiple public clouds. (enterprise customer’s Public cloud account), thru the MNO network (mobile/fixed).

Converged NF+AF deployments - Helps to reduce the TCO with New Platforms and Business Models ?

Though in theory, it is feasible to deploy & and operate both application functions & and network functions as illustrated below (source: GDCE , AWS ), there could be operational considerations that could be a barrier to the adoption/scaling of such converged deployments. Depending on the MNO operating guidelines/regulatory requirements, the co-existence of network functions and application functions in the same hardware could be operationally not viable., i.e., some MNOs would like to have separate management domains for network functions and application functions. Or by Network deployment policy/guideline mandates the physical isolation of the network function and application function services.

However, for MNOs, this presents new opportunities to optimize the data acquisition cost for Edge/IoT deployments. i.e., Lower the cost of IoT deployments by combining the data acquisition (AF) with network functions and enable new platform development opportunities and business models. These are MNO-managed platforms i.e., Trusted domain Apps/platforms deployed and managed by the MNO.

Depending on the encryption, bandwidth, and performance characteristics i.e., bandwidth, jitter, delay, packet loss) a combination of telco networking and public cloud network solutions could be leveraged in a shared or dedicated private networking model. This post , explains the selection of various networking products from Google Cloud. The same guidelines shall apply to the other public cloud network services as well.

Cellular connectivity provides plenty of new options to provide secure connectivity from UE to Any cloud and accelerate Edge/IoT solutions development.

I hope you gained some perspective on how to incorporate simpler, stronger security from UE to Anywhere using a Telco-Native networking solution (Enterprise DNN service).

---

_Originally published on [LinkedIn](https://www.linkedin.com/pulse/extending-cellular-connectivity-4g5g-securely-vanitha-ramaswami)._