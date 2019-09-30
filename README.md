# Nutshell: The Information Dashboard
### Creators (aka Jilted Spouses)
1. Joe Snyder
1. Curtis Crutchfield
1. Bennett Foster
1. Ellie Ash

Nutshell is a dashboard for people to organize their daily tasks, events, news articles, friends, and chat messages.

These are all of the skills and concepts that Energetic Beefcake used to create Nutshell.

1. Functions
1. Databases/API
1. Github
1. CSS
1. React
1. Reactstrap/Bootstrap
1. Modals
1. Data entry/editing
1. Relational data
1. Session Storage

## How to Launch Nutshell

1. Clone the repository from Github
1. Open your terminal and type the command "npm install" to install React
1. In the main project directory, create a new directory called "API"
1. In the API directory, create a file called "database.json"
1. Copy the sample data below into database.json
1. Run json-server in port 5002 with database.json
1. In the terminal, type the command "npm start". You are now ready to use Nutshell!

## Sample Data
```json
{
  "users": [
    {
      "email": "e@e.com",
      "username": "ellie",
      "password": "123",
      "id": 1
    },
    {
      "email": "b@b.com",
      "username": "bryan",
      "password": "123",
      "id": 2
    },
    {
      "email": "1@1.com",
      "username": "demo",
      "password": "123",
      "id": 3
    }
  ],
  "reviews": [
    {
      "id": 1,
      "userId": 1,
      "username": "ellie",
      "locationId": 35,
      "ratingTitle": "kinda spooky",
      "review": "There were orbs in the pictures I took but I think my camera was just dirty",
      "rating": 3
    },
    {
      "id": 2,
      "userId": 2,
      "username": "bryan",
      "locationId": 35,
      "ratingTitle": "pretty spooky",
      "review": "I definitely walked through a cold spot. Like, the air was definitely colder than normal.",
      "rating": 4
    },
    {
      "id": 3,
      "userId": 3,
      "username": "demo",
      "locationId": 35,
      "ratingTitle": "very spooky",
      "review": ".....",
      "rating": 5
    }
  ],
  "savedLocations": [
    {
      "userId": 3,
      "locationId": 119,
      "title": "THE TEMPLE CEMETERY",
      "location": "Temple Cemetery, 2001 15th Avenue North (inside cemetery)",
      "id": 1
    },
    {
      "userId": 3,
      "locationId": 128,
      "title": "DUTCHMAN’S CURVE TRAIN WRECK",
      "location": "White Bridge Pike at Richland Creek Greenway Trailhead",
      "id": 2
    }
  ]
}
```
