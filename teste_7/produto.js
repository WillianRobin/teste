let zoom_imagem = document.querySelector('.zoom-imagem');
let imagem = document.querySelector('.zoom-imagem img');
let imagens = document.querySelector('.imagens-selecionave');

let zoom = 300;

zoom_imagem.addEventListener('mouseenter', function () {
    imagem.style.width = zoom + '%';
})

zoom_imagem.addEventListener('mouseleave', function () {
    imagem.style.width = '100%';
    imagem.style.top = '0';
    imagem.style.left = '0';
})

zoom_imagem.addEventListener('mousemove', function (mouseevent) {
    let obj = imagem;
    let obj_left = 0;
    let obj_top = 0;
    let xpos;
    let ypos;

    while (obj.offsetParent) {
        obj_left += obj.offsetLeft;
        obj_top += obj.offsettop;
        obj = obj.offsetParent;
    }
    if(mouseevent){
        xpos = mouseevent.pageX;
        ypos = mouseevent.pageY;

    }else{
        xpos = window.event.x + document.body.scrollLeft - 2;
        ypos = window.event.y + document.body.scrollTop - 2;

    }
    xpos -= obj_left;
    ypos -= obj_top;

    const imgWidth = imagem.clientWidth;
    const imgHeight = imagem.clientHeight;

    imagem.style.top = -(((imgHeight - this.clientHeight) * ypos) / this.clientHeight)+ 'px';
    imagem.style.left = -(((imgHeight - this.clientHeight) * xpos) / this.clientHeight)+ 'px';
});

Array.from(imagens.children).forEach((produtoElm, i, list) =>{
    produtoElm.addEventListener('click', function(){
        const novoSrc = produtoElm.querySelector('img').src;
        imagem.src = novoSrc;

        list.forEach(prod => prod.classList.remove('active'));
        produtoElm.classList.add('active');

    });
});