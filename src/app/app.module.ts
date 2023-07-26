import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { MenuOptionComponent } from './components/shared/menu-option/menu-option.component';
import { LevelsComponent } from './components/levels/levels.component';
import { GuideComponent } from './components/guide/guide.component';
import { GuideItemComponent } from './components/shared/guide-item/guide-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    CategoriesComponent,
    MenuOptionComponent,
    LevelsComponent,
    GuideComponent,
    GuideItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
