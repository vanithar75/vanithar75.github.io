---
title: "Design Considerations for Brownfield telecom network modernization - Part 1"
date: 2023-06-09
sourceUrl: https://www.linkedin.com/pulse/design-considerations-brownfield-telecom-network-vanitha-ramaswami
description: "“My opinions are my own and do not represent the views of my employer”"
coverImage: /images/blogs/brownfield-telecom-modernization-part-1/cover.jpg
---

![Design Considerations for Brownfield telecom network modernization - Part 1](/images/blogs/brownfield-telecom-modernization-part-1/cover.jpg)

“My opinions are my own and do not represent the views of my employer”

5G demands a cloud-native design for network implementation. The shift towards cloud-native software components has also impacted how the 5G NFV is deployed. Given the network modernisation solution options available in the market it would be hard to align which tools and approaches are best suited to accelerate the implementation.

Adopting open standard systems & interfaces is a key decision for MNOs in their modernization journey and can be a differentiator for success in ecosystem enablement.

In this post, I would like to provide some perspective on how the ecosystem stakeholders can further collaborate to create repeatable network automation solutions and accelerate the cloud-native implementation of telecom network function deployments.

Impact of customer segment on 5G network design

I would relate the Enterprise customer network service requirement to a High Mix Low Volume production scenario in manufacturing and the consumer segment as a high-volume manufacturing scenario where a range of standard products are produced.

This imposes a different set of requirements during 5G network planning and design. E.g., Reducing the switching cost (provisioning) for network services should be a key design consideration for the enterprise customer segment.

The consumer segment typically has a few standard network service types, whereas every Enterprise customer is unique, and the scale is too small (a few hundred to start off a 5G project).

Since the network services for the consumer segment are standardized some of the network service configurations could be statically setup (manually performed) during the initial 5G network rollout. However, this doesn’t work for the Enterprise customer segment, as the network has to be setup and torn down multiple times depending on the needs of the enterprise customers.

Challenges with Enterprise 5G Service Enablement

MNOs who have rolled out the 5G networks without considering the enterprise-specific network service requirements have challenges in developing and launching new services for enterprise customers. This could be attributed to a couple of factors.

· When rolling out the 5G networks there could be a lack of pre-integrated multi-vendor NFV solutions. The single-vendor NFV deployment from traditional network equipment vendors creates challenges in further scaling the network functions and enabling new services with 5G for Enterprise customers.

· Lack of end 2 end network automation. 5G service delivery requires cross-domain automation across multiple domains (RAN to core and/or edge cloud/MEC)

To further scale and accelerate the enterprise 5G service development, MNOs are now exploring options to further modernize the existing 5G network to launch new network services. This modernization could involve replacing the cost-prohibitive network functions or setting up a dedicated 5GC for the Enterprise customer segment.

Per the ETSI NFV reference architecture ( WP 54 ), as shown in Figure 1 for each layer of telco cloud architecture there are many possibilities.

Excerpt from ETSI Whitepaper 54

“Assuming there are X options for the combination of orchestration and VNF management layers, Y options for the implementation of the CaaS layer, and Z options for the underneath infrastructure management layer, to cover the case of VM-based VNF deployments, the number of options of functional integration can be X*Z but when considering the case of OS container-based VNF deployments, the number of possible combinations become X*Y*Z which brings more challenges in deployment, lifecycle management, and network options.”

To reduce the complexity associated with the various permutation of solutions, I would group them into a few options (Options 1 - 4) and analyze this from a telco edge cloud stakeholder perspective as the solutions are often designed based on the core competency of the stakeholder.

Telco Edge cloud stakeholder analysis

Telco ISV - Independent Software Vendors with cloud-native and telecom domain expertise (SDN, NFV).

How different stakeholders solve the challenge

The key distinction between the various solution options is the pre-integrations and the interoperability testing ownership.

Option-1 is a fully integrated vertical stack design from traditional network equipment vendors. The MNO doesn’t have to worry about interoperability testing as this is managed by the vendor.

