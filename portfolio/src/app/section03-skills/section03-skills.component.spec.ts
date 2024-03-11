import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section03SkillsComponent } from './section03-skills.component';

describe('Section03SkillsComponent', () => {
  let component: Section03SkillsComponent;
  let fixture: ComponentFixture<Section03SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section03SkillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section03SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
