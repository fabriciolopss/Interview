# Generated by Django 5.1 on 2024-08-20 15:47

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contactBookApi', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
    ]
