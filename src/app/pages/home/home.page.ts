import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromHomeActions from './state/home.actions';
import * as fromHomeSelectors from './state/home.selectors';
import { CityWeather } from 'src/app/shared/models/weather.model';

@Component({
    selector: 'jv-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
    cityWeather$: Observable<CityWeather>;
    error$: Observable<boolean>;
    loading$: Observable<boolean>;
    searchControl: FormControl;
    text: string;

    constructor(private store: Store) {
    }

    ngOnInit() {
        this.searchControl = new FormControl('', Validators.required);

        this.cityWeather$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeather));
        this.error$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeather));
        this.loading$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeather));
    }

    doSearch() {
        const query = this.searchControl.value;
        this.store.dispatch(fromHomeActions.loadCurrentWeather({ query }))
    }
}
