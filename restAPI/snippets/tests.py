import os
import sys
sys.path.append(os.path.dirname(os.path.dirname(os.path.realpath(__file__))))
import django
django.setup()
from django.test import TestCase, Client
from snippets.views import *
from snippets.models import Snippet
from rest_framework.test import APIClient, APITestCase
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from population_script import populate

# Test cases concerning GET requests to the REST API
class GetTests(APITestCase):
    
    # Population script
    def setUp(self):
        try:
            populate()
        except ImportError:
            print("The module population_script does not exist")
        except NameError:
            print("The module populate() does not exist or is not correct")
        except:
            print("Something went wrong in the populate() function")
        self.client = Client()

    # Makes sure we get content from the server when testing a get request
    def test_get(self):
        request = self.client.get('http://127.0.0.1:8000/snippets/')
        self.assertIsNotNone(request)
        self.assertEqual(request.status_code, 200)

# Test cases concerning POST requests to the REST API
class PostTests(APITestCase):
    
    # Create a dumby client
    def setUp(self):
        self.client = APIClient()
        self.user = User(username='test')
        self.user.set_password('test')
        self.user.save()


    # User is not validated, so it must return a 401 (forbidden)
    def test_post_not_validated(self):
        request = self.client.post('http://127.0.0.1:8000/snippets/', {
            'code': 'print("Hello")'
        })
        self.assertIsNotNone(request)
        self.assertEqual(request.status_code, 403)
    
    # User is validated (only the super user can use this API)
    def test_post_validated(self):
        self.client.login(username='test', password='test')
        request = self.client.post('http://127.0.0.1:8000/snippets/', {
            'code': 'print("123")',
        })
        self.assertIsNotNone(request)
        self.assertEqual(request.status_code, 201)

# Test cases concering PUT requests
class PutRequests(APITestCase):

    def setUp(self):
        self.client = APIClient()
        self.user = User(username='test')
        self.user.set_password('test')
        self.user.save()
        self.snippetToUpdate = Snippet(code='print(999)', id=100)
        self.snippetToUpdate.save()

    # Unauthroized access, should delete
    def test_put_not_validated(self):
        request = self.client.put('http://127.0.0.1:8000/snippets/100/', {
            'code': 'print(123)',
        })
        self.assertIsNotNone(request)
        self.assertEqual(request.status_code, 403)

    # Unauthroized access, should delete
    def test_put_not_validated(self):
        self.client.login(username='test', password='test')
        request = self.client.put('http://127.0.0.1:8000/snippets/100/', {
            'code': 'print(123)',
        })
        self.assertIsNotNone(request)
        self.assertEqual(request.status_code, 200)

# Test cases concerning DELETE requets to the REST API
class DeleteRequests(APITestCase):

    def setUp(self):
        self.client = APIClient()
        self.user = User(username='test')
        self.user.set_password('test')
        self.user.save()
        self.snippetToDelete = Snippet(code='print(999)', id=100)
        self.snippetToDelete.save()

    # Unauthorized access, request should return a 403
    def test_delete_not_validated(self):
        request = self.client.delete('http://127.0.0.1:8000/snippets/100/')
        self.assertIsNotNone(request)
        self.assertEqual(request.status_code, 403)

    # User can delete this object as they are logged in
    def test_delete_validated(self):
        self.client.login(username='test', password='test')
        request = self.client.delete('http://127.0.0.1:8000/snippets/100/')
        self.assertIsNotNone(request)
        self.assertEqual(request.status_code, 204)




