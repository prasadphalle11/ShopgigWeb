/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Registration_Page } from './Registration_Page';

describe('Registration_PageComponent', () => {
  let component: Registration_Page;
  let fixture: ComponentFixture<Registration_Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registration_Page ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Registration_Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
