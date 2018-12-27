from snippets.models import Snippet
from snippets.serializers.snippetSerializer import SnippetSerializer
from snippets.serializers.userSerializer import UserSerializer
from rest_framework import generics
from rest_framework.reverse import reverse
from rest_framework.decorators import api_view
from rest_framework import permissions
from django.contrib.auth.models import User


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