In Option-2 & Option -3, the MNOs need to be actively involved with the interoperability testing of the network functions against the general-purpose IT hardware, software/platforms.

Reducing the multi-vendor complexity thru continuous testing & open application catalogs

Redhat [ 1 ] & VMWare [ 2 ] have software catalogs for network functions & applications that continuously test the 3rd party solutions against their platforms. This helps to ensure that the network functions are tested against the different platform versions. MNOs still need to have their own independent test setup to continuously validate the new versions of the network functions.

Option – 4 - Public Cloud solution characteristics

Unlike the PaaS providers viz., VMWare, Redhat have implemented some form of automation (Fig 3) to continuously test the 3rd party orchestration and network function products against their platforms, the Hyperscalers automation is not reusable (because the automation is done per MNO by System Integrators/SI). The optimal approach here would be recommending an orchestration platform by a Telco ISV to manage the operational complexity of the MNO.

The cloud-native network functions are typically deployed on either Managed Kubernetes services from public cloud providers (AWS EKS, Azure AKS, Google Anthos, etc.,)

The primary reason for the public cloud providers' deployments not being repeatable could be attributed to the implementation approach. Instead of leveraging a System Integrator (SI) to develop the automation from scratch per MNO, certification of the 3rd party/Telco ISV orchestration platform solutions could be implemented.

The public cloud providers take a slightly different approach to telecom network automation. Their solution approach is thru fully managed services which might not work well in a brownfield environment. This approach incurs significant overhead for network modernization and creates vendor lock-in (infra layer to the automation layer from the same vendor)

Accelerating the Cloud-native NFV Implementation

Cloud-native network functions either use Helm chart or Kubernetes Operators. Kubernetes has become the de facto choice for automating network function and application function deployment, scaling, and management. Through the use of Custom Resource Definitions (CRDs), KubeVirt seamlessly extends existing Kubernetes clusters to provide a set of virtualization APIs that can be used to manage virtual machines. This unifies the management for the VM and container applications with the same platform.

Shifting Left for Network Function Security

With the edge deployments, the services in the future will be dispersed geographically and the network is an attractive attack surface. The telco cloud infrastructure presents a broader, more complex attack surface. In a cloud or hybrid environment the boundaries have become fuzzy and there is a need to incorporate SecOps into the NFV continuous testing pipeline. As the complexity of protecting the applications and network continues to grow, the pressure to move more quickly is unrelenting. I would think these open application catalogs could serve as a foundation to further scale the multi-vendor NFV ecosystem . Security scanning solutions can also be incorporated into the continuous testing pipeline.

Scaling the brownfield network automation with a more collaborative approach

Though there are plenty of possible combinations of solution options the complexity can be reduced by implementing continuous testing by the right stakeholder in the ecosystem viz., the IT SW/Platform vendors and the Telco ISVs/Network Equipment vendors. This could help to ensure modularity and interoperability between the Infra and CaaS management layer and the Networks functions (NFs). Since the network automation is managed through an orchestration platform it is reusable.

A multi-vendor and modular approach for network automation with ecosystem catalogs that are up to date with the automation for the platform testing can help to accelerate the brownfield network modernization. I would think options 2 & 3 provide the greatest flexibility for new service development in the long term.

Instead of letting the business model impact the reusability of network automation the public cloud providers could leverage the orchestration platforms from Telco ISVs to make the network automation repeatable and reusable.

If the ecosystem catalogs are not static and are continuously updated it reduces a lot of time for the interoperability testing for the MNO.

Telco ISVs can get their solutions certified with their platform vendors e.g. Redhat or VMWare etc. and can also incorporate the security scanning and continuous deployment pipelines (GitOps using open tools like ArgoCD ).

I hope you gained some perspective on how to navigate the complexity of a brownfield telecom network modernization.

---

_Originally published on [LinkedIn](https://www.linkedin.com/pulse/design-considerations-brownfield-telecom-network-vanitha-ramaswami)._