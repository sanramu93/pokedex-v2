import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeBadgeIconComponent } from './type-badge-icon.component';

describe('TypeBadgeIconComponent', () => {
  let component: TypeBadgeIconComponent;
  let fixture: ComponentFixture<TypeBadgeIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeBadgeIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeBadgeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
