# Redux Chess Testing Application

This repository allows to test the [`@chesslablab/redux-chess`](https://github.com/chesslablab/redux-chess) package from within a host application outside of the package itself.

Check out this [demo](https://programarivm.github.io/demo-redux-chess).

## Local Setup

First thinkgs first, make sure to clone the `@chesslablab/redux-chess` package into your `projects` folder as it is described next:

    $ git clone git@github.com:chesslablab/redux-chess.git @chesslablab/redux-chess

> Notice that this package starts with @ because this is how an organization is denoted in the npm registry.

Don't forget to install the npm dependencies in the `@chesslablab/redux-chess` directory:

    $ npm install

Then, clone the `chesslablab/testing-redux-chess` repository into your `projects` folder too:

    $ git clone git@github.com:chesslablab/testing-redux-chess.git

Install the `@chesslablab/redux-chess` package locally in your `testing-redux-chess` directory:

    $ install-local --save ../@chesslablab/redux-chess

And or course also install the npm dependencies required for the testing app to run:

    $ npm install

## Run the Chess Server

Install the [PHP Chess Server](https://github.com/chesslablab/chess-server) and make sure it is up and running on your computer:

```
$ php cli/ws-server.php
Welcome to PHP Chess Server
Commands available:
/accept {"id":"id"} Accepts a friend request to play a game.
/ascii Prints the ASCII representation of the game.
/castling Gets the castling status.
/captures Gets the pieces captured by both players.
/fen Prints the FEN string representation of the game.
/heuristicpicture Takes a balanced heuristic picture of the current game.
/history The current game's history.
/ischeck Finds out if the game is in check.
/ismate Finds out if the game is over.
/piece {"position":"string"} Gets a piece by its position on the board.
/pieces {"color":["w","b"]} Gets the pieces on the board by color.
/playfen {"fen":"string"} Plays a chess move in shortened FEN format.
/quit Quits a game.
/start {"mode":["analysis","loadfen","playfriend"],"fen":"string","color":["w","b"],"min":"int"} Starts a new game.
/status The current game status.

Listening to commands...
```

A sandbox server can be used instead for testing purposes if you don't want to run the chess server locally. In this case, please update the `src/index.js` as it is described next.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Chess } from '@chesslablab/redux-chess';

const props = {
  server: {
    prot: 'wss',
    host: 'pchess.net',
    port: '8443'
  }
};

ReactDOM.render(
  <Chess props={props} />,
  document.getElementById('redux-chess')
);
```

## Start the Testing App

`cd` your `testing-redux-chess` folder in order to start the app for the first time:

    $ npm run publish:npm --prefix /home/standard/projects/@chesslablab/redux-chess && npm run update:local:redux-chess && npm start

## Restart the Testing App

After making some changes in the local `@chesslablab/redux-chess` package you may want to restart the app to see the changes in your browser:

    $ npm run publish:npm --prefix /home/standard/projects/@chesslablab/redux-chess && npm run update:local:redux-chess && npm run restart --port=3000

---

For further information on developing this awesome npm package, please visit:

- [A React Chessboard with Redux and Hooks in Few Lines](https://medium.com/geekculture/a-react-chessboard-with-redux-and-hooks-in-few-lines-6009cb724bb)
- [How to Test a Local React NPM Package With Ease](https://javascript.plainenglish.io/testing-a-local-react-npm-package-with-ease-7d0668676ddb)
- [TDDing a React App With Jest the Easy Way](https://medium.com/geekculture/tdding-a-react-app-with-jest-the-easy-way-8ddb64aeaba6)
- [How to Test React Components With Joy](https://javascript.plainenglish.io/looking-forward-to-testing-react-components-with-joy-5bb3f86c21d7)
- [My First Integration Test in a Redux Hooked App](https://javascript.plainenglish.io/my-first-integration-test-in-a-redux-hooked-app-3b189addd46e)
