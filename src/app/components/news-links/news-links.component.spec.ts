import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLinksComponent } from './news-links.component';

describe('NewsLinksComponent', () => {
  let component: NewsLinksComponent;
  let fixture: ComponentFixture<NewsLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsLinksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
