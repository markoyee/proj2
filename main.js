$(document).ready(function() 
{
    
    var mymap = L.map('map_box', {center: [52.2,21.00], zoom:10});
    var lyrOSM = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
    mymap.addLayer(lyrOSM);
    var clip=0;
    
    $("#map_box").on('click',function()
        {
            if (clip==0)
            {
                setTimeout(function(){mymap.invalidateSize();},200);
                clip=1;
                $(this).css("width","100%");
                $(this).css("height","500px");
                clip=1;
            }
            else
            {
                setTimeout(function(){mymap.invalidateSize();},200);
                clip=1;
                $(this).css("width","33%");
                $(this).css("height","100px");
                clip=0;
            }
        }
    );
});

    
    
    
        console.log('kliknieto na diva');

    
    

