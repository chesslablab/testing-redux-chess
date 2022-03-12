# Redux Chess Testing Application

This repository allows to test the [`@chesslablab/redux-chess`](https://github.com/chesslablab/redux-chess) package for developing purposes. It is basically a React app created with [`create-react-app`](https://reactjs.org/docs/create-a-new-react-app.html) with a Redux Chess widget embedded into it.

## Run the Chess Server

The Redux Chess Testing Application requires a [PHP Chess Server](https://github.com/chesslablab/chess-server) to work as intended, so please install it as per the documentation and make sure is up and running on your computer.

```
$ php cli/ws-server.php
Welcome to PHP Chess Server
Commands available:
/accept {"id":"id"} Accepts a friend request to play a game.
/ascii Prints the ASCII representation of the game.
/castling Gets the castling status.
/captures Gets the pieces captured by both players.
/draw {"action":["accept","decline","propose"]} Allows to offer a draw.
/events Gets the events taking place on the game.
/fen Prints the FEN string representation of the game.
/heuristicpicture Takes a balanced heuristic picture of the current game.
/history The current game's history.
/ischeck Finds out if the game is in check.
/ismate Finds out if the game is over.
/piece {"position":"string"} Gets a piece by its position on the board.
/pieces {"color":["w","b"]} Gets the pieces on the board by color.
/playfen {"fen":"string"} Plays a chess move in shortened FEN format.
/quit Quits a game.
/rematch {"action":["accept","decline","propose"]} Allows to offer a rematch.
/resign {"action":["accept"]} Allows to resign a game.
/restart {"hash":"string"} Restarts a game.
/start {"mode":["analysis","loadfen","loadpgn","playfriend"],"fen":"string","movetext":"string","color":["w","b"],"min":"int","increment":"int"} Starts a new game.
/status The current game status.
/takeback {"action":["accept","decline","propose"]} Allows to manage a takeback.
/undomove Undoes the last move.

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

    $ npm run publish:npm --prefix /home/standard/projects/@chesslablab/redux-chess && npm start

## Restart the Testing App

After making some changes to the source code, please follow these steps to see them on your web browser:

In the `@chesslablab/redux-chess` directory:

```
$ npm run publish:npm
```

Then, in the `testing-redux-chess` directory:

```
$ sudo rm -rf node_modules
$ sudo rm package-lock.json
$ install-local ../@chesslablab/redux-chess
$ npm install
$ npm start
```

This will take about one minute making the development process tedious. After updating `react-scripts` to version `5.0.0`, it seems as if there may be an issue with the cache. However, with version `4.0.3` the changes could be reloaded in few seconds as described in this bug:

- https://github.com/chesslablab/redux-chess/issues/278

Keep it up, and happy learning and coding!
