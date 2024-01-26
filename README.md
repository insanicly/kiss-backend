# kiss-backend

kiss-backend (keep it simple (stupid) backend) is a simple Node.js application designed to serve as a backend for frontend applications. It provides two endpoints, `/my-post-first` and `/my-post-second`, both returning a specific response based on the input data and headers.

you may want to use this this (even though there is something called [httpbin](http://httpbin.org/))because when you use this you'll not be rate limited and you can change anything you want here.

## You can use or try it from here:

[Live demo](https://kiss-backend.vercel.app/my-post-first)

- post this body to above endpoint

```
{
    "myInput": "something"
}
```

- and a header:

```
who:alper
```

- you'll get this response:

```
{
    "result": [
        "s-something-alper-0",
        "s-something-alper-12",
        "s-something-alper-24",
        "s-something-alper-36",
        "s-something-alper-48",
        "s-something-alper-60",
        "s-something-alper-72",
        "s-something-alper-84",
        "s-something-alper-96",
        "s-something-alper-108"
    ]
}
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine

### Installation

```bash
npm install
```

### Running the Application

Start the Node.js server:

```bash
npm start
```

By default, the server will run on http://localhost:3000.
