---
title: "IoT Device Management Solution Design - A Valuechain Perspective - Part 2"
date: 2023-05-26
sourceUrl: https://www.linkedin.com/pulse/iot-device-management-solution-design-valuechain-part-ramaswami
description: "“My opinions are my own and do not represent the views of my employer”"
coverImage: /images/blogs/iot-device-management-part-2/cover.jpg
---

![IoT Device Management Solution Design - A Valuechain Perspective - Part 2](/images/blogs/iot-device-management-part-2/cover.jpg)

“My opinions are my own and do not represent the views of my employer”

In the earlier post I started the analysis of IoT device management challenge from a value chain perspective. In this post, I’ll provide some perspective on the impact of strong dependencies among stakeholders on the Enterprise customer and explore some possibilities that can help to reduce the strong dependencies among the stakeholders.

Challenges in Outcome based IoT solution development

One of the implementation challenges that critically affects the IoT solution design is the vertical-specific requirements. Each IoT solution necessitates a new and/or tailored IT development/Application enablement effort. This has an impact on IoT solution development costs and constrains the opportunity to realize meaningful economies of scale.

The IoT solution design is often hindered by the multi-disciplinary technology challenge. This means often the IoT solutions are a multi-partner solution which makes the solution cost-prohibitive to scale.

IoT Solutions Design - Simplified Layered View

· Gateway - Depending on the use case an edge gateway could be an optional item in the solution design. The sensor node could directly send data to the IoT platform a.k.an Application Server.

· IoT platform - Before the arrival of horizontal IoT platforms, Vertical OEMS have their own technology stack/Application Server/Middleware. The IoT middleware could be built using monolithic or microservice architecture.

The realization of the above architecture could involve a minimum of 1 Party (Full stack solution provider able to offer X as a Service, without any 3rd Party dependency) (or) worst-case scenario of maximum of 4 partners. (4 is derived at the Finished Good level, excluding the component value chain).

A fairly simple reasoning is the IoT solution cost is directly proportional to the number of partners. Below is an illustration of how the Sensor Device, IoT gateway, IoT Platform (Horizontal) & Vertical Application (Vertical) capability could be put together by multi-partners.

Impact of Moving Up/Down the Value Chain on the Enterprise Customer

Every stakeholder wants to capture the maximum value in the IoT Marketshare. As I discussed earlier, a chipset maker is trying to become an IoT solution provider (moving up the value chain) and likewise a cloud provider is trying to become an IoT solution provider by supplying sensor devices (moving down the value chain).

The impact of this bi-directional movement has the below consequences on the market.

· Reduce the solutions Total Addressable Market segment for the Intermediaries in the value chain

o Risk with the bespoke IoT solutions

o More the solutions more confusion to the Enterprise customer (on how to consume the services to solve business problems)

o Customized solutions from System Integrators are more expensive in the long term.

The below diagram explains the chipset to enterprise customer view of the value chain. Note that I have excluded System Integrator/consulting services in this diagram since they don’t offer an outcome-based solution to an enterprise customer. The SI services are heavily customized and are done per enterprise customer.

Let’s analyze this from the stakeholder perspective and the IoT solution functional capabilities perspective. Assuming security is an implicit requirement the IoT solution broadly has the below key capabilities

Let’s try to map this to IoT system functional capabilities against the stakeholders that I mentioned in the earlier blog

Let me provide some explanation on the above table.

Industrial OEMs (Vertical) - Traditional suppliers of full stack solutions for various Industry verticals. E.g., Bosch, Schneider and has extensive domain knowledge. This has the lowest risk from enterprise customer perspective.

ISV - General purpose platform providers or specialized in a specific wireless connectivity technology. E.g., LoRa wireless connectivity management platform provider or cellular IoT connectivity management platform provider or Wi-Fi network management system provider.

From Enterprise customer perspective rest of the stakeholders are aspiring IoT solution providers (ISV/SI/Telco/Cloud Provider). Aspiring solution providers may develop certain subsystems in a manner that is not fully optimized or mature.. Cloud provider, for instance, are still refining/rapidly evolving their solutions, may introduce risks due to reliance on first-party or partner dependencies, given that these domains may extend beyond their traditional strengths.

The Enterprise customer (as a consumer of such services) needs to understand the risks while consuming such services from the aspiring IoT solution providers.

Chip to Cloud IoT Solutions

Cloud providers with their extensive experience of managing the global datacenters at scale try to apply the same principle to IoT by providing software infrastructure for the IoT devices.

Instead of creating such technology infrastructure from scratch, it is desirable to analyze which stakeholder has the maximum existing technology infrastructure that can be reused to enable the IoT ecosystem.

Public cloud providers try to solve the OTA (Over the Air Update) challenge by providing the infrastructure and developing an ecosystem of partners and investing in certifications of individual hardware. However, this isn’t a scalable approach. The certifications are not a one-time activity and it requires huge investments.

Rather to do the undifferentiated heavy lifting if we analyze which stakeholder has the most existing infrastructure that can be reused and with standard interfaces for IoT device management the strong dependencies from chip to cloud can be de-coupled.

I hope you gained some information on the Enterprise customer perspective for IoT solution implementation. I will continue the IoT device management analysis in the next post.

---

_Originally published on [LinkedIn](https://www.linkedin.com/pulse/iot-device-management-solution-design-valuechain-part-ramaswami)._