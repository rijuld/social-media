# Generated by Django 3.1.2 on 2020-10-21 06:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('network', '0004_posts_wholiked'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='first_name',
            field=models.CharField(blank=True, max_length=150, verbose_name='first name'),
        ),
    ]
