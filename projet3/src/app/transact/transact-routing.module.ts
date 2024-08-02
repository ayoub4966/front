import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { ListTransactComponent } from './list-transact/list-transact.component';

const routes: Routes = [
  {path:'add-transact',component:AddTransactionComponent},
  {path:'list-transact',component:ListTransactComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactRoutingModule { }
