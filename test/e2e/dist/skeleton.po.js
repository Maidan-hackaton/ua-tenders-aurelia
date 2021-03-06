"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var PageObject_Skeleton = exports.PageObject_Skeleton = (function () {
  function PageObject_Skeleton() {}

  _prototypeProperties(PageObject_Skeleton, null, {
    getCurrentPageTitle: {
      value: function getCurrentPageTitle() {
        return browser.getTitle();
      },
      writable: true,
      configurable: true
    },
    navigateTo: {
      value: function navigateTo(href) {
        var deferred = protractor.promise.defer();
        element(by.css("a[href=\"" + href + "\"]")).click().then(function () {
          browser.sleep(2000);
          deferred.fulfill(true);
        });

        return deferred.promise;
      },
      writable: true,
      configurable: true
    }
  });

  return PageObject_Skeleton;
})();
exports.__esModule = true;