var Body = {
  SetBackgroundColor: function(color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css("backgroundColor", color);
  },
  SetColor: function(color){
    //document.querySelector('body').style.color = color;
    $('body').css("color", color);
  }
}

var Links = {
  SetColor: function(color){
    // var i = 0;
    // var alist = document.querySelectorAll('a');
    // while(i < alist.length){
    //   alist[i].style.color = color;
    //   i = i + 1;
    //   }
    $('a').css("color", color);
  }
}

function NightdayHandler(self){
  if(self.value === 'Dark mode'){
    Body.SetBackgroundColor('black')
    Body.SetColor('white')
    self.value = 'Day mode';
    Links.SetColor('Powderblue');
  } else{
    Body.SetBackgroundColor('white')
    Body.SetColor('black')
    self.value = 'Dark mode';
    Links.SetColor('blue');
  }
}
