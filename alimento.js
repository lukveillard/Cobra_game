class Alimento extends objetoJogo {
arqImagem = ['capybara.png', 'morango.png', 'pessego.png'];

    cont; 
    #imagem;
    constructor(valor,...args){
      super(args);
      this.valor = valor;
      this.#imagem = new Image();
      this.cont = Math.round(Math.random()*2);
      this.#imagem.src = this.arqImagem[this.cont];
    }
    desenhar(){
      canvasCtx.drawImage(this.#imagem, this.x, this.y, this.tamanho, this.tamanho);
    }
}
//..minha ideia original um array nesse estilo
    //static tipos = [ 
//{ imagem: 'pessego.png', valor: 5 }
//{ imagem: 'pato.png', valor: 20 },
// { imagem: 'pessego.png', valor: 5 }];
//...
//const tipoAleatorio = Alimento.tipos[Math.floor(Math.random() * Alimento.tipos.length)];
//...