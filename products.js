var freezegun = {name: "freezegun", price: "69$", picurl: "freezeraygru.png", href: "freezegun.html"};
var shrinkray = {name: "shrinkray", price: "69$", picurl: "shrinkray.jpg", href: "shrinkray.html"};
var fartgun = {name: "fartgun", price: "69$", picurl: "fartgun.png", href: "fartgun.html"};
var tranquilizerdarts = {name: "tranquilizer", price: "69$", picurl: "tranquilizer.png" , href: "transquilizer.html"};
var zapplistick = {name: "zapplipstick", price: "69$", picurl: "lipsticktazer.png", href: "lipsticktazer.html"};
var piranhagun = {name: "piranhagun", price: "69$", picurl: "piranhagun.png", href: "piranhagun.html"};

var grumobile = {name: "grumobile", price: "69$", picurl: "grumobile.png", href: "grumobile.html"};
var gruairship = {name: "gruairship", price: "69$", picurl: "gruairship.png", href: "gruairship.html"};
var scooter = {name: "scooter", price: "69$", picurl: "scooter.png", href: "scooter.html"};
var drucar = {name: "drucar", price: "69$", picurl: "drucar.png", href: "drucar.html"};

var hitsquad1 = {name: "hitsquad1", price: "69$", picurl: "hitsquad.png"};

var all = [freezegun, shrinkray, fartgun, tranquilizerdarts,
           zapplistick, piranhagun, grumobile, gruairship, scooter, drucar, hitsquad1];
var weapons = [freezegun, shrinkray, fartgun, tranquilizerdarts, zapplistick, piranhagun];
var vehicles = [grumobile, gruairship, scooter, drucar];
var hitsquads = [hitsquad1];

function showAll() {
  for (var i = 0; i < all.length; i++) {
    var anchor = document.createElement("a");
    var pname = document.createElement("p");
    var pprice = document.createElement("p");
    var productList = document.getElementById("asdf");
    var textnodepname = document.createTextNode(all[i].name);
    var textnodepprice = document.createTextNode(all[i].price);
    var anchorhref = document.createAttribute("href");
    var anchorclass = document.createAttribute("class");
    var pnameclass = document.createAttribute("class");
    var ppriceclass = document.createAttribute("class");

    anchor.appendChild(pname);
    anchor.appendChild(pprice);
    anchor.setAttributeNode(anchorhref);
    anchor.setAttributeNode(anchorclass);

    anchorhref.value = all[i].href;
    anchorclass.value = "productitem";

    pname.appendChild(textnodepname);
    pname.setAttributeNode(pnameclass);

    pnameclass.value = "sdfg";

    pprice.appendChild(textnodepprice);
    pprice.setAttributeNode(ppriceclass);

    ppriceclass.value = "dfgh";



    document.getElementById("asdf").appendChild(anchor);
  }
}

showAll();
