"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var getlogs_service_1 = require("../../services/getlogs.service");
//import {Logs} from '../../../Logs';
var LogComponent = (function () {
    //
    function LogComponent(getlogService) {
        var _this = this;
        this.getlogService = getlogService;
        this.scatter_ChartOptions = {
            legend: {
                position: 'bottom'
            },
            title: ' '
        };
        this.scatter_ChartData = [
            ['Date', ' Detected!'],
            [new Date(), 0],
        ];
        this.getlogService.getLogs()
            .subscribe(function (logs) {
            _this.logs = logs;
            for (var _i = 0, _a = _this.logs; _i < _a.length; _i++) {
                var log_1 = _a[_i];
                _this.scatter_ChartData.push([new Date(parseInt(log_1.substring(0, 4)), parseInt(log_1.substring(5, 7)), parseInt(log_1.substring(8, 10)), parseInt(log_1.substring(11, 13)), parseInt(log_1.substring(14, 16)), parseInt(log_1.substring(17, 19))), 10]);
            }
        });
    }
    LogComponent.prototype.getSomeLogs = function (start, end) {
        var _this = this;
        event.preventDefault();
        var selected = {
            start: this.start,
            end: this.end
        };
        this.getlogService.getSomeLogs(selected)
            .subscribe(function (logs) {
            _this.logs = logs;
            _this.scatter_ChartData = [
                ['Date', ' Detected!'],
            ];
            if (_this.logs.length === 0) {
                _this.scatter_ChartData = [
                    ['Date', ' Detected!'],
                    [new Date(), 0]
                ];
            }
            for (var _i = 0, _a = _this.logs; _i < _a.length; _i++) {
                var log_2 = _a[_i];
                _this.scatter_ChartData.push([new Date(parseInt(log_2.substring(0, 4)), parseInt(log_2.substring(5, 7)), parseInt(log_2.substring(8, 10)), parseInt(log_2.substring(11, 13)), parseInt(log_2.substring(14, 16)), parseInt(log_2.substring(17, 19))), 10]);
            }
        });
    };
    return LogComponent;
}());
LogComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'view-logs',
        templateUrl: 'log.component.html'
    }),
    __metadata("design:paramtypes", [getlogs_service_1.GetlogService])
], LogComponent);
exports.LogComponent = LogComponent;
//# sourceMappingURL=log.component.js.map