import { Employee } from '../model/Employee';

let employees: Employee[] = [
  {
    id: '1',
    name: 'Adnan Gobeljic',
    email: 'adnan.gobeljic@insightful.com',
    hourlyRate: 30,
    overtimeHourlyRate: 100
  },
  {
    id: '2',
    name: 'Adnan Gobeljic',
    email: 'adnan.gobeljic@insightful.com',
    hourlyRate: 30,
    overtimeHourlyRate: 100
  },
  {
    id: '3',
    name: 'Adnan Gobeljic',
    email: 'adnan.gobeljic@insightful.com',
    hourlyRate: 30,
    overtimeHourlyRate: 100
  },
  {
    id: '4',
    name: 'Adnan Gobeljic',
    email: 'adnan.gobeljic@insightful.com',
    hourlyRate: 30,
    overtimeHourlyRate: 100
  },
  {
    id: '5',
    name: 'Adnan Gobeljic',
    email: 'adnan.gobeljic@insightful.com',
    hourlyRate: 30,
    overtimeHourlyRate: 100
  },
  {
    id: '6',
    name: 'Adnan Gobeljic',
    email: 'adnan.gobeljic@insightful.com',
    hourlyRate: 30,
    overtimeHourlyRate: 100
  },
  {
    id: '7',
    name: 'Adnan Gobeljic',
    email: 'adnan.gobeljic@insightful.com',
    hourlyRate: 30,
    overtimeHourlyRate: 100
  },
  {
    id: '8',
    name: 'Adnan Gobeljic',
    email: 'adnan.gobeljic@insightful.com',
    hourlyRate: 30,
    overtimeHourlyRate: 100
  },
  {
    id: '9',
    name: 'Adnan Gobeljic',
    email: 'adnan.gobeljic@insightful.com',
    hourlyRate: 30,
    overtimeHourlyRate: 100
  },
  {
    id: '10',
    name: 'Adnan Gobeljic',
    email: 'adnan.gobeljic@insightful.com',
    hourlyRate: 30,
    overtimeHourlyRate: 100
  },
  {
    id: '11',
    name: 'Adnan Gobeljic',
    email: 'adnan.gobeljic@insightful.com',
    hourlyRate: 30,
    overtimeHourlyRate: 100
  }
];

let setEmployees = (newEmployees: Employee[]) => {
  employees = newEmployees;
};

export { employees, setEmployees };
