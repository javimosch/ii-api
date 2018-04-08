import {
  createPaginationMethod
} from '../helpers/mongoPagination';
var mongoosePaginate = require('mongoose-paginate');
const mongoose = require('mongoose');
import sequential from 'promise-sequential';

const schema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  address: Object,
  contactText:String,
  helpDescription:String
}, {
  timestamps: true,
  toObject: {}
});

schema.options.toObject.transform = function(doc, ret) {
  return ret;
};


schema.statics.findPaginate = createPaginationMethod()
schema.plugin(mongoosePaginate);
const Field = mongoose.model('project', schema);
export default Field;