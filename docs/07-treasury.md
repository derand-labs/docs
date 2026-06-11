---
sidebar_position: 7
---

# Treasury

## Why does DeRand collect protocol fees?

Many decentralized protocols face the challenge of maintaining long-term economic sustainability while ensuring sufficient incentives for network participants (such as provers) to reliably perform work.

In the early years, a protocol requires significant investment in research, security reviews, infrastructure, developer tooling, documentation, ecosystem growth, and long-term maintenance. But once deployed, a truly decentralized protocol should not depend on the goodwill of a single company, grants, donations, or continuous fundraising.

DeRand was designed with a different philosophy:

> The protocol should be able to sustain itself through protocol usage while ensuring that the majority of value ultimately flows to the network participants who provide randomness.

To achieve this, DeRand introduces a protocol treasury and an adaptive sustainability fee.

The protocol fee is collected only from the collateral remaining after all compensation and reward obligations have been fulfilled, and is therefore capped by the remaining collateral available at settlement.

--------------------------------------------------------------------------------

## The Purpose of the Treasury

The treasury exists to support the long-term health of the protocol, including:

- Cryptographic research
- Development of new randomness profiles
- Security audits
- Protocol infrastructure
- Developer tooling and SDKs
- Ecosystem incentives
- Future protocol improvements

The treasury is not intended to maximize profit extraction.

Instead, it exists to ensure that DeRand remains sustainable regardless of market cycles, grants, or external funding sources.

--------------------------------------------------------------------------------

## A Self-Regulating Fee Model

Most protocols choose a fixed fee.

A fixed fee creates two problems:

1. If the protocol is small, the fee may be insufficient to fund development.
2. If the protocol becomes successful, the fee may extract excessive value from the ecosystem.

DeRand solves this by using an adaptive fee model.

The protocol treasury targets a predefined annual operating budget.

This target is called the Target Operating Budget.

--------------------------------------------------------------------------------

## Maximum Fee

If treasury receipts fall significantly below the Target Operating Budget, the protocol fee can increase to support sustainability.

However, the fee is capped at 10%.

Regardless of circumstances, the protocol can never collect more than 10% of request revenue.

This prevents excessive value extraction and guarantees predictable economic bounds for participants.

--------------------------------------------------------------------------------

## Minimum Fee

If treasury receipts meet or exceed the Target Operating Budget, the protocol fee is automatically reduced to the minimum level of 1%.

This ensures that once the protocol is financially healthy, the overwhelming majority of value remains with provers and the broader ecosystem.

--------------------------------------------------------------------------------

## Alignment of Incentives

The fee model creates alignment between all parties.

- **Users**: benefit from a healthier and more efficient ecosystem.
- **Provers**: As DeRand scales, a larger percentage of request revenue flows directly to provers rather than the treasury.
- **Protocol**: The treasury receives enough funding to support long-term development while avoiding unnecessary accumulation of capital.

--------------------------------------------------------------------------------

## No Manual Control

The protocol fee is determined entirely by an immutable on-chain formula.

There is no administrative function that allows anyone to arbitrarily set the fee.

No founder, foundation, multisig, or governance process can manually increase or decrease the protocol fee.

The fee is calculated solely from:

- The Target Operating Budget
- Historical treasury receipts
- The protocol's predefined economic rules

This ensures that the sustainability model remains transparent, predictable, and credibly neutral.

--------------------------------------------------------------------------------

## Long-Term Vision

DeRand is designed to exist for decades.

The treasury is not a mechanism for extracting value from the network.

It is a mechanism for ensuring that the protocol can continue evolving, funding research, supporting new randomness models, and adapting to future cryptographic advances without depending on external sponsors.

As the network grows, the protocol retains less.

As the network shrinks, the protocol retains only what is necessary to sustain itself.

This balance allows DeRand to remain both sustainable and decentralized for the long term.

--------------------------------------------------------------------------------

## Fee Calculation

The protocol fee is recalculated whenever a request is completed.

The fee is determined through three stages:

1. A base component based only on receipts in the current year.
2. A long-term adjustment based on the average receipts of the previous up to 3 completed years.
3. A yearly adjustment based on the remaining time in the current year.

The final fee is applied as multiplicative factors over the base fee.

### Base Fee

Let `currentYearReceipts` be the receipts accumulated in the current year, and `T` be the target operating budget.

```
baseRate = 1%
if currentYearReceipts < T:
    baseRate += 9% × (T - currentYearReceipts) / T
```

This produces:

```
currentYearReceipts = 0      → baseRate = 10%
currentYearReceipts >= T     → baseRate = 1%
```

### Three-Year Adjustment

Let `avg3y` be the average receipts of up to the previous 3 completed years:

The history factor is:

```
historyFactor = 50%
if avg3y < T:
    historyFactor += 100% × (T - avg3y) / T
```

Examples (boundary cases):

```
avg3y = 0    → historyFactor = 150%
avg3y >= T   → historyFactor = 50%
```

---

### Yearly Adjustment

Let:

```
remaining = 365 days - (elapsed % 365 days)
```

The time factor is:

```
timeFactor = 50% + 50% × (365 days - remaining) / 365 days
```

Examples (boundary cases):

```
start of year (remaining = 365 days) → timeFactor = 50%
mid year (remaining = 182 days)      → timeFactor = 75%
end of year (remaining = 0 days)     → timeFactor = 100%
```

---

### Final Fee

```
feeRate = baseRate × historyFactor × timeFactor
```

Clamped:

```
1% <= feeRate <= 10%
```

Examples:

```
current_year = 0% target
avg3y        = 0% target
time         = start of year
-> 7.5%

current_year = 0% target
avg3y        = 100% target
time         = start of year
-> 2.5%

current_year = 0% target
avg3y        = 100% target
time         = end of year
-> 5%

current_year = 50% target
avg3y        = 100% target
time         = start of year
-> 1.375%

current_year = 50% target
avg3y        = 100% target
time         = end of year
-> 2.75%

current_year = 100% target
avg3y        = 100% target
time         = end of year
-> 1%
```

## Economic Interpretation

The fee model is designed to behave in a predictable and self-correcting way.

If treasury receipts are low, the fee rises toward the upper bound to preserve sustainability.

If treasury receipts are healthy, the fee falls toward the lower bound so that more value flows to provers and users.

If the protocol is in a transitional state, the smoothing mechanism prevents sudden jumps and gives the system time to adjust gradually.
