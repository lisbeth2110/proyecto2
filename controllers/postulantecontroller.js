const Sequelize = require('sequelize');
const postulantes = require ("../models").postulante;

module.exports=
{
    ListarPostulante(req, res) {
        return postulantes.findAll({}).then(postulantes => res.status(200).send(postulantes)).catch(error => res.status(400).send(error));
      },

    
     ListarId2(req, res) {
       return postulante.findAll({
            where: {
                id: req.params.id 
              }
        })
    },
        
    

  GuardarPostulante(req, res){
    let postulante = postulante.create({
         nombres : req.body.nombres, 
         apellidos : req.body.apellidos,
         documento : req.body.documento, 
         foto_perfil : req.body.foto_perfil, 
         disponibilidad : req.body.disponibilidad,
         nacionalidad : req.body.nacionalidad,
         direccion : req.body.direccion, 
         telefono : req.body.telefono,
         correo : req.body.correo, 
         id_usuario : req.body.id_usuario,
        }).then(postulante => res.status(200).send(postulante))
        .catch(error => res.status(400).send(error));
  
      return(postulante.id);
      },
    
   
    
  }
  