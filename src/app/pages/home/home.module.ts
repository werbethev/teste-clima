import { ComponentsModule } from './../../shared/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HomePage } from './containers/home.page';
import { homeReducer } from './state/home.reducer';
import { HomeEffects } from './state/home.effects';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        StoreModule.forFeature('home', homeReducer),
        EffectsModule.forFeature([HomeEffects]),
        ComponentsModule,
    ],
    declarations: [
        HomePage,
        CurrentWeatherComponent,
    ],
})
export class HomeModule { }
