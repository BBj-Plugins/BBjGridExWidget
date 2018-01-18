function bbj_mask_date(date, format) {

    if (!date || !format) return null;

    date = new Date(date);

    var year = date.getYear();
    var fullYear = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours24 = date.getHours();
    var hours12 = hours24 - 12;
    hours12 = hours12 <= 12 ? hours12 : hours24;
    hours12 = hours12 == 0 ? 12 : hours12;
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var translations = {

        // year 
        "Yz": year,
        "Ys": fullYear,
        "Yl": fullYear,
        "Yp": String.fromCharCode(year),
        "Yd": fullYear,
        "Y": fullYear,

        // month
        "Mz": String(month).length == 1 ? "0" + month : month,
        "Ms": month,
        "Ml": month,
        "Mp": String.fromCharCode(month),
        "Md": month,
        "M": month,

        // day
        "Dz": String(day).length == 1 ? "0" + day : day,
        "Ds": day,
        "Dl": day,
        "Dp": String.fromCharCode(day),
        "Dd": day,
        "D": day,

        // hour 24
        "Hs": hours24,
        "Hl": hours24,
        "Hp": String.fromCharCode(hours24),
        "Hd": hours24,
        "H": hours24,

        // hour 12
        "hs": String(hours12).length == 1 ? "0" + hours12 : hours12,
        "hl": hours12,
        "hp": String.fromCharCode(hours12),
        "hd": hours12,
        "h": hours12,

        // minutes
        "ms": String(minutes).length == 1 ? "0" + minutes : minutes,
        "ml": minutes,
        "mp": String.fromCharCode(minutes),
        "md": minutes,
        "m": minutes,

        // seconds
        "ss": String(seconds).length == 1 ? "0" + seconds : seconds,
        "sl": seconds,
        "sp": String.fromCharCode(seconds),
        "sd": seconds,
        "s": seconds,

        'pd': hours24 > 12 ? 'PM' : 'AM',
        'p': hours24 > 12 ? 'PM' : 'AM',
    };

    var result = format;
    for (var k in translations) {
        result = result.replace(new RegExp('(%' + k + ')', 'g'), translations[k]);
    }

    return result;
}

function bbj_mask_number(number, mask) {
    return format(mask, number);
}
