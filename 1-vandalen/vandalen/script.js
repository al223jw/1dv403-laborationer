"use strict";

var makePerson = function(persArr)
{

    
      
    var minAge;
    var maxAge;
    var ageAverage;
    var ageArr = [];
    
    var names = "";
    var nameArr = [];
    
    
    for (var i = 0; i < persArr.length; i+=1 )
    {

    ageArr[i] = persArr[i].age;
    }
    
    
    var sum = ageArr.reduce(function(a,b)
    { 
    return a + b;
    });
    
    
    minAge = Math.min.apply(null, ageArr);
    maxAge = Math.max.apply(null, ageArr);
    ageAverage = Math.round(sum / ageArr.length);
      
    for (i = 0; i < persArr.length; i+=1)
    {
    nameArr[i] = persArr[i].name;
    }
    
    
    nameArr.sort(function(a,b)
    {
    return a.localeCompare(b);
    });
    
    names = nameArr.toString();
    names = names.split(",").join(", ");
        

    result = {minAge: minAge, maxAge: maxAge, averageAge: ageAverage, names: names};
        
        
    return result;
};

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
var result = makePerson(data);

console.log(result);



