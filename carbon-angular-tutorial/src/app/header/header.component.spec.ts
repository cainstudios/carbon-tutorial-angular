import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UIShellModule } from 'carbon-components-angular/ui-shell/ui-shell.module';
import Notification16 from '@carbon/icons/es/notification/16';
import UserAvatar16 from '@carbon/icons/es/user--avatar/16';
import AppSwitcher16 from '@carbon/icons/es/app-switcher/16';

import { HeaderComponent } from './header.component';
TestBed.configureTestingModule({
  declarations: [HeaderComponent],
  imports: [UIShellModule]
});

constructor(protected iconService: IconService) {
  iconService.registerAll([
    Notification16,
    UserAvatar16,
    AppSwitcher16
  ]);
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
