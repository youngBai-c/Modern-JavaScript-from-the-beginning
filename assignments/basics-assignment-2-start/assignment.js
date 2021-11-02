const task3Element = document.getElementById('task-3');

function noParameters(){
    alert("no Parameters")
}

function parameters(username){
    alert('Hi '+ username);
}


function combine(str1,str2,str3){
    const combinedText = str1 + ' '+ str2 + ' ' + str3;
    // const combinedText = '${str1} ${str2} ${str3}';
    return combinedText;
} 
// noParameters();
// parameters('Tom');
// alert(combine('A','B','C'));


task3Element.addEventListener('click',noParameters);
//当同一个对象使用.onclick的写法触发多个方法的时候，后一个方法会把前一个方法覆盖掉(只会执行最后一个方法)
task3Element.addEventListener('click',parameters('Tom'));
// const combinedString = combine('A','B','C');
// task3Element.addEventListener('click', combine('A','B','C'));
