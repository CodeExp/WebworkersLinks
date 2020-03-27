var bookmarksfile = new XMLHttpRequest();
bookmarksfile.open("GET", "bookmarks.html", false);
bookmarksfile.onreadystatechange = function ()
{
    if(bookmarksfile.readyState === 4) {
    //On contrôle bien quand le statut est égal à 0
        if(bookmarksfile.status === 200 || bookmarksfile.status == 0) {
            //On peut récupérer puis traiter le texte du fichier
            var texteComplet = bookmarksfile.responseText;
            document.getElementById('main').innerHTML = texteComplet;
        }
    }
}
bookmarksfile.send(null);