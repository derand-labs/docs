---
sidebar_position: 1
---

# Balances

DeRand maintains native coin balances for all participants. Funds can be deposited or withdrawn at any time.

## Regular Balance

This balance is used by ***requesters*** to pay for randomness requests and callback execution.

Deposit:

```solidity
function deposit() public payable;
```

Check the balance:
```solidity
function balanceOf(address account) external returns (uint256);
```

Withdraw:

```solidity
function withdraw(uint256 amount) external;
```

## Prover Balance

This balance is used by ***provers*** to hold collateral and receive rewards from completed requests.

Deposit:

```solidity
function proverDeposit() public payable;
```

Check the balance:
```solidity
function proverBalanceOf(address account) external returns (uint256);
```

Withdraw:

```solidity
function proverWithdraw(uint256 amount) external;
```

## Payable Functions

When you send funds to any payable function in DeRand (except `proverDeposit`), the amount is automatically credited to your regular balance.
