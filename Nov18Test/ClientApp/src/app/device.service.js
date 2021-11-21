"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataService = void 0;
//@Injectable({
//  providedIn: 'root'
//})
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.apiUrl = 'https://localhost:5001/';
        this.searchOption = [];
        this.GetAllUrl = this.apiUrl + 'devices/getalldevices';
    }
    DataService.prototype.getPosts = function () {
        return this.http.get(this.GetAllUrl);
    };
    //// Read
    //showTasks() {
    //  return this.http.get(`${this.apiUrl}`);
    //}
    DataService.prototype.filteredListOptions = function () {
        var posts = this.devicesData;
        var filteredPostsList = [];
        for (var _i = 0, posts_1 = posts; _i < posts_1.length; _i++) {
            var post = posts_1[_i];
            for (var _a = 0, _b = this.searchOption; _a < _b.length; _a++) {
                var options = _b[_a];
                if (options.title === post.deviceName) {
                    filteredPostsList.push(post);
                }
            }
        }
        console.log(filteredPostsList);
        return filteredPostsList;
    };
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=device.service.js.map