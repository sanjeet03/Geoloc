document.getElementById("id1").addEventListener("click",getposition)

function getposition()
{
    var watchID=
        navigator.geolocation.getCurrentPosition(onSuccess,onError);
    
}
function onSuccess(position)
{
    alert('latitude:'+position.coords.latitude +'\n' + 'longitude:'+position.coords.longitude+'\n');
    
}

function onError(error){
alert('code:'+error.code+'\n'+'message'+error.message + '\n');
}