---
sidebar_position: 9
---

# FAQ


## What if a prover intentionally delays submitting a proof?

A prover has a grace period during which they can submit a proof without being penalized. If the proof is submitted after this period, the prover may be penalized, and part of the penalty is used to compensate the requester.

If the prover delays for too long, the request is automatically moved to the **Open** state. At that point, **anyone** (including you) can submit a valid proof and claim a reward funded by the prover's collateral. In many cases, the reward for fulfilling an Open request is higher than the original request fee, creating a strong incentive for the request to be completed.

Depending on the circumstances, the requester may receive compensation of up to **6× the request fee**.

## What happens if my request waits too long without being assigned to a prover?

If no prover is assigned within a certain period (typically a few hours), the request is automatically moved to the **Open** state. In this state, **anyone** can submit a valid proof.

Unlike requests that were previously assigned to a prover, you will not receive compensation simply because no prover was available for the selected profile.

If this happens, you may consider [changing the request to a different version](/docs/03-integration/01-guide.mdx#change-version) of the same profile where more provers are currently online.
