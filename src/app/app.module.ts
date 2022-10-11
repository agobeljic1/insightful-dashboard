import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardPageComponent } from './ui/pages/dashboard-page/dashboard-page.component';
import { NotFoundPageComponent } from './ui/pages/not-found-page/not-found-page.component';
import { MaterialModule } from './material.module';
import { EmployeesTableComponent } from './ui/components/employees-table/employees-table.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from './store/employee/employee.effects';
import { reducers } from './store/app.state';
import { BulkEditModalComponent } from './ui/components/modals/bulk-edit-modal/bulk-edit-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import { ShiftsTableComponent } from './ui/components/shifts-table/shifts-table.component';
import { EmployeeEditComponent } from './ui/components/employee-edit/employee-edit.component';

import {
  NgxMatDatetimePickerModule,
  NgxMatTimepickerModule,
  NgxMatNativeDateModule
} from '@angular-material-components/datetime-picker';
@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    NotFoundPageComponent,
    EmployeesTableComponent,
    BulkEditModalComponent,
    ShiftsTableComponent,
    EmployeeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([EmployeeEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
