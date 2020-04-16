silverorange Developer Assessment
===============================================

This exercise is designed to assess how you approach tasks required in your
position as a developer at silverorange. We are interested to see how you
work as well, as what your final results are; include useful Git commit
messages and comments where you think your code may be unclear.

Express Backend (/api)
----------------------
For this exercise a pre-built Express application is provided. The application
runs by default on `localhost:4000` and has the following endpoints:

 - `http://localhost:4000/repos` - returns a JSON-encoded array of repositories
  from https://api.github.com/users/silverorange/repos. Only repositories where
  `repository.fork` is `false` are included.

### Runing the Express Application

```sh
cd api/
yarn install
yarn start
```

You can verify the API is working by visiting http://localhost:4000/repos in
your browser or another HTTP client.

React (/web)
------------
Using the provided `create-react-app` base, fetch repo data from the provided
Express API. Display a list of repositories. Include the repository name,
description, language, and forks count.

Add buttons for each language type. Make clicking on a language button filter
the list by type.

The last 30 commits for a repository can be loaded via this endpoint:
`https://api.github.com/repos/${repo.full_name}/commits`. Make each repo in the
list clickable. When you click a repo, display the most recent commit date,
author, and message.

### Run

```sh
cd web/
yarn install
yarn start
```

### Testing

Implement basic snapshot regression tests tests using jest for your components.
Jest is installed by create-react-app and can be run from the `web/` folder with
`yarn test`.

Environment
-----------
You can use any stable version of Node JS.
