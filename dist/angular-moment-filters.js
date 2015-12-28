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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1tb21lbnQtZmlsdGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tb21lbnQtZmlsdGVycy9hbmd1bGFyLnRzIiwiLi4vc3JjL21vbWVudC1maWx0ZXJzL2ZpbHRlcnMudHMiLCIuLi9zcmMvbW9tZW50LWZpbHRlcnMvZGF0ZXJhbmdlLnRzIiwiLi4vc3JjL21vbWVudC1maWx0ZXJzL2RheXNhZ28udHMiLCIuLi9zcmMvbW9tZW50LWZpbHRlcnMvbW9tZW50LnRzIiwiLi4vc3JjL21vbWVudC1maWx0ZXJzL3RpbWVhZ28udHMiXSwibmFtZXMiOlsiTW9tZW50RmlsdGVyc01vZHVsZSIsIk1vbWVudEZpbHRlcnNNb2R1bGUuTW9kdWxlIiwiTW9tZW50RmlsdGVyc01vZHVsZS5Nb2R1bGUuY29uc3RydWN0b3IiLCJNb21lbnRGaWx0ZXJzTW9kdWxlLk1vZHVsZS5jb25maWciLCJNb21lbnRGaWx0ZXJzTW9kdWxlLk1vZHVsZS5ydW4iLCJNb21lbnRGaWx0ZXJzTW9kdWxlLk1vZHVsZS5jb250cm9sbGVyIiwiTW9tZW50RmlsdGVyc01vZHVsZS5Nb2R1bGUuZGlyZWN0aXZlIiwiTW9tZW50RmlsdGVyc01vZHVsZS5Nb2R1bGUuZmlsdGVyIiwiTW9tZW50RmlsdGVyc01vZHVsZS5Nb2R1bGUuc2VydmljZSIsIk1vbWVudEZpbHRlcnNNb2R1bGUuTW9kdWxlLnByb3ZpZGVyIiwiTW9tZW50RmlsdGVyc01vZHVsZS5Nb2R1bGUuZmFjdG9yeSIsIk1vbWVudEZpbHRlcnNNb2R1bGUuTW9kdWxlLmNvbnN0YW50IiwiTW9tZW50RmlsdGVyc01vZHVsZS5GaWx0ZXJGYWN0b3J5IiwiTW9tZW50RmlsdGVyc01vZHVsZS5GaWx0ZXJGYWN0b3J5LmNvbnN0cnVjdG9yIiwiTW9tZW50RmlsdGVyc01vZHVsZS5GaWx0ZXJGYWN0b3J5LmNyZWF0ZSIsIk1vbWVudEZpbHRlcnNNb2R1bGUuRGlyZWN0aXZlRmFjdG9yeSIsIk1vbWVudEZpbHRlcnNNb2R1bGUuRGlyZWN0aXZlRmFjdG9yeS5jb25zdHJ1Y3RvciIsIk1vbWVudEZpbHRlcnNNb2R1bGUuRGlyZWN0aXZlRmFjdG9yeS5jcmVhdGUiLCJNb21lbnRGaWx0ZXJzTW9kdWxlLkFjdGl2YXRvciIsIk1vbWVudEZpbHRlcnNNb2R1bGUuQWN0aXZhdG9yLmNvbnN0cnVjdG9yIiwiTW9tZW50RmlsdGVyc01vZHVsZS5BY3RpdmF0b3IuY3JlYXRlIiwiTW9tZW50RmlsdGVyc01vZHVsZS5EYXRlUmFuZ2VGaWx0ZXIiLCJNb21lbnRGaWx0ZXJzTW9kdWxlLkRhdGVSYW5nZUZpbHRlci5jb25zdHJ1Y3RvciIsIk1vbWVudEZpbHRlcnNNb2R1bGUuRGF0ZVJhbmdlRmlsdGVyLmZpbHRlciIsIk1vbWVudEZpbHRlcnNNb2R1bGUuRGF5c0Fnb0ZpbHRlciIsIk1vbWVudEZpbHRlcnNNb2R1bGUuRGF5c0Fnb0ZpbHRlci5jb25zdHJ1Y3RvciIsIk1vbWVudEZpbHRlcnNNb2R1bGUuRGF5c0Fnb0ZpbHRlci5maWx0ZXIiLCJNb21lbnRGaWx0ZXJzTW9kdWxlLk1vbWVudEZpbHRlciIsIk1vbWVudEZpbHRlcnNNb2R1bGUuTW9tZW50RmlsdGVyLmNvbnN0cnVjdG9yIiwiTW9tZW50RmlsdGVyc01vZHVsZS5Nb21lbnRGaWx0ZXIuZmlsdGVyIiwiTW9tZW50RmlsdGVyc01vZHVsZS5UaW1lQWdvRmlsdGVyIiwiTW9tZW50RmlsdGVyc01vZHVsZS5UaW1lQWdvRmlsdGVyLmNvbnN0cnVjdG9yIiwiTW9tZW50RmlsdGVyc01vZHVsZS5UaW1lQWdvRmlsdGVyLmZpbHRlciJdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRTNDLElBQU8sbUJBQW1CLENBd0d6QjtBQXhHRCxXQUFPLG1CQUFtQixFQUFDLENBQUM7SUFjeEJBO1FBR0lDLGdCQUFZQSxJQUFZQSxFQUFFQSxPQUFrQkEsRUFBRUEsTUFBaUJBO1lBQzNEQyxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJ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QUNBLE1BQU1BLENBQUNBLElBQUlBLEVBQUVBLE9BQU9BLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1FBQ2hEQSxDQUFDQTtRQUNMRixtQkFBQ0E7SUFBREEsQ0FBQ0EsQUFORDNCLElBTUNBO0lBRURBLEdBQUdBLENBQUNBLE1BQU1BLENBQUNBLFFBQVFBLEVBQUVBLFlBQVlBLENBQUNBLENBQUNBO0FBQ3ZDQSxDQUFDQSxFQVZNLG1CQUFtQixLQUFuQixtQkFBbUIsUUFVekI7QUNWRCxrQ0FBa0M7QUFDbEMsSUFBTyxtQkFBbUIsQ0FZekI7QUFaRCxXQUFPLG1CQUFtQixFQUFDLENBQUM7SUFLeEJBO1FBQUE4QjtRQUlBQyxDQUFDQTtRQUhHRCw4QkFBTUEsR0FBTkEsVUFBT0EsSUFBSUE7WUFDUEUsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0E7UUFDbENBLENBQUNBO1FBQ0xGLG9CQUFDQTtJQUFEQSxDQUFDQSxBQUpEOUIsSUFJQ0E7SUFFREEsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsU0FBU0EsRUFBRUEsYUFBYUEsQ0FBQ0EsQ0FBQ0E7QUFDekNBLENBQUNBLEVBWk0sbUJBQW1CLEtBQW5CLG1CQUFtQixRQVl6QiIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL3RzZC5kLnRzXCIvPlxyXG5cclxubW9kdWxlIE1vbWVudEZpbHRlcnNNb2R1bGUge1xyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSU1vZHVsZSB7XHJcbiAgICAgICAgY29uZmlnKGFwcENvbmZpZzogRnVuY3Rpb24pOiBJTW9kdWxlO1xyXG4gICAgICAgIHJ1bihhcHBSdW46IEZ1bmN0aW9uKTogSU1vZHVsZTtcclxuICAgICAgICBjb250cm9sbGVyKG5hbWU6IHN0cmluZywgY29udHJvbGxlcjogRnVuY3Rpb24pOiBJTW9kdWxlO1xyXG4gICAgICAgIGRpcmVjdGl2ZShuYW1lOiBzdHJpbmcsIGRpcmVjdGl2ZTogYW55KTogSU1vZHVsZTtcclxuICAgICAgICBmaWx0ZXIobmFtZTogc3RyaW5nLCBmaWx0ZXI6IGFueSk6IElNb2R1bGU7XHJcbiAgICAgICAgc2VydmljZShuYW1lOiBzdHJpbmcsIHNlcnZpY2U6IEZ1bmN0aW9uKTogSU1vZHVsZTtcclxuICAgICAgICBwcm92aWRlcihuYW1lOiBzdHJpbmcsIHByb3ZpZGVyOiBhbnkpOiBJTW9kdWxlO1xyXG4gICAgICAgIGZhY3RvcnkobmFtZTogc3RyaW5nLCBmYWN0b3J5OiBGdW5jdGlvbik6IElNb2R1bGU7XHJcbiAgICAgICAgY29uc3RhbnQobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogSU1vZHVsZTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgTW9kdWxlIGltcGxlbWVudHMgSU1vZHVsZSB7XHJcbiAgICAgICAgcHJpdmF0ZSBtb2R1bGU6IG5nLklNb2R1bGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBtb2R1bGVzPzogc3RyaW5nW10sIGNvbmZpZz86IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kdWxlID0gYW5ndWxhci5tb2R1bGUobmFtZSwgbW9kdWxlcywgY29uZmlnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbmZpZyhhcHBDb25maWc6IEZ1bmN0aW9uKTogSU1vZHVsZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kdWxlLmNvbmZpZyhhcHBDb25maWcpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJ1bihhcHBSdW46IEZ1bmN0aW9uKTogSU1vZHVsZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kdWxlLnJ1bihhcHBSdW4pO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnRyb2xsZXIobmFtZTogc3RyaW5nLCBjb250cm9sbGVyOiBGdW5jdGlvbik6IElNb2R1bGUge1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZS5jb250cm9sbGVyKG5hbWUsIGNvbnRyb2xsZXIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpcmVjdGl2ZShuYW1lOiBzdHJpbmcsIGRpcmVjdGl2ZSk6IElNb2R1bGUge1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZS5kaXJlY3RpdmUobmFtZSwgRGlyZWN0aXZlRmFjdG9yeS5jcmVhdGUoZGlyZWN0aXZlKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmlsdGVyKG5hbWU6IHN0cmluZywgZmlsdGVyKTogSU1vZHVsZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kdWxlLmZpbHRlcihuYW1lLCBGaWx0ZXJGYWN0b3J5LmNyZWF0ZShmaWx0ZXIpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXJ2aWNlKG5hbWU6IHN0cmluZywgc2VydmljZTogRnVuY3Rpb24pOiBJTW9kdWxlIHtcclxuICAgICAgICAgICAgdGhpcy5tb2R1bGUuc2VydmljZShuYW1lLCBzZXJ2aWNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm92aWRlcihuYW1lOiBzdHJpbmcsIHByb3ZpZGVyKTogSU1vZHVsZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kdWxlLnByb3ZpZGVyKG5hbWUsIHByb3ZpZGVyKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmYWN0b3J5KG5hbWU6IHN0cmluZywgZmFjdG9yeTogRnVuY3Rpb24pOiBJTW9kdWxlIHtcclxuICAgICAgICAgICAgdGhpcy5tb2R1bGUuZmFjdG9yeShuYW1lLCBmYWN0b3J5KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdGFudChuYW1lOiBzdHJpbmcsIHZhbHVlKTogSU1vZHVsZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kdWxlLmNvbnN0YW50KG5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGZpbHRlcnNcclxuICAgIGNsYXNzIEZpbHRlckZhY3Rvcnkge1xyXG4gICAgICAgIHN0YXRpYyBjcmVhdGUodHlwZTogSUFjdGl2YXRvckNsYXNzKTogYW55IHtcclxuICAgICAgICAgICAgdmFyIGZpbHRlciA9ICguLi5pbmplY3Q6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSBBY3RpdmF0b3IuY3JlYXRlKHR5cGUsIGluamVjdCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKC4uLm9wdGlvbnM6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLmZpbHRlci5hcHBseShpbnN0YW5jZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBmaWx0ZXJbXCIkaW5qZWN0XCJdID0gdHlwZVtcIiRpbmplY3RcIl07XHJcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGRpcmVjdGl2ZXNcclxuICAgIGNsYXNzIERpcmVjdGl2ZUZhY3Rvcnkge1xyXG4gICAgICAgIHN0YXRpYyBjcmVhdGUodHlwZTogSUFjdGl2YXRvckNsYXNzKTogYW55IHtcclxuICAgICAgICAgICAgdmFyIGRpcmVjdGl2ZSA9ICguLi5pbmplY3Q6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQWN0aXZhdG9yLmNyZWF0ZSh0eXBlLCBpbmplY3QpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBkaXJlY3RpdmVbXCIkaW5qZWN0XCJdID0gdHlwZVtcIiRpbmplY3RcIl07XHJcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGFjdGl2YXRvclxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJQWN0aXZhdG9yQ2xhc3Mge1xyXG4gICAgICAgIG5ldyguLi5wYXJhbXM6IGFueVtdKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBBY3RpdmF0b3Ige1xyXG4gICAgICAgIHN0YXRpYyBjcmVhdGUodHlwZTogSUFjdGl2YXRvckNsYXNzLCBwYXJhbXM6IGFueVtdKSB7XHJcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IE9iamVjdC5jcmVhdGUodHlwZS5wcm90b3R5cGUpO1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5jb25zdHJ1Y3Rvci5hcHBseShpbnN0YW5jZSwgcGFyYW1zKTtcclxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL3RzZC5kLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHdpeC5kLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiYW5ndWxhci50c1wiLz5cclxudmFyIGFwcCA9IG5ldyBNb21lbnRGaWx0ZXJzTW9kdWxlLk1vZHVsZShcIm1vbWVudEZpbHRlcnNcIiwgW10pOyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJmaWx0ZXJzLnRzXCIvPlxyXG5tb2R1bGUgTW9tZW50RmlsdGVyc01vZHVsZSB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElEYXRlUmFuZ2VGaWx0ZXIge1xyXG4gICAgICAgIGZpbHRlcihzdGFydDogYW55LCBlbmQ6IGFueSwgb3B0aW9ucz86IGFueSk6IHN0cmluZ1xyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIERhdGVSYW5nZUZpbHRlciBpbXBsZW1lbnRzIElEYXRlUmFuZ2VGaWx0ZXIge1xyXG4gICAgICAgIGZpbHRlcihzdGFydCwgZW5kLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChzdGFydCA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcclxuICAgICAgICAgICAgcmV0dXJuIG1vbWVudChzdGFydCkudHdpeChlbmQsIG9wdGlvbnMuYWxsRGF5KS5mb3JtYXQob3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFwcC5maWx0ZXIoJ2RhdGVyYW5nZScsIERhdGVSYW5nZUZpbHRlcik7XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiZmlsdGVycy50c1wiLz5cclxubW9kdWxlIE1vbWVudEZpbHRlcnNNb2R1bGUge1xyXG4gICAgY2xhc3MgRGF5c0Fnb0ZpbHRlciB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9kYXkgPSBtb21lbnQoKS5zdGFydE9mKCdkYXknKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRvZGF5O1xyXG5cclxuICAgICAgICBmaWx0ZXIoZGF0ZSkge1xyXG4gICAgICAgICAgICB2YXIgY29tcERhdGUgPSBtb21lbnQoZGF0ZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29tcERhdGUuZGlmZih0aGlzLnRvZGF5LCAnZGF5cycpID09PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICd0b2RheSc7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29tcERhdGUuZnJvbSh0aGlzLnRvZGF5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXBwLmZpbHRlcignZGF5c2FnbycsIERheXNBZ29GaWx0ZXIpO1xyXG59IiwibW9kdWxlIE1vbWVudEZpbHRlcnNNb2R1bGUge1xyXG4gICAgY2xhc3MgTW9tZW50RmlsdGVyIHtcclxuICAgICAgICBmaWx0ZXIoZGF0ZSwgZm9ybWF0LCBwYXR0ZXJuKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRlID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJubyBkYXRlXCI7XHJcbiAgICAgICAgICAgIHJldHVybiBtb21lbnQoZGF0ZSwgcGF0dGVybikuZm9ybWF0KGZvcm1hdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFwcC5maWx0ZXIoJ21vbWVudCcsIE1vbWVudEZpbHRlcik7XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiZmlsdGVycy50c1wiLz5cclxubW9kdWxlIE1vbWVudEZpbHRlcnNNb2R1bGUge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJVGltZUFnb0ZpbHRlciB7XHJcbiAgICAgICAgZmlsdGVyKGRhdGU6IGFueSk6IHN0cmluZ1xyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIFRpbWVBZ29GaWx0ZXIgaW1wbGVtZW50cyBJVGltZUFnb0ZpbHRlciB7XHJcbiAgICAgICAgZmlsdGVyKGRhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1vbWVudChkYXRlKS5mcm9tTm93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFwcC5maWx0ZXIoJ3RpbWVhZ28nLCBUaW1lQWdvRmlsdGVyKTtcclxufSJdfQ==