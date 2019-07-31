from django.urls import path, include

from django.contrib import admin

admin.autodiscover()

import app.views

# To add a new path, first import the app:
# import blog
#
# Then add the new path:
# path('blog/', blog.urls, name="blog")
#
# Learn more here: https://docs.djangoproject.com/en/2.1/topics/http/urls/

urlpatterns = [
    path("", app.views.index, name="index"),
    path("db/", app.views.db, name="db"),
    path("admin/", admin.site.urls),
]


### ADDING A NEW URL ### 
# To add a new URL: path('urlname/', views.urlname, name='urlname')
# urlname corresponds to urlname.html within app/templates

# In views.py, add the following:  
# def urlname(request):
#    return render(request, "urlname.html")
