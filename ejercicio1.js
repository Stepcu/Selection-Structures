let i = 0;
for(i = 50; i >= 2; i=i-2) {
    if(i === 40) {
        continue;
    } else if (i === 10) {
        continue;
    }
    document.write(i + " ");   
}
document.write(i);
