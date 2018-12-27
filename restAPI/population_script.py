import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE','tutorial.settings')
import django
django.setup()
from snippets.models import Snippet

def populate():

    codeSnippets = [
        {'code': 'print("hello world")'},
        {'code': 'print(123)'},
        {'code': 'print(456)'}, 
        {'code': 'print("hello")'},
        {'code': 'print("fun")'},
        {'code': 'print("angular")'},
        {'code': 'print("world")'},
        {'code': 'print("snippets")'},
        {'code': 'print("django")'},
    ]

    # Add code objects to database
    for code in codeSnippets:
        addSnippet(code["code"])
    
    # terminal print statements when populating
    for s in Snippet.objects.all():
        print("- {0}".format(str(s)))

def addSnippet(code):
    c = Snippet.objects.get_or_create(code=code)[0]
    c.save()
    return c

if __name__ == '__main__':
    print("Populating snippet table")
    populate()