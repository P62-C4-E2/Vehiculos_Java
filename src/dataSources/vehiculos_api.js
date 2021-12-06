const {RESTDataSource} = require('apollo-datasource-rest');

// Importacion de las urls de los microservicios
const serverConfig = require('../server');

// clase DataSource que se comunica con el mircoservico vehiculos
class VehiculosAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.vehiculos_api_url; // instanciacion del  mircoservico vehiculos
    }

  
    // metodo un GET que trae la lista de todos los vehiculos   
    async getVehiculos(VehiculosList) {
        return await this.get(`vehiculos`, VehiculosList);
    }

    
     // metodo un GET que trae un vehiculo con su id    
    async getVehiculoById(vehiculoId) {
        return await this.get(`vehiculos/${vehiculoId}`);
    }

     // metodo un GET que trae todos los vehiculo con su categoria
    async getVehiculosByCategoria(vehiculoCategoria) {
        return await this.get(`categoriaVehiculo/${vehiculoCategoria}`);
    }

    // metodo POST para crear un nuevo vehiculo
    async createNewVehiculo(vehiculo) {
        vehiculo = new Object(JSON.parse(JSON.stringify(vehiculo)));
        return await this.post(`nuevoVehiculo`, vehiculo);
    }

    // metodo PUT para actualizar un vehiculo con su id
    async updateVehiculo(vehiculoId, vehiculoInput) {
        vehiculoInput = new Object(JSON.parse(JSON.stringify(vehiculoInput)));
        return await this.put(`actualizarVehiculo/${vehiculoId}`, vehiculoInput);
    }
    
     // metodo DELETE para eliminar un vehiculo con su id
    async deleteVehiculo(vehiculoId) {
        return await this.delete(`eliminarVehiculo/${vehiculoId}`);
    }

    // metodo POST para crear un nuevo alquiler
    async createAlquiler(alquiler) {
        alquiler = new Object(JSON.parse(JSON.stringify(alquiler)));
        return await this.post(`alquilar`, alquiler);
    }

    // metodo un GET que traer un alquiler con el username de usuario
    async getAlquilerByUsername(username) {
        return await this.get(`alquilerUsuario/${username}`);
    }

    // metodo un GET que trae un alquiler con su id 
    async getAlquilerById(alquilerId) {
        return await this.get(`alquiler/${alquilerId}`);
    }
    
    
    // metodo un GET que trae la lista de alquileres
    async getAlquilerList(alquilerList) {
        return await this.get(`alquiler`, alquilerList);
    }

    // metodo PUT para actualizar un alquiler con su id
    async updateAlquiler(alquilerId, alquilerInput) {
        alquilerInput = new Object(JSON.parse(JSON.stringify(alquilerInput)));
        return await this.put(`alquilerActualizar/${alquilerId}`, alquilerInput);
    }
    
  // metodo DELETE para eliminar alquliler con su id
    async deleteAlquiler(alquilerId) {
        return await this.delete(`alquilerEliminar/${alquilerId}`);
    }
}

module.exports = VehiculosAPI;
