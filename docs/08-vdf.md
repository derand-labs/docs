---
sidebar_position: 8
---

# Verifiable Delay Function

- A Verifiable Delay Function (VDF) is a cryptographic primitive that requires a fixed number of sequential computational steps to evaluate, while allowing efficient verification of the result.

- The key property of a VDF is that its evaluation time cannot be significantly reduced, even with highly parallel hardware or specialized acceleration. This ensures that the output remains unpredictable before the computation completes.

- If the evaluation time `T` is larger than the adversarial advantage window (the time between when the input becomes available and when the output can influence a system), then no participant can reliably compute or exploit the result early.

## Definition

- A VDF is defined over an unknown-order group. Given an input `x` and a time parameter `T`, the function computes:

  ```
  y = x^(2^T)
  ```

- The computation must be performed sequentially:

  ```
  y0 = x  
  y1 = y0^2  
  y2 = y1^2  
  y3 = y2^2  
  ...  
  yT = y(T-1)^2
  ```

- Each step depends on the previous one, which prevents meaningful asymptotic parallelization of the computation.

- While parallel hardware may improve constant factors, it does not reduce the fundamental sequential time complexity.

## Verification

- Although VDF evaluation is inherently sequential, verification of a computed output can be performed efficiently.

- Two main proof systems exist for VDF verification:

  - Wesolowski proof system

  - Pietrzak proof system (not used here)

### Wesolowski Proof

- After computing `y`, a challenge value `l` is derived using the Fiat-Shamir heuristic over the public transcript.

- The prover computes integers q and r such that:

```
T = q*l + r
```

- The prover then computes:

```
pi = x^q
```

- Verification checks the equality:

```
y == (pi^l) * (x^r)
```

## Classgroup

- Unknown-order groups commonly used for VDF constructions include RSA groups and class groups.

- RSA groups typically require a trusted setup. For this reason, DeRand Protocol prefers class groups as the default choice for VDF implementation.

- Reference: [https://eprint.iacr.org/2018/623.pdf](https://eprint.iacr.org/2018/623.pdf)

## ZK-SNARK

- While Wesolowski proofs are efficient to verify, on-chain verification can still be expensive in practical systems.

- zk-SNARKs can be used as a proof compression layer to reduce verification cost, without changing the underlying VDF computation or its security assumptions.
