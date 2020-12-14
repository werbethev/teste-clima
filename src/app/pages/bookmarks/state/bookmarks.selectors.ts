import { createFeatureSelector, createSelector } from '@ngrx/store';

import { BookmarksState } from './bookmarks.reducer';

export const selectBookmarksState: any = createFeatureSelector('bookmarks');

export const selectBookmarksList = createSelector(
    selectBookmarksState,
    (bookmarksState: BookmarksState) => bookmarksState.list,
);
