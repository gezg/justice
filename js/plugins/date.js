/**
 * Created by Administrator on 2015-12-3.
 */
function RunGLNL() {
    var a = new Date();
    var g = new Array("\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d");
    var c = a.getFullYear().toString();
    var e = a.getMonth() + 1;
    var b = a.getDate();
    if (e < 10) {
        e = "0" + e
    }
    if (b < 10) {
        b = "0" + b
    }
    var f = c + "\u5e74" + e + "\u6708" + b + "\u65e5";
    f = f + " " + g[a.getDay()];
    f = f + " " + (CnDateofDateStr(a));
    document.write(f)
}
function DaysNumberofDate(a) {
    return parseInt((Date.parse(a) - Date.parse(a.getFullYear() + "/1/1")) / 86400000) + 1
}
function CnDateofDate(p) {
    var h = new Array(22, 42, 218, 0, 131, 73, 182, 5, 14, 100, 187, 0, 25, 178, 91, 0, 135, 106, 87, 4, 18, 117, 43, 0, 29, 182, 149, 0, 138, 173, 85, 2, 21, 85, 170, 0, 130, 85, 108, 7, 13, 201, 118, 0, 23, 100, 183, 0, 134, 228, 174, 5, 17, 234, 86, 0, 27, 109, 42, 0, 136, 90, 170, 4, 20, 173, 85, 0, 129, 170, 213, 9, 11, 82, 234, 0, 22, 169, 109, 0, 132, 169, 93, 6, 15, 212, 174, 0, 26, 234, 77, 0, 135, 186, 85, 4);
    var g = new Array();
    var i = new Array();
    var j;
    var a;
    var k = new Array();
    var m;
    var b;
    var f;
    var l;
    var d;
    var o;
    var e = p.getFullYear();
    var c = p.getMonth() + 1;
    var n = p.getDate();
    if (e < 100) {
        e += 1900
    }
    if ((e < 1997) || (e > 2020)) {
        return 0
    }
    k[0] = h[(e - 1997) * 4];
    k[1] = h[(e - 1997) * 4 + 1];
    k[2] = h[(e - 1997) * 4 + 2];
    k[3] = h[(e - 1997) * 4 + 3];
    if ((k[0] & 128) != 0) {
        g[0] = 12
    } else {
        g[0] = 11
    }
    j = (k[0] & 127);
    b = k[1];
    b = b << 8;
    b = b | k[2];
    a = k[3];
    for (m = 15; m >= 0; m--) {
        i[15 - m] = 29;
        if (((1 << m) & b) != 0) {
            i[15 - m]++
        }
        if (g[15 - m] == a) {
            g[15 - m + 1] = -a
        } else {
            if (g[15 - m] < 0) {
                g[15 - m + 1] = -g[15 - m] + 1
            } else {
                g[15 - m + 1] = g[15 - m] + 1
            }
            if (g[15 - m + 1] > 12) {
                g[15 - m + 1] = 1
            }
        }
    }
    f = DaysNumberofDate(p) - 1;
    if (f <= (i[0] - j)) {
        if ((e > 1901) && (CnDateofDate(new Date((e - 1) + "/12/31")) < 0)) {
            d = -g[0]
        } else {
            d = g[0]
        }
        o = j + f
    } else {
        l = i[0] - j;
        m = 1;
        while ((l < f) && (l + i[m] < f)) {
            l += i[m];
            m++
        }
        d = g[m];
        o = f - l
    }
    if (d > 0) {
        return d * 100 + o
    } else {
        return d * 100 - o
    }
}
function CnYearofDate(a) {
    var b = a.getFullYear();
    var d = a.getMonth() + 1;
    var c = parseInt(Math.abs(CnDateofDate(a)) / 100);
    if (b < 100) {
        b += 1900
    }
    if (c > d) {
        b--
    }
    b -= 1864;
    return CnEra(b) + "\u5e74"
}
function CnMonthofDate(b) {
    var c = new Array("\u96f6", "\u6b63", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d", "\u4e03", "\u516b", "\u4e5d", "\u5341", "\u51ac", "\u814a");
    var a;
    a = parseInt(CnDateofDate(b) / 100);
    if (a < 0) {
        return "\u95f0" + c[-a] + "\u6708"
    } else {
        return c[a] + "\u6708"
    }
}
function CnDayofDate(b) {
    var a = new Array("\u96f6", "\u521d\u4e00", "\u521d\u4e8c", "\u521d\u4e09", "\u521d\u56db", "\u521d\u4e94", "\u521d\u516d", "\u521d\u4e03", "\u521d\u516b", "\u521d\u4e5d", "\u521d\u5341", "\u5341\u4e00", "\u5341\u4e8c", "\u5341\u4e09", "\u5341\u56db", "\u5341\u4e94", "\u5341\u516d", "\u5341\u4e03", "\u5341\u516b", "\u5341\u4e5d", "\u4e8c\u5341", "\u5eff\u4e00", "\u5eff\u4e8c", "\u5eff\u4e09", "\u5eff\u56db", "\u5eff\u4e94", "\u5eff\u516d", "\u5eff\u4e03", "\u5eff\u516b", "\u5eff\u4e5d", "\u4e09\u5341");
    var c;
    c = (Math.abs(CnDateofDate(b))) % 100;
    return a[c]
}
function DaysNumberofMonth(a) {
    var c = a.getFullYear();
    c < 100 ? c += 1900 : c;
    var b = c;
    c += "/" + (a.getMonth() + 1);
    b += "/" + (a.getMonth() + 2);
    c += "/1";
    b += "/1";
    return parseInt((Date.parse(b) - Date.parse(c)) / 86400000)
}
function CnEra(c) {
    var a = new Array("\u7532", "\u4e59", "\u4e19", "\u4e01", "\u620a", "\u5df1", "\u5e9a", "\u8f9b", "\u58ec", "\u7678");
    var b = new Array("\u5b50", "\u4e11", "\u5bc5", "\u536f", "\u8fb0", "\u5df3", "\u5348", "\u672a", "\u7533", "\u9149", "\u620c", "\u4ea5");
    return a[c % 10] + b[c % 12]
}
function CnDateofDateStr(a) {
    if (CnMonthofDate(a) == "\u96f6\u6708") {
        return "\u8bf7\u8c03\u6574\u60a8\u7684\u8ba1\u7b97\u673a\u65e5\u671f!"
    } else {
        return "\u519c\u5386" + CnMonthofDate(a) + CnDayofDate(a)
    }
}
function SolarTerm(e) {
    var d = new Array("\u5c0f\u5bd2", "\u5927\u5bd2", "\u7acb\u6625", "\u96e8\u6c34", "\u60ca\u86f0", "\u6625\u5206", "\u6e05\u660e", "\u8c37\u96e8", "\u7acb\u590f", "\u5c0f\u6ee1", "\u8292\u79cd", "\u590f\u81f3", "\u5c0f\u6691", "\u5927\u6691", "\u7acb\u79cb", "\u5904\u6691", "\u767d\u9732", "\u79cb\u5206", "\u5bd2\u9732", "\u971c\u964d", "\u7acb\u51ac", "\u5c0f\u96ea", "\u5927\u96ea", "\u51ac\u81f3");
    var c = new Array(1272060, 1275495, 1281180, 1289445, 1299225, 1310355, 1321560, 1333035, 1342770, 1350855, 1356420, 1359045, 1358580, 1355055, 1348695, 1340040, 1329630, 1318455, 1306935, 1297380, 1286865, 1277730, 1274550, 1271556);
    var f = 31556926;
    var b = new Date(1901 / 1 / 1);
    b.setTime(947120460000);
    for (; e.getFullYear() < b.getFullYear();) {
        b.setTime(b.getTime() - f * 1000)
    }
    for (; e.getFullYear() > b.getFullYear();) {
        b.setTime(b.getTime() + f * 1000)
    }
    for (var g = 0; e.getMonth() > b.getMonth(); g++) {
        b.setTime(b.getTime() + c[g] * 1000)
    }
    if (e.getDate() > b.getDate()) {
        b.setTime(b.getTime() + c[g] * 1000);
        g++
    }
    if (e.getDate() > b.getDate()) {
        b.setTime(b.getTime() + c[g] * 1000);
        g == 23 ? g = 0 : g++
    }
    var a;
    if (e.getDate() == b.getDate()) {
        a = " \u4eca\u5929\u662f<font color='#FF9999'><b>" + d[g] + "</b></font>"
    } else {
        if (e.getDate() == b.getDate() - 1) {
            a = " \u660e\u5929\u662f<font color='#FF9999'><b>" + d[g] + "</b></font>"
        } else {
            if (e.getDate() == b.getDate() - 2) {
                a = " \u540e\u5929\u662f<font color='#FF9999'><b>" + d[g] + "</b></font>"
            } else {
                a = " ";
                if (e.getMonth() == b.getMonth()) {
                    a += " \u672c\u6708"
                } else {
                    a += " \u4e0b\u6708"
                }
                a += b.getDate() + "\u65e5<font color='#FF9999'><b>" + d[g] + "</b></font>"
            }
        }
    }
    return a
}
function CAL() {
}
RunGLNL();
function CurentTime() {
    var a = new Date();
    var d = a.getHours();
    var e = a.getMinutes();
    var c = a.getTime() % 60000;
    c = (c - (c % 1000)) / 1000;
    var b = d + ":";
    if (e < 10) {
        b += "0"
    }
    b += e + ":";
    if (c < 10) {
        b += "0"
    }
    b += c;
    return (b)
};
