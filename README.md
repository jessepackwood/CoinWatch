![Logo of the project](./images/logo.sample.png)

# Coin watch
> A simple crypto tracking app and portfolio

Coin Watch was designed to be a simple crypto app that allows users to watch specific coins and track their portfolio total without the hassle of adding every transaction they've ever made on an exchange. 

## Installing / Getting started

A quick introduction of the minimal setup you need to get a hello world up &
running.

```shell
commands here
```

Here you should say what actually happens when you execute the code above.

## Developing

### Built With
* React 16.2.0
* React-Router 4.2.2 
* Redux 3.7.2
* Firebase 4.8.1

### Prerequisites
What is needed to set up the dev environment. For instance, global dependencies or any other tools. include download links.


### Setting up Dev

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone https://github.com/jessepackwood/CoinWatch
cd your-project/
npm install
```

And state what happens step-by-step. If there is any virtual environment, local server or database feeder needed, explain here.

### Building

If your project needs some additional steps for the developer to build the
project after some code changes, state them here. for example:

```shell
./configure
make
make install
```

Here again you should state what actually happens when the code above gets
executed.

### Deploying / Publishing
give instructions on how to build and release a new version
In case there's some step you have to take that publishes this project to a
server, this is the right time to state it.

```shell
packagemanager deploy your-project -s server.com -u username -p password
```

And again you'd need to tell what the previous code actually does.

## Versioning

1.0.0

## Configuration

Here you should write what are all of the configurations a user can enter when
using the project.

## Tests

Describe and show how to run the tests with code examples.
Explain what these tests test and why.

```shell
Give an example
```

## Style guide

Explain your code style and show how to check it.

## Api Reference

coin.cap.io/front

This endpoint returns an array of objects structured with basic information for each coin. This project utilizes the coin cap24hrChange, long, short, and price.

  {
    "cap24hrChange": 4.28,
    "long": "Bitcoin",
    "mktcap": 238960087037.5,
    "perc": 4.28,
    "price": 14219.9,
    "shapeshift": true,
    "short": "BTC",
    "supply": 16804625,
    "usdVolume": 12937500000,
    "volume": 12937500000,
    "vwapData": 13652.589070129214,
    "vwapDataBTC": 13652.589070129214
  }

## Database

Explaining what database (and version) has been used. Provide download links.
Documents your database design and schemas, relations etc... 

## Licensing

State what the license is and how to find the text version of the license.
