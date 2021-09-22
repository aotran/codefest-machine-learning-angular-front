import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParseApiComponent } from './parse-api.component';

describe('ParseApiComponent', () => {
  let component: ParseApiComponent;
  let fixture: ComponentFixture<ParseApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParseApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParseApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
