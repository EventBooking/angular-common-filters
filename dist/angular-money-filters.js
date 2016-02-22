var MoneyFiltersModule;
(function (MoneyFiltersModule) {
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
    MoneyFiltersModule.Module = Module;
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
})(MoneyFiltersModule || (MoneyFiltersModule = {}));
var app = new MoneyFiltersModule.Module("moneyFilters", []);
var MoneyFiltersModule;
(function (MoneyFiltersModule) {
    var MoneyFilter = (function () {
        function MoneyFilter() {
        }
        MoneyFilter.prototype.filter = function (value, code, options) {
            if (value == null || angular.isString(value) && value.trim().length === 0)
                return "";
            if (angular.isObject(code)) {
                options = code;
                code = null;
            }
            if (value.amount) {
                code = value.currency || code;
                value = value.amount;
            }
            if (!options)
                options = {};
            if (options.abbrev) {
                var v = accounting.unformat(value);
                if (v > 1000) {
                    value = v / 1000;
                    options.precision = 1;
                    options.format = "%s%vK";
                }
                if (v > 1000000) {
                    value = v / 1000000;
                    options.precision = 1;
                    options.format = "%s%vM";
                }
            }
            options.symbol = currency.symbolize(code);
            return accounting.formatMoney(value, options);
        };
        return MoneyFilter;
    })();
    app.filter('money', MoneyFilter);
})(MoneyFiltersModule || (MoneyFiltersModule = {}));
