import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactRoutingModule } from './transact-routing.module';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { DeleteTransactionComponent } from './delete-transaction/delete-transaction.component';
import { ListTransactComponent } from './list-transact/list-transact.component';

@NgModule({
  declarations: [
    AddTransactionComponent,
    DeleteTransactionComponent,
    ListTransactComponent
  ],
  imports: [
    CommonModule,
    ClarityModule,
    TransactRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  
  ],
  exports: [
    AddTransactionComponent,
    DeleteTransactionComponent,
    ClarityModule
  ],
})
export class TransactModule { }