
console.log("=============================================== basic function \n")
function func(){
    console.log("hello world \n")
}
func()

console.log("=============================================== function with parameter \n")
function func2(name){
    console.log("hello " + name + "\n")
}
func2('diana')

console.log("=============================================== function return statement \n")

function func3(num1, num2){
    return num1 + num2
}
var a = func3(3,5)
console.log(a + "\n")

console.log("=============================================== function checking for identical values \n")
function func4(n1, n2){
    for(var i=0; i<n1.length; i++){
        if(n1[i] === n2){
            var res = "The number exists"
            return  res
        }
    }
    return "The number doesnt exist"
}
var b = func4([2,3,4], 3)
console.log(b)
