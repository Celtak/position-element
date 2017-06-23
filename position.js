function position(enfant){
        
  var parent = enfant.parentNode;
        
  var c = 0;

  for (var i = 0; i < (parent.childElementCount * 2); i++) {

    var child = parent.childNodes[i];

    if (child === enfant) {

        break;

    } else {

        c++;

    }

  }
        
  return c;
        
}
