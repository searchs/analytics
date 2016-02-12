console.trace();
var checkABTest = {
    range: function(low, high) {
        'use strict';
        var arr = [],
            c = high - low + 1;
        while (c--) {
            arr[c] = high--;
        }
        return arr;
    },
    ablist: (obix.omtr.list1).split('|'),
    testId: function(abtest_id) {
        return abtest_id.toString();
    },
    getEvars: function(rangeEnd) {
        'use strict';
        var t = this.range(1, rangeEnd);
        t.forEach(function(n) {
            var r = eval('obix.omtr.eVar' + n);
            if (r !== undefined) {
                console.log('eVar', n, ' => ', r);
            }
        });
    },

    showList: function() {
        console.log(this.ablist.sort());
        console.log(this.ablist.filter(function(a) {
            return a.includes(this.testId + ".1");
        }));
    }
};

checkABTest.testId(8817);
