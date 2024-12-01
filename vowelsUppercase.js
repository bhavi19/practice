let str = "Bhavika Vyas is coding!"
let newStr =""

const convertVowels = ()=>{
for(let i =0; i< str.length;i++){
    if(['a','e','i','o','u'].includes(str[i])){
        newStr = newStr+ str[i].toUpperCase()
    } else{
         newStr = newStr+ str[i]
    }
}
}

convertVowels()
console.log(str)
console.log(newStr)
