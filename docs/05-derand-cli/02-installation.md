---
sidebar_position: 2
---

# Installation

## Prerequisites

### Go

- Go version: 1.25

### Foundry

Installation:

```
curl -L <https://foundry.paradigm.xyz> | bash source ~/.bashrc foundryup
```

### System dependencies (Ubuntu/Debian)

```bash
sudo apt-get update
sudo apt-get install git cmake ninja-build pkgconf libgmp-dev libssl-dev libcxxopts-dev build-essential clang nlohmann-json3-dev
```

--------------------------------------------------------------------------------

## Build

```bash
make configure
make
```
