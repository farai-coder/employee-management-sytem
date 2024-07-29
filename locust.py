__author__ = 'Farai Rato'
__date__created = "12 April 2023"
import time
from locust import HttpUser, task, between

class WebsiteUser(HttpUser):
    wait_time = between(1, 5)

    @task
    def index_page(self):
        self.client.get(url="/playground/companies")

    @task
    def slow_page(self):
        self.client.get(url="/playground/employees")
