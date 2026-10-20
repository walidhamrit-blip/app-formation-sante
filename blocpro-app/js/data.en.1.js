/* BlocPro — English course content, part 1/2.
   Translated from the French master file (js/data.js) controlled by the specialist.
   Course and lesson ids are identical across languages so learner progress is preserved. */
const COURSES_EN = [
  {
    id: "urgences-rcp",
    titre: "Life-threatening emergencies and cardiopulmonary resuscitation (CPR)",
    categorie: "Emergency care",
    niveau: "Intermediate",
    duree: "2 h",
    icone: "🚑",
    description: "Recognise cardiac arrest, raise the alarm, start high-quality CPR and use a defibrillator while waiting for the resuscitation team.",
    objectifs: [
      "Recognise cardiac arrest in under 10 seconds",
      "Perform effective chest compressions",
      "Use an AED/SAED safely",
      "Work as a team following the chain of survival"
    ],
    lecons: [
      {
        id: "u1",
        titre: "Recognising cardiac arrest and raising the alarm",
        duree: "20 min",
        intro: "Every minute without resuscitation reduces the chances of survival. The first step is therefore to recognise cardiac arrest quickly: an unconscious casualty who is not breathing normally must be treated as being in cardiac arrest.",
        points: [
          "Check that the scene is safe, then check responsiveness: gently shake the shoulders while speaking loudly.",
          "If there is no response: shout for help and open the airway (head tilt / chin lift).",
          "Assess breathing for no more than 10 seconds: look, listen and feel. Agonal gasps are not normal breathing.",
          "Alert immediately according to your institution’s protocol (internal emergency number, resuscitation team) and ask for the defibrillator and emergency trolley.",
          "Do not waste time looking for a pulse if you are not trained to do so: start compressions."
        ],
        retenir: "Unconscious + not breathing normally = cardiac arrest until proven otherwise → raise the alarm and start compressions without delay."
      },
      {
        id: "u2",
        titre: "High-quality chest compressions",
        duree: "25 min",
        intro: "High-quality chest compressions, interrupted as little as possible, are the most important factor for survival. They maintain minimal perfusion of the brain and heart.",
        points: [
          "Casualty on their back, on a hard surface. Heel of one hand in the centre of the chest, on the lower half of the sternum, second hand on top, arms straight.",
          "Depth: 5 to 6 cm in adults; rate: 100 to 120 per minute.",
          "Allow complete recoil between compressions without losing contact.",
          "Limit interruptions to under 10 seconds (rhythm analysis, ventilation, changing the compressor).",
          "Change the compressor roughly every 2 minutes: fatigue degrades quality without you noticing.",
          "If you are trained and equipped (bag-valve mask): alternate 30 compressions and 2 breaths; otherwise give continuous compressions."
        ],
        retenir: "Hard (5–6 cm), fast (100–120/min), uninterrupted, full recoil, swap every 2 minutes."
      },
      {
        id: "u3",
        titre: "The defibrillator (AED) and teamwork",
        duree: "20 min",
        intro: "Early defibrillation is the treatment for shockable rhythms (ventricular fibrillation, pulseless ventricular tachycardia). The defibrillator must be used as soon as it arrives, without long interruptions to compressions.",
        points: [
          "Switch the device on and follow the voice prompts. Attach the pads to dry skin in the positions illustrated.",
          "During analysis and shock delivery: nobody must touch the casualty — announce it out loud (“Stand clear!”).",
          "Resume compressions immediately after the shock, or if no shock is advised, for 2 minutes before the next analysis.",
          "Allocate roles: a team leader, a compressor, one person for airway/ventilation, one person for the defibrillator and prescribed drugs.",
          "Record the times: arrest onset, CPR start, shocks delivered, drugs given, any return of spontaneous circulation."
        ],
        retenir: "The defibrillator guides, the team acts: Analyse, shock if indicated, compress immediately, document the times."
      }
    ],
    quiz: [
      { question: "With an unconscious casualty, what is the maximum time allowed to assess breathing?", choix: ["10 seconds", "30 seconds", "1 minute", "Until the doctor arrives"], reponse: 0, explication: "Breathing assessment must not exceed 10 seconds, so as not to delay starting CPR." },
      { question: "What is the recommended chest-compression rate in adults?", choix: ["60 to 80 per minute", "80 to 100 per minute", "100 to 120 per minute", "More than 140 per minute"], reponse: 2, explication: "Guidelines target 100 to 120 compressions per minute, at a depth of 5 to 6 cm." },
      { question: "Agonal gasps should be treated as:", choix: ["Normal breathing", "A sign of recovery", "Absence of normal breathing", "An effect of the compressions"], reponse: 2, explication: "Gasps are ineffective agonal breathing movements: the casualty is considered to be in cardiac arrest." },
      { question: "Immediately after an AED shock is delivered, you should:", choix: ["Check the pulse for 30 seconds", "Resume compressions immediately", "Wait 1 minute before touching the casualty", "Remove the pads"], reponse: 1, explication: "After a shock, compressions are resumed at once for 2 minutes before reassessing the rhythm." },
      { question: "Ideally, how often should the person performing compressions be changed?", choix: ["Every 30 seconds", "Roughly every 2 minutes", "Every 10 minutes", "Never — the same person from start to finish"], reponse: 1, explication: "Compression quality falls with fatigue: swapping about every 2 minutes is recommended, with minimal interruption." }
    ]
  },
  {
    id: "diabete-type2",
    titre: "Type 2 diabetes: day-to-day management",
    categorie: "Endocrinology",
    niveau: "Beginner",
    duree: "1 h 30",
    icone: "🩸",
    description: "Understand the disease, glycaemic targets, lifestyle measures and screening for complications in patients with type 2 diabetes.",
    objectifs: [
      "Explain type 2 diabetes to the patient in simple terms",
      "Know the usual HbA1c targets and how they are individualised",
      "Recognise the signs of hypoglycaemia and know how to react",
      "Organise screening for complications"
    ],
    lecons: [
      {
        id: "d1",
        titre: "Understanding type 2 diabetes",
        duree: "20 min",
        intro: "Type 2 diabetes combines insulin resistance with, progressively, impaired insulin secretion. It often develops silently, on a background of overweight, sedentary lifestyle and family predisposition.",
        points: [
          "Diagnosis is based on fasting blood glucose ≥ 1.26 g/L (7.0 mmol/L) on two occasions, or HbA1c ≥ 6.5%, or blood glucose ≥ 2 g/L with symptoms.",
          "Warning signs: marked thirst, large volumes of urine, tiredness, weight loss, recurrent infections.",
          "The disease exposes patients to microvascular complications (eyes, kidneys, nerves) and macrovascular complications (heart, arteries).",
          "Associated cardiovascular risk factors (hypertension, dyslipidaemia, smoking) must be managed at the same time.",
          "The diagnostic announcement and patient education determine long-term adherence to treatment."
        ],
        retenir: "A chronic, often silent disease: fasting glucose ≥ 1.26 g/L twice = diabetes. Therapeutic education is a treatment in its own right."
      },
      {
        id: "d2",
        titre: "Lifestyle measures and glycaemic targets",
        duree: "25 min",
        intro: "Lifestyle and dietary measures are the foundation of treatment, with or without medication. Targets are individualised according to age, comorbidities and hypoglycaemia risk.",
        points: [
          "Balanced diet: limit fast sugars and ultra-processed foods, structure meals according to treatment, favour fibre, vegetables and whole grains.",
          "Regular, adapted physical activity, e.g. 30 minutes of brisk walking at least 5 days a week, after medical advice.",
          "Even moderate weight loss (5 to 10%) clearly improves glycaemic control in overweight patients.",
          "HbA1c reflects control over the last 3 months. A target around 7% suits most adults and must be adapted individually (frail older people: a less strict target).",
          "Self-monitoring of blood glucose is mainly useful for patients on insulin or on medicines with hypoglycaemia risk.",
          "Smoking cessation and control of blood pressure and lipids: cardiovascular risk is the leading cause of death."
        ],
        retenir: "Foundation of treatment: diet, physical activity, weight, stopping smoking. HbA1c ≈ 7% for most adults, with the target always individualised."
      },
      {
        id: "d3",
        titre: "Hypoglycaemia and screening for complications",
        duree: "20 min",
        intro: "Hypoglycaemia is the most frequent acute complication with insulin or sulfonylureas. Regular follow-up also aims to detect chronic complications early, as they are often silent.",
        points: [
          "Signs of hypoglycaemia: sweating, tremor, palpitations, hunger, then impaired concentration or even consciousness.",
          "Conscious patient: fast sugar — 15 g of fast-acting carbohydrate (e.g. 3 sugar cubes), recheck blood glucose after 15 minutes, then a slow-acting carbohydrate if needed.",
          "Unconscious patient: give nothing by mouth, raise the alarm, recovery position, treatment per protocol (glucagon or intravenous glucose by authorised professionals).",
          "Typical annual review: dilated eye examination, kidney function (creatinine, albuminuria), foot examination and sensation, ECG according to context, lipid profile.",
          "Examine the feet at every consultation in at-risk patients; teach self-examination and suitable footwear."
        ],
        retenir: "Hypoglycaemia = fast sugar quickly if conscious (15 g, recheck at 15 min), never by mouth if unconscious. Complications: organised screening every year."
      }
    ],
    quiz: [
      { question: "The fasting blood-glucose diagnostic threshold for diabetes is:", choix: ["≥ 1.00 g/L", "≥ 1.10 g/L", "≥ 1.26 g/L on two occasions", "≥ 1.60 g/L"], reponse: 2, explication: "Fasting glucose ≥ 1.26 g/L (7.0 mmol/L) found on two occasions defines diabetes." },
      { question: "HbA1c reflects glycaemic control over approximately:", choix: ["24 hours", "1 week", "3 months", "1 year"], reponse: 2, explication: "Glycated haemoglobin reflects average blood glucose over roughly the last 2 to 3 months." },
      { question: "Which HbA1c target suits most adults with type 2 diabetes?", choix: ["Below 5.5%", "Around 7%", "Between 9 and 10%", "There is never a target"], reponse: 1, explication: "A target around 7% is usual, but it must always be individualised (age, frailty, hypoglycaemia risk)." },
      { question: "In a conscious patient with hypoglycaemia, the basic action is:", choix: ["Give 15 g of fast-acting sugar then recheck after 15 minutes", "Systematically inject insulin", "Give nothing and wait", "Give a large fatty meal"], reponse: 0, explication: "The rule of 15: 15 g of fast-acting sugar, reassess blood glucose after 15 minutes, repeat if necessary." },
      { question: "Which of these examinations belongs to the usual annual complications review?", choix: ["Dilated eye (fundus) examination", "Routine brain CT scan", "Bronchoscopy", "Thyroid ultrasound"], reponse: 0, explication: "The annual fundus examination screens for diabetic retinopathy, alongside kidney, foot and cardiovascular review." }
    ]
  },
  {
    id: "hygiene-infections",
    titre: "Hospital hygiene and prevention of healthcare-associated infections",
    categorie: "Hygiene & safety",
    niveau: "Beginner",
    duree: "1 h 30",
    icone: "🧼",
    description: "Hand hygiene, standard and additional precautions, and good reflexes to reduce healthcare-associated infections in your unit.",
    objectifs: [
      "Apply the alcohol-based hand-rub technique at the 5 moments",
      "Know the standard precautions applicable to every patient",
      "Distinguish contact, droplet and airborne additional precautions",
      "Manage linen, waste and soiled equipment correctly"
    ],
    lecons: [
      {
        id: "h1",
        titre: "Hand hygiene: the life-saving gesture",
        duree: "20 min",
        intro: "Staff hands are the main vehicle for transmitting micro-organisms in hospital. Hand hygiene is the single most effective measure to prevent healthcare-associated infections.",
        points: [
          "Alcohol-based hand rub is the reference technique on visibly clean hands; it acts in 20 to 30 seconds.",
          "Soap-and-water washing is indicated when hands are visibly soiled, after using the toilet, or for certain suspected organisms (e.g. spores, norovirus) according to local protocols.",
          "The WHO 5 moments: before patient contact, before an aseptic task, after body-fluid exposure risk, after patient contact, after contact with the patient’s surroundings.",
          "Prerequisites: short nails, no nail polish or artificial nails, no jewellery (a plain wedding band may be tolerated depending on the facility), short or rolled-up sleeves.",
          "Gloves never replace hand hygiene: perform hand hygiene before putting them on and immediately after removing them."
        ],
        retenir: "Alcohol hand rub at the 5 moments, gloves or no gloves. It is the cornerstone of infection prevention."
      },
      {
        id: "h2",
        titre: "Standard precautions: for everyone, all the time",
        duree: "25 min",
        intro: "Standard precautions apply to all patients, whatever their known or suspected infectious status, to protect patients and staff from blood and body fluids.",
        points: [
          "Hand hygiene; gloves only when there is a risk of contact with blood, body fluids, mucous membranes or broken skin — changed between each patient and each task.",
          "Apron or gown if splashing is likely; face protection (mask, eye protection) if there is a risk of aerosolisation or splashes.",
          "Sharps: never recap needles, sharps container within reach, never filled beyond two-thirds.",
          "Environment: clean/disinfect soiled surfaces and shared equipment between patients; manage linen and waste through the correct streams (infectious waste).",
          "Respiratory hygiene: a mask for anyone who is coughing; educate visitors.",
          "After a blood-exposure accident (needlestick etc.): immediate first aid, washing, reporting and prompt medical assessment according to the facility’s protocol."
        ],
        retenir: "Standard precautions = every patient, all the time. A glove is a specific indication, not a habit."
      },
      {
        id: "h3",
        titre: "Additional precautions: contact, droplet, airborne",
        duree: "20 min",
        intro: "Some micro-organisms require measures on top of standard precautions, depending on their route of transmission. Signage and information for the whole team, the patient and visitors are essential.",
        points: [
          "Contact (e.g. multidrug-resistant bacteria, scabies, Clostridioides difficile): single room if possible, gown and gloves on entry or on contact, dedicated equipment, reinforced hand hygiene on exit.",
          "Droplet (e.g. influenza, whooping cough): surgical mask for staff in close proximity and for the patient when leaving the room, distance and single room where possible.",
          "Airborne (e.g. tuberculosis, measles, chickenpox): FFP2-type respirator mask, room with door kept closed, ideally negative pressure, patient masked during transport.",
          "Every additional precaution must be prescribed, signposted at the room entrance and communicated whenever the patient is transferred.",
          "Explain to the patient and visitors: these measures protect everyone and should not be experienced as stigmatising."
        ],
        retenir: "Contact, droplet or airborne: adapt the equipment to the transmission route, signpost, hand over, explain."
      }
    ],
    quiz: [
      { question: "On visibly clean hands, the reference technique is:", choix: ["Soap-and-water washing for 2 minutes", "Alcohol-based hand rub for 20 to 30 seconds", "Wearing gloves without hand hygiene", "Water alone"], reponse: 1, explication: "Alcohol hand rub is faster, more effective and better tolerated than washing on visibly clean hands." },
      { question: "Which of these is one of the “5 moments” for hand hygiene?", choix: ["Only when arriving on the ward", "Before an aseptic task", "Only after lunch", "Only for isolated patients"], reponse: 1, explication: "The 5 moments: before patient contact, before an aseptic task, after body-fluid exposure, after patient contact, and after contact with the patient’s surroundings." },
      { question: "Regarding gloves in standard precautions:", choix: ["They must be worn permanently", "They replace hand hygiene", "They are indicated when there is a risk of contact with blood or body fluids", "One pair can be used for several patients"], reponse: 2, explication: "Gloves meet a specific indication; they are changed between patients and tasks and never replace hand hygiene." },
      { question: "A patient with suspected pulmonary tuberculosis requires additional precautions of which type?", choix: ["Contact", "Droplet", "Airborne", "None"], reponse: 2, explication: "Tuberculosis spreads by the airborne route (aerosols): FFP2 mask for staff, room with the door closed." },
      { question: "After an accidental needlestick with a soiled needle, you must first:", choix: ["Wait a week to see", "Give first aid (washing), then report it and seek medical assessment without delay", "Apply a dressing and say nothing", "Disinfect with surgical spirit and carry on working"], reponse: 1, explication: "A blood-exposure accident requires immediate first aid, reporting and rapid medical evaluation (post-exposure treatment may be urgently indicated)." }
    ]
  }
];
