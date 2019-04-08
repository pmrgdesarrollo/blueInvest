var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuariosService } from './usuarios.service';
import { URL_SERVICIOS } from '../config/config';
import { map } from 'rxjs/operators';
import swal from 'sweetalert';
import { SubirArchivoService } from './subir-archivo.service';
var FacturasService = /** @class */ (function () {
    function FacturasService(http, _usuarioService, _subirArchivo) {
        this.http = http;
        this._usuarioService = _usuarioService;
        this._subirArchivo = _subirArchivo;
        this.idLocal = localStorage.getItem('id');
        this.totalFacturas = 0;
        this.misFacturas = [];
    }
    FacturasService.prototype.cargarFactura = function () {
        var _this = this;
        var url = URL_SERVICIOS + '/factura';
        return this.http.get(url).pipe(map(function (resp) {
            _this.totalFacturas = resp.total;
            console.log(resp.ListaDeFacturas);
            return resp.ListaDeFacturas;
        }));
    };
    FacturasService.prototype.cargarMisFacturas = function () {
        // id del usuario para comparar con los ids del arreglo de facturas
        var _this = this;
        var url = URL_SERVICIOS + '/factura/mias/';
        url += this.idLocal;
        return this.http.get(url).pipe(map(function (data) {
            _this.respuestaFacturas = data.ListaDeFacturas;
            return _this.respuestaFacturas;
        }));
    };
    FacturasService.prototype.obtenerFactura = function (id) {
        var url = URL_SERVICIOS + '/factura/' + id;
        return this.http.get(url).pipe(map(function (resp) {
            console.log(resp);
            return resp.factura;
        }));
    };
    FacturasService.prototype.crearFactura = function (factura) {
        var url = URL_SERVICIOS + '/factura';
        url += '?token=' + this._usuarioService.token;
        return this.http.post(url, factura).pipe(map(function (resp) {
            swal('Factura publicada con exito!!!', factura.numero, 'success');
            return resp.FacturaCreada;
        }));
    };
    FacturasService.prototype.actualizarFactura = function (factura) {
        var url = URL_SERVICIOS + '/factura/' + factura._id;
        url += '?token=' + this._usuarioService.token;
        return this.http.put(url, factura).pipe(map(function (resp) {
            return resp.pagador;
        }));
    };
    FacturasService.prototype.borrarFactura = function (id) {
        var url = URL_SERVICIOS + '/factura/' + id;
        url += '?token=' + this._usuarioService.token;
        return this.http.delete(url).pipe(map(function (resp) { return swal('Factura Borrada', 'Eliminada correctamente', 'success'); }));
    };
    FacturasService.prototype.cambiarImagen = function (archivo, id) {
        this._subirArchivo.subirArchivo(archivo, 'facturas', id).then(function (resp) { console.log(resp); }).catch(function (resp) { return console.log(resp); });
    };
    FacturasService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient,
            UsuariosService,
            SubirArchivoService])
    ], FacturasService);
    return FacturasService;
}());
export { FacturasService };
//# sourceMappingURL=facturas.service.js.map