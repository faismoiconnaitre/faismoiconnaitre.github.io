# Fais moi connaitre.com website

Fais moi connaitre.com have been shut down on March 10th 2016. The website is not available anymore and you can only access to the static version. The website now is hosted on GitHub Pages at this location: [https://faismoiconnaitre.com](https://faismoiconnaitre.com) and the content is generated from PHP files.

## How to generate the static content

### Installation

We will host the dynamic website on a local Virtual Machine. So, you need to install:
* VirtualBox
* Vagrant

### File location

First, clone Fais moi connaitre.com website repository

### Run the Virtual Machine

You can now launch your Virtual Machine (VM):

	cd ${fais moi connaitre.com} && vagrant up

Then, you can ssh to the VM:

    vagrant ssh

### Set up Apache

You need to change Apache configuration file located at *scotchbox.local.conf*:

* You need to replace *DocumentRoot /var/www/public* by *DocumentRoot /var/www/web*

### Set up MySQL database

You need to configure MySQL database and load the data into MySQL:

    mysql -u root -p
    # the default password is root

    mysql> create database test;
    mysql> use test;
    mysql> source /var/www/data/sql/schema.sql

### Test

Open your browser at *http://192.168.33.10* and you shoud see Fais moi connaitre.com website

### Generate a static version

Finally, you can generate the static version of the website:

    wget -k -E -r -l 10 -p -N -nH http://192.168.33.10
