<a href="https://warpcast.com/an0n/0x3748eeea"><img src="./splash.png" width="200" /></a>

# Fleek User Dungeon (FUD)

Welcome to **Fleek User Dungeon (FUD)**, a simple Multi-User Dungeon (MUD) playable within Farcaster using Fleek functions. This project leverages ROT.js for game mechanics and includes a custom SVG render engine due to ROT.js's lack of built-in SVG support.

## Features

- **Fully Functional MUD**: Enjoy a classic text-based adventure game.
- **Custom SVG Renderer**: Unique rendering engine tailored for SVG, ensuring smooth visuals.
- **Compression for Farcaster Compatibility**: State compression using manual and gzip methods to fit within Farcaster's 2000 character limit.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- Fleek CLI
- ngrok

### Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/fleek-user-dungeon.git
    cd fleek-user-dungeon
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Deploy the Fleek function**
    ```bash
    fleek functions deploy --name fudGame --path fleek.js
    ```

4. **Local testing**
    ```bash
    npm run dev
    ```

5. **Connect with ngrok and the Farcaster debugger**
    - Start ngrok
    ```bash
    ngrok http 3000
    ```
    - Use the generated ngrok URL with the Farcaster debugger: [Farcaster Frame Debugger](https://warpcast.com/~/developers/frames)

### Playing the Game

You can access the game using the following link:
[Fleek User Dungeon](https://warpcast.com/an0n/0x3748eeea)

## Technical Details

- **Game Mechanics**: Built using [ROT.js](https://ondras.github.io/rot.js/hp/), a JavaScript library for roguelike games.
- **Rendering**: Custom SVG engine for rendering game visuals.
- **State Management**: State is manually compressed and then gzip compressed to fit within the Farcaster's constraints.
  
## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch
    ```bash
    git checkout -b feature/YourFeature
    ```
3. Commit your changes
    ```bash
    git commit -m 'Add some feature'
    ```
4. Push to the branch
    ```bash
    git push origin feature/YourFeature
    ```
5. Open a pull request

## License

This project is licensed under the MIT License.

## Contact

If you have any questions, feel free to open an issue or reach out to the project maintainer @eugenioclrc and @rotcivegaf.

---

Enjoy your adventure in Fleek User Dungeon!