const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var repeticion = {
	values: ['DAILY', 'WEEKLY', 'MONTHLY', 'ANNUAL'],
	message: '{VALUE} NO ES UNA REPETICION PERMITIDA'
};

var estado = {
	values: ['Pendiente Realizar','Pendiente Aprobacion' ,'Aprobada', 'Rechazada'],
	message: '{VALUE} NO ES UNA ESTADO PERMITIDO'
};

const observacionesShema = Schema({
    fechacreacion: { type: Date, default: Date.now },
    formulario: { type: String, required: [true, 'The form is necessary'] },
    usuario: { type:Schema.ObjectId, ref: 'Usuario', required: [true, 'The user is necessary'] },
    fecha: { type: Date, required: [true, 'The date is necessary']},
    repeticion: { type: String, enum: repeticion},
    estado: { type: String, enum: estado, default: 'Pendiente Realizar'},
    zona: { type: String, required: [true, 'La zona es necesaria'] }
}, { collection: 'observacionesPreventivas'});

module.exports = mongoose.model('ObservacionesPreventivas', observacionesShema);