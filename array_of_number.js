/* 
 Q2: Write a program that accepts an array of numbers and returns an array of numbers in written form e.g.
[1,4,6] ? [“one”, “four”, “six”]
[0,0,6,2,7] ? [“zero”, “zero”, “six”,"two","seven"]
[5,4,3,2,1,5,8] ? ["five", "four", "three", "two", "one", "five","eight"]
 */

function findResult(list1){
    var returendList=[];
    for (var j=0; j< list1.length;j++)
    {
        switch (list1[j]){
            case 0:
                returendList.push('zero');
                break;
            case 1:
                returendList.push('one');
                break;
            case 2:
                returendList.push('two');
                break;
            case 3:
                returendList.push('three');
                break;
            case 4:
                returendList.push('four');
                break;
            case 5:
                returendList.push('five');
                break;
            case 6:
                returendList.push('six');
                break;
            case 7:
                returendList.push('seven');
                break;
            case 8:
                returendList.push('eight');
                break;
                
            case 9:
                returendList.push('nine');
                break;
            default :
                returendList.push(null);
        }
    }
 return returendList;   
}
// i test the code using Netbeans editors 
print(findResult([1,4,6]));
print(findResult([0,0,6,2,7]));
print(findResult([5,4,3,2,1,5,8]));
// or you can test it on Browser's console 
console.log(findResult([1,4,6]));
console.log(findResult([0,0,6,2,7]));
console.log(findResult([5,4,3,2,1,5,8]));