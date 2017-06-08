//Q2

for (var i = 1; i <= 100; i++) {
    setTimeout(function(x) 
    { 
        return function() 
        {
          console.log(x); 
        }; 

     }(i), 1000*i);
}

/*for (i=1; i<=100; i++) {
    setTimeout(function(x) {
        return function()
        {
          console.log(x);
        }
    }(i), Math.random()*1000);
}
*/