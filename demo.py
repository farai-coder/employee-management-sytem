__author__ = 'Farai Rato'
__date__created = "12 April 2023"
import datetime
import json

# # data =  [{"id": 1, "firstname": "Emil", "lastname": "Refsnes"}, {"id": 2, "firstname": "Tobias", "lastname": "Refsnes"}]
# # d = jsonify.([company.__dict__ for company in data])
# # #d = [da.__dict__ for da in data]
# # print(d)
#
# data = [
#     {'id': 1, 'firstname': 'Emil', 'lastname': 'Refsnes'},
#     {'id': 2, 'firstname': 'Tobias', 'lastname': 'Refsnes'},
#     {'id': 3, 'firstname': 'Linus', 'lastname': 'Refsnes'},
#     {'id': 4, 'firstname': 'Lene', 'lastname': 'Refsnes'},
#     {'id': 5, 'firstname': 'Stale', 'lastname': 'Refsnes'},
#     {'id': 6, 'firstname': 'Jane', 'lastname': 'Doe'}
# ]
# json_data = json.dumps(data)
# print(json_data)
print(datetime.date.today)

a = [1,2,3,1,1,1]
a.reverse()
print(a)
b = a.copy()
indexes = []
print(a.index(1))
a.append(3)
for i in range(len(a)):
    if a[i] == 1:
        b.remove(1)
print("new a", b)
employee = {'employee_id':123, 'nationa_id': "63-3038805G42", 'name':'Farai',
                                   'department':"IT", 'role': 'programming', 'date_started':"13 march",
                                   'date_left':'13 july', 'duties':'designing', 'company': 'OrisVigil'
                                   }
print(employee['nationa_id'])

employees =  [{'employee_id': '23723237', 'national_id': '63-3328805G42', 'name': 'Evans Muti', 'department': 'Administration', 'role': 'Database design', 'date_started': '2018-05-09', 'date_left': '2023-03-05', 'duties': 'programming', 'company': 'OrisVigil'}
,{'employee_id': '5769305202', 'national_id': '63-3328805G42', 'name': 'Evans Muti', 'department': 'Administration', 'role': 'Mantainance', 'date_started': '2018-05-09', 'date_left': '2023-03-05', 'duties': 'programming', 'company': 'OrisVigil'}
,{'employee_id': '23723237', 'national_id': '63-3328805G42', 'name': 'Evans Muti', 'department': 'Administration', 'role': 'Database design', 'date_started': '2018-05-09', 'date_left': '2023-03-05', 'duties': 'programming', 'company': 'OrisVigil'}]
em = {'employee_id': '23723237', 'national_id': '63-3328805G42', 'name': 'Evans Muti', 'department': 'Administration', 'role': 'Database design'}
try:
    employees.remove(str(em))
except:
    pass
print(len(employees))
print(str(em))
for i, em in enumerate(employees):
    print(i, em)
print(len(employees))
