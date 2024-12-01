let userInputs = [13,10,7,98,5,33,0,0];
let arr = [...new Set(userInputs)]

let max = arr[0]
let secondMax = 0

const checkGreater = (index) =>{
    let temp = arr[index+1]

    if(temp>max){
        max = temp;
    }
    
    if(secondMax<temp && max!=temp)
        secondMax=temp;
            return max
}

for(let i=0;i<arr.length-1;i++){
     checkGreater(i)
}

console.log("max",max)
console.log("secondMax",secondMax)


