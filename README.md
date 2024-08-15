# Documentation

## Starting the application

### Server

Open a terminal in the 'server' directory and type the following command

```bash
node server.js
```

### Client

Open another terminal in the 'client' directory and type the following commands

```bash
npm install
npm run dev
```

The application is now live on http://localhost:5173/

## The Blog

'The Blog' is a simple blog web application which supports authentication and basic CRUD operations.

### Application Structure

1. Public part (Accessible without authentication)
2. Private Part (Available for Registered Users)

If a user (logged in or not) tries to acces a page which does not exist or he/she does not have the authorisation to acces it, an error page is displayed.

All user errors are dislpayed in the browser.

Moreover if another error occurs while using the application, another error page is displayed (Information about the error is logged in the browser for now - it should in a log file).

### All users

#### Home

Displays tha last 4 posts. Clicking on a post redirects to a details page.\
Displays the different categories. Clicking on a category redirects to a page where only the posts in that category are displayed.

#### All Posts

Displays all the posts.\
Has pagination.\
Has filters.\
Has a search field.

#### Details

Displays the details for a certain post.

#### Categories

Displays a list with all the categories. Clicking on a category will load its corresponding posts.
Below it displays all the posts in this category. Clicking on a post will redirect to a details page.

### Public Part

#### !!! Not logged in users do not have access to any functionality. They can only read from the website. !!!

Pages that non authenticated (not logged in) users can access:

#### Login

Displays the login form.\
Upon successful authentication redirects to Home and the user is logged in.\
If it is unsuccessful, displays the user errors.

#### Register

Displays the register form.
Upon successful registration redirects to Home and the user is logged in.\
If it is unsuccessful, displays the user errors.

#### !!! Not logged in users do not have access to any functionality. They can only read from the website. !!!

### Private Part

#### Dashboard

Displays a page where information about the currently logged in user can be found.
There is a list with all the posts of the current user.
He/she can view, edit or delete them or create a new post.

#### Details

Logged in users can add comments to the posts which are not their own.

#### Edit (only for the owner of the post)

Displays the edit form.

#### Create

Displays the create form.

#### Delete (only for the owner of the post)

Deletes the post.

#### Logout

Logs out the current user and redirects to Home.

#### Admin (only for the user with email admin@gmail.com)

Displays admin information.\
Displays all categories and how much posts they have.\
Displays a form for addding new category.\
Displays a button, which upon clicking creates 100 dummy posts.

## Project Structure

The source code is devided into a server side and a client side.

### Client

    client/
        public/
        src/
            components/
            contexts/
            hooks/
            lib/
            services/
            utils/

### Server

    server/
        data/
        load/
            data/
                categories/
                    getCategories.js
                comments/
                    getComments.js
                posts/
                    getPosts.js
                loadData.js
            users/
                loadUsers.js
        client.js
        server.js

The server is initialised with several users, posts, categories and comments so You can start using it immediately.

#### Users

       email: dam@gmail.com
    password: 123456

       email: admin@gmail.com
    password: 123456

       email: peter@abv.bg
    password: 123456
