import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLanguageComponent } from './change-language.component';
import { TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

describe('ChangeLanguageComponent', () => {
  let component: ChangeLanguageComponent;
  let fixture: ComponentFixture<ChangeLanguageComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChangeLanguageComponent
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
    fixture = TestBed.createComponent(ChangeLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
