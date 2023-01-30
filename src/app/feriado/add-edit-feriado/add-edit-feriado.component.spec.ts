import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFeriadoComponent } from './add-edit-feriado.component';

describe('AddEditFeriadoComponent', () => {
  let component: AddEditFeriadoComponent;
  let fixture: ComponentFixture<AddEditFeriadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditFeriadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditFeriadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
