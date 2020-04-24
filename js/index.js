
function weather (){
    const API_KEY = '59f55dcf0b2c981a05be562c29420cf2'; 
    const COORDS = 'coords';
    const WHEATHER = document.querySelector('.weather');
    return {
        init : function(){
            this.setLocation();
        },
        getLocation : function(){
            navigator.geolocation.getCurrentPosition( this.saveLoacation , this.getError)
        },
        saveLoacation : function(pos){
            const _self = this;
            const posObj = {
                latitude : pos.coords.latitude,
                longitude : pos.coords.longitude,
            }
            localStorage.setItem(COORDS ,JSON.stringify(posObj))
            getWeather(posObj)
        },
        getError: function(){
            console.log('ERROR')
        },
        getWeather : function(pos){
            console.log(pos)
        },
        setLocation : function(){
           if( localStorage.getItem(COORDS) === null) this.getLocation();
        },
    }
}
const handelWeather = weather();
handelWeather.init();

