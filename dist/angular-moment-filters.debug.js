/// <reference path="../typings/tsd.d.ts"/>
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
    // filters
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
    // directives
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
/// <reference path="../typings/tsd.d.ts"/>
/// <reference path="../twix.d.ts"/>
/// <reference path="angular.ts"/>
var app = new MomentFiltersModule.Module("momentFilters", []);
/// <reference path="filters.ts"/>
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
                mEnd = mEnd.add(1, 'millisecond'); // bug in twix
            return mStart.twix(mEnd, options.allDay).format(options);
        };
        return DateRangeFilter;
    })();
    app.filter('daterange', DateRangeFilter);
})(MomentFiltersModule || (MomentFiltersModule = {}));
/// <reference path="filters.ts"/>
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
/// <reference path="filters.ts"/>
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
/// <reference path="filters.ts"/>
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
/// <reference path="filters.ts"/>
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
                mEnd = mEnd.add(1, 'millisecond'); // bug in twix
            return mStart.twix(mEnd, options.allDay).format(options);
        };
        return TimeRangeFilter;
    })();
    app.filter('timerange', TimeRangeFilter);
})(MomentFiltersModule || (MomentFiltersModule = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1tb21lbnQtZmlsdGVycy5kZWJ1Zy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tb21lbnQtZmlsdGVycy9hbmd1bGFyLnRzIiwiLi4vc3JjL21vbWVudC1maWx0ZXJzL2ZpbHRlcnMudHMiLCIuLi9zcmMvbW9tZW50LWZpbHRlcnMvZGF0ZXJhbmdlLnRzIiwiLi4vc3JjL21vbWVudC1maWx0ZXJzL2RheXNhZ28udHMiLCIuLi9zcmMvbW9tZW50LWZpbHRlcnMvbW9tZW50LnRzIiwiLi4vc3JjL21vbWVudC1maWx0ZXJzL3RpbWVhZ28udHMiLCIuLi9zcmMvbW9tZW50LWZpbHRlcnMvdGltZXJhbmdlLnRzIl0sIm5hbWVzIjpbIk1vbWVudEZpbHRlcnNNb2R1bGUiLCJNb21lbnRGaWx0ZXJzTW9kdWxlLk1vZHVsZSIsIk1vbWVudEZpbHRlcnNNb2R1bGUuTW9kdWxlLmNvbnN0cnVjdG9yIiwiTW9tZW50RmlsdGVyc01vZHVsZS5Nb2R1bGUuY29uZmlnIiwiTW9tZW50RmlsdGVyc01vZHVsZS5Nb2R1bGUucnVuIiwiTW9tZW50RmlsdGVyc01vZHVsZS5Nb2R1bGUuY29udHJvbGxlciIsIk1vbWVudEZpbHRlcnNNb2R1bGUuTW9kdWxlLmRpcmVjdGl2ZSIsIk1vbWVudEZpbHRlcnNNb2R1bGUuTW9kdWxlLmZpbHRlciIsIk1vbWVudEZpbHRlcnNNb2R1bGUuTW9kdWxlLnNlcnZpY2UiLCJNb21lbnRGaWx0ZXJzTW9kdWxlLk1vZHVsZS5wcm92aWRlciIsIk1vbWVudEZpbHRlcnNNb2R1bGUuTW9kdWxlLmZhY3RvcnkiLCJNb21lbnRGaWx0ZXJzTW9kdWxlLk1vZHVsZS5jb25zdGFudCIsIk1vbWVudEZpbHRlcnNNb2R1bGUuRmlsdGVyRmFjdG9yeSIsIk1vbWVudEZpbHRlcnNNb2R1bGUuRmlsdGVyRmFjdG9yeS5jb25zdHJ1Y3RvciIsIk1vbWVudEZpbHRlcnNNb2R1bGUuRmlsdGVyRmFjdG9yeS5jcmVhdGUiLCJNb21lbnRGaWx0ZXJzTW9kdWxlLkRpcmVjdGl2ZUZhY3RvcnkiLCJNb21lbnRGaWx0ZXJzTW9kdWxlLkRpcmVjdGl2ZUZhY3RvcnkuY29uc3RydWN0b3IiLCJNb21lbnRGaWx0ZXJzTW9kdWxlLkRpcmVjdGl2ZUZhY3RvcnkuY3JlYXRlIiwiTW9tZW50RmlsdGVyc01vZHVsZS5BY3RpdmF0b3IiLCJNb21lbnRGaWx0ZXJzTW9kdWxlLkFjdGl2YXRvci5jb25zdHJ1Y3RvciIsIk1vbWVudEZpbHRlcnNNb2R1bGUuQWN0aXZhdG9yLmNyZWF0ZSIsIk1vbWVudEZpbHRlcnNNb2R1bGUuRGF0ZVJhbmdlRmlsdGVyIiwiTW9tZW50RmlsdGVyc01vZHVsZS5EYXRlUmFuZ2VGaWx0ZXIuY29uc3RydWN0b3IiLCJNb21lbnRGaWx0ZXJzTW9kdWxlLkRhdGVSYW5nZUZpbHRlci5maWx0ZXIiLCJNb21lbnRGaWx0ZXJzTW9kdWxlLkRheXNBZ29GaWx0ZXIiLCJNb21lbnRGaWx0ZXJzTW9kdWxlLkRheXNBZ29GaWx0ZXIuY29uc3RydWN0b3IiLCJNb21lbnRGaWx0ZXJzTW9kdWxlLkRheXNBZ29GaWx0ZXIuZmlsdGVyIiwiTW9tZW50RmlsdGVyc01vZHVsZS5Nb21lbnRGaWx0ZXIiLCJNb21lbnRGaWx0ZXJzTW9kdWxlLk1vbWVudEZpbHRlci5jb25zdHJ1Y3RvciIsIk1vbWVudEZpbHRlcnNNb2R1bGUuTW9tZW50RmlsdGVyLmZpbHRlciIsIk1vbWVudEZpbHRlcnNNb2R1bGUuVGltZUFnb0ZpbHRlciIsIk1vbWVudEZpbHRlcnNNb2R1bGUuVGltZUFnb0ZpbHRlci5jb25zdHJ1Y3RvciIsIk1vbWVudEZpbHRlcnNNb2R1bGUuVGltZUFnb0ZpbHRlci5maWx0ZXIiLCJNb21lbnRGaWx0ZXJzTW9kdWxlLlRpbWVSYW5nZUZpbHRlciIsIk1vbWVudEZpbHRlcnNNb2R1bGUuVGltZVJhbmdlRmlsdGVyLmNvbnN0cnVjdG9yIiwiTW9tZW50RmlsdGVyc01vZHVsZS5UaW1lUmFuZ2VGaWx0ZXIuZmlsdGVyIl0sIm1hcHBpbmdzIjoi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QSxDQUFDQSxXQUFXQSxFQUFFQSxlQUFlQSxDQUFDQSxDQUFDQTtBQUM3Q0EsQ0FBQ0EsRUF2Qk0sbUJBQW1CLEtBQW5CLG1CQUFtQixRQXVCekIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy90c2QuZC50c1wiLz5cclxuXHJcbm1vZHVsZSBNb21lbnRGaWx0ZXJzTW9kdWxlIHtcclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElNb2R1bGUge1xyXG4gICAgICAgIGNvbmZpZyhhcHBDb25maWc6IEZ1bmN0aW9uKTogSU1vZHVsZTtcclxuICAgICAgICBydW4oYXBwUnVuOiBGdW5jdGlvbik6IElNb2R1bGU7XHJcbiAgICAgICAgY29udHJvbGxlcihuYW1lOiBzdHJpbmcsIGNvbnRyb2xsZXI6IEZ1bmN0aW9uKTogSU1vZHVsZTtcclxuICAgICAgICBkaXJlY3RpdmUobmFtZTogc3RyaW5nLCBkaXJlY3RpdmU6IGFueSk6IElNb2R1bGU7XHJcbiAgICAgICAgZmlsdGVyKG5hbWU6IHN0cmluZywgZmlsdGVyOiBhbnkpOiBJTW9kdWxlO1xyXG4gICAgICAgIHNlcnZpY2UobmFtZTogc3RyaW5nLCBzZXJ2aWNlOiBGdW5jdGlvbik6IElNb2R1bGU7XHJcbiAgICAgICAgcHJvdmlkZXIobmFtZTogc3RyaW5nLCBwcm92aWRlcjogYW55KTogSU1vZHVsZTtcclxuICAgICAgICBmYWN0b3J5KG5hbWU6IHN0cmluZywgZmFjdG9yeTogRnVuY3Rpb24pOiBJTW9kdWxlO1xyXG4gICAgICAgIGNvbnN0YW50KG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IElNb2R1bGU7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIE1vZHVsZSBpbXBsZW1lbnRzIElNb2R1bGUge1xyXG4gICAgICAgIHByaXZhdGUgbW9kdWxlOiBuZy5JTW9kdWxlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbW9kdWxlcz86IHN0cmluZ1tdLCBjb25maWc/OiBGdW5jdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKG5hbWUsIG1vZHVsZXMsIGNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25maWcoYXBwQ29uZmlnOiBGdW5jdGlvbik6IElNb2R1bGUge1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZS5jb25maWcoYXBwQ29uZmlnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBydW4oYXBwUnVuOiBGdW5jdGlvbik6IElNb2R1bGUge1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZS5ydW4oYXBwUnVuKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb250cm9sbGVyKG5hbWU6IHN0cmluZywgY29udHJvbGxlcjogRnVuY3Rpb24pOiBJTW9kdWxlIHtcclxuICAgICAgICAgICAgdGhpcy5tb2R1bGUuY29udHJvbGxlcihuYW1lLCBjb250cm9sbGVyKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXJlY3RpdmUobmFtZTogc3RyaW5nLCBkaXJlY3RpdmUpOiBJTW9kdWxlIHtcclxuICAgICAgICAgICAgdGhpcy5tb2R1bGUuZGlyZWN0aXZlKG5hbWUsIERpcmVjdGl2ZUZhY3RvcnkuY3JlYXRlKGRpcmVjdGl2ZSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZpbHRlcihuYW1lOiBzdHJpbmcsIGZpbHRlcik6IElNb2R1bGUge1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZS5maWx0ZXIobmFtZSwgRmlsdGVyRmFjdG9yeS5jcmVhdGUoZmlsdGVyKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VydmljZShuYW1lOiBzdHJpbmcsIHNlcnZpY2U6IEZ1bmN0aW9uKTogSU1vZHVsZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kdWxlLnNlcnZpY2UobmFtZSwgc2VydmljZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdmlkZXIobmFtZTogc3RyaW5nLCBwcm92aWRlcik6IElNb2R1bGUge1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZS5wcm92aWRlcihuYW1lLCBwcm92aWRlcik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmFjdG9yeShuYW1lOiBzdHJpbmcsIGZhY3Rvcnk6IEZ1bmN0aW9uKTogSU1vZHVsZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kdWxlLmZhY3RvcnkobmFtZSwgZmFjdG9yeSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3RhbnQobmFtZTogc3RyaW5nLCB2YWx1ZSk6IElNb2R1bGUge1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZS5jb25zdGFudChuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBmaWx0ZXJzXHJcbiAgICBjbGFzcyBGaWx0ZXJGYWN0b3J5IHtcclxuICAgICAgICBzdGF0aWMgY3JlYXRlKHR5cGU6IElBY3RpdmF0b3JDbGFzcyk6IGFueSB7XHJcbiAgICAgICAgICAgIHZhciBmaWx0ZXIgPSAoLi4uaW5qZWN0OiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gQWN0aXZhdG9yLmNyZWF0ZSh0eXBlLCBpbmplY3QpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICguLi5vcHRpb25zOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5maWx0ZXIuYXBwbHkoaW5zdGFuY2UsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZmlsdGVyW1wiJGluamVjdFwiXSA9IHR5cGVbXCIkaW5qZWN0XCJdO1xyXG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBkaXJlY3RpdmVzXHJcbiAgICBjbGFzcyBEaXJlY3RpdmVGYWN0b3J5IHtcclxuICAgICAgICBzdGF0aWMgY3JlYXRlKHR5cGU6IElBY3RpdmF0b3JDbGFzcyk6IGFueSB7XHJcbiAgICAgICAgICAgIHZhciBkaXJlY3RpdmUgPSAoLi4uaW5qZWN0OiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEFjdGl2YXRvci5jcmVhdGUodHlwZSwgaW5qZWN0KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZGlyZWN0aXZlW1wiJGluamVjdFwiXSA9IHR5cGVbXCIkaW5qZWN0XCJdO1xyXG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aXZlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBhY3RpdmF0b3JcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUFjdGl2YXRvckNsYXNzIHtcclxuICAgICAgICBuZXcoLi4ucGFyYW1zOiBhbnlbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3MgQWN0aXZhdG9yIHtcclxuICAgICAgICBzdGF0aWMgY3JlYXRlKHR5cGU6IElBY3RpdmF0b3JDbGFzcywgcGFyYW1zOiBhbnlbXSkge1xyXG4gICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSBPYmplY3QuY3JlYXRlKHR5cGUucHJvdG90eXBlKTtcclxuICAgICAgICAgICAgaW5zdGFuY2UuY29uc3RydWN0b3IuYXBwbHkoaW5zdGFuY2UsIHBhcmFtcyk7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy90c2QuZC50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R3aXguZC50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImFuZ3VsYXIudHNcIi8+XHJcbnZhciBhcHAgPSBuZXcgTW9tZW50RmlsdGVyc01vZHVsZS5Nb2R1bGUoXCJtb21lbnRGaWx0ZXJzXCIsIFtdKTsiLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiZmlsdGVycy50c1wiLz5cclxubW9kdWxlIE1vbWVudEZpbHRlcnNNb2R1bGUge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJRGF0ZVJhbmdlRmlsdGVyIHtcclxuICAgICAgICBmaWx0ZXIoc3RhcnQ6IGFueSwgZW5kOiBhbnksIG9wdGlvbnM/OiBhbnkpOiBzdHJpbmdcclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBEYXRlUmFuZ2VGaWx0ZXIgaW1wbGVtZW50cyBJRGF0ZVJhbmdlRmlsdGVyIHtcclxuICAgICAgICBmaWx0ZXIoc3RhcnQsIGVuZCwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAoc3RhcnQgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XHJcblxyXG4gICAgICAgICAgICB2YXIgbVN0YXJ0ID0gbW9tZW50KHN0YXJ0KTtcclxuICAgICAgICAgICAgdmFyIG1FbmQgPSBtb21lbnQoZW5kKTtcclxuICAgICAgICAgICAgaWYgKG1TdGFydC5pc1NhbWUobUVuZCkpXHJcbiAgICAgICAgICAgICAgICBtRW5kID0gbUVuZC5hZGQoMSwgJ21pbGxpc2Vjb25kJyk7IC8vIGJ1ZyBpbiB0d2l4XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIG1TdGFydC50d2l4KG1FbmQsIG9wdGlvbnMuYWxsRGF5KS5mb3JtYXQob3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFwcC5maWx0ZXIoJ2RhdGVyYW5nZScsIERhdGVSYW5nZUZpbHRlcik7XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiZmlsdGVycy50c1wiLz5cclxubW9kdWxlIE1vbWVudEZpbHRlcnNNb2R1bGUge1xyXG4gICAgY2xhc3MgRGF5c0Fnb0ZpbHRlciB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9kYXkgPSBtb21lbnQoKS5zdGFydE9mKCdkYXknKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRvZGF5O1xyXG5cclxuICAgICAgICBmaWx0ZXIoZGF0ZSkge1xyXG4gICAgICAgICAgICB2YXIgY29tcERhdGUgPSBtb21lbnQoZGF0ZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29tcERhdGUuZGlmZih0aGlzLnRvZGF5LCAnZGF5cycpID09PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICd0b2RheSc7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29tcERhdGUuZnJvbSh0aGlzLnRvZGF5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXBwLmZpbHRlcignZGF5c2FnbycsIERheXNBZ29GaWx0ZXIpO1xyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImZpbHRlcnMudHNcIi8+XHJcbm1vZHVsZSBNb21lbnRGaWx0ZXJzTW9kdWxlIHtcclxuICAgIGNsYXNzIE1vbWVudEZpbHRlciB7XHJcbiAgICAgICAgZmlsdGVyKGRhdGUsIGZvcm1hdCwgcGF0dGVybikge1xyXG4gICAgICAgICAgICBpZiAoZGF0ZSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibm8gZGF0ZVwiO1xyXG4gICAgICAgICAgICByZXR1cm4gbW9tZW50KGRhdGUsIHBhdHRlcm4pLmZvcm1hdChmb3JtYXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhcHAuZmlsdGVyKCdtb21lbnQnLCBNb21lbnRGaWx0ZXIpO1xyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImZpbHRlcnMudHNcIi8+XHJcbm1vZHVsZSBNb21lbnRGaWx0ZXJzTW9kdWxlIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVRpbWVBZ29GaWx0ZXIge1xyXG4gICAgICAgIGZpbHRlcihkYXRlOiBhbnkpOiBzdHJpbmdcclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBUaW1lQWdvRmlsdGVyIGltcGxlbWVudHMgSVRpbWVBZ29GaWx0ZXIge1xyXG4gICAgICAgIGZpbHRlcihkYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtb21lbnQoZGF0ZSkuZnJvbU5vdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhcHAuZmlsdGVyKCd0aW1lYWdvJywgVGltZUFnb0ZpbHRlcik7XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiZmlsdGVycy50c1wiLz5cclxubW9kdWxlIE1vbWVudEZpbHRlcnNNb2R1bGUge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJVGltZVJhbmdlRmlsdGVyIHtcclxuICAgICAgICBmaWx0ZXIoc3RhcnQ6IGFueSwgZW5kOiBhbnksIG9wdGlvbnM/OiBhbnkpOiBzdHJpbmdcclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBUaW1lUmFuZ2VGaWx0ZXIgaW1wbGVtZW50cyBJVGltZVJhbmdlRmlsdGVyIHtcclxuICAgICAgICBmaWx0ZXIoc3RhcnQsIGVuZCwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAoc3RhcnQgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XHJcbiAgICAgICAgICAgIG9wdGlvbnMuaGlkZURhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIG1TdGFydCA9IG1vbWVudChzdGFydCk7XHJcbiAgICAgICAgICAgIHZhciBtRW5kID0gbW9tZW50KGVuZCk7XHJcbiAgICAgICAgICAgIGlmIChtU3RhcnQuaXNTYW1lKG1FbmQpKVxyXG4gICAgICAgICAgICAgICAgbUVuZCA9IG1FbmQuYWRkKDEsICdtaWxsaXNlY29uZCcpOyAvLyBidWcgaW4gdHdpeFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBtU3RhcnQudHdpeChtRW5kLCBvcHRpb25zLmFsbERheSkuZm9ybWF0KG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhcHAuZmlsdGVyKCd0aW1lcmFuZ2UnLCBUaW1lUmFuZ2VGaWx0ZXIpO1xyXG59Il19