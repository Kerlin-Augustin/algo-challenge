/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

// Input two arrays
// Output combine array together with no repeats
// psuedo code
// push method, nested for loop, length property




function chunkArray(array, size) {
    console.log('size:', size)
    
        let fullArray = []
    
        while(array.length > 0){
          fullArray.push(array.slice(0, size))
          array.splice(0, size)
    
          console.log(fullArray)
        }
        return fullArray
        // console.log(fullArray.push(array.splice(0, 5)))
        // console.log(fullArray)
    }
    


module.exports = chunkArray