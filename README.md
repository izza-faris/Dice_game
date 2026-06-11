# 🎲 Dicee — Two-Player Dice Game

A simple, fun browser-based dice game for two players. Each player rolls a die simultaneously, and the higher roll wins. The game tracks scores across rounds and features smooth dice animations.

---

## 📸 Preview

```
┌─────────────────────────────────────┐
│         🚩 Player 1 Wins!           │
│                                     │
│  Player 1    VS    Player 2         │
│  [dice4]           [dice2]          │
│  Score: 3          Score: 1         │
│                                     │
│      [ 🎲 Roll Dice ]               │
│         [ ↺ Reset ]                 │
└─────────────────────────────────────┘
```

---

## 🗂️ Project Structure

```
dicee-project/
│
├── dicee.html        # Main HTML page (structure & layout)
├── styles.css        # Styling, animations, and responsive design
├── index.js          # Game logic, score tracking, and dice rolling
│
└── images/           # Dice face images (must be named exactly as below)
    ├── dice1.png
    ├── dice2.png
    ├── dice3.png
    ├── dice4.png
    ├── dice5.png
    └── dice6.png
```

> ⚠️ The `images/` folder must sit in the same directory as `dicee.html`. The JavaScript references dice images as `images/dice1.png` through `images/dice6.png`.

---

## 🚀 Getting Started

### Prerequisites

No frameworks or build tools required. This is a plain HTML/CSS/JS project that runs directly in any modern browser.

### Running the Game

1. **Download or clone** the project files into a folder.
2. Place all six dice images (`dice1.png` – `dice6.png`) inside a subfolder called `images/`.
3. Open `dicee.html` in any modern web browser (Chrome, Firefox, Edge, Safari).

```bash
# Example using VS Code Live Server extension
# Right-click dicee.html → Open with Live Server

# Or just double-click dicee.html to open it directly
```

---

## 🎮 How to Play

1. Open `dicee.html` in your browser.
2. Click the **🎲 Roll Dice** button to roll both dice simultaneously.
3. The player with the higher number wins the round — their score increases by 1.
4. If both dice show the same number, it's a **Draw** and no score changes.
5. Click **↺ Reset Scores** at any time to reset both scores to 0 and start fresh.

### Winning Conditions

| Result | Display |
|--------|---------|
| Player 1 rolls higher | `🚩 Player 1 Wins!` (golden glow) |
| Player 2 rolls higher | `Player 2 Wins! 🚩` (golden glow) |
| Both roll the same | `✨ It's a Draw!` (red) |

---

## 📄 File Descriptions

### `dicee.html`

The main HTML document that defines the page structure.

- Loads Google Fonts (`Lobster` for headings, `Indie Flower` for labels)
- Contains a `.container` div that holds the heading, dice area, and buttons
- Two `.dice` divs — one per player — each holding a player label, a dice `<img>`, and a score display
- A `VS` label sits between the two dice for visual separation
- Two buttons: **Roll Dice** (calls `rollDice()`) and **Reset Scores** (calls `resetScores()`)
- Links to `styles.css` and loads `index.js` at the bottom of `<body>`

### `styles.css`

All visual styling and animations.

| Section | Purpose |
|---------|---------|
| `.container`, `.dice-area` | Layout using flexbox; centers content |
| `h1`, `p`, `footer` | Typography using Google Fonts |
| `h1.win`, `h1.draw` | Dynamic color states — gold for a winner, red for a draw |
| `img.rolling` | CSS keyframe animation (`@keyframes shake`) triggered on each roll |
| `#rollBtn` | Teal pill button with press effect (translateY + box-shadow) |
| `#resetBtn` | Subtle ghost button with border |
| `.score-label` | Displays live running scores below each die |
| `.vs-label` | Semi-transparent "VS" text between the dice |

**Color Palette:**

| Variable | Hex | Used For |
|----------|-----|---------|
| Background | `#393E46` | Page background |
| Accent | `#4ECCA3` | Headings, player labels, score text, Roll button |
| Text | `#EEEEEE` | Footer, reset button, score labels |
| Shadow | `#232931` | Heading text shadow |

### `index.js`

All game logic written in vanilla JavaScript.

#### Variables

| Variable | Type | Purpose |
|----------|------|---------|
| `score1` | `number` | Running score for Player 1 |
| `score2` | `number` | Running score for Player 2 |

#### Functions

**`rollDice()`**

Called when the Roll Dice button is clicked. It:
1. Generates two independent random numbers between 1 and 6.
2. Removes and re-adds the `.rolling` CSS class on both `<img>` elements to trigger the shake animation (uses a reflow trick with `void element.offsetWidth` to restart the animation even on consecutive clicks).
3. Updates the `src` attribute of each dice image to match the rolled number.
4. Compares the two numbers and updates the `<h1>` text and CSS class (`win` or `draw`) accordingly.
5. Increments the winning player's score and updates the on-screen score counters.

**`resetScores()`**

Called when the Reset Scores button is clicked. It:
1. Resets `score1` and `score2` to `0`.
2. Updates both score display elements back to `0`.
3. Resets the `<h1>` to "Roll the Dice!" and removes any win/draw CSS classes.
4. Resets both dice images to `dice6.png` (the default starting image).

---

## 🛠️ Customisation

### Changing Dice Images

Replace the six `.png` files in the `images/` folder with your own images. Keep the exact filenames: `dice1.png` through `dice6.png`.

### Changing the Color Theme

Open `styles.css` and update these key colors:

```css
body {
  background-color: #393E46;  /* Page background */
}

h1 {
  color: #4ECCA3;  /* Heading / accent color */
}

#rollBtn {
  background-color: #4ECCA3;  /* Roll button color */
}
```

### Changing Fonts

The project uses two Google Fonts loaded in `dicee.html`:

```html
<link href="https://fonts.googleapis.com/css?family=Indie+Flower|Lobster" rel="stylesheet" />
```

Replace `Indie+Flower` or `Lobster` with any Google Font name, then update the references in `styles.css`:

```css
h1 { font-family: 'Lobster', cursive; }
p  { font-family: 'Indie Flower', cursive; }
```

### Adjusting the Shake Animation

In `styles.css`, find the `@keyframes shake` block and modify the rotation angles or scale values:

```css
@keyframes shake {
  0%   { transform: rotate(0deg) scale(1); }
  20%  { transform: rotate(-15deg) scale(1.1); }
  /* ... */
}
```

---

## 🌐 Browser Compatibility

| Browser | Supported |
|---------|-----------|
| Chrome 80+ | ✅ |
| Firefox 75+ | ✅ |
| Edge 80+ | ✅ |
| Safari 13+ | ✅ |
| Internet Explorer | ❌ |

---

## 📦 Dependencies

This project has **no external dependencies** or package managers. Everything runs in the browser.

External resources loaded via CDN:

- [Google Fonts](https://fonts.google.com/) — `Lobster` and `Indie Flower` (requires internet connection)

---

## 📝 License

This project was originally built as part of **The App Brewery** web development course. Feel free to use and modify it for learning purposes.

---

## 🙌 Credits

- Original project concept: [The App Brewery](https://www.appbrewery.co/)
- Dice images: included as part of the course assets
- Modified and extended with score tracking, roll button, and animations
