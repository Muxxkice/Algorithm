//Print a Rectangle
const printRectangle = (x, y) => {
	for (let i = 0; i < x; i++) {
		for (let j = 0; j < y; j++) {
			process.stdout.write("#")
		}
		console.log();
	}
}
const main = (input) => {
	const line = input.split("\n");

	line.some((n) => {
		const h = Number(n.split(" ")[0]);
		const w = Number(n.split(" ")[1]);
		if (h == 0 && w == 0) {
			return true;
		} else {
			printRectangle(h, w)
		}
		console.log();
	})
}

main(require("fs").readFileSync("/dev/stdin", "utf-8"));
