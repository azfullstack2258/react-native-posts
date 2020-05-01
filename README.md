
Tasks
-----
### (A) Expo

Using the provided Expo application in `/native`:

 1. Fetch post data from the provided Express API.
 2. Display a list of posts. Include the post title, summary, author, and
    publish date in the list.
 3. The list of posts should be displayed in reverse chronological order.
 4. Also list each unique author. Make touching an author filter the list of
    posts by the selected author.
 5. Make each post in the list touchable. When you touch a post, navigate to
    a new screen showing the formatted post body and title.
 6. Include a way to return to the main screen with posts and authors.
 7. Include some platform-specific variation between iOS and Android on either
    the main screen or the post screen.
 8. Implement basic snapshot regression tests tests using Jest for your
    components. Jest is installed in the Expo project and can be run from the
    `native/` folder with `yarn test`.

The post body is formatted as Markdown and the post screen should use the
formatted Markdown.

### (B) Code Review

Using the sample application in `/review`:

 1. Run the Expo application.
 2. Review the React Native code.
 3. Make suggestions on how the example application could be improved. For this
    exercise your suggestions may apply to an entire application, file, or
    lines of code. If appropriate, please prefix your suggestions with
    `filename:line` so we know to what code you are referring.

Environment
-----------
You can use any stable version of Node JS. The base project is written using
TypeScript but you may use vanilla JavaScript to complete the tasks.

Coding Standard
---------------
[Prettier](https://prettier.io/)
```sh
yarn prettier-write
```

Dependencies
------------
[Yarn](https://yarnpkg.com/) or
[NPM](https://docs.npmjs.com/cli/npm) tools for dependency
management.

Getting Started With the Express Backend (/api)
-----------------------------------------------
For this exercise a pre-built Express application is provided. The application
runs by default on `localhost:4000` and has the following endpoints:

 - `http://localhost:4000/posts` - returns a JSON-encoded array of blog posts.

### Running the Express Application

```sh
cd api/
yarn install
yarn start
```

You can verify the API is working by visiting http://localhost:4000/posts in
your browser or another HTTP client.

Getting Started with the React Native Frontend (/native)
--------------------------------------------------------
The React Native frontend is a bare Expo application. You will need the Expo
tools installed to work on the app. See https://docs.expo.io/ for instructions
on how to install the Expo CLI tools.

### Running the React Native Application

```sh
cd native/
yarn install
yarn start
```

This will start the web console where you may launch the application on iOS,
Android, or Web.
