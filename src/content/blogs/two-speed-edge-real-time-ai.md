---
title: "The Two-Speed Edge: From Store-and-Forward to Real-Time AI"
date: 2025-06-16
sourceUrl: https://www.linkedin.com/pulse/two-speed-edge-from-store-and-forward-real-time-ai-vanitha-ramaswami-s9u0c
description: "The promise of Edge AI is often one of instantaneous, real-time processing right where data is generated. However, the practical reality is frequently constrained by a crucial, yet often overlooked, f"
coverImage: /images/blogs/two-speed-edge-real-time-ai/cover.jpg
---

![The Two-Speed Edge: From Store-and-Forward to Real-Time AI](/images/blogs/two-speed-edge-real-time-ai/cover.jpg)

The promise of Edge AI is often one of instantaneous, real-time processing right where data is generated. However, the practical reality is frequently constrained by a crucial, yet often overlooked, factor: connectivity. The characteristics of connectivity, especially during the initial phases of an AI project, can alter an AI system's architecture.

In this post, I’ll analyse the dynamic characteristics of connectivity and its impact on the various stages of an AI solution development and deployment.

The availability of site infrastructure, particularly connectivity, influences the AI system's architecture at different stages, like training versus inference environment. This can dictate the use of wired versus wireless connectivity during various phases of an AI project.

For instance, cellular connectivity provides flexibility in terms of rapidly setting up a managed adhoc wireless connectivity. However, there are some nuances to the data throughput. Even the unlimited data plan from MNOs throttles the data usage after a certain period [Source #1]

Most mobile plans only offer unlimited data with shaping. This means once you go over a max-speed data cap, speeds are slowed/throttled, regardless of prepaid/post-paid. This link analyses the unlimited data plans in Singapore.

This actually influences the data processing. i.e., where and how the data is/ (should be) processed at different stages of AI solution development.

Consider an Automatic Number Plate Recognition (ANPR) system. A typical project involves fine-tuning a pre-trained model to account for site-specific conditions and regional variations to achieve the desired accuracy.

ANPR Model Localisation: A Practical Example

Model localisation is fundamentally a training process where an OCR engine is adapted to the unique conditions of its deployment environment, such as specific sun glare patterns, night time reflections, or local weather. One of the key design considerations for the POC/Pilot phase is to do rapid data collection and hence minimise the infrastructure setup activities (viz., setting up a wired infrastructure).

This iterative process involves two key phases:

Camera Aiming: A one-time setup to tune the camera's configuration for optimal data capture based on site-specific lighting and angles. Data Acquisition: The next phase involves capturing video for several days and uploading it to a training environment, which is typically located remotely in the cloud or at an enterprise datacentre.

Because of the cellular data throttling, transferring this large volume of video data often requires a batch upload process rather than sending a real-time stream. This directly impacts the cycle time for the fine-tuning process. This can slow down the process and increase development costs.

From 'Store-and-Forward' to 'Real-Time' Edge

These connectivity-driven challenges lead to a more nuanced classification of the edge. During POC/Pilot phases that rely on wireless data transfer, the system operates as a "store-and-forward edge" . For the final production deployment, the architecture typically transitions to a "real-time edge," often supported by more stable, wired connectivity. This also mean that AI/ML training environment setup considerations are slightly different from the inference environment. AI training environments are typically isolated/disconnected environments (not connected to trusted/enterprise networks) as opposed to inference environments that are integrated into application/platforms.

Connectivity is not a static utility but is a dynamic variable that shapes the edge solution's design. To successfully operationalise AI deployments, it is crucial to plan for this evolution: from a 'store-and-forward' model during the POC/Pilot phase to a 'real-time' architecture for the final production environment.

---

_Originally published on [LinkedIn](https://www.linkedin.com/pulse/two-speed-edge-from-store-and-forward-real-time-ai-vanitha-ramaswami-s9u0c)._