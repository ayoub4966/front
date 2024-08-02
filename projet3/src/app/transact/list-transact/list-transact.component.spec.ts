import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTransactComponent } from './list-transact.component';

describe('ListTransactComponent', () => {
  let component: ListTransactComponent;
  let fixture: ComponentFixture<ListTransactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTransactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTransactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
