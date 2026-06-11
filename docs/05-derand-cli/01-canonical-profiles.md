---
sidebar_position: 1
---

# Canonical Profiles

Canonical Profiles are predefined configuration presets officially supported by DeRand-CLI.

They represent convenience configurations bundled with the CLI for ease of setup and interoperability. Canonical Profiles do not impose any restriction on the DeRand protocol itself.

At the current version, there is exactly one Canonical Profile supported:

Criteria              | Requirement
--------------------- | ------------------------------------
VDF group             | Class group
VDF proof system      | Wesolowski with 128-bit challenge
On-chain verification | zkSNARK using Plonk over BN254 curve

These parameters define the default operational configuration used by the CLI tooling.

They are not protocol-level constraints and may evolve independently of the DeRand protocol.
