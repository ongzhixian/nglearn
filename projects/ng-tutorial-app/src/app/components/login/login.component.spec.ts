import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../../modules/app-routing/app-routing.module';
import { StoreModule } from '@ngrx/store';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ 
        AppRoutingModule,
        StoreModule.forRoot({ 

        }), 
       ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
