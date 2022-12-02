const num = Math.ceil(Math.random() * 10);
console.log(num);
const gnum = 8;
if (gnum == num)
    console.log('Matched');
else
    console.log('Not matched, the number was ' + gnum);