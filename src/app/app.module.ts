import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UiModule} from './ui/ui.module';
import {RouterModule, Routes} from '@angular/router';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faFacebookSquare, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faArrowCircleLeft, faBold, faSquare, faTrash} from '@fortawesome/free-solid-svg-icons';
import {HomeScreenComponent} from './screens/home-screen/home-screen.component';
import {CommonModule} from '@angular/common';
import {AboutScreenComponent} from './screens/about-screen/about-screen.component';
import {BrowserModule} from '@angular/platform-browser';
import {ContactScreenComponent} from './screens/contact-screen/contact-screen.component';
import {HeaderBarComponent} from './header-bar/header-bar.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PhoneMaskDirective} from './phone-mask.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormErrorMessageComponent} from './form-error-message/form-error-message.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AdminLoginComponent} from './screens/admin/admin-login/admin-login.component';
import {ImageUploadComponent} from './screens/admin/image-upload/image-upload.component';
import {AuthGuard} from './_guards/auth.guard';
import {FileUploadModule} from 'ng2-file-upload';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MediaPreviewDirective} from './_directives/media-preview.directive';
import {HttpConfigInterceptor} from './_interceptor/http-config-interceptor';
import {BalloonGalleryComponent} from './screens/balloon-gallery/balloon-gallery.component';
import {GraphicsGalleryComponent} from './screens/graphics-gallery/graphics-gallery.component';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import {SingleGalleryComponent} from './screens/single-gallery/single-gallery.component';
import {LightboxModule} from 'ngx-lightbox';
import {ImageSortingComponent} from './screens/admin/image-sorting/image-sorting.component';
import {AlertModule, ModalModule} from 'ngx-bootstrap';
import {ConfirmationModalComponent} from './confirmation-modal/confirmation-modal.component';

const appRoutes: Routes = [
  {path: 'about', component: AboutScreenComponent},
  {path: 'home', component: HomeScreenComponent},
  {path: 'contact-us', component: ContactScreenComponent},
  {path: 'balloon-gallery', component: BalloonGalleryComponent},
  {path: 'graphics-gallery/:type', component: GraphicsGalleryComponent},
  {path: 'gallery/:type', component: SingleGalleryComponent},
  {path: 'admin-upload', component: ImageUploadComponent, canActivate: [AuthGuard]},
  {path: 'admin-sort', component: ImageSortingComponent, canActivate: [AuthGuard]},
  {path: 'admin-login', component: AdminLoginComponent},
  {path: '**', redirectTo: 'home'}
];

// noinspection AngularInvalidImportedOrDeclaredSymbol
@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    AboutScreenComponent,
    ContactScreenComponent,
    HeaderBarComponent,
    PhoneMaskDirective,
    FormErrorMessageComponent,
    AdminLoginComponent,
    ImageUploadComponent,
    MediaPreviewDirective,
    BalloonGalleryComponent,
    GraphicsGalleryComponent,
    SingleGalleryComponent,
    ImageSortingComponent,
    ConfirmationModalComponent
  ],
  imports: [
    UiModule,
    RouterModule.forRoot(
      appRoutes
    ),
    CommonModule,
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule,
    FileUploadModule,
    FontAwesomeModule,
    FormsModule,
    LazyLoadImageModule,
    LightboxModule,
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true}],
  bootstrap: [AppComponent],
  exports: [PhoneMaskDirective],
  entryComponents: [ConfirmationModalComponent]
})
export class AppModule {

  constructor() {
    library.add(faSquare, faFacebookSquare, faBold, faInstagram, faTrash, faArrowCircleLeft);
  }
}
