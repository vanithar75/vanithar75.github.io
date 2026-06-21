---
title: "Trusted Boot and Nuances in Device Management"
date: 2025-04-06
sourceUrl: https://www.linkedin.com/pulse/trusted-boot-nuances-device-management-vanitha-ramaswami-4wyqc
description: "“My opinions are my own and do not represent the views of my employer”"
coverImage: /images/blogs/trusted-boot-device-management/cover.jpg
---

![Trusted Boot and Nuances in Device Management](/images/blogs/trusted-boot-device-management/cover.jpg)

“My opinions are my own and do not represent the views of my employer”

Software supply chain security extends past the moment software development is complete. The foundation for device protection starts with digitally signing firmware/software. Without code signing, a malicious actor can replace the firmware/software images.

Depending on the device type ( MCU/MPU ), hardware root of trust uses a crypto processor (i.e., Secure element/Trusted Platform Module (TPM)) to store cryptographic keys and enables a secure boot process. While both software and hardware-based authentication are subject to supply chain vulnerabilities, hardware root of trust introduces additional manufacturing complexities.

In this post I’ll analyze how the product security design could potentially influence the managed domain using Android OS as an example.

Device security protection measures such as secure boot are designed into the product. Typically, OEM/ODMs add additional peripherals and re-packages the OS (viz.,upstream android). Hardware product design has several options as illustrated below. This earlier post analyses the device management from a value chain perspective. Typically, the OS update process requires system level privileges. The OS firmware is signed by the OEM/ODM and to authorize 3rd party device management platforms in the manufacturing process introduces process complexities.

In a chain of trust, the trustworthiness of each layer of software that composes the chain is guaranteed by the previous layer, until reaching the root of the chain, or the root of trust. Typically, this root of trust is hardwired into the device—often implemented in an immutable, tamper-resistant hardware (like ROM, fuses, a TPM, or dedicated secure elements)—which ensures that the very first piece of code that runs (or verifies the code that runs) is trusted . This link explains the secure boot process in more detail.

Secure boot is a type of chain of trust. It is a hardware based “Root of Trust” to authenticate and protect boot code and data. Typically, the OEM’s program the device with their own key using their own software/tools during manufacturing. The chain of trust is controlled by the manufacturer(OEM/ODM). The secure boot takes care up to the operating system. Secure boot relies on a static check of the chain of trust.

Trusted boot starts where the secure boot ends. Trusted boot verifies that the OS and all OS drivers are properly signed. Trusted boot ends when third party drivers begin to load. This link explains the secure boot vs trusted boot in more detail for windows OS. However, the principles can be applied for Android OS as well.

Nuances in Device Security - Chain of Trust and Integration Challenges

Unlike x86, ARM is not standardized (the ecosystem is quite fragmented). In Android Enterprise deployments, both the device OS and application software follow distinct trust models, each signed by different entities and governed by separate cryptographic mechanisms. This distinction introduces challenges when integrating a third-party device management platform from ISV’s that seeks to manage both (OS + Apps).

System Software/OS - Signed by OEM Certificate

Typically, the device OS is provided and signed by the OEM (Original Equipment Manufacturer) using an OEM certificate. A central HSM can be used to sign firmware images—that is, it can manage the private keys used to sign the firmware—but the device itself still needs a securely stored and tamper-resistant way to verify those signatures before executing the firmware. The Hardware Root of Trust (RoT) ensures that the verification process itself cannot be modified. If the device does not have a Hardware Root of Trust, it must rely on a pre-configured bootloader to verify the signature.

Application Software - Signed by App Developer Certificate

Applications installed on the device are signed by app developers/Individuals or enterprises, using their own developer certificates, distinct from the OEM’s Root of Trust.

Unlike the OS, app signing keys are not anchored to the device’s Hardware Root of Trust, which means the device does not inherently verify the app against the OEM’s chain of trust.

General Purpose Android OS has multiple options to enforce app integrity:

Google Play Store’s App Signing & play Integrity API Keystore API & Trusted Execution Environment (TEE) for secure key storage Google Play Protect to detect malware

Management plane: Balancing security Vs flexibility

Option-01: Purpose built devices with Purpose built Apps

In this scenario, purpose-built devices with purpose-built Apps, extends the chain of trust from the OS to the application images (i.e., apps from the same OEM). However, this limits the choices of apps that runs on the device.i.e., unable to run apps from multiple developers/solution providers (ISV).

Option-02: Purpose built devices & support for Apps from multiple vendors

In this scenario, the device is purpose-built based on the vertical requirements, however there is flexibility in the choice of applications running on the device.

The security architecture of the device directly impacts its managed domain. Purpose-built devices enforce strict chain-of-trust controls but limits application flexibility. Devices that allow applications from multiple vendors provide greater flexibility but introduce additional security considerations, requiring robust device management mechanisms to prevent unauthorized software from compromising the system. Network-based system management tools could also be compromised, and a compromised device management platform could push malicious software to device fleet. These are high impact attacks and hence require careful considerations.

The managed domain is influenced by the device security architecture. Depending on the device capability enabled by the OEM/ODM two distinct device management platforms may be required one for OS management and another for application software management.

Business Opportunities

Security needs vary by use case. A wireless sensor on a farm that measures sunlight and the water content of the soil will probably not be subject to the same level of malware or security attacks as a smart door lock that runs an app that interacts with the external world.

Traditionally, OEM management tools(Element Management Systems) are not revenue-generating. However, embedding secure infrastructure opens up new monetization opportunities. By aligning the security architecture with the use case, OEMs can deliver differentiated, value-added services.

---

_Originally published on [LinkedIn](https://www.linkedin.com/pulse/trusted-boot-nuances-device-management-vanitha-ramaswami-4wyqc)._