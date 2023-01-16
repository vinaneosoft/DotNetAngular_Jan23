import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeSalaryDetailsComponent } from './employee-salary-details/employee-salary-details.component';
import { MypipePipe } from './allpipes/mypipe.pipe';
import { CustomPipe } from './allpipes/custom.pipe';
import { MycustomPipe } from './allpipes/mycustom.pipe';

@NgModule({
  declarations: [
    EmployeeSalaryDetailsComponent,
    MypipePipe,
    CustomPipe, MycustomPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [EmployeeSalaryDetailsComponent,MycustomPipe]
})
export class EmployeehrModule { }
