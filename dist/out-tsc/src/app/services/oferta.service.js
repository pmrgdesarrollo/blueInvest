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
import { URL_SERVICIOS } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import swal from 'sweetalert';
import { UsuariosService } from './usuarios.service';
import { FacturasService } from './facturas.service';
var OfertaService = /** @class */ (function () {
    function OfertaService(http, _usuarioService, _facturaService) {
        this.http = http;
        this._usuarioService = _usuarioService;
        this._facturaService = _facturaService;
        this.idLocal = localStorage.getItem('id');
        this.totalOfertas = 0;
    }
    OfertaService.prototype.cargarOferta = function () {
        var _this = this;
        var url = URL_SERVICIOS + '/oferta';
        return this.http.get(url).pipe(map(function (resp) {
            _this.totalOfertas = resp.total;
            console.log(resp.listadoOfertas);
            return resp.listadoOfertas;
        }));
    };
    OfertaService.prototype.cargarMisOfertas = function () {
        var _this = this;
        var url = URL_SERVICIOS + '/oferta/misOfertas/';
        url += this.idLocal;
        return this.http.get(url).pipe(map(function (data) {
            _this.respuestaOfertas = data.ListaDeOfertas;
            console.log(_this.respuestaOfertas);
            return _this.respuestaOfertas;
        }));
    };
    OfertaService.prototype.cargarMisOfertasFactura = function (id) {
        var _this = this;
        var url = URL_SERVICIOS + '/oferta/factura/';
        url += id;
        return this.http.get(url).pipe(map(function (data) {
            _this.respuestaOfertasSobreFacturas = data.ListaDeOfertas;
            console.log(_this.respuestaOfertasSobreFacturas);
            return _this.respuestaOfertasSobreFacturas;
        }));
    };
    OfertaService.prototype.obtenerOferta = function (id) {
        var url = URL_SERVICIOS + '/oferta/' + id;
        return this.http.get(url).pipe(map(function (resp) {
            console.log(resp.ofertaID);
            return resp.ofertaID;
        }));
    };
    OfertaService.prototype.crearOferta = function (oferta) {
        var url = URL_SERVICIOS + '/oferta';
        url += '?token=' + this._usuarioService.token;
        return this.http.post(url, oferta).pipe(map(function (resp) {
            swal('Oferta publicada con exito!!!', 'Puedes regresar al panel', 'success');
            return resp;
        }));
    };
    OfertaService.prototype.actualizarOferta = function (oferta, id) {
        var url = URL_SERVICIOS + '/oferta/' + id;
        url += '?token=' + this._usuarioService.token;
        return this.http.put(url, oferta).pipe(map(function (resp) {
            swal('Oferta aceptada!!!', 'el inversor se notificara', 'success');
            return resp.ofertaEditada;
        }));
    };
    OfertaService.prototype.borrarOferta = function (id) {
        var url = URL_SERVICIOS + '/oferta/' + id;
        url += '?token=' + this._usuarioService.token;
        return this.http.delete(url).pipe(map(function (resp) { return swal('Oferta Borrada', 'Eliminada correctamente', 'success'); }));
    };
    OfertaService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient,
            UsuariosService,
            FacturasService])
    ], OfertaService);
    return OfertaService;
}());
export { OfertaService };
//# sourceMappingURL=oferta.service.js.map