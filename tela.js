const tela = {
   largura:800,
   altura:400,
   imagemArq: "imagem-fundo.jpg",
   desenhar(){
      this.imagem = new Image();
      this.imagem.src = this.imagemArq;
      canvasCtx.drawImage(this.imagem, 0,60, this.largura, this.altura);
   }
}