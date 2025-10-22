import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modelo } from './modelo';

describe('Modelo', () => {
  let component: Modelo;
  let fixture: ComponentFixture<Modelo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modelo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modelo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
