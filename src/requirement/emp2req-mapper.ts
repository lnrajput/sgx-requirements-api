import { Injectable } from '@nestjs/common';

@Injectable()
export class Emp2reqMapper {

    mapEmployeeRequirements(employeeString: string) {
        const employee=JSON.parse(employeeString);
        const mapping = {
            1:"position 1 requirements",
            2:"position 2 requirements",
            3:"position 3 requirements"
        }
        console.log([
            employee.fullName,
            'has',
            (mapping[employee.position] ? mapping[employee.position] : 'no requirements')
        ].join(' '));
      }
}
