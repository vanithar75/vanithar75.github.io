---
title: "Lessons from CrowdStrike: Balancing Reliability and Agility in  Public Cloud Infrastructure"
date: 2025-01-11
sourceUrl: https://www.linkedin.com/pulse/what-crowdstrike-teaches-us-geo-redundancy-public-cloud-ramaswami-10itc
description: "“My opinions are my own and do not represent the views of my employer”"
coverImage: /images/blogs/crowdstrike-geo-redundancy-cloud/cover.jpg
---

![Lessons from CrowdStrike: Balancing Reliability and Agility in  Public Cloud Infrastructure](/images/blogs/crowdstrike-geo-redundancy-cloud/cover.jpg)

“My opinions are my own and do not represent the views of my employer”

In today’s digital world, ensuring the availability and reliability of IT and OT systems is a critical business need. Modern software engineering has introduced practices like Google’s Site Reliability Engineering and Chaos Engineering to build reliable systems. Techniques such as rolling software updates enable updates without service interruptions. Geo-redundancy is always a commonly used strategy to improve the system resilience.

However, when compared to the vertically integrated systems, there are some nuances to geo-redundancy with the public cloud (widely used in horizontal service delivery).

I’ll analyse the most recent crowd strike outage , from a software reliability, availability perspective.

Understanding Vertically Integrated Systems

Traditional vertically integrated systems combine application software and hardware components, often sourced from multiple manufacturers. OEMs select hardware based on stringent reliability requirements, and these systems are designed and tested extensively in controlled environments (OEM Lab Facilities). This end-to-end approach ensures that availability and reliability are "designed-in" (OEM Facilities) before deployment.

In large systems (involving hardware/software), integration testing automation is quite complex and might potentially involve manual steps. While test practices exist, the lack of automation at the system level makes reliability assurance less agile. In complex systems, achieving 100% test automation is nearly impossible.

The vertically integrated model centralizes accountability. OEMs/Vendors take responsibility for system reliability, providing customers with predictable performance metrics.

When issues arise, there is a clear path for troubleshooting and resolution, often involving the manufacturer/vendor.

Public Cloud Infrastructure: A Horizontal Service Delivery Model

Public cloud infrastructure separates the ownership of application software and infrastructure. OEMs and ISVs develop the software, while cloud providers manage the infrastructure. This horizontal model introduces unique reliability challenges:

1. Homogeneous Infrastructure : Cloud providers offer standardized environments across multiple regions(globally) and availability zones, designed to scale and deliver services globally, but amplifying the impact of small systemic issues.

2. Shared Responsibility : Cloud providers ensure the reliability of the underlying infrastructure, but OEMs and ISVs must architect their software to handle potential infrastructure failures.

This separation shifts significant reliability responsibilities to the OEMs and ISVs, requiring close collaboration with cloud providers to ensure resilience.

This separation means that ensuring overall system reliability requires close coordination between OEM, ISV, and cloud infrastructure providers.

Nuances in Geo-Redundancy and Reliability

Though having a homogeneous global infrastructure, has benefits in terms of the simplifying the development and accelerating the business expansion to a new region.

A minor software bug can propagate globally due to the uniformity of cloud environments, impacting geo-redundancy efforts of OEM/ISV.

Software maturity characterizes how much operational execution time the software has experienced in field service. Traditionally, an operating system like Linux, may be very large and complex but the maturity is very high and thus is often associated with a low software failure rate. What crowd strike teaches is the that field exposure time is a good metric get some assessment, before a large scale roll out.

The automated CI/CD pipeline which provides deployment agility has amplified the effect of a small issue. CrowdStrike outage shows that such traditional practices are not applied in modern software delivery.

Key Differences in Reliability Assurance (Vertical Vs Horizonal Service Delivery)

1. Factory-Tested vs In Field Reliability Testing

o Vertically Integrated Systems : Reliability is ensured at the manufacturer’s facility through comprehensive testing and quality assurance processes. Customers receive a system designed to meet the defined reliability standards.

o Public Cloud Infrastructure : Reliability testing is effectively deferred to the design and deployment stages at the enterprise customer’s end. OEMs and ISVs must architect their applications to account for potential infrastructure failures (viz., multi-cloud etc.,)

2. Homogeneity vs. Heterogeneity

o Vertically Integrated Systems : These systems leverage heterogeneity in component selection to enhance reliability. If one component fails, the diversity ensures that the impact is isolated.

o Public Cloud Infrastructure : Homogeneity across regions can amplify the impact of systemic issues. A single point of failure, such as a software bug or infrastructure outage, can ripple through multiple locations, affecting geo-redundancy efforts.

3. Accountability for Reliability

o Vertically Integrated Systems : Accountability lies with the manufacturer, who designs and guarantees the reliability of the system.

o Public Cloud Infrastructure : Accountability is shared. Cloud providers ensure infrastructure reliability, but OEMs and ISVs bear responsibility for building resilient applications, platforms.

Implications for OEMs and ISVs in Public Cloud Geo-Redundancy

OEMs and ISVs must adapt their strategies to enhance software resilience in a public cloud environment:

1. Design for Infrastructure Failures

Applications must gracefully handle failures through features like multi-region deployments and robust failover mechanisms.

2. Leverage Multi-Cloud Architectures

Using multiple cloud providers diversifies infrastructure, reducing the risk of widespread outages caused by a single provider.

3. Invest in Automation and Monitoring

Automation simplifies deployment, while monitoring provides real-time insights into system health, enabling swift responses to issues.

While multi-cloud strategies enhance resilience, they introduce additional costs and complexity. OEMs and ISVs must balance these factors.

Strategies for Geo-Redundancy in Public Cloud Deployments

To address the unique challenges of public cloud geo-redundancy, OEMs and ISVs can adopt the following strategies:

1. Embrace Multi-Cloud Architectures Utilize multiple cloud providers to reduce the risk of homogeneity-related failures. By diversifying the infrastructure, systemic issues in one provider are less likely to impact the entire system.

2. Implement Active-Active Deployments Deploying applications across multiple regions and cloud providers in an active-active configuration ensures continuous availability even during failures. This minimizes downtime and enhances user experience.

3. Leverage Chaos Engineering Regularly test the resilience of cloud-based systems through chaos engineering. Simulating failures helps identify vulnerabilities and build robust recovery mechanisms.

4. Automate and Monitor Automation tools streamline geo-redundant deployments, while monitoring solutions provide actionable insights into system health, enabling quicker responses to issues.

Comparing Outcomes: Vertical Vs Horizontal Integration approaches

Geo-redundancy in the public cloud infrastructure represents a paradigm shift from traditional vertically integrated systems. For OEMs and ISVs, the separation of application software and infrastructure ownership requires additional planning & rethinking reliability strategies.

By addressing these nuances, enterprises can assess the best fit architecture (horizontal Vs vertical) and harness the power of public cloud infrastructure to build resilient systems capable of meeting modern business demands.

---

_Originally published on [LinkedIn](https://www.linkedin.com/pulse/what-crowdstrike-teaches-us-geo-redundancy-public-cloud-ramaswami-10itc)._