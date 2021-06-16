import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmPopupModule } from 'primeng/confirmpopup';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    TableModule,
    ButtonModule,
    ToastModule,
    DialogModule,
    ConfirmDialogModule,
    InputTextModule,    
    ConfirmPopupModule
  ],
  exports: [
    TableModule,
    CardModule,
    ButtonModule,
    ToastModule,
    DialogModule,
    ConfirmDialogModule,
    InputTextModule,    
    ConfirmPopupModule
  ]
})
export class PrimengModule { }
