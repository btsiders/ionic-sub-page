import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Thing1Page } from './home.page';

describe('Thing1Page', () => {
  let component: Thing1Page;
  let fixture: ComponentFixture<Thing1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Thing1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Thing1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
