import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HuntDetailPage } from './hunt-detail.page';

describe('HuntDetailPage', () => {
  let component: HuntDetailPage;
  let fixture: ComponentFixture<HuntDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuntDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HuntDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
