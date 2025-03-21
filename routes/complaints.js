const express = require('express');
const router = express.Router();
const Complaint = require('../models/Complaint');

// Criar uma nova agenda de vacinação
router.post('/', async (req, res) => {
    const { titleVac, dateVac, localVac, hourVac } = req.body;
    const newComplaint = new Complaint({ titleVac, dateVac, localVac, hourVac });
    await newComplaint.save();
    res.json(newComplaint);
});

// Listar todas as agendas de vacinação
router.get('/', async (req, res) => {
    const complaints = await Complaint.find();
    res.json(complaints);
});

// Atualizar uma agenda de vacinação
router.put('/:id', async (req, res) => {
    const { titleVac, dateVac, localVac, hourVac } = req.body;
    const updatedComplaint = await Complaint.findByIdAndUpdate(req.params.id, { titleVac, dateVac, localVac, hourVac }, { new: true });
    res.json(updatedComplaint);
});

// Deletar uma agenda de vacinação
router.delete('/:id', async (req, res) => {
    await Complaint.findByIdAndDelete(req.params.id);
    res.json({ message: 'Reclamação deletada com sucesso!' });
});

module.exports = router;
