/*import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TranslateLoader } from '@ngx-translate/core'; // Neu importiert. Der gehört auch in app.config.ts

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync()]
}; */


import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpBackend, HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export const provideTranslation = () => ({
defaultLanguage: 'en',
loader: {
provide: TranslateLoader,
useFactory: HttpLoaderFactory,
deps: [HttpClient],
},
});

export function HttpLoaderFactory(http: HttpClient) {
return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
export const appConfig: ApplicationConfig = {
providers: [provideRouter(routes),provideAnimations(),provideHttpClient(),importProvidersFrom(HttpClientModule), importProvidersFrom([TranslateModule.forRoot(provideTranslation())
]),],

};

