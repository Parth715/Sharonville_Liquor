import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagermainComponent } from './managermain.component';

describe('ManagermainComponent', () => {
  let component: ManagermainComponent;
  let fixture: ComponentFixture<ManagermainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagermainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagermainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
