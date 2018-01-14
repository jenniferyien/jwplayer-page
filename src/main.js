function include(filename, onload) {		
  var head = document.getElementsByTagName('head')[0];		
  var script = document.createElement('script');		
  script.src = filename;		
  script.type = 'text/javascript';		
  script.onload = script.onreadystatechange = function() {		
    if (script.readyState) {		
      if (script.readyState === 'complete' || script.readyState === 'loaded') {		
        script.onreadystatechange = null;                                                        		
        onload();		
      }		
    } 		
    else {		
      onload();          		
    }		
  };		
  head.appendChild(script);		
}		
	
include('https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min.js', function() {		
  $(document).ready(function() {		
    $('.navbar-toggle').click(function() {
      $('.navbar-collapse').toggle()
    });
  })		
});