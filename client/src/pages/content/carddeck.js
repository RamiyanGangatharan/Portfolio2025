import MDP from './markdownpage';

const carddeck = `
> **Disclaimer:** *This project was completed some time ago, and this write-up was created retrospectively. Some details may be limited or generalized.*

# Card Deck Builder
---

This project was developed as part of the *Object-Oriented Programming II* course at Durham College. 
The objective was to design a simple card deck builder using core C# concepts such as arrays, lists, 
loops, and object-oriented design. The program begins by defining arrays for suits and ranks. 
Using nested loops, it systematically combines each rank with each suit to generate a complete standard 
deck of cards. To ensure randomness in gameplay, the Fisher-Yates shuffle algorithm was implemented to 
shuffle the deck efficiently and fairly. The user interface featured two primary display elements: a card 
gallery using a table-like layout to render visual representations of each card, and a secondary panel 
showing card metadata, including stats and a record of used cards. The design emphasized clarity and 
usability for a smooth user experience.

### Sources
---

- **Source Code:** [GitHub Repository](https://github.com/RamiyanGangatharan/CardDeckBuilder)

###### References:
- [Fisher–Yates Shuffle - Wikipedia](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)
- [Fisher–Yates Shuffle - Geeks for Geeks](https://www.geeksforgeeks.org/dsa/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/)
`;

export default function Article() {
  return <MDP title="Card Deck Builder" article={carddeck} />;
}
