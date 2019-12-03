import { AppRoutingModule, routes } from './app-routing.module';
import { KlimModuleModule } from './views/klim-module/klim-module.module';
import { ModuleInstanceModule } from './views/module-instance/module-instance.module';
import { Location} from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DrawerComponent } from './views/navigation/drawer/drawer.component';
import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { UserModule } from './views/user/user.module';
import { Router, RouterModule } from '@angular/router';

describe('AppComponent', () => {

  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes), MaterialModule, HttpClientTestingModule, UserModule, KlimModuleModule, ModuleInstanceModule
      ],
      declarations: [
        AppComponent, DrawerComponent
      ]
    }).compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  }));

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should redirect to logincomponent', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/User/Login');
  }))
});
