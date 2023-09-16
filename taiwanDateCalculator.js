/**
 *
 * @param {String} date 日期，格式ymmdd，y長度可變，至少5位數
 * @param {String} param 變量，Ex:+10, -23, +5
 * @param {String} inputMode 輸入模式，0:民國 1:西元
 * @param {String} outputMode 輸出模式，0:不轉換 1:民國西元互相轉換
 * @returns {String}
 */

function calculateDate(date, param, inputMode, outputMode) {
    // console.log(date, param, inputMode, outputMode);
    let mode;
    let varibable;
    let calYearRaw = Number(date.substring(0, Number(date.length) - 4));
    let calYear = inputMode === "0" ? calYearRaw + 1911 : calYearRaw;
    let calMonth = Number(
        date.substring(Number(date.length) - 4, Number(date.length) - 2)
    );
    let calDay = Number(
        date.substring(Number(date.length) - 2, Number(date.length))
    );
    let normalDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let leapDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let isLeapYear = isLeapYearFunc(calYear);
    let currentYearDays = isLeapYear ? leapDays : normalDays;
    let dateResult = "ERR";
    if (param === "") {
        mode = "+";
        varibable = 0;
    } else {
        mode = String(param.substring(0, 1));
        varibable = Number(param.substring(1));
    }

    if (
        calDay < 1 ||
        calDay > currentYearDays[calMonth - 1] ||
        calMonth < 1 ||
        calMonth > 12 ||
        date.length < 5 ||
        (mode != "+" && mode != "-")
    ) {
        return dateResult;
    }
    if (mode === "+") {
        calDay = calDay + varibable;
        while (calDay > currentYearDays[calMonth - 1]) {
            calDay = calDay - currentYearDays[calMonth - 1];
            calMonth++;
            if (calMonth > 12) {
                calMonth = 1;
                calYear++;
                isLeapYear = isLeapYearFunc(calYear);
                currentYearDays = isLeapYear ? leapDays : normalDays;
            }
        }

        if (
            (inputMode === "0" && outputMode === "0") ||
            (inputMode === "1" && outputMode === "1")
        ) {
            dateResult =
                String(calYear - 1911) +
                String(calMonth).padStart(2, "0") +
                String(calDay).padStart(2, "0");
            return dateResult;
        }

        dateResult =
            String(calYear) +
            String(calMonth).padStart(2, "0") +
            String(calDay).padStart(2, "0");
        return dateResult;
    }
    calDay = calDay - varibable;
    while (calDay < 1) {
        calDay =
            calDay +
            (calMonth - 2 < 0
                ? currentYearDays[11]
                : currentYearDays[calMonth - 1 - 1]);
        calMonth--;
        if (calMonth < 1) {
            calMonth = 12;
            calYear--;
            isLeapYear = isLeapYearFunc(calYear);
            currentYearDays = isLeapYear ? leapDays : normalDays;
        }
    }
    if (
        (inputMode === "0" && outputMode === "0") ||
        (inputMode === "1" && outputMode === "1")
    ) {
        dateResult =
            String(calYear - 1911) +
            String(calMonth).padStart(2, "0") +
            String(calDay).padStart(2, "0");
        return dateResult;
    }

    dateResult =
        String(calYear) +
        String(calMonth).padStart(2, "0") +
        String(calDay).padStart(2, "0");
    return dateResult;
}

function isLeapYearFunc(year) {
    let result =
        year % 4 === 0
            ? year % 100 === 0
                ? year % 400 === 0
                    ? true
                    : false
                : true
            : false;
    return result;
}
