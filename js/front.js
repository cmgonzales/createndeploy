
        function mytimer(){
            
                var hour = new Date().getHours();
                
    
                if(hour > 12){
                
                hour =  ((hour - 12) + " : ");
                
                
            }else{
                    hour = (hour  + " : " );
    
                    
                }
                return hour;
            }
            function myminutes(){
    
            var minutes = new Date().getMinutes();
    
            if(minutes < 10){
            
                minutes = ("0" + minutes + " . ");
    
                
            }else{
                minutes = (minutes + " . ");
            }
                return minutes;
            }
    
            function afternoon(){
                var noon = new Date().getHours();
                
                var afternoon = "";
                if(noon >= 12){
                afternoon = " PM";
                    return afternoon;
                }else{
                    afternoon = " AM";
                    return afternoon;
                }
    
            }
    
            setInterval(function(){
            var pm = "";
                var sec = new Date().getSeconds();
                if(sec < 10){
                sec = ("0" + sec)
                }
                mytimer();
                myminutes();
                afternoon();
                var hours = document.getElementById('hour');
                hours.textContent = (mytimer() + myminutes() + sec + afternoon());
            }, 1000);
    
            function on(){
                console.log("teat");
            }
        
    
    