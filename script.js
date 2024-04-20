class Calculadora {
    constructor() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.operacion = undefined;
    }

    agregarNumero(numero) {
        if (numero === '.' && this.valorActual.includes('.')) return;
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.actualizarDisplay();
    }

    operar(operacion) {
        if (this.valorActual === '') return;
        if (this.valorAnterior !== '') {
            this.calcular();
        }
        this.operacion = operacion;
        this.valorAnterior = this.valorActual;
        this.valorActual = '';
        this.actualizarDisplay();
    }

    calcular() {
        let calculo;
        const anterior = parseFloat(this.valorAnterior);
        const actual = parseFloat(this.valorActual);
        if (isNaN(anterior) || isNaN(actual)) return;

        switch (this.operacion) {
            case '+':
                calculo = anterior + actual;
                break;
            case '-':
                calculo = anterior - actual;
                break;
            case '*':
                calculo = anterior * actual;
                break;
            case '/':
                calculo = anterior / actual;
                break;
            default:
                return;
        }

        this.valorActual = calculo;
        this.operacion = undefined;
        this.valorAnterior = '';
        this.actualizarDisplay();
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0, -1);
        this.actualizarDisplay();
    }

    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.operacion = undefined;
        this.actualizarDisplay();
    }

    actualizarDisplay() {
        document.getElementById('valor-actual').innerText = this.valorActual;
        document.getElementById('valor-anterior').innerText = this.valorAnterior + ' ' + (this.operacion || '');
    }
}

const calculadora = new Calculadora();
