class Produtos {
    constructor() {
        this.conta = 0;
    }

    deposito(valor) {
        if (valor > 0) {
            this.conta += valor;
            document.getElementById('text').innerText = this.conta;
            console.log(this.conta);
        } else {
            document.getElementById('avisos').innerText = 'É necessário inserir um valor válido...';
        }
    }

    sacar(valor) {
        if (valor > 0 && valor <= this.conta) {
            this.conta -= valor;
            document.getElementById('text').innerText = this.conta;
        } else {
            document.getElementById('avisos').innerText = "Você não possui esse valor...";
        }
    }
}

const conta_deposito = new Produtos();
