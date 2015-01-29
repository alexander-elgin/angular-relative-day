angular.module('RelativeDay', [])
    .filter('relativeDay', function ($locale, RelativeDayList) {
        return function(timestamp) {
            var date = new Date(timestamp).setHours(0, 0, 0, 0);
            var today = new Date().setHours(0, 0, 0, 0);
            return RelativeDayList.get((date - today) / (24 * 60 * 60 * 1000), $locale.id.split('-')[0]);
        };
    })
    .factory('RelativeDayList', function () {
        var dayNames = {
            en: ['day before yesterday', 'yesterday', 'today', 'tomorrow', 'day after tomorrow'],
            ru: ['позавчера', 'вчера', 'сегодня', 'завтра', 'послезавтра']
        };

        return {
            get: function (dayOffset, lang) {
                if(!dayNames.hasOwnProperty(lang)) return null;
                dayOffset += 2;
                return dayOffset < dayNames[lang].length ? dayNames[lang][dayOffset] : null;
            }
        };
    });
