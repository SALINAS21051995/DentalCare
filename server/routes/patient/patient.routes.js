const express       = require('express');
const router        = express.Router(); 
const clinicHistory = require('../../controller/patient/patient.controller'); 

router.get('/get', clinicHistory.getTodaysPatients);
router.post('/post/addPatient', clinicHistory.addClinicHistory);

module.exports = router;