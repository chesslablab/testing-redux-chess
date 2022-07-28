# Redux Chess Testing Application

This repository allows to test the [`@chesslablab/redux-chess`](https://github.com/chesslablab/redux-chess) package for developing purposes. It is basically a React app created with [`create-react-app`](https://reactjs.org/docs/create-a-new-react-app.html) with a Redux Chess widget embedded into it.

## Run the Chess Server

The Redux Chess Testing Application requires a [PHP Chess Server](https://github.com/chesslablab/chess-server) to work as intended, so please install it as per the documentation and make sure is up and running on your computer.

```
$ php cli/ws-server.php
Welcome to PHP Chess Server
Commands available:
/accept {"jwt":"<string>"} Accepts a request to play a game.
/draw {"action":["accept","decline","propose"]} Allows to offer a draw.
/heuristics Takes a balanced heuristic picture of the current game.
/heuristics_bar {"fen":"<string>"} Takes an expanded heuristic picture of the current position.
/leave {"action":["accept"]} Allows to leave a game.
/legal_sqs {"position":"<string>"} Returns the legal squares of a piece.
/online_games Returns the online games waiting to be accepted.
/play_fen {"fen":"<string>"} Plays a chess move in shortened FEN format.
/quit Quits a game.
/random_checkmate {"turn":"<string>","items":"<string>"} Starts a random checkmate position.
/random_game Starts a random game.
/rematch {"action":["accept","decline","propose"]} Allows to offer a rematch.
/resign {"action":["accept"]} Allows to resign a game.
/gm Returns a computer generated response to the current position.
/restart {"hash":"<string>"} Restarts a game.
/start {"mode":["analysis","gm","fen","pgn","play","stockfish"],"fen":"<string>","movetext":"<string>","color":["w","b"],"settings":"<string>"} Starts a new game.
/stockfish {"options":{"Skill Level":"int"},"params":{"depth":"int"}} Returns Stockfish's response to the current position.
/takeback {"action":["accept","decline","propose"]} Allows to manage a takeback.
/undo Undoes the last move.

Listening to commands...
```

Alternatively, a sandbox server can be used for testing purposes instead of a local one; just update the [`src/index.js`](https://github.com/chesslablab/testing-redux-chess/blob/master/src/index.js) file as described next.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Chess } from '@chesslablab/redux-chess';

const props = {
  api: {
    prot: 'https',
    host: 'pchess.net',
    port: '443'
  },
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

> Please note the sandbox server might not be up and running all the time.

## Install the Redux Chess Package Locally in the Testing Application

> The [`install-local`](https://www.npmjs.com/package/install-local) package must be installed globally in order to develop the Redux Chess NPM package locally; for further information on this topic please visit [How to Test a Local React NPM Package With Ease](https://javascript.plainenglish.io/testing-a-local-react-npm-package-with-ease-7d0668676ddb).

As pointed out before, the Redux Chess Testing Application follows a client-server architecture consisting of two components: A chess server and a React app. Once you're set up with the chess server, fork and clone the `@chesslablab/redux-chess` package into your `projects` folder as it is described in the following example:

    $ git clone git@github.com:chesslablab/redux-chess.git @chesslablab/redux-chess

Don't forget to install the npm packages in the recently created `@chesslablab/redux-chess` directory:

    $ npm install

Then, clone the `chesslablab/testing-redux-chess` repository into your `projects` folder as well:

    $ git clone git@github.com:chesslablab/testing-redux-chess.git

Install the `@chesslablab/redux-chess` package locally in your `testing-redux-chess` directory:

    $ install-local ../@chesslablab/redux-chess

And once again, don't forget to install the npm packages in your `testing-redux-chess` directory:

    $ npm install

You may want to install [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension) in your browser in order to develop and debug the `@chesslablab/redux-chess` package.

![Figure 1](/src/assets/img/docs/figure-01.gif)
Figure 1. Debugging the `@chesslablab/redux-chess` package with Redux DevTools.

## Start the Testing App

`cd` your `testing-redux-chess` folder in order to start the app for the first time:

```
$ npm run publish:npm --prefix /home/standard/projects/@chesslablab/redux-chess
$ npm run update:local:redux-chess
$ npm start
```

The commands above can be chained together as described next:

```
$ npm run publish:npm --prefix /home/standard/projects/@chesslablab/redux-chess && npm run update:local:redux-chess && npm start
```

## Refresh the Testing App

After making some changes to the source code, please follow these steps to see them on your web browser.

First things first, make sure to remove the cache.

```
$ rm -rf node_modules/.cache/
```

See:

- https://github.com/facebook/create-react-app/issues/10301

Then refresh the app:

```
$ npm run publish:npm --prefix /home/standard/projects/@chesslablab/redux-chess
$ npm run update:local:redux-chess
$ npm run restart --port=3000
```

The commands above can be chained together as described next:

```
$ npm run publish:npm --prefix /home/standard/projects/@chesslablab/redux-chess && npm run update:local:redux-chess && npm run restart --port=3000
```
