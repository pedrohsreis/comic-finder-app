# MarvelApp

This is a React Native app for retrieving Comics of a chosen character. This app has no commercial purposes nor is supported by Marvel.

# Setup

There are two ways to run this project.

## 1. Git clone and npm install

Clone this repo, and run:

```bash
cd MarvelApp
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

# Deploy Key

This is a private repo and it contains a key that allows cloning without user or password verification. If you're a maintainer, do not share this key with third parties.
