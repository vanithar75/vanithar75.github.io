---
title: "IoT Device Management Solution Design - A Valuechain Perspective - Part 1"
date: 2023-04-30
sourceUrl: https://www.linkedin.com/pulse/iot-device-management-solution-design-valuechain-vanitha-ramaswami
description: "“My opinions are my own and do not represent the views of my employer”"
coverImage: /images/blogs/iot-device-management-part-1/cover.jpg
---

![IoT Device Management Solution Design - A Valuechain Perspective - Part 1](/images/blogs/iot-device-management-part-1/cover.jpg)

“My opinions are my own and do not represent the views of my employer”

Building the ecosystem that will connect more than 50 billion devices is a complex multi-disciplinary challenge.

The edge/IoT ecosystem is fragmented and solutions are designed around the core competency of the stakeholder (e.g., connectivity-centric, hardware-centric, cloud-centric, domain-centric, etc.,) with an aspiration to move up the value chain and create Full stack IoT solutions (to become an IoT solution provider). Hence IoT solutions are often not a standardized offering and are custom-made and hence it is difficult to scale IoT deployments.

I will try to provide some perspective on Edge/IoT device management and how the value chain complexity can be simplified by creating solutions by the right stakeholder in the value chain .

IoT devices have varying connectivity & security requirements. A wireless sensor on a farm that measures sunlight and the water content of the soil will probably not be subject to the same level of malware or security attacks as a smart door lock that runs an app that interacts with the external world. This demands a wide range of choices of connectivity & security solutions to build connected products.

Wireless connectivity is the primary cost driver in an IoT solution . In IoT device design choosing the connectivity option is the first critical design step and often this decision is influenced by the use case requirements (type of data, amount of data to send/receive, battery operated, and many more parameters).

There is a trade-off with the various type of connectivity options. Wireless coverage, bandwidth, price. Some applications demand high bandwidth connections which may not make them appropriate for some of the LPWAN technologies mentioned in Fig 1. Some require long battery life, which makes them inappropriate for Wi-Fi.

Cellular network has some unique complexity as the network capabilities could vary across the different MNO and Interoperable challenges with global deployments.

These are some of the dynamics that a potential IoT designer has to navigate. Selecting the right connectivity for a given application involves multiple trade-offs keeping costs down by using the cheapest technology that meets the application’s requirements and ensuring that the technology is available for the lifetime of the device.

Now with edge computing, there are multiple options for data processing. i.e., new locations of compute are available (edge cloud, public cloud, private cloud, on-premise). The IoT application server or middleware or IoT platform is now geographically distributed i.e., can reside in one of these edge locations or several locations at a time.

Why is the IoT connectivity challenge a complex problem to solve?

IoT connectivity technologies are broadly classified as licensed vs unlicensed. Unlicensed solutions are not standardized e.g., weightless, Amazon SideWalk, LoRa (Semtech).

In licensed solutions for cellular connectivity viz., NB-IoT, CAT-M1 we have 3GPP. For personal area connectivity technologies viz., Bluetooth, WiFi, 802.15.4 we have standard bodies. E.g., IEEE.

Since IoT devices can use a wide variety of connectivity options there is no one standard body to govern. Hence the IoT device management and security solutions are often proprietary or vendor-specific. Manufacturing supply chain is inherently complex. Below is a typical stakeholders involved in designing & manufacturing a connected product.

While all the stakeholders are trying to innovate concurrently proprietary solutions introduce additional complexity, and security risks and slow down innovation.

IoT Device Management

IoT device management solutions help with the management of individual devices or groups of devices as needed for IoT applications per the deployment policies. Key capabilities include provisioning and authentication, monitoring and diagnostics, software updates and maintenance, connectivity enablement, and enhanced security.

Challenges with IoT device management solution development

Tight dependency on wireless connectivity

The IoT device management solutions are strongly dependent on the wireless connectivity technology used and hence it is difficult to create unified device management solutions.

2. Support for multiple management domains

There is no one standard way to deploy & manage IoT solutions. The need for the number of management domains in an IoT solution is influenced by various factors viz., cost of the solution, business value of the data acquired, etc.,

E.g., To reduce the cost of IoT solutions/lower the cost of data acquisition Over the Top solutions enables device-to-cloud communication. However, the trade-off is cost vs security . ( Threat attack surface is larger)

Factory environments have diverse and additional requirements. E.g., support for Local and or Hierarchical or centralized management. In deployments where real-time closed-loop control capabilities are required, the intelligence has to be with the edge sensor node. Data processing and data compressing in the edge layer help to reduce the cost of network usage and storage . There is a need for solutions that work without central connectivity or hierarchical device management. (e.g., Sensor nodes to be aggregated in a gateway).

3. Data Privacy & Security Requirements

