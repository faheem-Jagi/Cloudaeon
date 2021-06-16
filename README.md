
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.4

## Backend
Install JSON Server

npm install -g json-server

# Create a db.json file with data

{
  "users": [
    {
      "id": 1,
      "first_name": "Faheem",
      "last_name": "jag",
      "email": "a@s.com",
      "password": "123456"
    },
    {
      "id": 2,
      "first_name": "Anna",
      "last_name": "Smith",
      "email": "annasmith23@gmail.com",
      "password": "123456"
    },
    {
      "id": 3,
      "first_name": "Rog",
      "last_name": "Bac",
      "email": "rogb@yahoo.com",
      "password": "123456"
    }
  ]
}

# To Run Web Api Server on port 3000
json-server --watch db.json
