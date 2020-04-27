function weather() {
    const SEARCH_FORM = document.querySelector('.search-form');
    const SEARCH_INPUT  = SEARCH_FORM.querySelector('input');
    const API_KEY = "59f55dcf0b2c981a05be562c29420cf2";
    const obj = {
        
    };
    return {
        init : function(){
            this.search();
        },
        search : function(){
            const _slef = this;
            function inputText(e){
                const  { value} =  e.target;
                _slef.getWeather(value);
            }
            SEARCH_FORM.addEventListener('change' , inputText);
        },
        getWeather : function(city){
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
            ).then(function(response){
                return response.json();
            })
            .then(function(json){
                console.log(json);
                if(json.cod === "404") console.log('error 404')
            })
        },
     }
}
const handelWeather = weather();
handelWeather.init(); 



