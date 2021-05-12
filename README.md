# React Todo App

This is a sample react todo app done step-by-step. 

## Instructions

First clone this repository.
```bash
$ git clone https://github.com/svsnarayanan/react-todo-app-poc.git
```

Install dependencies. Make sure you already have [`nodejs`](https://nodejs.org/en/) & [`npm`](https://www.npmjs.com/) installed in your system.
```bash
$ npm install # or yarn
```

Run it
```bash
$ npm start # or yarn start
```
## Whats Completed ?

- Ability to create, delete, update the to-do list
- Default have set the sample to-do day today tasks
- Upon create / update / delete, the values are captured in the users browser's local storage

## Pending-List

- Add the ability to set the due-date
- Set reminder based on threshold limit
- Extend the saving solutions (currently on local storage) integrate with a micro-services API
- Check if the browser doesnt support local storage, then fall back to cookies
- Add JEST / Karma coverage to perform unit test coverage on UI components
