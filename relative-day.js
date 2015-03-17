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
            af: ["die dag voor gister", "gister", "vandag", "môre", "die dag na"],
            ar: ["وقبل أمس يوم", 'أمس', 'اليوم', "الغد", 'بعد غد'],
            az: ["günün dünən əvvəl", "dünən", "bu gün", "sabah", "gün sonra"],
            bg: ["завчера", "Вчера", "днес", "утре", "деня след"],
            bs: ['prekjuče', 'jučer', 'danas', 'sutra', 'dan poslije'],
            cs: ["den před včera", "včera", "dnes", "zítra", "den poté"],
            da: ["i forgårs", "i går", "i dag", "morgen", "dagen efter"],
            de: ["vorgestern", "gestern", "Heute", "Morgen", "am Tag danach"],
            el: ["προχθές", "χθες", "σήμερα", "αύριο", "την επόμενη μέρα"],
            es: ["el día antes de ayer", "ayer", "hoy", "mañana", "el día después"],
            et: ["vorgestern", "gestern", "Heute", "Morgen", "der Tag nach"],
            en: ['day before yesterday', 'yesterday', 'today', 'tomorrow', 'day after tomorrow'],
            fi: ["toissapäivänä", "eilen", "tänään", "huomenna", "ylihuomenna"],
            fr: ["avant-hier", "hier", "aujourd'hui", "demain", "le lendemain"],
            fa: ['پریروز',"دیروز","امروز",'فردا', 'روز پس از'],
            ga: ['an lá roimh inné', 'inné', 'lá atá inniu ann', 'amárach', 'an lá tar éis'],
            he: ["שלשום", "אתמול", 'היום', 'מחר', 'היום שאחרי'],
            hi: ['कल से पहले दिन', 'यस्टरडे', 'टुडे', 'आने वाला कल', 'दिन के बाद'],
            hr: ["prekjučer", "jučer", "danas", "sutra", "dan poslije"],
            hu: ["tegnapelőtt", "tegnap", "ma", "holnap", "a nap után"],
            hy: ['նախանցյալ օրը', 'երեկ', 'այսօր', 'վաղը', 'օրը, հետո'],
            id: ['sehari sebelum kemarin', 'kemarin', 'hari ini', 'besok', 'sehari setelah'],
            is: ['í fyrradag', 'í gær', 'í dag', 'morgun', 'daginn eftir'],
            it: ["l'altro ieri", 'ieri', 'oggi', 'Domani', 'il giorno dopo'],
            ja: ['「一昨日」','「昨日」','「今日」','「明日」','「一日の後」'],
            ka: ["გუშინწინ", "გუშინ", "დღეს", "ხვალ", "დღის შემდეგ"],
            kk: ['Бұрнағы күні', 'Кеше', 'бүгін', 'ертең', 'күн кейін'],
            ko: ['그제', '어제', '오늘', '내일', '다음 날'],
            lt: ["užvakar", "vakar", "šiandien", "rytoj", "Diena po"],
            lv: ["aizvakar", "vakar", "šodien", "rīt", "dienu pēc tam, kad"],
            mk: ["завчера", "вчера", "денес", "утре", "денот потоа"],
            ms: ['hari sebelum semalam', 'semalam', 'hari ini', 'esok', 'hari selepas'],
            nl: ['eergisteren', 'gisteren', 'vandaag', 'morgen', 'the day after'],
            no: ["i forgårs", "i går", "i dag", "i morgen", "dagen etter"],
            pl: ["przedwczoraj", "wczoraj", "dzisiaj", "jutro", "dzień po"],
            pt: ["anteontem", "ontem", "hoje", "amanhã", "o dia seguinte"],
            ro: ["zi înainte de ieri", "ieri", "azi", "mâine", "a doua zi după"],
            ru: ['позавчера', 'вчера', 'сегодня', 'завтра', 'послезавтра'],
            sk: ["predvčerom", "včera", "dnes", "zajtra", "deň potom"],
            sl: ["predvčerajšnjim", "včeraj", "danes", "jutri", "dan potem"],
            sq: ['pardje', 'dje', 'sot', 'nesër', 'ditën pas'],
            sr: ['прекјуче', 'јуче', 'данас', 'сутра', 'дан после'],
            sv: ["i förrgår", "igår", "idag", "i morgon", "dagen efter"],
            ta: ['நேற்று முன்தினம்', 'நேற்று', 'இன்று', 'நாளை', 'பிறகு நாள்'],
            th: ['วันก่อนเมื่อวานนี้', 'เมื่อวานนี้', 'วันนี้', 'พรุ่งนี้', 'วันรุ่งขึ้นหลังจาก'],
            tj: ['як рӯз пеш дирӯз', 'дирӯз', 'имрӯз', 'фардо', 'рӯзи баъд'],
            tr: ['dünden önceki gün', 'dün', 'bugün', 'yarın', 'bir gün sonra'],
            vi: ["trước ngày hôm qua", "ngày hôm qua", "ngày nay", "ngày mai", "ngày sau"],
            zh: ['前天', '昨天', '今天', '明天', '之後的日子'],
            uk: ['позавчора', 'вчора', 'сьогодні', 'завтра', 'післязавтра']
        };

        return {
            get: function (dayOffset, lang) {
                if(!dayNames.hasOwnProperty(lang)) return null;
                dayOffset += 2;
                return dayOffset < dayNames[lang].length ? dayNames[lang][dayOffset] : null;
            }
        };
    });
