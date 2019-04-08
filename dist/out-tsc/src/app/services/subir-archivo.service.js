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
var SubirArchivoService = /** @class */ (function () {
    function SubirArchivoService() {
    }
    SubirArchivoService.prototype.subirArchivo = function (archivoImagen, tipo, id) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            formData.append('imagen', archivoImagen, archivoImagen.name);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log('Imagen subida');
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        console.log('Fallo la subida');
                        reject(xhr.response);
                    }
                }
            };
            var url = URL_SERVICIOS + '/upload/' + tipo + '/' + id;
            xhr.open('PUT', url, true);
            xhr.send(formData);
        });
    };
    SubirArchivoService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SubirArchivoService);
    return SubirArchivoService;
}());
export { SubirArchivoService };
//# sourceMappingURL=subir-archivo.service.js.map