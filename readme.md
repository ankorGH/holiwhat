# Holiwhat

A cli application to find out days for holidays

## Install

First you need api key from [here](https://holidayapi.com/)

```bash
    git clone https://github.com/ankorGH/holiwhat.git
    cd holiwhat
    rename the example.env file to .env
    place your apikey in the .env file
    npm install
    npm run install
```

## Usage

### now

find out if today is a holiday

```bash
    Eg. holiwhat now
   // Today is Indepence day 
   // No holiday today, Have fun at work ):

```

#### options

use the country flag to specify country default is nigeria

```bash
    Eg. holiwhat now --country US or holiwhat now -c US 
   // Today is First Day of Kwanzaa
   // No holiday today, Have fun at work ):
```

### all

find out all holidays for a specfic country

```bash
    Eg. holiwhat all
   // Today is Indepence day 
   // No holiday today, Have fun at work ):

```

#### options

use the country flag to specify country default is nigeria

```bash
    Eg. holiwhat now --country US or holiwhat now -c US
    //Holidays for this year include
    //1 Last Day of Kwanzaa Sunday, 1 January 2018  
    //2 Epiphany Friday, 6 January 2018
    //3 Orthodox Christmas Saturday, 7 January 2018
    //4 Martin Luther King, Jr. Day Monday, 2 January 2018
    //5 Groundhog Day Thursday, 5 February 2018
    //6 Valentine Day Tuesday, 3 February 2018
    // .....
    //52 Fourth Day of Kwanzaa Friday, 6 December 2018
    //53 Fifth Day of Kwanzaa Saturday, 7 December 2018
    //54 New Year Eve Sunday, 1 December 2018

    //NB: Eid celebrations is based on the previous year. Since Eid celebrations depend on the sighting of the moon.
```

### help

The help command is also available for you to dive deeper

```bash
    Eg. holiwhat help
    Usage: holiwhat <command>
    eg. holiwhat today

    Commands:
    holiwhat now  find what holiday is today
    holiwhat all  find all holidays

    Options:
    --version   Show version number                  [boolean]
    -h, --help  Show help                            [boolean]
```