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

### Public Part

Pages that non authenticated (not logged in) users can access:

#### Home ("/")

Displays tha last 4 posts. Clicking on a post redirects to a details page.\
Displays the different categories. Clicking on a category redirects to a page where only the posts in that category are displayed.

#### All Posts ("/all-posts")

Displays all the posts.\
Has pagination.\
Has filters.\
Has a search field.

#### Login ("/login")

Displays the login form.\
Upon successful authentication redirects to Home ("/").\
If it is unsuccessful, displays the user errors.

#### Register ("/register")

#### Details ("/posts/{postId}/details")

#### Categories ("/categories/{categoryId}")

#### Not logged in users do not have access to any functionality. They can only read from the website.

### Private Part

####

## Project Structure

The source code is devided into a server side and a client side.

### Client

### Server
