console.log('hello console');
console.table({name:'aman',age:'20',course:'B.sc. cs hons'});
console.error("this is an error msg");
console.warn("this is an warning be careful before going forward.");
console.log([1,2,3,4,5])
for (let i = 0; i < 5; i++) {
    console.count(i);
}
console.group('505','aman');
console.trace('new')
const spacing='5px';
const style= 'padding: $(spacing); background-color:blue; color: white; font-style: italic; border; 2px double green;'
console.log('%cAman yadav',style)

marks = 25;
console.log(marks);
console.log((typeof marks));

typing = "hello this is a string";
console.log(typing);
console.log((typeof typing));

bool = true;
console.log(bool);


let name1 =prompt("enter your name","user");

console.log(name1);
alert("you are going to do some js practice");