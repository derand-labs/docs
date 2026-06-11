---
sidebar_position: 8
---

## `wallet`

Display information about the currently active wallet.

```bash
derand wallet
```

---

## `wallet add`

Add a new wallet to the system.

### Flags

| Parameter | Type | Meaning | Default |
|-----------|------|---------|---------|
| `--name` | string | Wallet name | "" |
| `--auto` | bool | Automatically generate a new seed phrase | false |
| `--private-key` | string | Import wallet from private key | "" |
| `--seed-phrase` | string | Import wallet from seed phrase | "" |

### Example - Auto-Generate

```bash
derand wallet add --name "my-wallet" --auto
```

### Example - Import from Private Key

```bash
derand wallet add --name "my-wallet" --private-key "0x..."
```

### Example - Import from Seed Phrase

```bash
derand wallet add --name "my-wallet" --seed-phrase "word1 word2 ..."
```

---

## `wallet delete`

Delete the current wallet.

```bash
derand wallet delete
```

### Example

```bash
derand wallet delete
```

---

## `wallet get-private`

Get the private key of the current wallet.

```bash
derand wallet get-private
```

### Example

```bash
derand wallet get-private
```

:::warning
This command displays your private key. Use with caution and never share it with anyone.
:::

---

## `wallet ls`

List all available wallets.

```bash
derand wallet ls
```

### Example

```bash
derand wallet ls
```

---

## `wallet switch`

Switch to a different wallet.

```bash
derand wallet switch
```

### Example

```bash
derand wallet switch
```
