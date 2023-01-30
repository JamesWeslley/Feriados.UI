import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFeriadoComponent } from './show-feriado.component';

describe('ShowFeriadoComponent', () => {
  let component: ShowFeriadoComponent;
  let fixture: ComponentFixture<ShowFeriadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFeriadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowFeriadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
