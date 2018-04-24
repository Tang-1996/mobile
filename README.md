<p align="center">
  <img src="logo.png" alt="UniNinja Logo" height=60/>
</p>

# Mobile App
[![Build Status](https://travis-ci.org/UniNinja/mobile.svg?branch=master)](https://travis-ci.org/UniNinja/mobile)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

React Native codebase that produces the UniNinja iOS and Android applications.

### Installation

In order to build and run the application, do the following:
1. Clone the repo: `git clone https://github.com/UniNinja/mobile`.
2. Change directory to the project root: `cd mobile`.
2. Run `npm i` in the repo directory. This may take a few minutes.
3. Then execute either `react-native run-ios` or `react-native run-android` to run the respective projects.

> #### Important
> If you have not already got `react-native` installed on your system, you will first need to do so using: `npm install -g react-native-cli`.

> When running the Android project on a Mac, make sure you launch the Android Emulator _before_ you run the `react-native run-android`.

### StandardJS

This project conforms to the [JavaScript Standard Style](https://standardjs.com). In order to check conformance, do the following:
1. Install JavaScript Standard Style: `npm i standard --global`.
2. Run the checker: `standard`.

Any violations of the rules will be reported (printed) in the terminal window.
