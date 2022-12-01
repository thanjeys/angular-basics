import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module2componentComponent } from './module2component.component';

describe('Module2componentComponent', () => {
  let component: Module2componentComponent;
  let fixture: ComponentFixture<Module2componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Module2componentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Module2componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
