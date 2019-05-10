from flask import request

from . import status
from .. import data_api_client
from dmutils.status import get_app_status


@status.route('/_status')
def status():
    return '{"status":"ok"}', 200
