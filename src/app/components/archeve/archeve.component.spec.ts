import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcheveComponent } from './archeve.component';

describe('ArcheveComponent', () => {
  let component: ArcheveComponent;
  let fixture: ComponentFixture<ArcheveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArcheveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArcheveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