In some scenarios SaaS (Software as a Service) model is acceptable where the application + data resides in the Solution Provider account whereas in some scenarios the SaaS model isn’t acceptable as the customer might want to keep the data in their own account i.e. Have control of the data in the case of industrial applications.

4. Over the Air Firmware Upgrades

Solution design for this process is complex as the process is spread across multiple stakeholders viz., hardware, software, cloud, device makers, etc., and is strongly dependent on the wireless connectivity technology.

Unified IoT device management and security solutions - Is MNO the right stakeholder to solve?

If we categorize the wireless technologies into unlicensed vs licensed the unlicensed device management/provisioning solutions are often vendor-specific or proprietary solutions. Network operators manage both mobile and fixed networks and hence I think they can offer solutions that have a consistent approach to device management & security regardless of the number of management domains from Edge 2 cloud.

The device management solution is not just organizing and grouping the fleet of devices, it has a strong dependency on connectivity and needs to be able to support various deployment and commercial models.

With technologies like eSIM, and iSIM the traditional boundaries are blurred and the manufacturing supply chain dependencies are now more complex for OEMs.

With 5G, telecom network functions are virtualized and MNOs are implementing Service and Edge Orchestration platforms to improve operational agility and enable new network capabilities like network slicing, mobile private networks, etc.,

Hence I would think, with the convergence of wired and wireless connectivity technologies, the desire should be to develop solutions to solve not just the connectivity challenge but also the application onboarding challenge for IoT devices to allow seamless mobility across multiple access technologies.

The focus could be (should be) to integrate the connectivity+compute to simplify the application enablement for IoT devices to support different levels of management domains from Edge 2 cloud. This could also address the IoT data management issues.

IoT device management Integration into Middleware (IoT application servers or platforms)

IoT device authentication and authorization policies could be implemented in many forms and in several stages of IoT device deployment.

Mobile Device Management (MDM) solutions - Traditionally enterprise IT administrators automate, control, and secure administrative policies on laptops, smartphones, tablets, or any other device connected to an organization's network. They use Mobile Device Management solutions for enforcing such policies on the end user device. This approach provides a consistent approach for IoT use cases that involves an app running on a user device. Full stack vertical solutions a.k.a single vendor solutions - Due to the wireless connectivity dependency the device management capability is tightly integrated with the vertical solutions i.e., device & data management are tightly integrated and offered by domain specialists (Siemens, Bosch, Schneider, etc.,) Brownfield IoT deployment - Secondary sensing refers to a concept of retrofitting with additional sensors to gain more visibility on the operational environment. Depending on the solution provider's capabilities solutions exist as Fullstack solutions or modular solutions. These are vendor-specific implementations of device management.

Unifying Edge/IoT device management with 5G & MEC?

The licensed wireless spectrum is managed by the MNO and we have a standard body governing it. Technically this seems to be a better option to design the next-generation unified device management solutions leveraging integrated connectivity & compute offerings.

With 5G capabilities like network slicing, and network exposure function ( NEF ) the need for policy-based management and deployment of applications is critical regardless of enterprise IT devices or Operational Technology devices (AGV, AMR, etc.). Hence offering standard device management solutions thru MNO might help to address the edge 2 cloud device management challenge using open standards.

Integrating the network capabilities and policies into domain/vertical solutions could be a complex task if it is a point-to-point integration involving several stakeholders . The network policies shall be managed by the MNOs. Now with technologies like eSIM, and iSIM the IoT device provisioning process has dependencies on the manufacturing process as compared to the physical SIM. Such innovation by the hardware ecosystem adds further complexity to the process for MNO.

IoT device provisioning

One of the key capabilities of the IoT device management platform is device onboarding. This is a one-time commissioning process of installing secrets and configuration data into a device so that the device is able to connect and interact securely with the middleware (IoT platform or application server). Per the current implementation model, the provisioning process has a dependency on multiple stakeholders in the ecosystem. Also, some of the processes are now shifted more toward the early stage of manufacturing. E.g. eSIM/iSIM etc., more things have to be pre-configured at the factory during manufacturing. Also, the secure element has a dependency on the Chipset maker.

Source: https://www.jjsmanufacturing.com/blog/what-is-meant-by-the-terms-oem-ems-cem-odm-and-why-should-you-know

This is the current stakeholder dependency that any IoT solution provider or enterprise customer has to deal with. For the OEMs and telcos, I’ve put multiple dots because they are not a single entity. They have multiple other stakeholders.

Having an open standard for device management spurs innovation as the dependencies are de-coupled and all the stakeholders can innovate independently.

I hope you gained some perspective on Edge/IoT device management. I will write about the various device provisioning approaches and explain the provisioning process stakeholder dependencies mentioned in Fig 3 and 4 in the next post.

---

_Originally published on [LinkedIn](https://www.linkedin.com/pulse/iot-device-management-solution-design-valuechain-vanitha-ramaswami)._