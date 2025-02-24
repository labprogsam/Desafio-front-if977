
# Desafio Engenharia de software
Desafio front if1977

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
You will need to have yarn installed on your machine. For that, simply run:

1. Run this command to download the current stable release of Yarn:
```bash
npm install -g yarn
```

### Installing
To run the project for the **first** time you must follow this steps:

1. Clone the GitHub repository
```bash
git clone git@github.com:labprogsam/front-tracos.git
```

2. Install the dependencies and start the npm project
```bash
yarn install
```

3. Create **.env** file and copy the following content to it

```dotenv
# Application settings

REACT_APP_MAIN_URL=http://localhost:8001

```

## Run the backend project

Follow the instructions in the repository:

https://github.com/labprogsam/Desafio-back-if977

## Running the project
To run the project (if already installed), just follow this simple command on the client directory:

```bash
yarn start
```

## Built With
* **React**
* **Styled Component**

## GitHub

### Branches
The development branches can be:

+ feat
+ fix
+ refact

The name of the development branches must follow this template: `feat/branch-name`

In addition to these there are 2 stable branches:

+ dev
+ main

The dev and main branches should only be updated by pull requests.

### Commits
Must begin with the name of the branch you developed on, following the model: _“Feat(user story): rest of commit…”._

Must be simple and show briefly what you just did.

Ex: `git commit -m "Feat(32): Added the parallax effect to the background"`

> Read our code of conduct and find out [how to contribute](https://github.com/labprogsam/front-tracos/blob/main/CONTRIBUTING.md)
