import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

const MODULE_LIST = [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatTableModule
];

@NgModule({
  imports: [MODULE_LIST],
  exports: [MODULE_LIST]
})
export class MaterialModule {}
