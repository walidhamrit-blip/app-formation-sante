/* BlocPro — English course content, part 2/2 (appended to COURSES_EN). */
COURSES_EN.push(
  {
    id: "ecg-cardio",
    titre: "Cardiology: basic ECG and chest pain",
    categorie: "Cardiology",
    niveau: "Intermediate",
    duree: "2 h",
    icone: "❤️",
    description: "Read an ECG systematically, recognise the main abnormalities and apply the correct approach to chest pain.",
    objectifs: [
      "Record a high-quality ECG with correct electrode placement",
      "Analyse an ECG using a systematic grid",
      "Recognise ECG warning signs of acute coronary syndrome",
      "Prioritise the management of chest pain"
    ],
    lecons: [
      {
        id: "c1",
        titre: "Recording a quality 12-lead ECG",
        duree: "20 min",
        intro: "A poorly recorded ECG can mimic disease or mask a serious abnormality. Tracing quality starts with patient positioning and the exact placement of the chest electrodes.",
        points: [
          "Patient lying down, chest exposed, at rest, not talking or moving; check identity, date, time and context (pain ongoing?).",
          "Limb electrodes: right/left — do not swap the arms (a frequent error that changes the tracing).",
          "V1: 4th intercostal space, right sternal edge. V2: 4th space, left edge. V4: 5th space, mid-clavicular line. V3 between V2 and V4. V5 and V6 level with V4.",
          "Standard speed 25 mm/s (1 small square = 0.04 s) and gain 10 mm/mV; check the calibration mark on the tracing.",
          "If acute coronary syndrome is suspected: do not delay the ECG (target: within 10 minutes of first medical contact) and transmit it to the doctor immediately."
        ],
        retenir: "Electrode placement and checking for lead reversals are the first step of any ECG reading."
      },
      {
        id: "c2",
        titre: "Reading an ECG systematically",
        duree: "30 min",
        intro: "A systematic reading grid prevents abnormalities being missed: rate, rhythm, P waves, PR interval, QRS, ST segment, T wave, QT interval, then a conclusion.",
        points: [
          "Rate: 300 divided by the number of large squares between two QRS complexes in a regular rhythm (60–100/min is normal).",
          "Sinus rhythm: a P wave before every QRS, P positive in lead II, constant PR interval between 0.12 and 0.20 s (3 to 5 small squares).",
          "Narrow QRS if under 0.12 s (3 small squares); a wide QRS suggests a conduction disorder or a ventricular rhythm depending on the context.",
          "ST segment: any significant elevation or depression must draw attention, especially with chest pain.",
          "T wave: normally positive in most leads; inverted, peaked or tall T waves have varied causes to interpret in the clinical and laboratory context (notably potassium).",
          "Always compare with a previous ECG when one exists and correlate with the clinical picture: a normal ECG does not rule out an emergency."
        ],
        retenir: "Always the same order: rate, rhythm, P, PR, QRS, ST, T, QT — and always compare with the old tracing."
      },
      {
        id: "c3",
        titre: "Chest pain: prioritise and escalate",
        duree: "25 min",
        intro: "In chest pain, several causes are life-threatening: acute coronary syndrome, pulmonary embolism, aortic dissection, pneumothorax and tamponade. The approach must be fast and organised.",
        points: [
          "Assess general condition and vital signs: blood pressure in both arms if dissection is suspected, SpO2, heart and respiratory rate, temperature, blood glucose as appropriate.",
          "Characterise the pain: onset, type (constricting, burning, tearing), radiation, duration, relieving/aggravating factors, associated signs (sweating, nausea, breathlessness, malaise).",
          "12-lead ECG without delay, monitoring if available, venous access, oxygen only if hypoxaemic (aim for a guideline-appropriate SpO2, generally 90–94%).",
          "Any ST-segment elevation with suggestive pain is an absolute emergency: immediately activate the local reperfusion pathway, minimising every delay.",
          "Give only prescribed or protocol-based treatments (e.g. antiplatelet, nitrates if indicated and blood pressure allows); document times, treatments and pain evolution."
        ],
        retenir: "Chest pain = rapid ECG, vital signs, Escalate without delay if in doubt. Time is myocardium."
      }
    ],
    quiz: [
      { question: "What is the standard ECG paper speed?", choix: ["10 mm/s", "25 mm/s", "50 mm/s", "100 mm/s"], reponse: 1, explication: "Standard speed is 25 mm/s: one small square (1 mm) then equals 0.04 seconds." },
      { question: "Electrode V1 is placed:", choix: ["In the 2nd right intercostal space", "In the 4th intercostal space at the right sternal edge", "In the 5th left intercostal space", "On the right clavicle"], reponse: 1, explication: "V1: 4th intercostal space at the right sternal edge; V2 is its mirror image on the left." },
      { question: "A rhythm is sinus rhythm if:", choix: ["The rate is below 60/min", "A P wave precedes every QRS with a constant PR interval", "The QRS complexes are wide", "No P wave is visible"], reponse: 1, explication: "Sinus rhythm is defined by a P wave (positive in lead II) before every QRS, with a constant, normal PR interval." },
      { question: "With suggestive chest pain, the ECG should ideally be recorded:", choix: ["Within 2 hours", "After the blood results", "Within the first 10 minutes of care", "Only if the pain persists the next day"], reponse: 2, explication: "The recommended target is an ECG within 10 minutes so as not to delay reperfusion in ST-elevation coronary syndrome." },
      { question: "Regarding oxygen therapy in chest pain:", choix: ["It is routine at high flow", "It is reserved for hypoxaemic patients, with an appropriate SpO2 target", "It is contraindicated in all cases", "It replaces the ECG"], reponse: 1, explication: "Oxygen is indicated only in hypoxaemia; hyperoxia can be harmful, particularly in coronary syndrome." }
    ]
  },
  {
    id: "plaies-pansements",
    titre: "Nursing care: chronic wounds and dressings",
    categorie: "Nursing care",
    niveau: "Intermediate",
    duree: "1 h 45",
    icone: "🩹",
    description: "Assess a chronic wound, choose a suitable dressing and prevent complications, particularly in patients at risk of pressure ulcers.",
    objectifs: [
      "Describe a wound in a standardised way",
      "Know the main dressing families and their indications",
      "Recognise local signs of infection",
      "Implement pressure-ulcer prevention"
    ],
    lecons: [
      {
        id: "p1",
        titre: "Assessing and describing a wound",
        duree: "20 min",
        intro: "A standardised, documented assessment makes it possible to follow a wound’s evolution and adapt the dressing. It covers the wound itself, its surroundings, pain and the patient’s background.",
        points: [
          "Location, size (length, width, depth), stage and duration of the wound.",
          "Appearance of the wound bed: necrosis, slough/fibrin, granulation, epithelialisation (estimate the percentages).",
          "Exudate: amount, appearance, odour; condition of the peri-wound skin (maceration, redness, eczema).",
          "Signs of local infection: increasing pain, warmth, spreading redness, purulent exudate, odour, delayed healing; systemic signs (fever) must be reported urgently.",
          "Background: diabetes, nutritional status, blood supply (pulses, ABPI if measured), mobility, treatments (anticoagulants, corticosteroids).",
          "Photographs and measured diagrams, with the patient’s consent, make follow-up between caregivers easier."
        ],
        retenir: "Size, bed, exudate, edges, pain, background: a complete description documented at every dressing change guides everything else."
      },
      {
        id: "p2",
        titre: "Choosing the right dressing",
        duree: "30 min",
        intro: "There is no “miracle” dressing: the choice depends on the healing phase, the amount of exudate and the wound’s condition. The principle: maintain a controlled moist environment — neither too dry nor macerating.",
        points: [
          "Dry necrotic wound: debridement first (mechanical or autolytic with hydrogel per protocol), after vascular assessment, especially on the lower limb.",
          "Sloughy, exuding wound: absorbent dressings such as alginates or hydrofibres, which gel on contact with exudate.",
          "Granulating wound with little exudate: hydrocolloid or lipidocolloid contact layer to protect the granulations.",
          "Heavily exuding wound: super-absorbent dressings, or negative-pressure therapy on specialist indication.",
          "Infected wound or high infection risk: antimicrobial dressings (e.g. silver, PHMB) when indicated, without replacing prescribed antibiotic therapy.",
          "Protect the peri-wound skin (barrier film), respect the dressing’s wear time and reassess regularly: a dressing is changed when saturated, not mechanically every day."
        ],
        retenir: "Choose according to phase and exudate: debride, absorb, protect. And reassess: a static wound must trigger a search for a cause (vascular, infectious, nutritional, prolonged pressure)."
      },
      {
        id: "p3",
        titre: "Preventing pressure ulcers",
        duree: "20 min",
        intro: "A pressure ulcer results from prolonged compression of tissues between a hard surface and a bony prominence. Prevention is a daily priority for any patient with reduced mobility.",
        points: [
          "Assess risk on admission and regularly with a validated scale (e.g. Braden or Norton) plus clinical judgement.",
          "Inspect pressure areas daily: sacrum, heels, trochanters, occiput, elbows. Redness that does not blanch under pressure on intact skin is a warning sign (stage 1).",
          "Regular position changes (generally every 2 to 3 hours depending on the support surface and tolerance), heel offloading, limited chair time with a suitable cushion.",
          "Appropriate supports: prevention/treatment mattresses and cushions according to risk level and available equipment.",
          "Adequate nutrition and hydration, control of maceration (incontinence, sweating), gentle effleurage of pressure areas — never vigorous massage over redness.",
          "Document positions and skin condition in the record: prevention is teamwork, day and night."
        ],
        retenir: "Assess, inspect, mobilise, nourish, document: pressure ulcers are prevented as a team — and are hard to heal."
      }
    ],
    quiz: [
      { question: "Which of these belongs to a standardised wound assessment?", choix: ["Measured size and appearance of the wound bed", "Only the colour of the dressing", "The caregiver’s blood group", "The brand of equipment used"], reponse: 0, explication: "A complete assessment includes size, wound bed (necrosis, slough, granulations), exudate, peri-wound skin, pain and background." },
      { question: "For a sloughy, heavily exuding wound, the preferred choice is rather:", choix: ["A hydrogel", "An absorbent dressing such as an alginate or hydrofibre", "A simple dry gauze", "Leaving the wound open to the air"], reponse: 1, explication: "Alginates and hydrofibres absorb exudate and promote debridement in a controlled moist environment." },
      { question: "Which sign suggests local wound infection?", choix: ["Regular red granulation", "Increasing pain with malodorous purulent exudate", "Progressive reduction in size", "Healthy peri-wound skin"], reponse: 1, explication: "Increasing pain, spreading redness, warmth, purulent exudate and unusual odour are signs of local infection to report." },
      { question: "Non-blanching redness on intact skin over the sacrum corresponds to:", choix: ["Normal skin", "A stage 1 pressure ulcer (warning sign)", "A stage 4 pressure ulcer", "An allergy to the sheet"], reponse: 1, explication: "Non-blanchable erythema on intact skin defines stage 1: the area must be offloaded immediately." },
      { question: "Regarding the frequency of position changes in pressure-ulcer prevention:", choix: ["Once a day is enough", "Generally every 2 to 3 hours, depending on the support and tolerance", "Only if the patient complains", "They are discouraged at night"], reponse: 1, explication: "Position changes are planned regularly, day and night, and documented; frequency adapts to risk, support surface and skin condition." }
    ]
  },
  {
    id: "communication-patient",
    titre: "Caregiver–patient communication and breaking bad news",
    categorie: "Communication & support",
    niveau: "Beginner",
    duree: "1 h 15",
    icone: "💬",
    description: "Active listening, empathy and a structured method for breaking bad news while preserving trust with the patient and their relatives.",
    objectifs: [
      "Use active-listening techniques",
      "Structure the breaking of bad news in 6 steps",
      "Welcome emotions without avoiding or dramatising them",
      "Check the patient’s understanding"
    ],
    lecons: [
      {
        id: "r1",
        titre: "Active listening in daily practice",
        duree: "20 min",
        intro: "Communication quality influences understanding, adherence to treatment and even clinical outcomes. Active listening is a skill that can be learned and practised.",
        points: [
          "Be available: sit at the patient’s level, appropriate eye contact, phone and notes set aside during the exchange.",
          "Ask open questions (“Tell me about…”, “What worries you most?”) rather than a stream of closed questions.",
          "Rephrase and summarise: “If I understand correctly…” checks understanding and shows the patient has been heard.",
          "Welcome silence: it gives the patient time to think and to express what matters to them.",
          "Avoid jargon: use simple words, explain unavoidable medical terms and check understanding (“To be sure I was clear, could you tell me in your own words…?”)."
        ],
        retenir: "Listen first, rephrase, simplify, check: communication is part of care."
      },
      {
        id: "r2",
        titre: "Breaking bad news: a 6-step method",
        duree: "25 min",
        intro: "Bad news negatively changes the patient’s view of their future. A structured disclosure does not remove the difficulty, but it protects the patient, their relatives and the caregiver.",
        points: [
          "1. Prepare: a quiet, private place, the people the patient wants present, notes and results mastered, enough time.",
          "2. Explore what the patient already knows and perceives: “What have you understood about your situation so far?”",
          "3. Find out what they want to know: some want everything, others step by step; respect that choice.",
          "4. Disclose gradually: a warning phrase (“The results are not what we had hoped for”), then clear information in small steps, checking understanding.",
          "5. Welcome emotions with empathy: name what you observe, let the emotion be expressed, do not contradict or minimise, do not give false hope.",
          "6. Summarise and propose a plan: what happens next, who the patient can contact, follow-up appointment, written information if needed.",
          "The disclosure is documented in the record and handed over to the team so that messages remain consistent."
        ],
        retenir: "Prepare, explore, respect the pace, inform in steps, welcome the emotion, close with a plan: disclosure is an act of care in its own right."
      },
      {
        id: "r3",
        titre: "Coping with emotions and difficult situations",
        duree: "20 min",
        intro: "Anger, denial, silence, tears: emotional reactions are information, not personal attacks. Knowing how to welcome them preserves trust, including in disagreement.",
        points: [
          "Name the emotion without judging: “I can see this news makes you angry, that is understandable.”",
          "Avoid the traps: minimising (“It’s nothing”), false reassurance (“Everything will be fine”), retreating into technique or becoming defensive.",
          "Facing anger: stay calm, hear the complaint to the end, separate the emotion from its content, offer a concrete response or escalate (senior staff, doctor, mediator depending on the organisation).",
          "Respect confidentiality: share with relatives only what the patient wishes to share, except in specific situations provided for by local regulations.",
          "Also look after yourself: team debriefing, discussion groups or supervision; accumulating difficult disclosures promotes burnout."
        ],
        retenir: "Meet the patient where they are, without taking their place or running away: empathy is a balance maintained over time, especially as a team."
      }
    ],
    quiz: [
      { question: "Which of these is an open question?", choix: ["Are you in pain, yes or no?", "Is your pain 5 out of 10?", "Tell me how you are experiencing this situation", "Did you sleep well?"], reponse: 2, explication: "An open question invites the patient to express themselves freely, without suggesting the answer." },
      { question: "Before breaking bad news, it is recommended to:", choix: ["Give all the technical details straight away", "Explore what the patient knows and what they want to know", "Disclose in the corridor to save time", "Ask the relatives to do it for you"], reponse: 1, explication: "Exploring the patient’s perception and wishes lets you adapt the disclosure to their pace and level of understanding." },
      { question: "A “warning phrase” before disclosure (“The results are not what we hoped for”) serves to:", choix: ["Frighten the patient", "Prepare the patient to receive difficult information", "Avoid giving the information", "Test their memory"], reponse: 1, explication: "The warning phrase gives the patient a few seconds to prepare, softening the shock effect." },
      { question: "Faced with a patient’s tears after a disclosure, the most helpful attitude is:", choix: ["Immediately change the subject", "Say “Don’t cry, it’s nothing”", "Stay present, in silence, then welcome what they express", "Leave the room in silence"], reponse: 2, explication: "A silent, caring presence, without minimising, allows the patient to express their emotion safely." },
      { question: "Checking the patient’s understanding can be done by asking them to:", choix: ["Sign a document immediately", "Rephrase in their own words what they have understood", "Recite the exact medical terms", "Nothing — it is unnecessary"], reponse: 1, explication: "The “teach-back” technique (asking for a rephrasing) checks the clarity of our explanations without putting the patient in an exam situation." }
    ]
  }
);
