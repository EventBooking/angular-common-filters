/// <reference path="filters.ts"/>
module MomentFiltersModule {
    export interface ITimeAgoFilter {
        filter(date: any): string
    }

    class TimeAgoFilter implements ITimeAgoFilter {
        filter(date) {
            return moment(date).fromNow();
        }
    }

    app.filter('timeago', TimeAgoFilter);
}