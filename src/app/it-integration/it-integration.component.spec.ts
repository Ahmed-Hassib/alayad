import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItIntegrationComponent } from './it-integration.component';

describe('ItIntegrationComponent', () => {
  let component: ItIntegrationComponent;
  let fixture: ComponentFixture<ItIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItIntegrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
