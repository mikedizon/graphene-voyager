# graphene voyager

This django app adds [ graphql voyager ](https://github.com/IvanGoncharov/graphql-voyager) to your django graphene app.

## Installation

`pip install graphene_voyager`

## Setup

Add `graphene_voyager` to your `INSTALLED_APPS`.

Set `GRAPHQL_ENDPOINT` environment variable e.g. `http://localhost:8000/graphql/` (don't forget the trailing slash!)

Add `GRAPHENE_VOYAGER` configuration to your `settings.py`:

```python
GRAPHENE_VOYAGER = {
    'GRAPHQL_ENDPOINT': os.environ.get('GRAPHQL_ENDPOINT'),
}
```

Update urls.py configuration to your `settings.py`:

```python

    url(r'^graphql/', include('graphene_voyager.urls')),
urlpatterns = [
    ....
    path("graphql/", csrf_exempt(GraphQLView.as_view(graphiql=True))),
    path("voyager/", include("graphene_voyager.urls")),
]
```
