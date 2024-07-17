// let book ={
//     books: ['Story', 'Histroy', 'Note', 'Tobest'],

//     printWithDash:function (){
//         setTimeout(()=> console.log(this.books.join(' - ')), 3000)

//     }
// }
// book.printWithDash();
// let ThingToDo= {
//     morning : 'reading',
//     afternoon : 'playing',
//     evening : 'coding',
//     night : ['sleeping', 'Dreaming']


// }
// let {morning, afternoon}=ThingToDo;
// // morning = 'run';
// console.log(morning, ' _ ', afternoon)


function holymonth(month, day) {
    this.month = month;
    this.day =day;
}
holymonth.prototype.info = function(){
    console.log(this.month + ' | ' + this.day + 'Days')
};
let Hmonth = new holymonth('January', 31)

console.log(Hmonth.info());
