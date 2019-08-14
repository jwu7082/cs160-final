from django.urls import path, include

from django.contrib import admin

from django.conf import settings
from django.conf.urls.static import static

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
    path('upload/', app.views.upload, name='upload'),
    path('profile/', app.views.profile, name='profile'),
    path('submission/', app.views.submission, name='submission'),
    path('success/', app.views.success, name='success'),
    path('search/', app.views.search, name='search'),
    path('bookmarks/', app.views.bookmarks, name='bookmarks'),
]



### ADDING A NEW URL ### 
# To add a new URL: path('urlname/', app.views.urlname, name='urlname')
# urlname corresponds to urlname.html within app/templates

# In views.py, add the following:  
# def urlname(request):
#    return render(request, "urlname.html")

