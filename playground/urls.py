from django.urls import path
from .views import (
    EmployeeListView,
    EmployeeDetailView,
    EmployeeCreateView,
    EmployeeUpdateView,
    EmployeeDeleteView,
    LeaveListView,
    LeaveDetailView,
    LeaveCreateView,
    LeaveUpdateView,
    LeaveDeleteView,
    PerformanceListView,
    PerformanceDetailView,
    PerformanceCreateView,
    PerformanceUpdateView,
    PerformanceDeleteView,
    WorkLogListView,
    WorkLogDetailView,
    WorkLogCreateView,
    WorkLogUpdateView,
    WorkLogDeleteView,
    NotificationListView,
    NotificationDetailView,
    NotificationCreateView,
    NotificationUpdateView,
    NotificationDeleteView,
)

urlpatterns = [
    # Employee URLs
    path('employees/', EmployeeListView.as_view()),
    path('employees/<pk>/', EmployeeDetailView.as_view()),
    path('employees/create/', EmployeeCreateView.as_view()),
    path('employees/<pk>/update/', EmployeeUpdateView.as_view()),
    path('employees/<pk>/delete/', EmployeeDeleteView.as_view()),

    # Leave URLs
    path('leaves/', LeaveListView.as_view()),
    path('leaves/<pk>/', LeaveDetailView.as_view()),
    path('leaves/create/', LeaveCreateView.as_view()),
    path('leaves/<pk>/update/', LeaveUpdateView.as_view()),
    path('leaves/<pk>/delete/', LeaveDeleteView.as_view()),

    # Performance URLs
    path('performances/', PerformanceListView.as_view()),
    path('performances/<pk>/', PerformanceDetailView.as_view()),
    path('performances/create/', PerformanceCreateView.as_view()),
    path('performances/<pk>/update/', PerformanceUpdateView.as_view()),
    path('performances/<pk>/delete/', PerformanceDeleteView.as_view()),

    # WorkLog URLs
    path('worklogs/', WorkLogListView.as_view()),
    path('worklogs/<pk>/', WorkLogDetailView.as_view()),
    path('worklogs/create/', WorkLogCreateView.as_view()),
    path('worklogs/<pk>/update/', WorkLogUpdateView.as_view()),
    path('worklogs/<pk>/delete/', WorkLogDeleteView.as_view()),

    # Notification URLs
    path('notifications/', NotificationListView.as_view()),
    path('notifications/<pk>/', NotificationDetailView.as_view()),
    path('notifications/create/', NotificationCreateView.as_view()),
    path('notifications/<pk>/update/', NotificationUpdateView.as_view()),
    path('notifications/<pk>/delete/', NotificationDeleteView.as_view()),
]
