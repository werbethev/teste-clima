import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { BookmarksModule } from './pages/bookmarks/bookmarks.module';
import { environment } from '../environments/environment';
import { CustomRouterSerializer } from './shared/state/router/router.reducer';
import { reducers } from './shared/state/app.reducer';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeModule,
        HttpClientModule,
        BookmarksModule,
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        EffectsModule.forRoot([]),
        StoreRouterConnectingModule.forRoot({ serializer: CustomRouterSerializer }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
