<h1 align="center">Welcome to mbtypist 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/maykbrito" target="_blank">
    <img alt="Twitter: maykbrito" src="https://img.shields.io/twitter/follow/maykbrito.svg?style=social" />
  </a>
</p>

> ⌨️ Electron App to copy text and paste like typist

⚠️ This app is Mac only and depends on [Keyboard Maestro](https://www.keyboardmaestro.com/main/)

## Install

```sh
npm install
```

## Usage

Configure your Keyboard Maestro like this
![Keyboard Mastro Example](https://i.imgur.com/5q7Fd47.png)


And navigate to project folder, with your prefered terminal, and start application.

```sh
npm start
```

#### How it works?

It will store clipboard to an Array by breaking words. 

For each spaces and next line found, will be stored in a position of that Array. We can call it `steps`

This app will paste each position of Array and you can visualize and control steps.

The typist simulation is a Keyboard Maestro's responsability

#### Controlling

This app is fully controlled with shortcuts.

Just copy some text and...

- `Command+Control+Shift+h`: Register the clipboard, so you can use it with this app.
- `Command+Control+Shift+j`: Typing ... (when it's done, and invoke again, it will play next step)
- `Command+Control+Shift+l`: Go to next step.
- `Command+Control+Shift+k`: Go to previous step.
- `Command+Control+Shift+;`: Restart to first step.


## Author

👤 **Mayk Brito**

* Website: gitshowcase.com/maykbrito
* Twitter: [@maykbrito](https://twitter.com/maykbrito)
* Github: [@maykbrito](https://github.com/maykbrito)
* LinkedIn: [@maykbrito](https://linkedin.com/in/maykbrito)

## Show your support

Give a ⭐️ if this project helped you!