/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Registration_PageComponent } from './Registration_Page.component';

describe('Registration_PageComponent', () => {
  let component: Registration_PageComponent;
  let fixture: ComponentFixture<Registration_PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registration_PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Registration_PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
