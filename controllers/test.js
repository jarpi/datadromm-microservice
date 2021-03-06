var Shader = require('../models/test.js');

// object passed
function addShader(shaderObject) {
    return new Promise(function(resolve, reject) {
        // create shader
        var shader = new Shader(shaderObject); 
        // save to mongodb
        shader.save(function (err, shaderInserted)
        {
            if (err) {
                return reject(err);
            }
            return resolve(shaderInserted);
            
        });
    });
}
function listShaders() {
    return new Promise(function(resolve, reject) {
        Shader.find(function(err, shaderList) {
            if (err) {
                return reject(err);
            }
            return resolve(shaderList);
        });       
    });
}
function removeShader(shaderId) {
    return new Promise(function(resolve, reject) {
        Shader.findOneAndRemove({_id: shaderId}, null, function(err, deletedDoc){
            if (err) {
            return reject(err);
            }
            return resolve(deletedDoc);     
        });
    });
}
module.exports = {
    createShader: addShader,
    getShaderList: listShaders,
    deleteShader: removeShader
};