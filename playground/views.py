from rest_framework import generics
from .models import Employee, Leave, Performance, Notification
from .serializer import (
    EmployeeSerializer,
    LeaveSerializer,
    PerformanceSerializer,
    WorkLogSerializer,
    NotificationSerializer
)
from .models import (
    Employee,
    Leave,
    Performance,
    WorkLog,
    Notification
)

class EmployeeListView(generics.ListAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class EmployeeDetailView(generics.RetrieveAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class EmployeeCreateView(generics.CreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class EmployeeUpdateView(generics.UpdateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class EmployeeDeleteView(generics.DestroyAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class LeaveListView(generics.ListAPIView):
    queryset = Leave.objects.all()
    serializer_class = LeaveSerializer

class LeaveDetailView(generics.RetrieveAPIView):
    queryset = Leave.objects.all()
    serializer_class = LeaveSerializer

class LeaveCreateView(generics.CreateAPIView):
    queryset = Leave.objects.all()
    serializer_class = LeaveSerializer

class LeaveUpdateView(generics.UpdateAPIView):
    queryset = Leave.objects.all()
    serializer_class = LeaveSerializer

class LeaveDeleteView(generics.DestroyAPIView):
    queryset = Leave.objects.all()
    serializer_class = LeaveSerializer

class PerformanceListView(generics.ListAPIView):
    queryset = Performance.objects.all()
    serializer_class = PerformanceSerializer

class PerformanceDetailView(generics.RetrieveAPIView):
    queryset = Performance.objects.all()
    serializer_class = PerformanceSerializer

class PerformanceCreateView(generics.CreateAPIView):
    queryset = Performance.objects.all()
    serializer_class = PerformanceSerializer

class PerformanceUpdateView(generics.UpdateAPIView):
    queryset = Performance.objects.all()
    serializer_class = PerformanceSerializer

class PerformanceDeleteView(generics.DestroyAPIView):
    queryset = Performance.objects.all()
    serializer_class = PerformanceSerializer

class WorkLogListView(generics.ListAPIView):
    queryset = WorkLog.objects.all()
    serializer_class = WorkLogSerializer

class WorkLogDetailView(generics.RetrieveAPIView):
    queryset = WorkLog.objects.all()
    serializer_class = WorkLogSerializer

class WorkLogCreateView(generics.CreateAPIView):
    queryset = WorkLog.objects.all()
    serializer_class = WorkLogSerializer

class WorkLogUpdateView(generics.UpdateAPIView):
    queryset = WorkLog.objects.all()
    serializer_class = WorkLogSerializer

class WorkLogDeleteView(generics.DestroyAPIView):
    queryset = WorkLog.objects.all()
    serializer_class = WorkLogSerializer

class NotificationListView(generics.ListAPIView):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer

class NotificationDetailView(generics.RetrieveAPIView):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer

class NotificationCreateView(generics.CreateAPIView):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer

class NotificationUpdateView(generics.UpdateAPIView):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer

class NotificationDeleteView(generics.DestroyAPIView):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer
