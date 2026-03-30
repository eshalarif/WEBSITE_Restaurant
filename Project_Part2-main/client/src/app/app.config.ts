import { ApplicationConfig, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [], // Remove the deprecated provideRouter and provideClientHydration
};

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Use RouterModule for route configuration
    // Other modules
  ],
})
export class AppModule {}