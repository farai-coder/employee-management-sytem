from django.test.client import Client
from django.test.testcases import TestCase
from playground.models import Department, Company

class TestGetCompanyDepartments(TestCase):
    def setUp(self):
        self.client = Client()
        self.company = Company.objects.create(name="Test Company")
        self.department1 = Department.objects.create(name="Test Department 1", company=self.company)
        self.department2 = Department.objects.create(name="Test Department 2", company=self.company)

    def test_get_company_departments(self):
        response = self.client.get(f"/companies/{(76543210)}/departments/")
        self.assertEqual(response.status_code, 200)
        self.assertJSONEqual(response.content, [
            {'department_id': self.department1.department_id, 'name': self.department1.name},
            {'department_id': self.department2.department_id, 'name': self.department2.name}
        ])
