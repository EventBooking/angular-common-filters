/// <reference path="filters.ts"/>

declare var currency;

module MoneyFiltersModule {
    export interface IMoneyFilter {
        filter(value: any, code?: string, options?: any): string
    }

    class MoneyFilter implements IMoneyFilter {
        filter(value: any, code?: string, options?: any): string {
            if (value == null || angular.isString(value) && value.trim().length === 0)
                return "";

            if (value.amount) {
                code = value.currency || code;
                value = value.amount;
            }

            if (!options)
                options = {};
            options.symbol = currency.symbolize(code);

            return accounting.formatMoney(value, options);
        }
    }

    app.filter('money', MoneyFilter);
}