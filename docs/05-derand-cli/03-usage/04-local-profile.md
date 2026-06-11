---
sidebar_position: 4
---

## `local-profile`

List all available local profiles with their configuration details. Specify name to display information for only that profile.

```bash
derand local-profile [--name ""]
```

---

## `local-profile benchmark`

Benchmark profile to get suitable parameters for the remote profile.

### Flags

| Parameter | Type | Meaning | Default |
|-----------|------|---------|---------|
| `--name` | string | Local profile name | "" |
| `--target-delay-time` | int | Target delay time in seconds | 12 |
| `--t-seed` | uint | Seed for VDF iteration count | 30000000 |
| `--repeats` | int | Repeats for ZK circuit | 5 |

### Example

```bash
derand local-profile benchmark --name "my-profile" --target-delay-time 12 --repeats 5
```

---

## `local-profile create`

Create a new local profile with custom parameters.

### Flags

| Parameter | Type | Meaning | Default |
|-----------|------|---------|---------|
| `--name` | string | Profile name | "" |
| `--seed` | string | Seed value | "0x000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f" |
| `--d-bits` | uint16 | Classgroup discriminant size | 16 |
| `--h2f-steps` | uint16 | Number of steps for hash-to-form | 2 |
| `--h2f-generators` | uint16 | Number of generators for hash-to-form | 8 |
| `--limb-bits` | uint16 | ZK circuit limb size | 16 |
| `--split-exp` | uint16 | Higher value reduces intermediate pow circuit size but increases RC verifier final circuit size | 1 |
| `--srs-source` | string | SRS source (unsafe/snarkjs/perpetual) | "unsafe" |
| `--zk-vv` | int | Single phase or two phase RC verifier (1/2) | 1 |

### Example

```bash
derand local-profile create --name "my-profile" --d-bits 16 --limb-bits 16
```

---

## `local-profile delete`

Delete a local profile.

### Flags

| Parameter | Type | Meaning | Default |
|-----------|------|---------|---------|
| `--name` | string | Local profile name | "" |

### Example

```bash
derand local-profile delete --name "my-profile"
```

---

## `local-profile deploy`

Deploy a local profile to the blockchain.

### Flags

| Parameter | Type | Meaning | Default |
|-----------|------|---------|---------|
| `--name` | string | Local profile name | "" |

### Example

```bash
derand local-profile deploy --name "my-profile"
```

---

## `local-profile export`

Export a local profile to a separate JSON file.

### Flags

| Parameter | Type | Meaning | Default |
|-----------|------|---------|---------|
| `--name` | string | Local profile name | "" |
| `--out` | string | Output file path | "" |

### Example

```bash
derand local-profile export --name "my-profile" --out "profile.json"
```

---

## `local-profile import`

Import a new local profile from a file or URL.

### Flags

| Parameter | Type | Meaning | Default |
|-----------|------|---------|---------|
| `--name` | string | Profile name | "" |
| `--path` | string | Path or URL to profile file | "" |

### Example

```bash
derand local-profile import --name "imported-profile" --path "profile.json"
```

---

## `local-profile install`

Install a local profile (compile/build required components).

### Flags

| Parameter | Type | Meaning | Default |
|-----------|------|---------|---------|
| `--name` | string | Local profile name | "" |
| `--reinstall` | bool | Require re-install even if file already exists | false |

### Example

```bash
derand local-profile install --name "my-profile"
```

---

## `local-profile verify`

Verify smart contract of the verifier associated with a local profile.

This check verifies contract bytecode integrity only.

### Flags

| Parameter | Type | Meaning | Default |
|-----------|------|---------|---------|
| `--name` | string | Local profile name | "" |
| `--address` | string | Verify with another address, if success, set this address as verifier | "" |
| `--deploy-tx` | string | Deployment transaction of the above address | "" |

### Example

```bash
derand local-profile verify --name "my-profile"
```
