---
title: "Optimally Distributing Intelligence - Prioritizing Interoperability, Portability - Part 1"
date: 2024-03-12
sourceUrl: https://www.linkedin.com/pulse/optimally-distributing-intelligence-prioritizing-video-ramaswami-6zbnc
description: "“My opinions are my own and do not represent the views of my employer”"
coverImage: /images/blogs/distributing-intelligence-part-1/cover.jpg
---

![Optimally Distributing Intelligence - Prioritizing Interoperability, Portability - Part 1](/images/blogs/distributing-intelligence-part-1/cover.jpg)

“My opinions are my own and do not represent the views of my employer”

Businesses are increasingly relying on data in their operations. Data provides valuable feedback for the product teams to improve product features or improve customer experience by analyzing customer-product interaction. Platforms provide innovative ways to streamline data processing, generate more value from data. Choosing a suitable distributed data processing architecture with the optimal compute, storage, networking solutions is critical for a successful implementation.

Maximizing Value through Intelligent Distribution

Diverse options for platforms (Edge/AI/Data) are available to simplify the distribution of intelligence from edge 2 cloud. Deciding on the right platform & tools for edge, AI/ML, data is a complex endeavor for enterprise customers. Large-scale enterprise deployments often involve a combination of Build and Buy (i.e. devices, infrastructure and platforms) approaches providing varying degree of control to the enterprise customer.

Navigating the landscape of compute, storage and networking solutions from edge 2 cloud involves several considerations and trade-offs. It involves selecting the right combination of purpose-built (full stack/vertically integrated), general-purpose devices, Infrastructure and Platforms.

In large scale Video Analytics(VA) system deployments, prioritizing interoperability and portability helps enterprise customers to reduce costs, complexity and avoid vendor lock-in. In this 2-part post , I will provide some perspective for optimal distribution of intelligence from the device edge to public cloud.

Video Cameras are the most versatile sensor that can capture a wide range of information about an environment, including the presence of people or objects, their movements, actions and interactions. This makes them applicable to a variety of use cases across multiple verticals. The development of AI and machine learning has significantly enhanced the value of camera data. AI/ML algorithms can now accurately identify objects, classify images, detect anomalies and even able to predict behaviors.

Navigating Video data - Designing Effective Solutions

Video data often demands substantial bandwidth (data intensive). Hence, Video solutions are optimized to balance quality, storage, network bandwidth, response time.

Video Analytics data processing is a compute intensive task. The technology advancements in hardware, software frameworks, cloud services, networking continues to evolve providing solutions with a varying degree of control to enterprise customers.

AI/ML solutions are procured in multiple forms (turnkey systems, devices, server infrastructure, platforms or custom-build).

Bespoke VA applications or purpose-built systems works well for small-scale deployments. Large-scale deployments have slightly different design considerations.

· Platform based design (Edge, AI, Data)

· Optimal Distribution of Intelligence

There is no one-size fits all solution to manage AI system lifecycle. The AI system lifecycle has two stages - training and inference. Optionally there could also be a serving environment (continuous evaluation). You can set up these two environments in various locations (Device Vs Edge Vs Cloud) and optimize them to control costs related to compute, storage, and networking.

ML Training Environment

During training, more compute and memory is required and is typically hosted in a cloud data centre. E.g. LLM models, like GPT-4 and Gemini, contain billions of parameters and require thousands of GPUs or other accelerators working in parallel to train efficiently. There could also be a scenario, where the training environment need to work with the captured data. In such scenarios, it is desirable to optimise the training environment location to reduce the data transport (networking) cost.

ML Inferencing/Serving Environment

This is the runtime environment where inference (prediction) takes place. This environment is responsible for deploying and executing the trained models for inference in a scalable and efficient manner. This involves a more comprehensive analysis of the video analytics use cases as illustrated below.

In the Buy approach, steps 3 and 4 are inter-related and vendor solutions often abstract the complexity thru Platforms.

AI capabilities are integrated in multiple forms. E.g. AI-enabled cameras, AI platforms or Bespoke VA applications running on a diverse set of infrastructure. i.e. General-purpose server (Edge servers) or other type of edges/cloud infrastructure. The VA system design is further optimized for efficiency and reusability (i.e. integrated or modular design).

The vendor solutions differentiate the offerings leveraging the optimal compute accelerators to distribute the intelligence between devices or server based compute a.k.a edge appliance or in the cloud.

The compute, storage, networking requirements of video analytics data processing depends on various factors including the complexity of AI/ML models, latency requirements, bandwidth availability, and data privacy concerns.

Why prioritize Interoperability ?

While optimizing the system for efficiency (improve price/performance) it introduces system level dependencies. i.e. camera and/or server or platform. E.g. Camera from Vendor-A might not work with VA Platform from Vendor B. This would be a roadblock for large-scale deployments, as it will introduce vendor lock-in, creating scalability challenges. Hence, it desirable to leverage standard based interfaces between devices and platforms.

