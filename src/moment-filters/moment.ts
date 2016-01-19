/// <reference path="filters.ts"/>
module MomentFiltersModule {
    class MomentFilter {
        filter(date, format, pattern) {
            if (date == null)
                return "no date";
            return moment(date, pattern).format(format);
        }
    }

    app.filter('moment', MomentFilter);
}