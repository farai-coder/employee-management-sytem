# # ems/models.py
# from django.db import models
#
# class Employee(models.Model):
#     name = models.CharField(max_length=100)
#     job_title = models.CharField(max_length=100)
#     department = models.CharField(max_length=100)
#     contact_info = models.CharField(max_length=100)
#     date_joined = models.DateField()
#
#     def __str__(self):
#         return self.name
#
# class Leave(models.Model):
#     employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
#     start_date = models.DateField()
#     end_date = models.DateField()
#     status = models.CharField(max_length=20)
#     date_applied = models.DateField(auto_now_add=True)
#     date_approved = models.DateField(null=True, blank=True)z
#
#     def __str__(self):
#         return f'{self.employee.name} - {self.status}'
#
# class Performance(models.Model):
#     employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
#     hours_worked = models.FloatField()
#     tasks_completed = models.IntegerField()
#     performance_score = models.FloatField()
#     date_recorded = models.DateField(auto_now_add=True)
#
#     def __str__(self):
#         return f'{self.employee.name} - {self.performance_score}'
#
# class Notification(models.Model):
#     employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
#     message = models.TextField()
#     date_sent = models.DateField(auto_now_add=True)
#
#     def __str__(self):
#         return f'{self.employee.name} - {self.date_sent}'


from django.db import models
from django.contrib.auth.models import AbstractUser

class Employee(models.Model):
    name = models.CharField(max_length=100)
    job_title = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    contact_info = models.CharField(max_length=100)
    date_joined = models.DateField()

    def __str__(self):
        return self.name

class Leave(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    leave_name = models.CharField(max_length=255)  # e.g. Annual, Sick, etc.
    start_date = models.DateField()
    end_date = models.DateField()
    status = models.CharField(max_length=255)  # e.g. Pending, Approved, Denied
    taken = models.IntegerField()
    due = models.IntegerField()

class Performance(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    review_date = models.DateField()
    rating = models.IntegerField()  # e.g. 1-5
    comments = models.TextField()

class WorkLog(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    date = models.DateField()
    hours_worked = models.DecimalField(max_digits=4, decimal_places=2)
    task_description = models.TextField()

class Notification(models.Model):
    sender = models.ForeignKey(Employee, on_delete=models.CASCADE)
    recipient = models.ForeignKey(Employee, on_delete=models.CASCADE, related_name='notifications')
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
