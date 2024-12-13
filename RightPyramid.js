let str = " "
for (let i = 1; i < 5; i++) {
    for (let j = 1; j <= i; j++) {
        str = j.toString()
        process.stdout.write(str)
    }
    console.log(" ")
}
for (let i = 4; i > 0; i--) {
    for (let j = 1; j < i; j++) {
        str = j.toString()
        process.stdout.write(str)
    }
    console.log(" ")

}
