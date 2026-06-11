---
sidebar_position: 6
---

## `remote-profile`

List remote profiles available on-chain by page.

### Flags

| Parameter | Type | Meaning | Default |
|-----------|------|---------|---------|
| `--page` | int | Page number (max 10 profiles per page) | 0 |
| `--profile-id` | int | List versions in a specific profile (max 10 versions per page) | -1 |

### Example

```bash
derand remote-profile --page 1
derand remote-profile --profile-id 1
```

---

## `remote-profile benchmark`

Benchmark a remote profile to assess system suitability.

```bash
derand remote-profile benchmark <profile-id>
```

### Flags

| Parameter | Type | Meaning | Default |
|-----------|------|---------|---------|
| `--repeats` | int | Number of repeats | 5 |

### Example

```bash
derand remote-profile benchmark 0 --repeats 5
```

---

## `remote-profile create`

Create a new remote profile from a local profile.

### Flags

| Parameter | Type | Meaning | Default |
|-----------|------|---------|---------|
| `--local-profile` | string | Local profile name | "" |
| `--base-time` | uint | Base time in seconds | 0 |
| `--delay-time` | uint | Delay time in seconds | 12 |
| `--delay-max` | uint16 | Maximum delay value | 300 |
| `--delay-scale` | uint | Delay scale value | 0 |
| `--base-fee` | string | Base fee in ETH | "0" |
| `--delay-fee` | string | Delay fee in ETH | "0" |

### Example

```bash
derand remote-profile create --local-profile "my-profile" \
  --base-time 100 --delay-time 12 --base-fee 0.1
```

---

## `remote-profile create-version`

Create a new version of an existing remote profile.

### Flags

| Parameter | Type | Meaning | Default |
|-----------|------|---------|---------|
| `--profile-id` | uint | Remote profile ID | 0 |
| `--base-fee` | string | Base fee in ETH | "0" |
| `--delay-fee` | string | Delay fee in ETH | "0" |

### Example

```bash
derand remote-profile create-version --profile-id 1 --base-fee "0.2"
```

---

## `remote-profile link`

Link a remote profile with a local profile and verify it.

### Flags

| Parameter | Type | Meaning | Default |
|-----------|------|---------|---------|
| `--profile-id` | uint | Remote profile ID | 0 |
| `--local-profile` | string | Local profile name | "" |

### Example

```bash
derand remote-profile link --profile-id 1 --local-profile "my-profile"
```
