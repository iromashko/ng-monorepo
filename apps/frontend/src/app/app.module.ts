import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'home-feature',
          loadChildren: () =>
            import('@monorepo3/home/feature').then(
              (module) => module.HomeFeatureModule
            ),
        },
      ],
      { initialNavigation: 'enabled', relativeLinkResolution: 'legacy' }
    ),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
