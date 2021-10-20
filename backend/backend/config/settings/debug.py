from .base import *

DEBUG = True

ALLOWED_HOSTS = ['*']

config_secret_debug = json.loads(open(CONFIG_SECRET_DEBUG_FILE).read())

DATABASES = {
    'default': {
        'ENGINE': config_secret_debug['DB']['ENGINE'],
        'NAME': config_secret_debug['DB']['NAME'],
        'USER': config_secret_debug['DB']['USER'],
        'PASSWORD': config_secret_debug['DB']['PASSWORD'],
        'HOST': config_secret_debug['DB']['HOST'],
        'PORT': '3306'
    }
}
