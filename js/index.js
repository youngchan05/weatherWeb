
function weather (){
    const API_KEY = '59f55dcf0b2c981a05be562c29420cf2'; 
    const COORDS = 'coords';
    const WHEATHER = document.querySelector('.weather');
    return {
        init : function(){
            this.location();
        },
        getLocation : function(){
            navigator.geolocation.getCurrentPosition( pos =>{
                const codeObj = {
                    latitude : pos.coords.latitude,
                    longitude : pos.coords.longitude
                }
                this.saveLoacation(codeObj);
            })
        },
        saveLoacation : function(pos){
            localStorage.setItem(COORDS ,JSON.stringify(pos))
        },
        location : function(){
            localStorage.getItem(COORDS) ? console.log('good')  : this.getLocation();
        }
    }
}
const handelWeather = weather();
handelWeather.init();

