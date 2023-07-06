import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SintaxplSqlComponent } from './sintaxpl-sql.component';

describe('SintaxplSqlComponent', () => {
  let component: SintaxplSqlComponent;
  let fixture: ComponentFixture<SintaxplSqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SintaxplSqlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SintaxplSqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
