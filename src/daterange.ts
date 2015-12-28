module App.Filters {
    export interface IDateRangeFilter {
        filter(start: any, end: any, options?: any): string
    }

    class DateRangeFilter implements IDateRangeFilter {
        filter(start, end, options) {
            if (start == null)
                return null;

            if (!options) options = {};
            return moment(start).twix(end, options.allDay).format(options);
        }
    }

    app.filter('daterange', DateRangeFilter);
}