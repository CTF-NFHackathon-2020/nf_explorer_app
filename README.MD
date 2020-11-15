# Start

NF Explorer App

## :rocket: Tech

- [Javascript](https://www.javascript.com/)
- [React Native](https://reactnative.dev/)
- [axios](https://github.com/axios/axios)

## :boom: How to run ?

- ### \*\*Prerequisites

  - You **need** to have **[Node.js](https://nodejs.org/en/)**.
  - You **need** to have **[Git](https://git-scm.com/)** installed and configured on your computer.
  - Also it is **needed** to have a package manager like **[NPM](https://www.npmjs.com/)** or **[Yarn](https://yarnpkg.com/)**.

## Installation

Use the [yarn](https://yarnpkg.com/) package manager to install all dependencies.

```bash
# On your default directory, to install that gem because it's used on ios pods.
gem install cocoapods

# Update your current pod repository
pod repo update

# Install and link the iOS dependencies with the project
npx pod-install

# Link some dependencies and fonts with the react native project.
react-native link

# Install package.json dependencies on node_modules folder
yarn install
```

## Usage

```bash
# Start the node server
yarn start

# Run on iOS/Android Simulator or on your device
yarn ios/android
```

## :happy: Using Docker

### Verify if your docker-compose.yml its using your local project folder on volumes:

E.g.

```bash
  volumes:
    # Change the first parte before the :
    - /Users/myuser/Projects/Hackathon/nfhackathon/app/:/docker/path
```

```bash
  # Basically setup of docker
  docker-compose up

  # Show all ids of your docker containers
  docker ps -a

  cd ios && pod install

  # Run the yarn install on the project folder using container
  docker exec -it _YOUR_DOCKER_CONTAINER_ID_ bash -c "cd /docker/path && yarn install"

  # Run the yarn start on the project folder using container
  docker exec -it _YOUR_DOCKER_CONTAINER_ID_ bash -c "cd /docker/path && yarn start"

  # Press i to run on iOS or a to run on Android
  # You need iOS Simulator or android Emulator or some device plugin on your computer.
```
