silverorange Developer Assessment
===============================================

This exercise is designed to assess how you approach tasks required in your
position as a developer at silverorange. We are interested to see how you
work as well, as what your final results are; include useful Git commit
messages and comments where you think your code may be unclear.

Express Backend
---------------
With the provided Express framework, implement the `/repos` API endpoint. The
endpoint should aggregate GitHub repository data from the following sources:

 - https://api.github.com/users/silverorange/repos
 - the provided JSON file (in `data/repos.json`). Assume this file can change
   while the service is running.
 
The API endpoint should only return repositories where `repository.fork` is
`false`.

The API endpoint should return JSON encoded data with a content-type of
`application/json`.

### Run

```sh
cd api/
yarn install
yarn start
```

React
-----
Using the provided `create-react-app` base, fetch repo data from the Express
endpoint created above. Display a list of repositories. Include the repository
name, description, language, and forks count.

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
