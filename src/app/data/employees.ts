import { Employee } from '../model/Employee';

let employees: Employee[] = [
  {
    id: '1',
    name: 'Marko Nemanjic',
    email: 'marko.nemanjic@insightful.com',
    hourlyRate: 30,
    overtimeHourlyRate: 41
  },
  {
    id: '2',
    name: 'Hamza Markovic',
    email: 'hamza.markovic@insightful.com',
    hourlyRate: 40,
    overtimeHourlyRate: 67
  },
  {
    id: '3',
    name: 'Damir Damirovic',
    email: 'damir.damirovic@insightful.com',
    hourlyRate: 25,
    overtimeHourlyRate: 28
  },
  {
    id: '4',
    name: 'Nemanja Hamzic',
    email: 'nemanja.hamzic@insightful.com',
    hourlyRate: 42,
    overtimeHourlyRate: 51
  },
  {
    id: '5',
    name: 'Strahinja Pantelic',
    email: 'strahinja.pantelic@insightful.com',
    hourlyRate: 45,
    overtimeHourlyRate: 68
  },
  {
    id: '6',
    name: 'Pantelija Strahinjic',
    email: 'pantelija.strahinjic@insightful.com',
    hourlyRate: 60,
    overtimeHourlyRate: 75
  },
  {
    id: '7',
    name: 'Jovana Amiric',
    email: 'jovana.amiric@insightful.com',
    hourlyRate: 12,
    overtimeHourlyRate: 80
  },
  {
    id: '8',
    name: 'Amira Jovanic',
    email: 'amira.jovanic@insightful.com',
    hourlyRate: 20,
    overtimeHourlyRate: 32
  },
  {
    id: '9',
    name: 'Tarik Vasilic',
    email: 'tarik.vasilic@insightful.com',
    hourlyRate: 33,
    overtimeHourlyRate: 84
  },
  {
    id: '10',
    name: 'Bogdan Bogdanovic',
    email: 'bogdan.bogdanovic@insightful.com',
    hourlyRate: 31,
    overtimeHourlyRate: 65
  },
  {
    id: '11',
    name: 'Vasilije Tarikovic',
    email: 'vasilije.tarikovic@insightful.com',
    hourlyRate: 29,
    overtimeHourlyRate: 100
  }
];

let setEmployees = (newEmployees: Employee[]) => {
  employees = newEmployees;
};

export { employees, setEmployees };
