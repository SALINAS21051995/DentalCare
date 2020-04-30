import { HttpHeaders } from '@angular/common/http';
import swal from'sweetalert2';


// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};
export const   httpOptions: any =  {  headers: new HttpHeaders({ 'Content-Type':  'application/json' }) };
export const httpHost = 'http://127.0.0.1:3000/api/';
export const httpActions = 
{
  clinicHistory:
  {    
    create: "patient/post/addPatient",
    getPatients: "patient/get/"    
  }
}
export const statusMessages = {
  'spanish': {
    error: [
      'Problemas al iniciar la transacción',
      'Problema al realizar transacción. Intente mas tarde.', 
      'Error al obtener pacientes. Intente mas tarde.'   
    ],
    success: [
      'Historial clínico creado correctamente.'
    ],
    warning: [
      'Problemas al revertir transacción. Verifique su conexión e intente mas tarde.'
    ]
  },
  'english': {
    error: [
      'Trouble while starting transaction',
      'Trouble while completing transacción. Please try later.', 
      'Error while getting  patients list.  Please try later.'   
    ],
    success: [
      'Clinic history created succesfully.'
    ],
    warning: [
      'Problem while trying to revert transaction. Verify your network and tryle again.'
    ]
  }   
}
export const formsMessages = {
  'spanish': {
    fields : 'Verifique que los campos con (*) no se encuentren vacios.'
  },
  'english': {
    fields : 'Make sure that the fields with (*) are not empty.'
  }
}
export const textAppComponent = {
  'spanish' : {
    welcome: "Bienvenido",
    menu : {
      option1: "Crear Historial Clínico",
      option2: "Historiales Clínicos",
    },
    patientsTable: {
      search: "Buscar",
      name: "Nombre",
      age: "Edad",
      phone: "Teléfono",
      noData: "No hay pacientes para mostrar."      
    },
    clinicHistoryForm : {
      titles: {
        title1: "Creación de Historia Clínica",
        title2: "Compos Obligatorios(*)."
      },
      general: {
        title: "Datos Generales",
        date: "Fecha",
        name: "Nombre",
        surname: "Apellido Paterno",
        surname2: "Apellido Materno",
        age: "Edad",
        gender: "Sexo",
        country: "País",
        city: "Ciudad",
        street: "Calle",
        avenue: "Colonia",
        number: "Número",
        email: "Correo",
        phone: "Teléfono",
        reference: "Referencia",
        ocupation: "Ocupación",
        male: "Masculino",
        female: "Femenino"
      },
      emergencyContact: {
        title: "Contacto de Emergencia",
        name: "Nombre",
        phone: "Teléfono"
      },
      background: {
        title: "Antecedentes Personales y Heredofamiliares",
        hereditaryDisseases: "Enfermedades padecidas por algun miembro de su familia (cancer, problemas cardiacos, padecimientos mentales o algún otro):",
        motive : "Motivo de consulta:",
        illness: "Enfermedad padecida:",
        allergies: "Alergias:"
      },
      survey: {
        title: "Cuestionario Medico",
        underTreatment: "Esta usted bajo tratamiento médico",
        onAspirin: "Esta tomando aspirina",
        hasHadBloodTransfusion: "Ha recibido alguna transfución sanguinea",
        hasDoneDrugs: "Ha consumido o consume drogas",
        hasHadAnesthesiaReaction: "Tuvo alguna reacción a la anestecia local",
        isPreagnant: "Esta usted embarazada",
        hasExcesiveBleeding: "Sangra excesivamente al cortarse",
        hasClottingProblems: "Problemas de coagulación",
        hasALHK: "Anemía. leucemia, hemofília, deficiencia de vitamina K",
        hasAT: "Alcoholismo, tabaquismo",
        hasHKLComplications: "Problemas de corazón, riñones o hígado",
        hasOstheoporosis: "Osteoporosis",
        hasSTDs: "Enfermedades venpereas: Sífilis, gonorreo, SIDA",
        hasCancer: "Cancer",
        hasHepatitis: "Hepatítis",
        hasFever: "Fiebre reumática",
        hasAsthma: "Asma",
        hasDiabetes: "Diabetes",
        hasUlcer: "Ulcera gástrica",
        hasThyroid: "Tiroides",
        hasEpilepsy: "Epilepsia",
        hasTuberculosis: "Tuberculosis",
        hasTachycardia: "Taquicardia",
        highPressure: "Alta Presión",
        lowPressure: "Baja Presión"
      }
    }
  },
  'english': {
    welcome: "Welcome",
    menu : {
      option1: "Add Clinic History",
      option2: "Clinic Histories",
    },
    patientsTable: {
      search: "Search",
      name: "Name",
      age: "Age",
      phone: "Phone",  
      noData: "No patients to be shown."    
    },
    clinicHistoryForm : {
      titles: {
        title1: "Create Clinic File",
        title2: "Obligatory Fields(*)."
      },
      general: {
        title: "Patients Data",
        date: "Date",
        name: "Name",
        surname: "First Surname",
        surname2: "Second Surname",
        age: "Age",
        gender: "Sex",
        country: "Country",
        city: "City",
        street: "Street",
        avenue: "Avenue",
        number: "Number",
        email: "Email",
        phone: "Phone",
        reference: "Reference",
        ocupation: "Ocupation"
      },
      emergencyContact: {
        title: "Contact on Emergency",
        name: "Name",
        phone: "Phone"
      },
      background: {
        title: "Personal and Hereditary Backrground",
        hereditaryDisseases: "Enfermedades padecidas por algun miembro de su familia (cancer, problemas cardiacos, padecimientos mentales o algún otro):",
        motive : "Motivo de consulta:",
        illness: "Enfermedad padecida:",
        allergies: "Alergias:"
      },
      survey: {
        title: "Medical Survey",
        underTreatment: "Under medical treatment",
        onAspirin: "On aspirin",
        hasHadBloodTransfusion: "Had received Blood Transfusion",
        hasDoneDrugs: "Drugs",
        hasHadAnesthesiaReaction: "Anesthesia Reaction",
        isPreagnant: "Preagnant",
        hasExcesiveBleeding: "Excesive Bleeding",
        hasClottingProblems: "Clotting complications",
        hasALHK: "Anemia. leukemia, hemophilia, vitamin K deficiency",
        hasAT: "Alcoholism, smoking issues",
        hasHKLComplications: "Hearth, kidney or liver complications",
        hasOstheoporosis: "Ostheoporosis",
        hasSTDs: "STDs: Syphilis, gonorrhea, AIDS",
        hasCancer: "Cancer",
        hasHepatitis: "Hepatitis",
        hasFever: "Reumatic Fever",
        hasAsthma: "Asthma",
        hasDiabetes: "Diabetes",
        hasUlcer: "Gastric Ulcer",
        hasThyroid: "Thyroid",
        hasEpilepsy: "Epilepsia",
        hasTuberculosis: "Tuberculosis",
        hasTachycardia: "Tachycardia",
        highPressure: "High Pressure",
        lowPressure: "Low Pressure"
      }
    }
  }
}
export const messageNotification = swal;
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
