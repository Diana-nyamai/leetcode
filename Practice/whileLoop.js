
    // basic while loop
    function while1(){
        var a = 0;
        while(a<10){
        console.log(a + "<br>");
        a++;
        }
    }
    while1()

console.log("=========================================== sum of numbers in while loop")

function while2(){
    var b = 0
    var total = 0

    while(b<10){
        total+=b
        b++;
    }
    console.log(total + "\n")
}
while2()

console.log("========================================while loop increment an array <br>")
function while3(){
    var randomitems = [1,'dog',true, ['chair','table'], 'cat',4];
    var i = 0;
    while(i < randomitems.length){
        // i++
        res = randomitems[i];
        console.log(res + "<br>")
        i++;
    }
}
while3()

console.log("========================================while loop decrement an array (reverse) <br>")

function while4(){
    var randomitems = [1,'dog',true, ['chair','table'], 'cat',4];
    var a = randomitems.length -1;

    while(a >= 0){
        // a--
        res = randomitems[a];
        console.log(res + "<br>")
        a--
    }
}

while4()

console.log("========================================while loop decrement an array (reverse) method 2 <br>")
function while5(){
    var randomitems = [1,'dog',true, ['chair','table'], 'cat',4];

    var u = randomitems.length;
    while(u > 0){
        u--
        res = randomitems[u];
        console.log(res + '\n')
    }
}

while5()