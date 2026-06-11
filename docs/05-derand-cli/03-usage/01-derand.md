---
sidebar_position: 1
---

# derand

## `init`

Initialize DeRand CLI configuration.

```bash
derand init
```

This command sets up the initial configuration for the DeRand CLI tool on your system.

---

## `info`

Get current DeRand deployment information.

```bash
derand info
```

Displays information about the currently deployed DeRand smart contracts and their status.

---

## `verify`

Verify that DeRand smart contracts are correctly deployed.

This verification checks bytecode integrity only and does not validate cryptographic correctness of the protocol.

```bash
derand verify
```

---

## `deploy`

Deploy smart contracts.

### Flags

| Parameter | Type | Meaning | Default |
|-----------|------|---------|---------|
| `--derand` | bool | Deploy DeRand contract | false |
| `--derand-treasury-address` | string | DeRand treasury address | "" |
| `--derand-treasury-target` | string | DeRand treasury target | "0" |
| `--hash-to-prime-128` | bool | Deploy HashToPrime128 contract | false |

### Example

```bash
derand deploy --derand --derand-treasury-target 20 --hash-to-prime-128
```

---

## `cleanup`

Cleanup configuration.

```bash
derand cleanup
```

This command removes or resets DeRand CLI configuration files.
