/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LogINComponent } from './LogIN.component';

describe('LogINComponent', () => {
  let component: LogINComponent;
  let fixture: ComponentFixture<LogINComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogINComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