Industry Standards and Protocols for Video Analytics

Typically, Hyperscaler offerings are proprietary services for both the device and the cloud. Analytics solutions from camera OEMs follow industry standard protocols for camera and analytics, which provides more flexibility, choice to enterprise customers.

ONVIF focuses on standardizing communication and control between different vendor IP-based security devices. ONVIF compliant cameras support profiles G, S, T, and M to promote interoperability. ONVIF profile M supports analytics configuration and information query for analytics metadata. HLS, MPEG-DASH are modern alternatives for streaming media content. Legacy protocols such as RTSP and RTMP are still in use. WebRTC is another protocol that enables real-time communication over the web, including audio and video streaming. WebRTC is widely used for video conferencing and other real-time communication applications.

Video Analytics platforms abstract the complexity to manage the AI/ML technology stack. It provides pre-built ML models with ready-to-use AI applications for various Verticals and provides an open API interface for custom application development.

TCO Optimization when Intelligence is everywhere

AI platforms does undifferentiated heavy lifting for Enterprise customers for the AI/ML technology stack. The AI/ML model performance and complexity requirements drives the selection of compute and/or deployment location.

Having an Interoperable device and platform does not necessarily optimize the compute, storage, network layers. This involves optimizing the video data processing pipeline.

To maximize the value from technology investment, the AI/ML Infrastructure selection cannot be done in isolation without considering the analytics (AI/ML model) requirements.

Compute, Storage & Networking Optimisation - Where to Start?

Storage services are less expensive compared to compute services. Hence, compute optimization shall be a key design consideration in video analytics platform design. This involves utilizing the appropriate combination of hardware (compute accelerators/GPU) and software data processing pipeline. Google, one of the world's largest hyperscalers, has noted that CPUs are still a leading compute for AI/ML workloads according to this Source .

Why not Edge Computing?

Edge computing helps to process the data closer to the source reducing networking costs. However, it does not necessarily help to reduce compute cost. To optimise compute costs, it is critical to choose the right Video Analytics data processing architecture.

Video Analytics Data Processing Pipeline Optimization

Videos are rich source of information but at the same time are equally complex. In simple terms, a video is a sequence of images. Processing every single frame in a high-FPS video stream is computationally expensive. A common optimization in real-time video analytics applications/platforms is to process only the key frames, which are spaced periodically in the video stream. Since key frames contain all the necessary information, they can be used for tasks like object detection and classification.

By skipping the inter-frames, the system significantly reduces the computational load on the CPU or GPU. Processing fewer frames leads to a faster analysis, which is critical for real-time applications. Less data needs to be transmitted from the edge to the cloud, reducing bandwidth costs and bottlenecks.

Distributing Intelligence with Image Stream Analytics

Depending on the pre-processing data pipeline, the video analytics platform comes in 2 variants 1. Video stream (RTSP stream/Key Frames/I-Frames) 2. Image stream.

Video Stream based analytics are more data and compute intensive (more compute resources, transport/networking costs), whereas Image stream based VA platforms can help to reduce compute requirements and data transport costs.

Video data can be converted into images and audio files without the use of any machine learning models. Images are analysed in similar ways to video files, involving methods such as image classification, object detection and semantic segmentation.

When to use Image Stream analytics?

In Brownfield analytics implementation, it is not feasible to upgrade the existing infrastructure (upgrade cameras or install new hardware at the edge). In Greenfield implementations, it helps to reduce the real-time analytics pipeline compute cost. This is done by leveraging the pre-processing done by upstream devices (camera). Most of the cameras have some level of intelligence and are able to generate events. Event driven AI pipeline simplifies the process of running complex AI models in a Data Centre Infrastructure. When the edge computational resources are limited and business need to run complex AI models, this approach provides an efficient option for real-time data ingestion.

Image Stream Analytics Vs RTSP Stream Analytics

How Image Stream Analytics Works?

Instead of processing every frame of a video stream, image stream analytics focuses on specific frames or images sent at specific intervals or triggered by events. This can result in significant savings in terms of computational power and memory usage.

Additionally, image stream analytics can use lower resolution or compressed images compared to full video streams, further reducing the computational and bandwidth requirements. By transmitting and analyzing lower-resolution images, the compute resource savings can be substantial while still achieving the desired analytics performance.

Platforms using Image stream analytics approach leverages the edge intelligence from upstream devices/systems and does a more efficient “Analyse” process compared to Video Analytics Platforms ingesting RTSP stream (more demand on compute resources).

Ultimately, the choice between Video/RTSP stream Vs image stream analytics will depend on the specific needs of the video analytics application (tradeoff between accuracy and speed).

I hope you gained some understanding on how the “Data Ingest” layer of Video analytics platforms can have an impact on the compute, storage usage and the TCO.

---

_Originally published on [LinkedIn](https://www.linkedin.com/pulse/optimally-distributing-intelligence-prioritizing-video-ramaswami-6zbnc)._