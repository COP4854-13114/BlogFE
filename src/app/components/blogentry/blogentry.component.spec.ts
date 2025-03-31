import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogentryComponent } from './blogentry.component';

describe('BlogentryComponent', () => {
  let component: BlogentryComponent;
  let fixture: ComponentFixture<BlogentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogentryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
