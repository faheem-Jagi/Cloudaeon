import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PrimengModule } from './primeng.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,    
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
  ]
})
export class SharedModule { }
