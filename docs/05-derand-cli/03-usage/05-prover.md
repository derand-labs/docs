---
sidebar_position: 5
---

## `prover`

Display prover registration information and current status.

```bash
derand prover
```

---

## `prover prove`

Prove a single request.

```bash
derand prover prove <request-id>
```

### Flags

| Parameter | Type | Meaning | Default |
|-----------|------|---------|---------|
| `--submit-preview` | bool | Allow submit preview (only if you are the owner of the request) | false |

### Example

```bash
derand prover prove 0
```

---

## `prover register`

Register as a prover for a specific profile.

### Flags

| Parameter | Type | Meaning | Default |
|-----------|------|---------|---------|
| `--profile-id` | uint | Remote profile ID | 0 |
| `--profile-version` | uint32 | Profile version | 0 |

### Example

```bash
derand prover register --profile-id 1 --profile-version 1
```

---

## `prover run`

Wait and prove requests as soon as assignments are received.

This command starts a long-running daemon process that:
- Listens for new proof requests
- Waits for assignments to the registered profile
- Automatically computes and submits proofs when a request is assigned

```bash
derand prover run
```

### Example

```bash
derand prover run
```

---

## `prover unregister`

Unregister from a profile.

### Flags

| Parameter | Type | Meaning | Default |
|-----------|------|---------|---------|
| `--profile-id` | uint | Remote profile ID | 0 |
| `--profile-version` | uint32 | Profile version | 0 |

### Example

```bash
derand prover unregister --profile-id 1 --profile-version 1
```
