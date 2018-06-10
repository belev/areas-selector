import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasMapSelectorComponent } from './areas-map-selector.component';
import { TranslationService } from '../../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

describe('AreasMapSelectorComponent', () => {
  let component: AreasMapSelectorComponent;
  let fixture: ComponentFixture<AreasMapSelectorComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AreasMapSelectorComponent
      ],
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        TranslationService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreasMapSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
