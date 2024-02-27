import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section04PortfolioComponent } from './section04-portfolio.component';

describe('Section04PortfolioComponent', () => {
  let component: Section04PortfolioComponent;
  let fixture: ComponentFixture<Section04PortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section04PortfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section04PortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
