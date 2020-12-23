from django.contrib import admin
from .models import User,posts,comments,following,Todo_likes

# Register your models here.
admin.site.register(User)
admin.site.register(posts)
admin.site.register(comments)
admin.site.register(following)
admin.site.register(Todo_likes)