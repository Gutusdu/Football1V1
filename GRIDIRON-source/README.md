# GRIDIRON

Browser-based 2D football game using Phaser 3, TypeScript, Vite, and an authoritative Node WebSocket server.

## Run locally

1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Run `npm run server` in one terminal.
4. Run `npm run dev -- --host 0.0.0.0` in another terminal.
5. Open the Vite address for the game screen. Create a room, then open the controller URL from a phone on the same reachable network.

For play over the public internet, deploy the Node server with a stable public `wss://` endpoint and configure the browser to connect to that endpoint. The default client connects to port 3001 on the current hostname for development.

## Current state

The project includes room creation/joining, authoritative room simulation, a Phaser field, server-side match state and rule helpers, and a touch controller. The controller interface and football rule core are foundations for an early playable build; additional work remains for full passing ball flight/catch/interception physics, kickoff/field-goal choices, complete clock/OT rules, reconnect identity, QR generation, and deployment configuration. No GitHub remote was present in the supplied workspace.
