System.register(["aurelia-http-client"], function (_export) {
  "use strict";

  var HttpClient, _prototypeProperties, _classCallCheck, base, Tenders;
  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      base = "https://api.openprocurement.org/api/0";
      Tenders = _export("Tenders", (function () {
        function Tenders(http) {
          _classCallCheck(this, Tenders);

          this.heading = "Тендери";
          this.tenders = [];
          this.http = http;
        }

        _prototypeProperties(Tenders, {
          inject: {
            value: function inject() {
              return [HttpClient];
            },
            writable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate() {
              var _this = this;
              return this.http.jsonp("" + base + "/tenders?opt_fields=title", "opt_jsonp").then(function (response) {
                _this.tenders = response.content.data;
                _this.tenders.forEach(function (tender) {
                  tender.href = "#/tenders/" + tender.id;
                });
              });
            },
            writable: true,
            configurable: true
          },
          canDeactivate: {
            value: function canDeactivate() {},
            writable: true,
            configurable: true
          }
        });

        return Tenders;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbmRlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsVUFBVSx5Q0FFZCxJQUFJLEVBRUssT0FBTzs7O0FBSlosZ0JBQVUsc0JBQVYsVUFBVTs7Ozs7OztBQUVkLFVBQUksR0FBRyx1Q0FBdUM7QUFFckMsYUFBTztBQUVQLGlCQUZBLE9BQU8sQ0FFTixJQUFJO2dDQUZMLE9BQU87O0FBR2hCLGNBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO0FBQ3pCLGNBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCOzs2QkFOVSxPQUFPO0FBQ1gsZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQUU7Ozs7O0FBT3hDLGtCQUFRO21CQUFBLG9CQUFFOztBQUNSLHFCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxNQUFJLElBQUksZ0NBQTZCLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUN2RixzQkFBSyxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7QUFDckMsc0JBQUssT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFTLE1BQU0sRUFBRTtBQUNwQyx3QkFBTSxDQUFDLElBQUksa0JBQWMsTUFBTSxDQUFDLEVBQUUsQUFBRSxDQUFDO2lCQUN0QyxDQUFDLENBQUM7ZUFDSixDQUFDLENBQUM7YUFDSjs7OztBQUVELHVCQUFhO21CQUFBLHlCQUFFLEVBQ2Q7Ozs7OztlQWxCVSxPQUFPIiwiZmlsZSI6InRlbmRlcnMuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==