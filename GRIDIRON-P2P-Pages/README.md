# GRIDIRON

Browser-based arcade American football built with Phaser 3 and TypeScript. It uses peer-to-peer WebRTC data channels: the host iPad runs the match simulation, while the other devices connect directly to it. PeerJS Cloud is used only to exchange connection setup messages; it does not host the match or relay ordinary gameplay data.

## Publish on GitHub Pages

1. Upload the repository files to the `main` branch.
2. In GitHub, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
3. Open **Actions** and allow the Pages deployment workflow if GitHub asks.
4. When the workflow completes, open the Pages URL shown in its deployment summary.

The workflow builds the Vite app and publishes `dist/`. The Vite base path is configured for the repository name `Football1V1`.

## Play

1. Open the Pages link on the host iPad and select **Create room**.
2. On the second iPad, join with the room code. On the phones, open the copied phone link.
3. The first phone controller is assigned offense; the second is defense. Use the on-screen joystick and buttons. Keyboard controls also work on a computer.

The host device must keep the page open and awake because it owns the match state. The free PeerJS Cloud service brokers WebRTC connections; game-state traffic is peer-to-peer. Some restrictive networks may require TURN relay support, which this no-hosted-server version does not include.

## Develop locally

Requires Node.js 20 or newer:

```sh
npm install
npm run dev
```

This build currently implements an early playable slice. It has 22 field players, run movement, AI pursuit, tackling, passing, catches, interceptions, downs, scoring, extra-point choices, and a four-quarter arcade clock. Kickoff/field-goal mechanics, fumbles, full overtime, route/play selection, QR pairing, and robust reconnect recovery remain to be completed. The project was not built or tested in the supplied environment because Node.js/npm are unavailable there.
