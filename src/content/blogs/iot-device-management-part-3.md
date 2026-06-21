---
title: "IoT Device Management Solution Design - A Value chain perspective - Part 3"
date: 2023-08-18
sourceUrl: https://www.linkedin.com/pulse/iot-device-management-solution-design-value-chain-part-ramaswami
description: "“My opinions are my own and do not represent the views of my employer”"
coverImage: /images/blogs/iot-device-management-part-3/cover.jpg
---

![IoT Device Management Solution Design - A Value chain perspective - Part 3](/images/blogs/iot-device-management-part-3/cover.jpg)

“My opinions are my own and do not represent the views of my employer”

Integrating cellular connectivity for IoT deployments acts as a catalyst for digital transformation, improving customer experience, gaining operational efficiencies, and providing a scalable approach for heterogeneous deployment. However, embracing these next-generation technologies demands holistic planning and exploring new ways to simplify operations and provide stronger end 2 end security.

In this last part of the IoT Device Management solution design 3-part series[ part-1 , part-2 ], I will explain the Telco-Native options for device management enabled by the cloud-native 5G network and how to reduce the edge 2 cloud security solution implementation overhead by leveraging solutions designed by the right stakeholder.

The solution design is to optimize the end 2 end technical architecture from the Enterprise customer(consumer) perspective. i.e., to design the solution by the right stakeholder in the value chain. (Consumer-facing service provider at the Finished Good Product Level who can offer the most flexibility for device designers).

Depending on the enterprise context a wide range of implementation options are available. Though there is a technical feasibility of IT/OT convergence, the solutions designed for the IT environment can’t be simply reused in the OT environment. It requires careful assessment of the IT solution and its application within the OT environment.

Some enterprises might want to keep the management domains (IT/OT) separate; however, some enterprises might consolidate the management domains i.e., to gain operational efficiencies. In a brownfield environment, it is desirable to keep the management domains separate for operational reasons (e.g., if there are lots of legacy OT devices on the shop floor that don’t have built-in security using insecure OT protocols).

Security Considerations for Cellular IoT Deployments*

Below is the list of common security policies typically required for deployment.

· Protection against the theft of physical SIM cards from the IoT device

· Prevent the misuse of enterprise sim cards on personal devices and vice versa.,

*for simplicity I have excluded the application onboarding, as that could be handled independently

These policies can be enforced thru multiple approaches at multi-levels/layers. E.g., Through endpoint management systems from Telco or 3rd parties. There are multiple cloud-hosted device management platforms available. Even Hyperscalers have launched endpoint management solutions viz., Microsoft Intunes to manage eSIM cellular profiles . These solutions offer seamless integration with enterprise identity management systems e.g., Azure AD.

Cellular IoT Subscriber Data Management - Telecom Network the Data Owner

The primary owner (consumer-facing service owner) for the subscriber SIM Identity (ICCID, IMSI) is the MNO. However, the device could be from 3rd parties i.e., for consumer devices like laptops the manufacturer controls the Device Identity i.e., IMEI or EID if eSIM/iSIM (typically a chipset maker), or for IoT devices it could be a module maker. Though these IMEI and EID could be read thru software SDK there is a need to validate this against the subscriber SIM Identity (ICCID/IMSI) that is from the MNO and this logic to be implemented in device management systems (Telco-native or 3rd party)

Single Source of Truth for Subscriber Data - Telecom Network and the OSS/BSS

The subscriber profile information is configured in the Telecom network subscriber repository i.e., Network Functions e.g., HSS/UDM, UDR, etc. Typically, a subscriber profile comprises of multiple information viz., SIM identities (ICCID/IMSI/GPSI/SUCI), and subscription profiles (Data, IMS, V2X, etc.,).

Regardless of the device management solution implementation, to enforce the security policies in 3rd party device management systems there is a need to validate the device data (IMEI for physical SIM or EID for eSIM) with the connectivity profile/SIM Identity (ICCID/IMSI) and with the Enterprise Identifier (BRN) if it is an Enterprise SIM card. Enterprise customers might have additional security policies to validate the devices against the enterprise identity management systems. E.g., Azure AD.

