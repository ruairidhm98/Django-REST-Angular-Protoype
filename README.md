# Django-REST-Protoype
A simple django rest API, nothing exciting. Angular is used for the front end to make the API calls and to make it a single page application

# Generating Token key for API
- There is another way of doing this, which seemed too complicated to do, but     this works and provided some form of authentication (and its only a             prototype!)
```bash
python manage.py createsuperuser
```
- Create the superuser for the app
- Download [Postman](https://www.getpostman.com/apps)
- Open postman
- Make a POST request to the the url => http://127.0.0.1:8000/snippets/ (make     sure the server is running, and insert something like code in the key and       print("post") in the value
- Go to the authorization tab, and select Type Basic Auth and enter username 
  and password for the superuser
- Click code (this is directly below the save button)
- You're code will appear as 'Authorization: Basic "the_code"'
- Use this to enter in the angular form (the angular code will insert this as a 
  nescessary header) 
