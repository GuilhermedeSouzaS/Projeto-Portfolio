function mostrarItens() {
    var lista = document.querySelector(".menu_lista");
    var itens = document.querySelectorAll(".menu_lista-item");

    lista.classList.toggle("mostrar");

    var delay = 0;

    for(var i = 0; i < itens.length; i++) {
        delay += 200;
        setTimeout(function(item) {
            item.classList.toggle("mostrar");

        }, delay, itens[i])

    }

}