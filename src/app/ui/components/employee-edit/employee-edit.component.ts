import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/model/Employee';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeEditComponent {
  @Input() employee!: Employee;
  @Input() formGroup!: FormGroup;

  constructor() {}

  get shiftForms(): any {
    return (this.formGroup.get('shifts') as FormArray).controls as any;
  }
}
