let i = 1;

while (i <= 5) {
    console.log(i);
    i += 1;
}


let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 5)


//! for ()
for (let k = 1; k <= 5; k++){
    console.log(k);
}

for (let l = 1; l <= 5; l++){
    if (l === 5) continue;
    console.log(l);
}

//menghentikan perulangan (break)
for (let m = 1; m <= 5; m++){
    if (m === 4) break;
    console.log(m);
}

for (let n = 10; n >= 4; n--){
    console.log(n);
}