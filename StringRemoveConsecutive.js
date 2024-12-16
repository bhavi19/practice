// let str = "Bhaaaviikahaahhhhh"
//Output: "Bhvka"

// let str = "GGhahdhfdhkhhkhhertt"
//output: hahdhfder

let str = "jjjjkkkk"

let stringArray = str.split("")
    let lastOccurence = 1
const checkSeq = (index) => {

    if (stringArray[index] == stringArray[index + 1]) {
        lastOccurence = index + 1
        checkSeq(index + 1)
    }
    else {
        // console.log("here",index)
        lastOccurence = index
    }
// console.log("lastOccurence",lastOccurence)
    return lastOccurence
}

const rec = (arr) => {

    let modifiedArray = arr
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i]

        if (arr[i] == arr[i + 1]) {

            let lastOccuredAt = checkSeq(i + 1)
            if (arr[i] == arr[lastOccuredAt]) {
                // modifiedArray.splice(i, lastOccuredAt - i + 1)
                if(i==0){
                    modifiedArray.splice(i, lastOccuredAt+1)
                }
                else{
                    modifiedArray.splice(i, lastOccuredAt - i + 1)
                }
                stringArray = modifiedArray

                rec(modifiedArray)
            }

        } else {
            // console.log("Here")
        }
    }
    return modifiedArray

}

console.log("Input:", str)
console.log("Output:", rec(stringArray).toString().split(",").join(""))
