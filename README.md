# Portfolio Website

Welcome to my personal portfolio website. This project serves as a professional showcase of my skills, work experience, and projects as a software developer.

---

## Overview

This portfolio is built with a focus on clarity, responsiveness, and accessibility. It offers a modern user interface that allows visitors to learn about me, explore my work, and get in touch.

---

## Features

- Fully responsive design optimized for desktop, tablet, and mobile
- Interactive project showcase with descriptions and live/demo links
- Blog-style development log to document progress and insights
- Contact form for direct communication
- Optional backend integration for dynamic content
- Clean, minimalist UI built with React and Next.js

---

## Tech Stack

- **Frontend:** React, Next.js, CSS Modules (or preferred styling method)
- **Backend:** Node.js, Express (optional)
- **Database:** MongoDB (optional)
- **Deployment:** Vercel, Netlify, or Heroku

---

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or Yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/RamiyanGangatharan/Portfolio2025.git
   ```
2. Navigate to the project directory and install dependencies:
   ```bash
      cd Portfolio2025/client
   ```
   ```bash
      npm install
   ```
   ```bash
      cd ../server
   ```
   ```bash
      npm install
   ```
3. Start the development servers:
   - in `client`
      - ```bash
         npm run dev
         ```
   - in `server`
     - ```bash
       node server.js
       ```
<br/><br/>

# Development Log

## July 13, 2025


## July 11, 2025

### General
- Redeveloping the projects page.
- prevented email spam by disabling the submit button in the contact page.
- Implemented MongoDB functionality with a test database. 

### Server
- Created a Windows 96 style GUI for my server port 5000
- Made the outbound email of the contact page aesthetically pleasing
- Implemented database collections for dev logs and projects.

## July 10, 2025

### General
- Refactored the codebase and reorganized the file structure for better semantic clarity.
- Developed a complete contact page integrated with Nodemailer and a server using SMTP.
- Created async ops to redirect users to the homepage at form submission, preventing spam.

### Server
- Added Nodemailer to enable SMTP email capabilities within the server.
- Integrated Morgan middleware for request logging and improved server monitoring.

## July 9, 2025

### General

- Implemented and styled the site header and footer  
- Organized the project directory with long-term scalability in mind  
- Consolidated CSS into a global file for easier management  
- Replaced the original to-do list with a development log  

### Styling

- Installed Bootstrap 5.3 for layout and components  
- Integrated Font Awesome for iconography  
- Created a custom color palette and applied the Roboto font  

---

## July 8, 2025

- Built the foundational structure of the website  
- Adopted a MERN stack architecture, including:  
  - MongoDB (planned)  
  - Express.js  
  - Next.js  
  - Node.js  