(function() {

    const scrollbar = document.querySelector(".scrollbar");
    const scrollbarContent = scrollbar.querySelector(".scrollbar__content")
    const body = document.body;
    // me mostra o total de pixels do height do body
    const totalHeight = body.clientHeight;
    // me mostra o total de pixels do height da tela de viewport, a proporção de 100vh
    const windowHeight = window.innerHeight;
    
    scrollbar.addEventListener("scroll", function() {
        // me mostra o tanto de pixels que o scroll criado anda
        const CustomScrollPosition = scrollbar.scrollTop;
        // nessa conta, eu estou pegando a proporção entre o scroll da página inteira e do scroll criado(não posso usar o valor direto do scrollTop porque como o valor é váriavel, a proporção não bate. Por isso fazer o tamanho da tela menos o height total do elemento. Pois assim, eu consigo o valor do scrollTop porém de forma fixa e dinâmica. Independente da tela, descorbrirei sempre o valor e o valor será fixo enquanto o tamanho de tela for aquele)
        const percentage = (totalHeight-windowHeight)/(scrollbarContent.clientHeight - scrollbar.clientHeight)

        console.log(scrollbarContent.clientHeight)
        console.log(scrollbar.clientHeight)
        // totalHeight: tamanho do body - 9334
        // scrollPosition: tamanho do scroll do html - 8794
        // windowHeight: tamanho da tela - 540
        //scrollbarContent.clientHeight: 378
        // scrollbar.clientHeight: 2646
        // CustomScrollPosition: tamanho do scroll criado - 2268

        // Aqui estou usando o percentage que é razão entre os dois scrolls, multiplicando pelo scroll criado para descobrir o valor proporcinal no scroll da página. E por fim, aplicando o valor proporcional no scroll da página para que ele atualize onde deve estar
        window.scrollTo(0, percentage*CustomScrollPosition)



    });

})();