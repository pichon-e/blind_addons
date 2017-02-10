var include = function(url, callback){
 
    /* on crée une balise<script type="text/javascript"></script> */
    var script = document.createElement('script');
    script.type = 'text/javascript';
 
    /* On fait pointer la balise sur le script qu'on veut charger
       avec en prime un timestamp pour éviter les problèmes de cache
    */
 
    script.src = url + '?' + (new Date().getTime());
 
    /* On dit d'exécuter cette fonction une fois que le script est chargé */
    if (callback) {
        script.onreadystatechange = callback;
        script.onload = script.onreadystatechange;
    }
 
    /* On rajoute la balise script dans le head, ce qui démarre le téléchargement */
    document.getElementsByTagName('head')[0].appendChild(script);
}

include('./page-script.js', function() {
	console.log('page-script')
})

document.body.style.border = "15px solid red";
