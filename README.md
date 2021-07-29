# HEX to HSL bulk converter
## Couple of disclaimers:
#### 1. Was build by a very bad programmer, though it ~~hopefully~~ works
#### 2. To my knowledge, HEX to HSL conversion leaves a bunch of fractional digits in the mayority of cases, since I round them it wont be 100% precise and/or 2 HEX colors may end up having the same HSL value
##### (Probably faulty math 😭) With 360 hues values ranging 0-359, 99 saturation values ranging 1%-100%, and 98 lightness values ranging 1%-99%; 360 × 99 × 98 = 3492720 colors + 100 grayscales which range 0%-100% we end up with **`3492820` unique HSL colors** whilst HEX has 16 unique digits, and 6 specific ones compose a unique HEX color code; 16 ^ 6 = **`16777216` unique HEX color codes** which means that on average every HSL color will have around 4.8 HEX codes, since 16777216 ÷ 3492820 ≈ 4.8

How to use:

1. Start by downloading the files as you do
2. Open index.html with the browser of your choice
3. This should load the document onto your tab
4. You may want to remove the sample HEX and input your own HEX codes with or without the proper `#`, separate them using linebreaks or spaces
5. Click the "to HSL" button at the top of the page

If you want 1:1 HEX & HSL pairs, then head to the console, it'll be there

![](https://media.giphy.com/media/EzqOn0kyb8uv30H2jR/giphy.gif)
