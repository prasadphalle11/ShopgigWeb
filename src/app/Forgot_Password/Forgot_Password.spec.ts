/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Forgot_Password} from './Forgot_Password';

describe('Forgot_Password', () => {
  let component: Forgot_Password;
  let fixture: ComponentFixture<Forgot_Password>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forgot_Password ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Forgot_Password);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
