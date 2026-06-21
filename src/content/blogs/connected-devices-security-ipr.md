---
title: "Managing Connected Devices: Navigating the Security-IPR Conundrum"
date: 2024-07-16
sourceUrl: https://www.linkedin.com/pulse/managing-connected-devices-navigating-security-ipr-vanitha-ramaswami-pstrc
description: "“My opinions are my own and do not represent the views of my employer”"
coverImage: /images/blogs/connected-devices-security-ipr/cover.jpg
---

![Managing Connected Devices: Navigating the Security-IPR Conundrum](/images/blogs/connected-devices-security-ipr/cover.jpg)

“My opinions are my own and do not represent the views of my employer”

Sensor devices are often procured from multiple suppliers. It is not feasible for a single device manufacturer to meet the diverse needs of an Enterprise Customer. When an enterprise customer is procuring sensor devices from multiple vendors, security concerns become paramount, especially in the context of an increasingly connected world.

The challenge lies in balancing stringent security requirements with the suppliers' control over intellectual property rights. The customer sets essential security standards, such as requiring robust encryption, secure boot processes, regular firmware updates, and compliance with industry-specific security certifications. However, it is important to acknowledge that the implementation specifics, including proprietary algorithms and internal device architecture, remain under the supplier's control. This distinction is crucial to ensure that the customer's security requirements do take into consideration the supplier's intellectual property rights.

The enterprise customer must establish clear, mutually agreed-upon security protocols while allowing suppliers the flexibility to implement these requirements within their frameworks. Regular security audits, penetration testing (black-box), and transparent communication channels can help build trust and ensure compliance without revealing sensitive proprietary information. The business requirements for security tend to fall into three categories (a.k.a CIA triad) and it is essential to define the scope of security requirements clearly, focusing on outcomes such as data integrity, confidentiality, and device authenticity, rather than prescribing specific technologies or methods. Hyperscaler managed services provides limited control to a set of managed services to do security assessments viz., penetration testing, which might not fit in scenarios where having more control is preferred.

By maintaining this balance, both parties can work together to achieve robust security without compromising the supplier’s intellectual property, ultimately fostering a secure and cooperative environment for scaling connected sensor device deployment.

In this post, I will provide some perspective on how the security compliance can be implemented from an Enterprise Customer perspective and how to on-board multiple sensor device manufacturers in an Enterprise and thus scale the connected device deployment.

Device Management Platforms

Managing rapidly evolving technologies with many moving parts is a complex task. Operational applications were traditionally deployed on proprietary HMI/devices are now having purpose-built applications that run on generic devices like the iPhone, Android etc. Depending on the nature of the vertical applications the device management platform must manage the lifecycle of the below aspects. This often involves integration with Enterprise Identity management systems, Cross-domain Integration with other ecosystem stakeholders e.g., with Telcos/Carriers. Identity management varies significantly between human-operated devices and autonomous (M2M) devices, each with its own considerations.

Managing Security Requirements - Modularising Device Management Platform

The security requirements can be broadly classified into general and specific security requirements. Generic security requirements are applicable to all the devices and specific security policies applies to segments of devices or people e.g. Role Based Access Controls.

To manage fleet of devices from multiple suppliers/vendors, it is critical to understand the mutual responsibilities between the Enterprise Customer (The BUYER) and the Device Manufacturer (The Vendor/Supplier).

From a security compliance perspective the enterprise customer defines, manages the requirements that are enforced on the devices thru policies. These are enterprise specific rules and is specific to every enterprise. The device manufacturer defines the device capabilities thru configurations, often managed thru profiles. Profiles are device configurations that are defined and managed by the device manufacturer for various operational requirements. E.g. how the device connectivity is configured, encryption methods etc.

Simplifying Integration with APIs

To have maximum flexibility it is important to understand the difference between the policies and profiles. The device configuration capability/features are managed by the vendor. The device manufacturer shall provide APIs to integrate with the enterprise customer specific device/policy management platforms.

In the increasingly interconnected landscape of modern enterprises, balancing security and intellectual property rights is crucial. By clearly defining security requirements and allowing device manufacturers the flexibility to implement them within their frameworks, enterprises can ensure robust security without compromising innovation. This distinction not only addresses security compliance but also fosters a cooperative environment where both enterprise customers and device manufacturers can thrive.

---

_Originally published on [LinkedIn](https://www.linkedin.com/pulse/managing-connected-devices-navigating-security-ipr-vanitha-ramaswami-pstrc)._