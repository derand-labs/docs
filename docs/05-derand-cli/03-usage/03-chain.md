---
sidebar_position: 3
---

## `chain`

Display information about the currently configured blockchain.

```bash
derand chain
```

---

## `chain add`

Add a new blockchain configuration to the system.

### Flags

| Parameter | Type | Meaning | Default |
|-----------|------|---------|---------|
| `--name` | string | Chain name | "" |
| `--chain-id` | int | Chain ID | 0 |
| `--symbol` | string | Chain native coin symbol | "" |
| `--rpc` | []string | HTTP/HTTPS RPC URLs | [] |
| `--ws-rpc` | []string | WebSocket RPC URLs | [] |
| `--derand` | string | DeRand smart contract address | "" |
| `--derand-tx` | string | DeRand contract deployment transaction | "" |
| `--hash-to-prime-128` | string | HashToPrime128 contract address | "" |
| `--hash-to-prime-128-tx` | string | HashToPrime128 contract deployment transaction | "" |

### Example

```bash
derand chain add --name "Sepolia" --chain-id 11155111 --symbol "ETH" \
  --rpc "https://sepolia.infura.io/v3/YOUR_KEY" \
  --derand 0x... --derand-tx 0x... --hash-to-prime-128 0x... --hash-to-prime-128-tx 0x...
```

---

## `chain add-contract`

Add or update DeRand contract addresses for the current chain.

### Flags

| Parameter | Type | Meaning | Default |
|-----------|------|---------|---------|
| `--derand` | string | DeRand smart contract address | "" |
| `--derand-tx` | string | DeRand contract deployment transaction | "" |
| `--derand-treasury-address` | string | DeRand treasury address | "" |
| `--derand-treasury-target` | string | DeRand treasury target | "0" |
| `--hash-to-prime-128` | string | HashToPrime128 contract address | "" |
| `--hash-to-prime-128-tx` | string | HashToPrime128 contract deployment transaction | "" |

### Example

```bash
derand chain add-contract --derand 0x... --hash-to-prime-128 "0x..."
```

---

## `chain add-rpc`

Add new RPC endpoints to the current chain configuration.

### Flags

| Parameter | Type | Meaning | Default |
|-----------|------|---------|---------|
| `--http` | string | HTTP/HTTPS RPC endpoint | "" |
| `--ws` | string | WebSocket RPC endpoint | "" |

### Example

```bash
derand chain add-rpc --http "https://rpc.example.com" --ws "wss://rpc.example.com"
```

---

## `chain delete`

Delete the target chain configuration by index.

```bash
derand chain delete <index>
```

### Example

```bash
derand chain delete 1
```

---

## `chain ls`

List all configured chains.

```bash
derand chain ls
```

### Example

```bash
derand chain ls
```

---

## `chain remove-contract`

Remove a HashToPrime128 contract from the current chain configuration.

### Flags

| Parameter | Type | Meaning | Default |
|-----------|------|---------|---------|
| `--hash-to-prime-128-index` | int | Index of HashToPrime128 contract to remove | -1 |

### Example

```bash
derand chain remove-contract --hash-to-prime-128-index 0
```

---

## `chain remove-rpc`

Remove an RPC endpoint from the current chain configuration.

### Flags

| Parameter | Type | Meaning | Default |
|-----------|------|---------|---------|
| `--http` | int | Index of HTTP/HTTPS RPC endpoint to remove | -1 |
| `--ws` | int | Index of WebSocket RPC endpoint to remove | -1 |

### Example

```bash
derand chain remove-rpc --http 0
```

---

## `chain switch`

Switch to a different configured chain by index.

```bash
derand chain switch <index>
```

### Example

```bash
derand chain switch 1
```
