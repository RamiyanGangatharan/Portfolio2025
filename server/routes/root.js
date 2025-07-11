const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // This code was made by ChatGPT ;)
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>My Server Homepage</title>
      <style>
        /* Base styles */
        body {
          font-family: Tahoma, Geneva, Verdana, sans-serif;
          background-color: #008080; /* classic teal desktop background */
          margin: 0;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          user-select: none;
        }

        /* The classic window */
        .window {
          background: #c0c0c0;
          border: 2px solid #000;
          width: 400px;
          box-shadow:
            inset 1px 1px 0 #fff,
            inset -1px -1px 0 #404040;
          display: flex;
          flex-direction: column;
        }

        /* Title bar */
        .titlebar {
          background: linear-gradient(to right, #000080, #0000cd);
          color: white;
          padding: 3px 8px;
          font-weight: bold;
          font-size: 14px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          user-select: none;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.3);
        }

        /* Title text */
        .titlebar .title {
          font-family: 'MS Sans Serif', Tahoma, Geneva, Verdana, sans-serif;
        }

        /* Close button */
        .titlebar .close-btn {
          background: #c0c0c0;
          border: 2px solid #fff;
          border-right-color: #404040;
          border-bottom-color: #404040;
          width: 16px;
          height: 14px;
          line-height: 14px;
          text-align: center;
          font-weight: bold;
          color: black;
          cursor: pointer;
          box-shadow:
            inset 1px 1px 0 #fff,
            inset -1px -1px 0 #808080;
          user-select: none;
        }

        .titlebar .close-btn:active {
          border: 2px solid #404040;
          border-right-color: #fff;
          border-bottom-color: #fff;
          box-shadow: none;
          background: #a0a0a0;
          color: #800000;
        }

        /* Window content */
        .content {
          padding: 20px;
          background: #fff;
          color: black;
          font-size: 12px;
          border-top: 2px solid #808080;
          border-left: 2px solid #808080;
          border-bottom: 2px solid #fff;
          border-right: 2px solid #fff;
          flex-grow: 1;
        }

        /* Buttons inside content */
        button {
          font-family: Tahoma, Geneva, Verdana, sans-serif;
          font-size: 12px;
          padding: 4px 12px;
          background: #d4d0c8;
          border: 2px solid white;
          border-right-color: #404040;
          border-bottom-color: #404040;
          color: black;
          cursor: pointer;
          box-shadow:
            inset 1px 1px 0 #fff,
            inset -1px -1px 0 #808080;
          margin: 5px 10px 5px 0;
          text-transform: none;
        }

        button:active {
          border: 2px solid #404040;
          border-right-color: white;
          border-bottom-color: white;
          box-shadow: none;
          background: #a0a0a0;
        }

        a {
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="window" role="dialog" aria-labelledby="title">
        <div class="titlebar">
          <div class="title" id="title">My Server Homepage - Windows 96</div>
          <div class="close-btn" title="Close" onclick="alert('Close button clicked!')">×</div>
        </div>
        <div class="content">
          <h1 style="font-size:16px; margin-top:0;">Welcome to My Backend Server!</h1>
          <a href="http://localhost:5000/data/devlogs"><button type="button">Dev Logs</button></a>
          <a href="http://localhost:5000/data/projects"><button type="button">Programming Projects</button></a>
          <a href="http://localhost:3000/"><button type="button">Back to Homepage</button></a>
        </div>
      </div>
    </body>
  </html>
  `);
});

module.exports = router;
