# MarvelApp

This is a React Native app for retrieving Comics of a chosen character. This app has no commercial purposes nor is supported by Marvel.

# Setup

There's two ways to run this project.

## 1. Git clone and npm install

Clone this repo, and inside the local folder run:

```bash
npm install --save
react-native run-android
```

## 2. Dockerfile

The Dockerfile contained in this repo has all the necessary commands to install the Android dependencies and it also clones this repo. Once downloaded use this command to build the image:

```bash
docker build . -f Dockerfile -t marvelapp
```

## Emulation

You might want to have in mind that none of the above install any emulation software, so it's recommended that you have an Emulator installed and running or an Android device connected to your computer.
