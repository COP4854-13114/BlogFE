import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBlogEntryComponent } from './edit-blog-entry.component';

describe('EditBlogEntryComponent', () => {
  let component: EditBlogEntryComponent;
  let fixture: ComponentFixture<EditBlogEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBlogEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBlogEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
