# ems/serializers.py
from rest_framework import serializers
from .models import Employee, Leave, Performance, Notification

# class EmployeeSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Employee
#         fields = '__all__'
#
# class LeaveSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Leave
#         fields = '__all__'
#
# class PerformanceSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Performance
#         fields = '__all__'
#
# class NotificationSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Notification
#         fields = '__all__'

from rest_framework import serializers
from .models import Employee, Leave, Performance, WorkLog, Notification

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['id', 'name', 'job_title', 'department', 'contact_info', 'date_joined']

class LeaveSerializer(serializers.ModelSerializer):
    employee = serializers.StringRelatedField(read_only=True)
    class Meta:
        model = Leave
        fields = ['id', 'employee', 'leave_name', 'start_date', 'end_date', 'status', 'taken', 'due']

class PerformanceSerializer(serializers.ModelSerializer):
    employee = serializers.StringRelatedField(read_only=True)
    class Meta:
        model = Performance
        fields = ['id', 'employee', 'review_date', 'rating', 'comments']

class WorkLogSerializer(serializers.ModelSerializer):
    employee = serializers.StringRelatedField(read_only=True)
    class Meta:
        model = WorkLog
        fields = ['id', 'employee', 'date', 'hours_worked', 'task_description']

class NotificationSerializer(serializers.ModelSerializer):
    sender = serializers.StringRelatedField(read_only=True)
    recipient = serializers.StringRelatedField(read_only=True)
    class Meta:
        model = Notification
        fields = ['id', 'sender', 'recipient', 'message', 'created_at']
