const historyCtrl = {};
const dbConnection = require('../../config/dbConnection.js');

historyCtrl.getTodaysPatients = (req, res)=>{  
    let query = `SELECT clinic.clinic_history_id, 
    patient.patient_age, 
    patient.patient_phone, 
    patient.patient_name, patient.patient_fathers_surname, patient.patient_mothers_surname
    FROM 
    dentalcm.dental_patient as patient 
    inner join dentalcm.patient_has_clinic_history as clinic 
    ON 
    DATE_FORMAT(patient.patient_date, "%Y-%m-%d") = DATE_FORMAT(now(), "%Y-%m-%d") 
    AND patient.patient_id = clinic.patient_id;
    ;`    
    dbConnection.query(query,(error, result) =>{
        if(!error){
            let patients = [];
            result.forEach((element, index) => {
                let patient = {
                    id : element.clinic_history_id,
                    number: index+1,                    
                    name: element.patient_name+" "+element.patient_fathers_surname+" "+element.patient_mothers_surname,
                    phone: element.patient_phone,
                    age: element.patient_age
                }
                patients.push(patient);
            });
            res.json({status:"success" ,data:patients})
        }else{
            res.json({status:"error", msg:2 })
        }
    })
}
historyCtrl.addClinicHistory = (req, res) => {
    dbConnection.beginTransaction(function(err) {
        if(err){ res.json({status:"error", msg:0, error:err})}
        else{ //insert into dental patient
            let query = `INSERT INTO dentalcm.dental_patient 
            (
                patient_country, 
                patient_name, 
                patient_fathers_surname, 
                patient_mothers_surname,
                patient_age,
                patient_sex,
                patient_street,
                patient_suburb,
                patient_num,
                patient_city,
                patient_email,
                patient_phone,
                patient_ocupation,
                patient_reference,
                patient_date
            )
            VALUES 
            (
                '`+req.body.country+`',
                '`+req.body.name+`',
                '`+req.body.surname+`',
                '`+req.body.surname2+`',
                '`+req.body.age+`',
                '`+req.body.gender+`',
                '`+req.body.street+`',
                '`+req.body.avenue+`',
                '`+req.body.number+`',
                '`+req.body.city+`',
                '`+req.body.email+`',
                '`+req.body.phone+`',
                '`+req.body.ocupation+`',
                '`+req.body.reference+`',
                '`+req.body.date+`'
            );`;
            dbConnection.query(query, (error, result) =>{
                if(error){ 
                    dbConnection.rollback((err) => {
                        if(err){res.json({status:"warning", msg:"Problemas al revertir transacción", error: err})}
                        else{res.json({status:'error', msg:1, error:error})}
                    })
                }else{
                    let patient =  result.insertId;
                    query = `INSERT INTO dentalcm.dental_emergency_contact
                    (
                        contact_name,
                        contact_phone
                    )
                    VALUES
                    (
                        '`+req.body.emergencyName+`',
                        '`+req.body.emergencyPhone+`'
                    );`;
                    dbConnection.query(query, (error, result) =>{
                        if(error){ 
                            dbConnection.rollback((err) => {
                                if(err){res.json({status:"warning", msg:0, error: err})}
                                else{res.json({status:'error', msg:1, error:error})}
                            })
                        }else{
                            let emergency = result.insertId;
                            query = `INSERT INTO dentalcm.dental_background 
                            (
                                background_family_disease,
                                background_reason_consultation,
                                background_sickness,
                                background_allergies
                            )
                            VALUES 
                            (
                                '`+req.body.familyGeneticDisease+`',
                                '`+req.body.motive+`',
                                '`+req.body.disease+`',
                                '`+req.body.allergies+`'
                            )`;
                            dbConnection.query(query, (error, result) =>{
                                if(error){ 
                                    dbConnection.rollback((err) => {
                                        if(err){res.json({status:"warning", msg:0, error: err})}
                                        else{res.json({status:'error', msg:1, error:error})}
                                    })
                                }else{
                                    let background = result.insertId;
                                    query = `INSERT INTO dentalcm.dental_medical_survey 
                                    (
                                        survey_on_treatment,
                                        survey_treatment,
                                        survey_on_aspirine,
                                        survey_blood_transplanted,
                                        survey_drugs_taken,
                                        survey_anesthesia_reaction,
                                        survey_pregnant,
                                        survey_months,
                                        survey_excesive_bleeding,
                                        survey_coagulation_problems,
                                        survey_alhk,
                                        survey_at,
                                        survey_hkl_complications,
                                        survey_osteoporosis,
                                        survey_stds,
                                        survey_cancer,
                                        survey_hepatitis,
                                        survey_fever,
                                        survey_asthma,
                                        survey_diabetes,
                                        survey_gastric_ulcer,
                                        survey_tyroid,
                                        survey_epilepsy,
                                        survey_tuberculosis,
                                        survey_tachycardia,
                                        survey_high_preassure,
                                        survey_low_preassure,
                                        survey_observations
                                    )
                                    VALUES
                                    (
                                        '`+req.body.isUnderTreatment+`',
                                        '`+req.body.treatment+`',
                                        '`+req.body.isOnAspirine+`',
                                        '`+req.body.hasBloodBeenTransplanted+`',
                                        '`+req.body.hasTakenDrugs+`',
                                        '`+req.body.hasReactedToAnesthesia+`',
                                        '`+req.body.isPregnant+`',
                                        '`+req.body.months+`',
                                        '`+req.body.hasExcesiveBleeding+`',
                                        '`+req.body.hasCoagulationProblems+`',
                                        '`+req.body.hasALHK+`',
                                        '`+req.body.hasAT+`',
                                        '`+req.body.hasHKLComplications+`',
                                        '`+req.body.hasOsteoporosis+`',
                                        '`+req.body.hasSTDs+`',
                                        '`+req.body.hasCancer+`',
                                        '`+req.body.hasHepatitis+`',
                                        '`+req.body.hasFever+`',
                                        '`+req.body.hasAsthma+`',
                                        '`+req.body.hasDiabetes+`',
                                        '`+req.body.hasGastricUlcer+`',
                                        '`+req.body.hasThyroid+`',
                                        '`+req.body.hasEpilepsy+`',
                                        '`+req.body.hasTuberculosis+`',
                                        '`+req.body.hasTachycardia+`',
                                        '`+req.body.hasHighPressure+`',
                                        '`+req.body.hasLowPressure+`',
                                        '`+req.body.observations+`'
                                    );
                                    `;
                                    dbConnection.query(query, (error, result) =>{
                                        if(error){ 
                                            dbConnection.rollback((err) => {
                                                if(err){res.json({status:"warning", msg:0, error: err})}
                                                else{res.json({status:'error', msg:1, error:error})}
                                            })
                                        }else{
                                            let survey = result.insertId;
                                            query = `INSERT INTO dentalcm.patient_has_clinic_history
                                            (
                                                background_id,
                                                contact_id,
                                                survey_id,
                                                patient_id
                                            )
                                            VALUES 
                                            (
                                                `+background+`,
                                                `+emergency+`,
                                                `+survey+`,
                                                `+patient+`
                                            )`;
                                            dbConnection.query(query, (error, result) =>{
                                                if(error){ 
                                                    dbConnection.rollback((err) => {
                                                        if(err){res.json({status:"warning", msg:0, error: err})}
                                                        else{res.json({status:'error', msg:1, error:error})}
                                                    })
                                                }else{
                                                    dbConnection.commit(function(err){
                                                        if(err){
                                                            dbConnection.rollback(function(){
                                                                res.json({status:"error", msg:1, error:err})
                                                            })
                                                        }
                                                        else{
                                                            res.json({status:"success", msg:0});
                                                        }
                                                    })
                                                }
                                            })
                                        }
                                    })
                                }
                            });
                        }
                    });
                }
            });
        }
    })
}

module.exports = historyCtrl;