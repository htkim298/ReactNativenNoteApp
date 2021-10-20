import json
from .base import *

config_secret_deploy = json.loads(open(CONFIG_SECRET_DEPLOY_FILE).read())

DEBUG = False

ALLOWED_HOSTS = ['*']

DATABASES = {
    'default': {
        'ENGINE': config_secret_deploy['DB']['ENGINE'],
        'NAME': config_secret_deploy['DB']['NAME'],
        'USER': config_secret_deploy['DB']['USER'],
        'PASSWORD': config_secret_deploy['DB']['PASSWORD'],
        'HOST': config_secret_deploy['DB']['HOST'],
        'PORT': '3306'
    }
}
