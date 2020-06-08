import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemeOneComponent } from './themes/theme-one/theme-one.component';
import { ThemeTwoComponent } from './themes/theme-two/theme-two.component';
import { ThemeThreeComponent } from './themes/theme-three/theme-three.component';
import { ThemeFourComponent } from './themes/theme-four/theme-four.component';
import { ThemeFiveComponent } from './themes/theme-five/theme-five.component';
import { ThemeSixComponent } from './themes/theme-six/theme-six.component';
import { PricingComponent } from './components/inner-pages/pricing/pricing.component';
import { DownloadPageComponent } from './components/inner-pages/download-page/download-page.component';
import { SubscribePageComponent } from './components/inner-pages/subscribe-page/subscribe-page.component';
import { ThankYouComponent } from './components/inner-pages/thank-you/thank-you.component';
import { ComingSoonComponent } from './components/inner-pages/coming-soon/coming-soon.component';
import { ErrorComponent } from './components/inner-pages/error/error.component';
import { BlogTwoColumnComponent } from './components/blogs/blog-two-column/blog-two-column.component';
import { BlogThreeColumnComponent } from './components/blogs/blog-three-column/blog-three-column.component';
import { BlogLeftSidebarComponent } from './components/blogs/blog-left-sidebar/blog-left-sidebar.component';
import { BlogRightSidebarComponent } from './components/blogs/blog-right-sidebar/blog-right-sidebar.component';
import { BlogDetailsLeftSidebarComponent } from './components/blogs/blog-details-left-sidebar/blog-details-left-sidebar.component';
import { BlogDetailsRightSidebarComponent } from './components/blogs/blog-details-right-sidebar/blog-details-right-sidebar.component';
import { LoginComponent } from './components/accounts/login/login.component';
import { SignupComponent } from './components/accounts/signup/signup.component';
import { ResetComponent } from './components/accounts/reset/reset.component';
import { ReviewPageComponent } from './components/inner-pages/review-page/review-page.component';
import { FaqPageComponent } from './components/inner-pages/faq-page/faq-page.component';
import { ContactPageComponent } from './components/inner-pages/contact-page/contact-page.component';
import { TerminosComponent } from './components/inner-pages/terminos/terminos.component';

const routes: Routes = [
  {path: '', component: ThemeThreeComponent},
  // {path: 'theme-two', component: ThemeTwoComponent},
  {path: 'inicio', component: ThemeThreeComponent},
  // {path: 'theme-four', component: ThemeFourComponent},
  // {path: 'theme-five', component: ThemeFiveComponent},
  // {path: 'theme-six', component: ThemeSixComponent},
  {path: 'ingreso-usuario', component: PricingComponent},
  {path: 'descargala', component: DownloadPageComponent},
  {path: 'subscribe', component: SubscribePageComponent},
  // {path: 'thank-you', component: ThankYouComponent},
  // {path: 'coming-soon', component: ComingSoonComponent},
  {path: 'error', component: ErrorComponent},
  // {path: 'blog-two-column', component: BlogTwoColumnComponent},
  // {path: 'blog-three-column', component: BlogThreeColumnComponent},
  // {path: 'blog-left-sidebar', component: BlogLeftSidebarComponent},
  // {path: 'blog-right-sidebar', component: BlogRightSidebarComponent},
  // {path: 'blog-details-left-sidebar', component: BlogDetailsLeftSidebarComponent},
  // {path: 'blog-details-right-sidebar', component: BlogDetailsRightSidebarComponent},
  {path: 'inicio-sesion', component: LoginComponent},
  {path: 'registro', component: SignupComponent},
  // {path: 'reset', component: ResetComponent},
  // {path: 'reviews', component: ReviewPageComponent},
  {path: 'politica-privacidad', component: FaqPageComponent},
  {path: 'terminos-condiciones', component: TerminosComponent},
  // {path: 'contact', component: ContactPageComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
