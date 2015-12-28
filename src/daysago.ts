module App.Filters {
    class DaysAgoFilter {
        constructor() {
            this.today = moment().startOf('day');
        }

        today;

        filter(date) {
            var compDate = moment(date);

            if (compDate.diff(this.today, 'days') === 0)
                return 'today';

            return compDate.from(this.today);
        }
    }

    app.filter('daysago', DaysAgoFilter);
}