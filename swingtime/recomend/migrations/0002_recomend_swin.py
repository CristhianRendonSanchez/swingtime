# Generated by Django 3.0.3 on 2020-08-07 13:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recomend', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='recomend',
            name='swin',
            field=models.IntegerField(default=1),
        ),
    ]