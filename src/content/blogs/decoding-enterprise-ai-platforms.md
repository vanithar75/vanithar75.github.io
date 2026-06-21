---
title: "Decoding Enterprise AI platforms - A stakeholder perspective"
date: 2024-04-14
sourceUrl: https://www.linkedin.com/pulse/decoding-enterprise-ai-platforms-stakeholder-vanitha-ramaswami-l6k3c
description: "“My opinions are my own and do not represent the views of my employer”"
coverImage: /images/blogs/decoding-enterprise-ai-platforms/cover.jpg
---

![Decoding Enterprise AI platforms - A stakeholder perspective](/images/blogs/decoding-enterprise-ai-platforms/cover.jpg)

“My opinions are my own and do not represent the views of my employer”

Integrating AI in an enterprise context, requires careful consideration and adherence to legal and ethical guidance. The intellectual property, licensing terms of the AI platforms determine stakeholder’s role in managing the AI lifecycle, thereby defining ownership across various AI environments (Training, Fine tuning, and Inferencing). While public cloud AI/ML services typically do not distinguish the stakeholder’s viewpoint i.e. Solution Provider (OEM, ISV, SI) Vs Enterprise Customer, there are some nuances to it.

As mentioned in the earlier posts [1] [ 2 ] , the AI lifecycle broadly involves 2 stages i.e. Training and Inferencing. In this post, I’m going to provide some perspective on how the Build Vs Buy decision for AI platforms impacts the management and operations of the AI lifecycle.

Accelerating Enterprise AI initiatives with AI Platforms

Enterprise AI platforms are not one-size fits all solutions. Enterprises typically start their AI endeavors with AI platforms. AI platforms help to reduce the time to value for enterprise customers, by providing out of the box solutions to create AI-powered business/operational workflows.

The AI environments can be modularized and implemented in multiple platforms, however the vendor solutions could introduce some variations and/or constraints to this approach. Large scale Enterprise AI implementation often starts with prebuilt or pre-trained ML models integrated in AI platforms. Pre-trained ML models are an accelerator for Enterprise AI implementation and save time and resources.

In scenarios, where Enterprise customers are buying AI platforms access to the various AI environments is according to the Solution Provider (OEM, ISV) platform licensing terms. Some environments are fully managed by Solution Provider (OEM, ISV).

Among all the environments, due consideration shall be given for the ML inference environment as it is the runtime environment and has strong dependency on the enterprise business/operational applications and/or workflows. This is the environment where business users sees the outcome/impact of AI implementation in an Enterprise.

Deployment Options for Inference Environment a.k.a Serving Environment

A machine learning (ML) inference/serving environment refers to the infrastructure and/or setup required to deploy and run ML models for making predictions or inferences on new, unseen data. It encompasses the software, hardware, and configuration necessary to execute the ML model efficiently and accurately. The Inference environment a.k.a serving environment can be deployed in multiple platforms. In simpler terms, the ML inference environment takes a trained ML model and making it accessible for real-world applications via a REST or gRPC API style interfaces/endpoints.

· Vertical AI platform - Support for vertical/domain specific AI use cases

· Edge platform - Provide choice of deployment locations with varying degree of performance. Best fit for OT applications

· Multi-cloud AI platform - Provides infrastructure agnostic inferencing e.g. [ Hugging Face ]

· Data platform - Simplifies integration/infusing of AI inferencing in enterprise data workflows [ 1 ] [ 2 ].

· Hyperscaler AI services ( Google Vertex AI , Azure AI , AWS )

Some Enterprise AI platforms offer flexibility in the choice of infrastructure, others do not. E.g. In purpose-built/vertically integrated AI platforms the Solution provider decides the AI compute, storage infrastructure.

ML Training Vs ML Fine Tuning Environment

ML Training and fine-tuning are critical stages in a machine learning model development lifecycle, serving distinct purposes. These two environments are typically managed by ML specialists (Builders).

