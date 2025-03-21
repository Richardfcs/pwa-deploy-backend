const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
    titleVac: {
        type: String,
        required: true
    },
    dateVac: {
        type: String,
        required: true
    },
    localVac: {
        type: String,
        required: true
    },
    hourVac: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Complaint', complaintSchema);
