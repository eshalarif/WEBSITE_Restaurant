// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  // Your route configurations
];

// app.config.ts
import { ApplicationConfig, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes'; // Import routes from the appropriate file
import { BrowserModule } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [],
};

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    // Other modules
  ],
})
export class AppModule {}