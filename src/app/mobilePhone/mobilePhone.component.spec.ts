import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePhoneComponent } from './mobilePhone.component';

describe('MobilePhoneComponent', () => {
  let component: MobilePhoneComponent;
  let fixture: ComponentFixture<MobilePhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilePhoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobilePhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
