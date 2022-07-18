from django.conf import settings
from django.shortcuts import render


def index(request):
    graphqlHost = settings.GRAPHENE_VOYAGER['GRAPHQL_ENDPOINT']
    return render(request, 'graphene_voyager/index.html', {'graphqlHost': graphqlHost})
