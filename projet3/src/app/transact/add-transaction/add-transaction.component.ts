import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent {
  form!: FormGroup;
  beneficiaries = [
    { id: 1, name: 'Bénéficiaire 1' },
    { id: 2, name: 'Bénéficiaire 2' },
    { id: 3, name: 'Bénéficiaire 3' },
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      transaction: this.fb.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
      }),
      beneficiary: this.fb.group({
        beneficiary: ['', Validators.required],
      }),
      amount: this.fb.group({
        amount: ['', [Validators.required, Validators.min(0.01)]],
        paymentType: ['', Validators.required],
      })
    });
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.log('Formulaire invalide');
    }
  }
}