Device Management Solution Design - Why MNO is the right stakeholder?

Among the various stakeholders of the IoT ecosystem from the enterprise customer perspective, the MNO is the customer-facing stakeholder and is the owner of the last mile connectivity for enterprise customers, and has the most existing infrastructure assets that can be reused. The single source of truth for the SIM data and the subscriber data is in the Telecom network functions repository.

IoT devices have a dependency on the telecom network capabilities viz., Power Saving Mode, eDRX, Activity timer T3324, and Extended TAU timer, etc., This need to be addressed by an onboarding process and validating the devices against the network (to prevent incompatible devices connecting to the telecom network).

To implement the security policies in a more effective manner the device management or endpoint management solutions from the MNO could help to reduce the implementation overhead. The device management solution can run on any infra (on-premises, public cloud etc.,) however the key requirement is the pre-integration of the network and security policies of a subscriber with the enterprise identity management systems or other platforms (for Vertical/Industry solutions). Typically, the enterprise IT/OT/Device administrators are responsible for the network, security planning, and implementation. Hence the pre-integration of the device management solution (administrator’s perspective) with data management doesn’t provide significant merits and these capabilities can be incorporated into independent systems.

In 3rd party device management solutions, there is an additional overhead to manage the connectivity data from the MNO & the device data from 3rd party OEMs to enforce the security policies. This creates data redundancies and introduces maintenance challenges in the long term.

For capabilities like FOTA (Firmware Over The Air Updates), MNOs already have the roaming relationships to provide global connectivity and platforms that are able to push connectivity information to user devices remotely. Currently for Enterprise IT devices the software updates are managed by a Central IT administrator. A similar approach could be applied to OT/IoT devices where the firmware updates are centrally managed by Enterprise administrators. This approach provides a simple yet powerful approach to improve the security of connected product development.

To enable global interoperability of IoT devices across multiple networks the APIs are now being standardized thru the CAMARA initiative .

Stronger security with 5G - Enforcing security policies closer to the source of data

The cloud-native deployment of 5G networks has built-in multi-layer security and protection thru integrated advanced security monitoring and remediation systems.

These pre-integrated network security solutions from the MNO help to incorporate security policy enforcement closer to the source of the data. i.e., at the network level. These next-generation security solutions provide new options to enterprise customers for Edge 2 cloud security solution implementation.

Telco Native Device Management Solution - Effective way to simplify Device management

The device management solution needs to have a combination of validations as explained in Table 1.

The Telco native device management solution leverages both the network security features and subscriber-related security policy management. This option has the lowest overhead for data integration and reduces the time to value for integrating new devices into Enterprise IT/OT environments.

With 3rd party device management solutions there is additional overhead (integration with external systems) to manage the subscriber data.

The IoT device management challenge could be improved by leveraging the telco network native capabilities and the device management or endpoint management solutions from the MNO could help to reduce the implementation overhead (avoid additional integration with external systems) and hence reduce the TCO thru managed security services.

IoT Device Credentials Management

Depending on the authentication scheme chosen for an IoT device to platform communication there would be a need to pre-provisioning credentials on the device. This introduces several security risks and there are multiple solutions to address this. This is a dedicated topic to analyze in another post. Cellular-based Identity solutions could be an alternate option to simplify IoT device authentication.

Edge Platforms - Centralised management for network & security policies

With the telecom network providing new options for compute (viz., MEC.,) the edge platforms typically have capabilities to optimize the routing path (balance compute and connectivity costs) and enforce edge 2 cloud network policies. Security policy enforcement could also be integrated with Edge platforms.

5G enables new opportunities for Telco-native networking, security, and device management solution development. Whether the networking and security are managed by a pre-integrated solution or independent systems is a choice by the enterprise customer depending on the context, business goals, and operational considerations. Pre-integrations don't necessarily work in all situations. This depends on the context and needs to be analyzed.

---

_Originally published on [LinkedIn](https://www.linkedin.com/pulse/iot-device-management-solution-design-value-chain-part-ramaswami)._