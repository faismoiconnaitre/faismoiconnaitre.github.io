# Fais moi connaitre.com website

Fais moi connaitre.com have been shut down on March 10th 2016. The website is not available anymore and you can only access to the static version. The website now is hosted on GitHub Pages at this location: [https://faismoiconnaitre.com](https://faismoiconnaitre.com) and the content is generated from PHP files.

## How to generate the static content

### Installation

We will host the dynamic website on your Docker. So, you need to install:

* Docker (for Mac ?)

### File location

First, clone Fais moi connaitre.com website repository

### Run Docker compose

You can now launch your Docker compose by the following command:

    docker-compose up

### Set up MySQL database

You need to configure MySQL database and load the schema into MySQL:

    docker exec -i faismc-db mysql -uroot -proot test < data/sql/schema.sql

### Test

Open your browser at *http://localhost:8080* and you shoud see Fais moi connaitre.com website

### Generate a static version

Finally, you can generate the static version of the website:

    wget -k -E -r -l 10 -p -N -nH http://localhost:8080
