import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShinyPage } from './shiny.page';

describe('ShinyPage', () => {
  let component: ShinyPage;
  let fixture: ComponentFixture<ShinyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShinyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShinyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
