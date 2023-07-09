import { TeamComponent } from './../team/team.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [TeamComponent],
  exports:[TeamComponent],
  imports: [
    CommonModule
  ]
})
export class CustomModule { }
