import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';

const MODULE_LIST = [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatTableModule
];

@NgModule({
  imports: [MODULE_LIST],
  exports: [MODULE_LIST]
})
export class MaterialModule {}
