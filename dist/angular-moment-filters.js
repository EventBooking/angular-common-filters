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
            return moment(start).twix(end, options.allDay).format(options);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1tb21lbnQtZmlsdGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tb21lbnQtZmlsdGVycy9hbmd1bGFyLnRzIiwiLi4vc3JjL21vbWVudC1maWx0ZXJzL2ZpbHRlcnMudHMiLCIuLi9zcmMvbW9tZW50LWZpbHRlcnMvZGF0ZXJhbmdlLnRzIiwiLi4vc3JjL21vbWVudC1maWx0ZXJzL2RheXNhZ28udHMiLCIuLi9zcmMvbW9tZW50LWZpbHRlcnMvbW9tZW50LnRzIiwiLi4vc3JjL21vbWVudC1maWx0ZXJzL3RpbWVhZ28udHMiXSwibmFtZXMiOlsiTW9tZW50RmlsdGVyc01vZHVsZSIsIk1vbWVudEZpbHRlcnNNb2R1bGUuTW9kdWxlIiwiTW9tZW50RmlsdGVyc01vZHVsZS5Nb2R1bGUuY29uc3RydWN0b3IiLCJNb21lbnRGaWx0ZXJzTW9kdWxlLk1vZHVsZS5jb25maWciLCJNb21lbnRGaWx0ZXJzTW9kdWxlLk1vZHVsZS5ydW4iLCJNb21lbnRGaWx0ZXJzTW9kdWxlLk1vZHVsZS5jb250cm9sbGVyIiwiTW9tZW50RmlsdGVyc01vZHVsZS5Nb2R1bGUuZGlyZWN0aXZlIiwiTW9tZW50RmlsdGVyc01vZHVsZS5Nb2R1bGUuZmlsdGVyIiwiTW9tZW50RmlsdGVyc01vZHVsZS5Nb2R1bGUuc2VydmljZSIsIk1vbWVudEZpbHRlcnNNb2R1bGUuTW9kdWxlLnByb3ZpZGVyIiwiTW9tZW50RmlsdGVyc01vZHVsZS5Nb2R1bGUuZmFjdG9yeSIsIk1vbWVudEZpbHRlcnNNb2R1bGUuTW9kdWxlLmNvbnN0YW50IiwiTW9tZW50RmlsdGVyc01vZHVsZS5GaWx0ZXJGYWN0b3J5IiwiTW9tZW50RmlsdGVyc01vZHVsZS5GaWx0ZXJGYWN0b3J5LmNvbnN0cnVjdG9yIiwiTW9tZW50RmlsdGVyc01vZHVsZS5GaWx0ZXJGYWN0b3J5LmNyZWF0ZSIsIk1vbWVudEZpbHRlcnNNb2R1bGUuRGlyZWN0aXZlRmFjdG9yeSIsIk1vbWVudEZpbHRlcnNNb2R1bGUuRGlyZWN0aXZlRmFjdG9yeS5jb25zdHJ1Y3RvciIsIk1vbWVudEZpbHRlcnNNb2R1bGUuRGlyZWN0aXZlRmFjdG9yeS5jcmVhdGUiLCJNb21lbnRGaWx0ZXJzTW9kdWxlLkFjdGl2YXRvciIsIk1vbWVudEZpbHRlcnNNb2R1bGUuQWN0aXZhdG9yLmNvbnN0cnVjdG9yIiwiTW9tZW50RmlsdGVyc01vZHVsZS5BY3RpdmF0b3IuY3JlYXRlIiwiTW9tZW50RmlsdGVyc01vZHVsZS5EYXRlUmFuZ2VGaWx0ZXIiLCJNb21lbnRGaWx0ZXJzTW9kdWxlLkRhdGVSYW5nZUZpbHRlci5jb25zdHJ1Y3RvciIsIk1vbWVudEZpbHRlcnNNb2R1bGUuRGF0ZVJhbmdlRmlsdGVyLmZpbHRlciIsIk1vbWVudEZpbHRlcnNNb2R1bGUuRGF5c0Fnb0ZpbHRlciIsIk1vbWVudEZpbHRlcnNNb2R1bGUuRGF5c0Fnb0ZpbHRlci5jb25zdHJ1Y3RvciIsIk1vbWVudEZpbHRlcnNNb2R1bGUuRGF5c0Fnb0ZpbHRlci5maWx0ZXIiLCJNb21lbnRGaWx0ZXJzTW9kdWxlLk1vbWVudEZpbHRlciIsIk1vbWVudEZpbHRlcnNNb2R1bGUuTW9tZW50RmlsdGVyLmNvbnN0cnVjdG9yIiwiTW9tZW50RmlsdGVyc01vZHVsZS5Nb21lbnRGaWx0ZXIuZmlsdGVyIiwiTW9tZW50RmlsdGVyc01vZHVsZS5UaW1lQWdvRmlsdGVyIiwiTW9tZW50RmlsdGVyc01vZHVsZS5UaW1lQWdvRmlsdGVyLmNvbnN0cnVjdG9yIiwiTW9tZW50RmlsdGVyc01vZHVsZS5UaW1lQWdvRmlsdGVyLmZpbHRlciJdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRTNDLElBQU8sbUJBQW1CLENBd0d6QjtBQXhHRCxXQUFPLG1CQUFtQixFQUFDLENBQUM7SUFjeEJBO1FBR0lDLGdCQUFZQSxJQUFZQSxFQUFFQSxPQUFrQkEsRUFBRUEsTUFBaUJBO1lBQzNEQyxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJ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Q3JCQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUNoREEsQ0FBQ0E7UUFDTEYsbUJBQUNBO0lBQURBLENBQUNBLEFBTkQzQixJQU1DQTtJQUVEQSxHQUFHQSxDQUFDQSxNQUFNQSxDQUFDQSxRQUFRQSxFQUFFQSxZQUFZQSxDQUFDQSxDQUFDQTtBQUN2Q0EsQ0FBQ0EsRUFWTSxtQkFBbUIsS0FBbkIsbUJBQW1CLFFBVXpCO0FDWEQsa0NBQWtDO0FBQ2xDLElBQU8sbUJBQW1CLENBWXpCO0FBWkQsV0FBTyxtQkFBbUIsRUFBQyxDQUFDO0lBS3hCQTtRQUFBOEI7UUFJQUMsQ0FBQ0E7UUFIR0QsOEJBQU1BLEdBQU5BLFVBQU9BLElBQUlBO1lBQ1BFLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBO1FBQ2xDQSxDQUFDQTtRQUNMRixvQkFBQ0E7SUFBREEsQ0FBQ0EsQUFKRDlCLElBSUNBO0lBRURBLEdBQUdBLENBQUNBLE1BQU1BLENBQUNBLFNBQVNBLEVBQUVBLGFBQWFBLENBQUNBLENBQUNBO0FBQ3pDQSxDQUFDQSxFQVpNLG1CQUFtQixLQUFuQixtQkFBbUIsUUFZekIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy90c2QuZC50c1wiLz5cclxuXHJcbm1vZHVsZSBNb21lbnRGaWx0ZXJzTW9kdWxlIHtcclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElNb2R1bGUge1xyXG4gICAgICAgIGNvbmZpZyhhcHBDb25maWc6IEZ1bmN0aW9uKTogSU1vZHVsZTtcclxuICAgICAgICBydW4oYXBwUnVuOiBGdW5jdGlvbik6IElNb2R1bGU7XHJcbiAgICAgICAgY29udHJvbGxlcihuYW1lOiBzdHJpbmcsIGNvbnRyb2xsZXI6IEZ1bmN0aW9uKTogSU1vZHVsZTtcclxuICAgICAgICBkaXJlY3RpdmUobmFtZTogc3RyaW5nLCBkaXJlY3RpdmU6IGFueSk6IElNb2R1bGU7XHJcbiAgICAgICAgZmlsdGVyKG5hbWU6IHN0cmluZywgZmlsdGVyOiBhbnkpOiBJTW9kdWxlO1xyXG4gICAgICAgIHNlcnZpY2UobmFtZTogc3RyaW5nLCBzZXJ2aWNlOiBGdW5jdGlvbik6IElNb2R1bGU7XHJcbiAgICAgICAgcHJvdmlkZXIobmFtZTogc3RyaW5nLCBwcm92aWRlcjogYW55KTogSU1vZHVsZTtcclxuICAgICAgICBmYWN0b3J5KG5hbWU6IHN0cmluZywgZmFjdG9yeTogRnVuY3Rpb24pOiBJTW9kdWxlO1xyXG4gICAgICAgIGNvbnN0YW50KG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IElNb2R1bGU7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIE1vZHVsZSBpbXBsZW1lbnRzIElNb2R1bGUge1xyXG4gICAgICAgIHByaXZhdGUgbW9kdWxlOiBuZy5JTW9kdWxlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbW9kdWxlcz86IHN0cmluZ1tdLCBjb25maWc/OiBGdW5jdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKG5hbWUsIG1vZHVsZXMsIGNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25maWcoYXBwQ29uZmlnOiBGdW5jdGlvbik6IElNb2R1bGUge1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZS5jb25maWcoYXBwQ29uZmlnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBydW4oYXBwUnVuOiBGdW5jdGlvbik6IElNb2R1bGUge1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZS5ydW4oYXBwUnVuKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb250cm9sbGVyKG5hbWU6IHN0cmluZywgY29udHJvbGxlcjogRnVuY3Rpb24pOiBJTW9kdWxlIHtcclxuICAgICAgICAgICAgdGhpcy5tb2R1bGUuY29udHJvbGxlcihuYW1lLCBjb250cm9sbGVyKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXJlY3RpdmUobmFtZTogc3RyaW5nLCBkaXJlY3RpdmUpOiBJTW9kdWxlIHtcclxuICAgICAgICAgICAgdGhpcy5tb2R1bGUuZGlyZWN0aXZlKG5hbWUsIERpcmVjdGl2ZUZhY3RvcnkuY3JlYXRlKGRpcmVjdGl2ZSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZpbHRlcihuYW1lOiBzdHJpbmcsIGZpbHRlcik6IElNb2R1bGUge1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZS5maWx0ZXIobmFtZSwgRmlsdGVyRmFjdG9yeS5jcmVhdGUoZmlsdGVyKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VydmljZShuYW1lOiBzdHJpbmcsIHNlcnZpY2U6IEZ1bmN0aW9uKTogSU1vZHVsZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kdWxlLnNlcnZpY2UobmFtZSwgc2VydmljZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdmlkZXIobmFtZTogc3RyaW5nLCBwcm92aWRlcik6IElNb2R1bGUge1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZS5wcm92aWRlcihuYW1lLCBwcm92aWRlcik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmFjdG9yeShuYW1lOiBzdHJpbmcsIGZhY3Rvcnk6IEZ1bmN0aW9uKTogSU1vZHVsZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kdWxlLmZhY3RvcnkobmFtZSwgZmFjdG9yeSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3RhbnQobmFtZTogc3RyaW5nLCB2YWx1ZSk6IElNb2R1bGUge1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZS5jb25zdGFudChuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBmaWx0ZXJzXHJcbiAgICBjbGFzcyBGaWx0ZXJGYWN0b3J5IHtcclxuICAgICAgICBzdGF0aWMgY3JlYXRlKHR5cGU6IElBY3RpdmF0b3JDbGFzcyk6IGFueSB7XHJcbiAgICAgICAgICAgIHZhciBmaWx0ZXIgPSAoLi4uaW5qZWN0OiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gQWN0aXZhdG9yLmNyZWF0ZSh0eXBlLCBpbmplY3QpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICguLi5vcHRpb25zOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5maWx0ZXIuYXBwbHkoaW5zdGFuY2UsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZmlsdGVyW1wiJGluamVjdFwiXSA9IHR5cGVbXCIkaW5qZWN0XCJdO1xyXG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBkaXJlY3RpdmVzXHJcbiAgICBjbGFzcyBEaXJlY3RpdmVGYWN0b3J5IHtcclxuICAgICAgICBzdGF0aWMgY3JlYXRlKHR5cGU6IElBY3RpdmF0b3JDbGFzcyk6IGFueSB7XHJcbiAgICAgICAgICAgIHZhciBkaXJlY3RpdmUgPSAoLi4uaW5qZWN0OiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEFjdGl2YXRvci5jcmVhdGUodHlwZSwgaW5qZWN0KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZGlyZWN0aXZlW1wiJGluamVjdFwiXSA9IHR5cGVbXCIkaW5qZWN0XCJdO1xyXG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aXZlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBhY3RpdmF0b3JcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUFjdGl2YXRvckNsYXNzIHtcclxuICAgICAgICBuZXcoLi4ucGFyYW1zOiBhbnlbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3MgQWN0aXZhdG9yIHtcclxuICAgICAgICBzdGF0aWMgY3JlYXRlKHR5cGU6IElBY3RpdmF0b3JDbGFzcywgcGFyYW1zOiBhbnlbXSkge1xyXG4gICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSBPYmplY3QuY3JlYXRlKHR5cGUucHJvdG90eXBlKTtcclxuICAgICAgICAgICAgaW5zdGFuY2UuY29uc3RydWN0b3IuYXBwbHkoaW5zdGFuY2UsIHBhcmFtcyk7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy90c2QuZC50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R3aXguZC50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImFuZ3VsYXIudHNcIi8+XHJcbnZhciBhcHAgPSBuZXcgTW9tZW50RmlsdGVyc01vZHVsZS5Nb2R1bGUoXCJtb21lbnRGaWx0ZXJzXCIsIFtdKTsiLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiZmlsdGVycy50c1wiLz5cclxubW9kdWxlIE1vbWVudEZpbHRlcnNNb2R1bGUge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJRGF0ZVJhbmdlRmlsdGVyIHtcclxuICAgICAgICBmaWx0ZXIoc3RhcnQ6IGFueSwgZW5kOiBhbnksIG9wdGlvbnM/OiBhbnkpOiBzdHJpbmdcclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBEYXRlUmFuZ2VGaWx0ZXIgaW1wbGVtZW50cyBJRGF0ZVJhbmdlRmlsdGVyIHtcclxuICAgICAgICBmaWx0ZXIoc3RhcnQsIGVuZCwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAoc3RhcnQgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XHJcbiAgICAgICAgICAgIHJldHVybiBtb21lbnQoc3RhcnQpLnR3aXgoZW5kLCBvcHRpb25zLmFsbERheSkuZm9ybWF0KG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhcHAuZmlsdGVyKCdkYXRlcmFuZ2UnLCBEYXRlUmFuZ2VGaWx0ZXIpO1xyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImZpbHRlcnMudHNcIi8+XHJcbm1vZHVsZSBNb21lbnRGaWx0ZXJzTW9kdWxlIHtcclxuICAgIGNsYXNzIERheXNBZ29GaWx0ZXIge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICB0aGlzLnRvZGF5ID0gbW9tZW50KCkuc3RhcnRPZignZGF5Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0b2RheTtcclxuXHJcbiAgICAgICAgZmlsdGVyKGRhdGUpIHtcclxuICAgICAgICAgICAgdmFyIGNvbXBEYXRlID0gbW9tZW50KGRhdGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbXBEYXRlLmRpZmYodGhpcy50b2RheSwgJ2RheXMnKSA9PT0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybiAndG9kYXknO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNvbXBEYXRlLmZyb20odGhpcy50b2RheSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFwcC5maWx0ZXIoJ2RheXNhZ28nLCBEYXlzQWdvRmlsdGVyKTtcclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJmaWx0ZXJzLnRzXCIvPlxyXG5tb2R1bGUgTW9tZW50RmlsdGVyc01vZHVsZSB7XHJcbiAgICBjbGFzcyBNb21lbnRGaWx0ZXIge1xyXG4gICAgICAgIGZpbHRlcihkYXRlLCBmb3JtYXQsIHBhdHRlcm4pIHtcclxuICAgICAgICAgICAgaWYgKGRhdGUgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIm5vIGRhdGVcIjtcclxuICAgICAgICAgICAgcmV0dXJuIG1vbWVudChkYXRlLCBwYXR0ZXJuKS5mb3JtYXQoZm9ybWF0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXBwLmZpbHRlcignbW9tZW50JywgTW9tZW50RmlsdGVyKTtcclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJmaWx0ZXJzLnRzXCIvPlxyXG5tb2R1bGUgTW9tZW50RmlsdGVyc01vZHVsZSB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElUaW1lQWdvRmlsdGVyIHtcclxuICAgICAgICBmaWx0ZXIoZGF0ZTogYW55KTogc3RyaW5nXHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3MgVGltZUFnb0ZpbHRlciBpbXBsZW1lbnRzIElUaW1lQWdvRmlsdGVyIHtcclxuICAgICAgICBmaWx0ZXIoZGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbW9tZW50KGRhdGUpLmZyb21Ob3coKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXBwLmZpbHRlcigndGltZWFnbycsIFRpbWVBZ29GaWx0ZXIpO1xyXG59Il19