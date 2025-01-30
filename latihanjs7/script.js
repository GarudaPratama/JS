let b = 1;

while (b <= 10){
    console.log(b);
    b++;
}

let p = 1

do {
    console.log(p);
    p++;
} while (p <= 10)

for (let l = 2; l <= 20; l += 2){
    console.log(l);
}

for (let k = 1; k <= 10; k++){
    if (k === 5) continue;
    console.log(k);
}

for (let j = 1; j <= 10; j++){
    if (j === 6) break;
    console.log(j);
}


