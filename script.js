let button = document.getElementsByClassName("button")[0];
let input = document.getElementsByClassName("input")[0];
let output = document.getElementsByClassName("output")[0];

button.addEventListener("mousedown", (e) => {
	let arrayOfHex = input.value.split("#").join("").split(" ").join("\n").split("\n");
	let rgbToHsl = (r, g, b, i) => {
			let rgb = [r, g, b];
			r /= 255, g /= 255, b /= 255;
			let max = Math.max(r, g, b);
			let min = Math.min(r, g, b);
			let h, s, l = (max + min) / 2;
			if(max === min){
				h = s = 0;
			} else {
				let d = max - min;
				s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
				switch(max){
					case r:
						h = (g - b) / d + (g < b ? 6 : 0);
						break;
					case g:
						h = (b - r) / d + 2;
						break;
					case b:
						h = (r - g) / d + 4;
						break;
				}
			}
			h = Math.round(h * 60);
			s = Math.round(s * 100);
			l = Math.round(l * 100);
			return [[`${h}`, `${s}%`, `${l}%`], [...rgb], `hsl(${h}, ${s}%, ${l}%)`, `#${i}`];
		}
	let values = arrayOfHex.map((i) => {
		let r = parseInt(`0x${i.slice(0, 2)}`);
		let g = parseInt(`0x${i.slice(2, 4)}`);
		let b = parseInt(`0x${i.slice(4, 6)}`);
		return rgbToHsl(r, g, b, i);
	});
	let resultingHSL = values.map((i) => i[2]).join("\n");
	let resultingCodes = values.map((i) => `${i[3]} ${i[2]}`).join("\n");
	console.log(resultingCodes);
	output.value = resultingHSL;
});
