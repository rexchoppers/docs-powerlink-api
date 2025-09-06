# PowerLink JSON-RPC API Docs

Documentation for the Visonic/Tyco/JC PowerLink JSON‑RPC API. This repository defines the API using the OpenRPC specification and includes a minimal build script to aggregate per‑method JSON files into a single OpenRPC document.

## Features
- Modular OpenRPC method files under `./methods` with shared `info.json`.
- One‑command local build: generates `openrpc.build.json` from the method files.
- Optional live build during authoring via `nodemon` (watches `methods/` and `info.json`).
- GitHub Actions workflow that builds and publishes the generated `openrpc.build.json` to the `dist` branch.

## Quick start

### Prerequisites
- Node.js 20+ recommended

### Install dependencies
```
npm install
```

### Build the OpenRPC document
This command scans `methods/` and produces `openrpc.build.json` at the repo root:
```
node generate.js
```
The console should print:
```
✅ Built openrpc.build.json
```

### Watch during editing (optional)
Continuously rebuild the spec whenever files change:
```
npm run dev
```
Watched files:
- `methods/*.json`
- `info.json`

### Previewing the spec
The build output is a single file: `openrpc.build.json`.
You can:
- Paste the spec into [https://playground.open-rpc.org](https://playground.open-rpc.org)

On pushes to `main`, GitHub Actions will build and force‑push the latest `openrpc.build.json` to the `dist` branch. You can consume that raw file directly from GitHub (e.g., `https://raw.githubusercontent.com/<OWNER>/<REPO>/dist/openrpc.build.json`).

## Editing the spec
- Add a new method by creating a JSON file under `methods/` (see existing files for structure: `name`, `summary`, `description`, `params`, `result`, and `examples`).
- Modify `info.json` to change the title, version, or description for the whole document.
- Run `node generate.js` (or `npm run dev` to watch) to rebuild. The script will include every `*.json` file in `methods/`.

## License
MIT License. See `LICENSE` file.
