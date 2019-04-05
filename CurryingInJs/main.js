function add(p,q,r,s) {
  if(q != undefined){
    var sum =0; 
     for(var i=0;i<arguments.length;i++){
        sum += arguments[i];
     }
      return sum;
   }
  return function(q) {
      return function(r){
        return function(s){
          return p + q + r + s ;
        };
      };
   };
 }
