
function weather (){
    const API_KEY = '59f55dcf0b2c981a05be562c29420cf2'; 
    const COORDS = 'coords';
    const WHEATHER = document.querySelector('.weather');
    return {
        init : function(){
            this.setLocation();
        },
        getLocation : function(){
            navigator.geolocation.getCurrentPosition( this.saveLoacation , console.log('error'))
        },
        error:function(){
            console.log(1111);
        },
        saveLoacation : function(pos){
            const posObj = {
                latitude : pos.coords.latitude,
                longitude : pos.coords.longitude,
            }
            localStorage.setItem(COORDS ,JSON.stringify(posObj))
        },
        setLocation : function(){
           if( localStorage.getItem(COORDS) === null) this.getLocation();
        },
    }
}
const handelWeather = weather();
handelWeather.init();

