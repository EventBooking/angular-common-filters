/// <reference path="filters.ts"/>
module MomentFiltersModule {
    export interface ITimeRangeFilter {
        filter(start: any, end: any, options?: any): string
    }

    class TimeRangeFilter implements ITimeRangeFilter {
        filter(start, end, options) {
            if (start == null)
                return null;

            if (!options) options = {};
            options.hideDate = true;
            
            var mStart = moment(start);
            var mEnd = moment(end);
            if (mStart.isSame(mEnd))
                mEnd = mEnd.add(1, 'millisecond'); // bug in twix
                
            return mStart.twix(mEnd, options.allDay).format(options);
        }
    }

    app.filter('timerange', TimeRangeFilter);
}