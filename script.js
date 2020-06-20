
let mat1 = [[1,2,3, 4,5,6],
            [7,8,9, 1,2,3],
            [4,5,6, 7,8,9],

            [1,2,3, 4,5,6],
            [7,8,9, 1,2,3],
            [4,5,6, 7,8,9]];
function myfunc(params) {
    let mat = [[0,0,0, 1,1,1, 2,2,2],
               [0,0,0, 1,1,1, 2,2,2],
               [0,0,0, 1,1,1, 2,2,2],

               [3,3,3, 4,4,4, 5,5,5],
               [3,3,3, 4,4,4, 5,5,5],
               [3,3,3, 4,4,4, 5,5,5],

               [6,6,6, 7,7,7, 8,8,8],
               [6,6,6, 7,7,7, 8,8,8],
               [6,6,6, 7,7,7, 8,8,8]

            ];

    console.log(mat);
    divide(mat);

}

function divide(matrix) {

    if(matrix.length % 3 != 0  || matrix[0].length % 3 != 0){
        alert("matrix size must be a multiples of 3");
        return;
        
    }

    let originSize = matrix.length;
    let newSize = matrix.length / 3;

    let newMat = [];
    let count = 0;
    let sum = 0;

    let ic = 0;
    let jc = 0;

    for (let a = 0 ; a < newSize ; a++) {
        jc = 0;
        let tmp = [];
        for (let b = 0 ; b < newSize ; b++) {
            sum = 0;
            
            for (let i = 0 + ic; i < 3 + ic; i++) {
                for (let j = 0 + jc; j < 3 + jc; j++) {
                    sum = sum + matrix[i][j];
                
                }
            
            }
            
            tmp.push(sum);
            jc = jc + 3;
        }
        newMat[a] = tmp;

        ic = ic + 3;
    }

    console.log("result:");
    
    console.log(newMat);
    
    
    


    console.log("orinial size: " + originSize + "   new size: " + newSize);
    return newMat;
    
    

}



    
 