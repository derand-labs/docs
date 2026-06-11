---
sidebar_position: 7
---

## `request`

Make a request for a random number.

### Flags

| Parameter | Type | Meaning | Default |
|-----------|------|---------|---------|
| `--profile-id` | uint | Profile ID to use for random generation | 0 |
| `--profile-version` | uint32 | Profile version | 0 |
| `--seed` | uint | Seed value | 0 |
| `--max-delay` | uint16 | Maximum delay allowed | 20 |
| `--delay-factor` | uint16 | Delay factor multiplier | 1 |
| `--by` | int | Request on behalf of another wallet | -1 |

### Example

```bash
derand request --profile-id 1 --profile-version 1 --seed 12345
```

---

## `request info`

Get information about a request.

```bash
derand request info <request-id>
```

### Example

```bash
derand request info 1
```
