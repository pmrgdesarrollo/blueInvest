var Factura = /** @class */ (function () {
    function Factura(pagador, descontador, valor, numero, plazo, tasa, vencimiento, disponible, comentarios, docs, usuario, publicacion, _id) {
        this.pagador = pagador;
        this.descontador = descontador;
        this.valor = valor;
        this.numero = numero;
        this.plazo = plazo;
        this.tasa = tasa;
        this.vencimiento = vencimiento;
        this.disponible = disponible;
        this.comentarios = comentarios;
        this.docs = docs;
        this.usuario = usuario;
        this.publicacion = publicacion;
        this._id = _id;
    }
    return Factura;
}());
export { Factura };
//# sourceMappingURL=factura.model.js.map