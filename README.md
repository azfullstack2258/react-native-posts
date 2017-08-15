silverorange JavaScript Developer Assessment
============================================

Express
-------
With  the provided express framework, implement the `/repos` API endpoint. The
endpoint should aggregate GitHub repository data from the following sources:

 - https://api.github.com/users/silverorange/repos
 - the provided JSON file
 - the provided SQLite database
 
The API endpoint should only return repositories where `repository.fork` is
`false`.

The API endpoint should return JSON encoded data with a content-type of
`application/json`.

React
-----
Using the provided create-react-app base, fetch repo data from the express
endpoint created above. Display a list of repositories. Include the repository
name, description, language, and forks count.

Add buttons for each language type. Make clicking on a language button filter
the list by type.
