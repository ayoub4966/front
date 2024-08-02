import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-transact',
  templateUrl: './list-transact.component.html',
  styleUrls: ['./list-transact.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate('0.5s ease-in')
      ])
    ])
  ]
})
export class ListTransactComponent  {
  transactions = [
    { title: 'Transaction 1', description: 'Description de la transaction 1', beneficiary: 'Bénéficiaire 1', amount: 100.00, paymentType: 'Carte de crédit' },
    { title: 'Transaction 2', description: 'Description de la transaction 2', beneficiary: 'Bénéficiaire 2', amount: 200.00, paymentType: 'PayPal' },
    { title: 'Transaction 3', description: 'Description de la transaction 3', beneficiary: 'Bénéficiaire 3', amount: 300.00, paymentType: 'PayPal' }
  ];

  selectedTransaction: any;
  showModalDelete: boolean = false;
  showModalModify: boolean = false;
  showMore: boolean = false;

  toggleShowMore() {
    this.showMore = !this.showMore;
  }

  selectTransaction(transaction: any) {
    this.selectedTransaction = transaction;
  }

  onDelete() {
    if (this.selectedTransaction) {
      console.log('Delete action triggered for transaction:', this.selectedTransaction);
      this.showModalDelete = true;
    } else {
      console.log('No transaction selected for deletion');
    }
  }

  onModify() {
    if (this.selectedTransaction) {
      console.log('Modify action triggered for transaction:', this.selectedTransaction);
      this.showModalModify = true;
    } else {
      console.log('No transaction selected for modification');
    }
  }

  cancelDeleteAction() {
    this.showModalDelete = false;
  }

  confirmDelete() {
    if (this.selectedTransaction) {
      console.log('Delete action confirmed for transaction:', this.selectedTransaction);
      this.transactions = this.transactions.filter(t => t !== this.selectedTransaction);
      this.showModalDelete = false;
      this.selectedTransaction = null;
    }
  }

  cancelModifyAction() {
    this.showModalModify = false;
  }

  confirmModify() {
    if (this.selectedTransaction) {
      console.log('Modify action confirmed for transaction:', this.selectedTransaction);
      this.showModalModify = false;
    }
  }
}
