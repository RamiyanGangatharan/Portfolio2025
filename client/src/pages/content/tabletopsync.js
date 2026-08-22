import MDP from './markdownpage';

const tabletop = `
> **Disclaimer:** *This project was completed as part of a group software development project. The following write-up documents the project's design, implementation, features, and development process.*

# TabletopSync
---

## Meet the Team

- **Sheizah Jimenez**: Project Lead + Front-End Developer
- **Shawn Heer**: Lead Front-End Developer + UX Designer
- **Mina Si Nan Yang**: Persistence Manager + UI Designer
- **Graeme Jeffreys**: Primary Network Manager + Back-End Developer
- **Ramiyan Gangatharan**: Lead Back-End Developer + Network Support

## Project Overview

### Description

TabletopSync is a multiplayer 2D tabletop RPG board application that allows multiple users to connect to a shared session and interact in real time. Users can place and move character tokens, take notes using a persistence-based notepad, and communicate through an integrated chat system.

The application was designed around a client-server architecture, with the majority of shared functionality communicating with the server to keep connected clients synchronized.

### Key Features

#### Main Canvas

- Add sprites to the canvas using uploaded images
- Update the map/background using an uploaded image
- Toggle snap-to-grid for sprites

#### Sprite Objects

- Drag and reposition sprites
- Lock and unlock sprites using the popup menu
- Delete sprites using the popup menu or \`Delete\` key
- Display information about the player who currently has a sprite selected

#### Chatbox

- Text field for composing messages
- Send messages using the Send button or \`Enter\` key
- Player list displaying connected players and their assigned colours

#### Notepad

- Create new notes
- Write and update notes
- Open previously saved notes
- Save new and existing notes
- Delete notes

> *Client-side-only functionality includes features such as text entry and local UI interactions. Other features communicate with the server to synchronize state between connected clients.*

## AI Disclosure

AI tools were used during development for:

- Assistance with debugging code snippets
- Minor UI implementation questions, such as creating items in a \`JPopupMenu\`
- Assistance with mathematical equations related to camera movement, grid-related features, and sprite dragging
- Consultation and general implementation guidance when determining approaches to specific problems

## Resources

- **FlatLaf Dependency**: Used to create the Server UI with an appearance similar to a regular terminal.
- **Jackson Databind Dependency**: Used for JSON processing.
- **Stack Overflow**: Used as a reference for network implementation and minor UI-related questions.

`;

export default function Article() {
  return <MDP title="TabletopSync" article={tabletop} />;
}