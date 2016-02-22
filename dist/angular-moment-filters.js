var MomentFiltersModule;
(function (MomentFiltersModule) {
    var Module = (function () {
        function Module(name, modules, config) {
            this.module = angular.module(name, modules, config);
        }
        Module.prototype.config = function (appConfig) {
            this.module.config(appConfig);
            return this;
        };
        Module.prototype.run = function (appRun) {
            this.module.run(appRun);
            return this;
        };
        Module.prototype.controller = function (name, controller) {
            this.module.controller(name, controller);
            return this;
        };
        Module.prototype.directive = function (name, directive) {
            this.module.directive(name, DirectiveFactory.create(directive));
            return this;
        };
        Module.prototype.filter = function (name, filter) {
            this.module.filter(name, FilterFactory.create(filter));
            return this;
        };
        Module.prototype.service = function (name, service) {
            this.module.service(name, service);
            return this;
        };
        Module.prototype.provider = function (name, provider) {
            this.module.provider(name, provider);
            return this;
        };
        Module.prototype.factory = function (name, factory) {
            this.module.factory(name, factory);
            return this;
        };
        Module.prototype.constant = function (name, value) {
            this.module.constant(name, value);
            return this;
        };
        return Module;
    })();
    MomentFiltersModule.Module = Module;
    var FilterFactory = (function () {
        function FilterFactory() {
        }
        FilterFactory.create = function (type) {
            var filter = function () {
                var inject = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    inject[_i - 0] = arguments[_i];
                }
                var instance = Activator.create(type, inject);
                return function () {
                    var options = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        options[_i - 0] = arguments[_i];
                    }
                    return instance.filter.apply(instance, options);
                };
            };
            filter["$inject"] = type["$inject"];
            return filter;
        };
        return FilterFactory;
    })();
    var DirectiveFactory = (function () {
        function DirectiveFactory() {
        }
        DirectiveFactory.create = function (type) {
            var directive = function () {
                var inject = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    inject[_i - 0] = arguments[_i];
                }
                return Activator.create(type, inject);
            };
            directive["$inject"] = type["$inject"];
            return directive;
        };
        return DirectiveFactory;
    })();
    var Activator = (function () {
        function Activator() {
        }
        Activator.create = function (type, params) {
            var instance = Object.create(type.prototype);
            instance.constructor.apply(instance, params);
            return instance;
        };
        return Activator;
    })();
})(MomentFiltersModule || (MomentFiltersModule = {}));
var app = new MomentFiltersModule.Module("momentFilters", []);
var MomentFiltersModule;
(function (MomentFiltersModule) {
    var DateRangeFilter = (function () {
        function DateRangeFilter() {
        }
        DateRangeFilter.prototype.filter = function (start, end, options) {
            if (start == null)
                return null;
            if (!options)
                options = {};
            var mStart = moment(start);
            var mEnd = moment(end);
            if (mStart.isSame(mEnd))
                mEnd = mEnd.add(1, 'millisecond'); 
            return mStart.twix(mEnd, options.allDay).format(options);
        };
        return DateRangeFilter;
    })();
    app.filter('daterange', DateRangeFilter);
})(MomentFiltersModule || (MomentFiltersModule = {}));
var MomentFiltersModule;
(function (MomentFiltersModule) {
    var DaysAgoFilter = (function () {
        function DaysAgoFilter() {
            this.today = moment().startOf('day');
        }
        DaysAgoFilter.prototype.filter = function (date) {
            var compDate = moment(date);
            if (compDate.diff(this.today, 'days') === 0)
                return 'today';
            return compDate.from(this.today);
        };
        return DaysAgoFilter;
    })();
    app.filter('daysago', DaysAgoFilter);
})(MomentFiltersModule || (MomentFiltersModule = {}));
var MomentFiltersModule;
(function (MomentFiltersModule) {
    var MomentFilter = (function () {
        function MomentFilter() {
        }
        MomentFilter.prototype.filter = function (date, format, pattern) {
            if (date == null)
                return "no date";
            return moment(date, pattern).format(format);
        };
        return MomentFilter;
    })();
    app.filter('moment', MomentFilter);
})(MomentFiltersModule || (MomentFiltersModule = {}));
var MomentFiltersModule;
(function (MomentFiltersModule) {
    var TimeAgoFilter = (function () {
        function TimeAgoFilter() {
        }
        TimeAgoFilter.prototype.filter = function (date) {
            return moment(date).fromNow();
        };
        return TimeAgoFilter;
    })();
    app.filter('timeago', TimeAgoFilter);
})(MomentFiltersModule || (MomentFiltersModule = {}));
var MomentFiltersModule;
(function (MomentFiltersModule) {
    var TimeRangeFilter = (function () {
        function TimeRangeFilter() {
        }
        TimeRangeFilter.prototype.filter = function (start, end, options) {
            if (start == null)
                return null;
            if (!options)
                options = {};
            options.hideDate = true;
            var mStart = moment(start);
            var mEnd = moment(end);
            if (mStart.isSame(mEnd))
                mEnd = mEnd.add(1, 'millisecond'); 
            return mStart.twix(mEnd, options.allDay).format(options);
        };
        return TimeRangeFilter;
    })();
    app.filter('timerange', TimeRangeFilter);
})(MomentFiltersModule || (MomentFiltersModule = {}));
