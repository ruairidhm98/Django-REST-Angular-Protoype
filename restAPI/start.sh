#!/bin/bash

# Makes nescessary database migrations and runs the server
chmod 700 start.sh
python manage.py makemigrations snippets
python manage.py migrate 
python population_script.py
