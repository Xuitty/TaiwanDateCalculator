### DateCalculator(Support Taiwan Year Format)

```
funtion calculateDate(date, param, inputMode, outputMode)
```

date: length must greater than 4(ymmdd), y can expand, Ex:19981018

param: param for caculation，Ex:+3,-1,+15,-76....

inputMode: input year format 0=Taiwan format(民國),1=AD

outputMode: convert option 0=original format,1=convert from Taiwan format to AD or AD to Taiwan format

All of the input type are the String type, output also is a String too.

### 手刻版民國西元日期計算機

```
funtion calculateDate(date, param, inputMode, outputMode)
```

date:5 位數以上字串，格式為 ymmdd，y 最少一位數

param:加減參數，Ex:+3,-1,+15,-76....

inputMode:0=民國,1=西元

outputMode:0=不轉換,1=民國西元互轉

以上輸入皆為 String，回傳也是 String
