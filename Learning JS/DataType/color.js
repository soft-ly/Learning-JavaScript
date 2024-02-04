 
    var Links = {
        SetColor:function(color){
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        //     while(i < alist.length){
        //         alist[i].style.color = color;
        //         i++;
        //     } 
        $('a').css('color', color);
    }
    }
    var Body = {
        setFontColor:function(color){
            //document.querySelector('body').style.color = color;
            $('body').css('color', color);
        },
        setBGColor:function(color){
            //document.querySelector('body').style.backgroundColor = color;
            $('body').css('backgroundColor', color);
        }
    }
    function ntodHandler(self){
        if(self.value === 'Night'){
        Body.setBGColor('black');
        Body.setFontColor('white');
        Links.SetColor('powderblue');
        self.value = 'Day';
        }
        else{
        Body.setBGColor('white');
        Body.setFontColor('black');
        Links.SetColor('blue');
        self.value = 'Night';
        }
    }