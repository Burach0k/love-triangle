/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var j = 0;
    var i = 0;
    while( i<preferences.length){
      var a = preferences[i];
      var e = i;
      var r = j;
      var b = preferences[a -1];
      if(a != b) {
        var c = preferences[b -1];
        if(b!= c) {
          var d = preferences[c -1];
          var q = c-1;
            if((a == d)&&(i == q)) {
                j++;
            }
          }
        }
      i = i + 1;
    }
   return j/3;
  }