The ML model training phase involves setting up the ML model from scratch. ML model fine-tuning(a.k.a transfer learning) involves i) Adapting or refining pre-trained models for specific/new tasks. ii) continuous improvement of ML models in production. The ML fine-tuning environment integrates Enterprise Private Data with pre-built ML models (purchased or open-source). This link explains these 2 ML environments in detail. Fine-tuning a ML model is not always mandatory but it's often beneficial. However there could be exceptions viz., Large language models can be used without fine-tuning by employing prompting techniques.

Similar to the inference environment the ML training & the fine-tuning environments can be deployed on a choice of infrastructure. Depending on the nature of the vendor solution (Solution providers AI/ML technical maturity) these environments could be a vendor specific AI/ML development toolset or a ML development stack from OEM/ISV's. E.g. Comet a SOC 2 certified ML platform.

When buying AI platforms it is essential to assess the compatibility of the ML models supplied by the solution provider per the Enterprise customer tech stack. The ML model need to be made available in a format compatible with the enterprise customer toolset. E.g. ONNX , TensorFlow SavedModel etc.,. The ownership of these AI environments will have an impact when an enterprise customer buys an AI platform.

MLOps Vs ML Fine Tuning

MLOps focuses on the operationalization and automation of the machine learning lifecycle and fine-tuning is just one component of the broader MLOps process.

Management and Operations of Enterprise AI applications

The performance of AI platforms heavily depends on data. In some scenarios, training a model once could be sufficient if the initial model performance is adequate and the data distribution remains stable over time. However it is recommended to continuously monitor and retrain the ML model to adapt to changes, and account for operational factors. The frequency of re-training a ML model depends on several factors (i.e. ML model performance, the rate of change of data in the problem domain etc.,).

There are some additional considerations to take note, when Buying AI platforms. Unlike other software purchases the AI lifecycle isn’t (can’t) be fully managed by the vendor. The AI platform licensing terms shall influence the operational model (Vendor managed Vs Customer managed AI environments) for AI platform deployment and operations.

The scope of an AI platform could be limited to managing one or a more of the AI environments (Training, Inferencing, Fine-Tuning). Depending on the AI platform licensing terms, the management and operations could be done from the same AI platform or an independent ML platform ( MLOps platform or commercial ML platforms ).

In the Buy scenario, typically the ML Training environment is managed by the Solution Provider (OEM, ISV) and the ML Fine Tuning environment is (could be) managed by the Enterprise customer*. The distinction here is due to the dataset involved in the development process. ML training is an offline process that happens in the Solution Provider premise, whereas ML fine tuning could be a process happening in the customer premise with the customer’s dataset.

*Requires in-house ML expertise

Does business model impact the ML environments ownership? (E.g. SaaS)

No. All Solution Providers viz., Azure OpenAI Service and OpenAI Enterprise have strict policies in place that prohibit the use of enterprise customer data for model training.

In SaaS platforms (as an outcome based service), all the 3 environments are vendor managed. However, depending on the in-house ML expertise 2 possible scenarios for enterprise customers to manage the ML applications in production (i.e. ML Fine Tuning environment).Depending on the specialized/ML skillset availability of the enterprise customer, these environments can be managed by one or multiple solution providers.

Scenario-1: With in-house ML expertise

An independent model fine-tuning environment can be setup alongside of the SaaS platform. With appropriate licensing of the prebuilt models, new use cases could be built or existing model performance could be improved.

Scenario-2: Without in-house ML expertise

The SaaS platform provider manages the ML fine-tuning environment to continuously improve the model. However the data usage still requires consent from the customer. With appropriate licensing of the prebuilt models, new use cases could be built or existing model performance could be improved by engaging another solution provider.

Enterprise customers must choose the right combination of BUILD AND BUY options to accelerate Enterprise AI initiatives.

Navigating AI implementation in an Enterprise context involves understanding the nuances of AI platforms, considering security, legal and ethical implications and aligning with the stakeholder’s roles and responsibilities.

---

_Originally published on [LinkedIn](https://www.linkedin.com/pulse/decoding-enterprise-ai-platforms-stakeholder-vanitha-ramaswami-l6k3c)._