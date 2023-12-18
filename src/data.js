import pillIcon from './images/pills.png';
import bottleIcon from './images/bottle.png';

export const PainList = [
    {
        name: 'Tylenol',
        price: '2.25',
        generic: 'generic',
        color: '#8400e7',
        pros: [
          'relieve mild aches or pain and lower fever',
          ' lower-cost generic ',
        ],
        cons: ["Doesn't help with inflammation and swelling", 'Liver damage'],
        rating: 3.5,
        description: 'lower fever and relieve mild pain in adults and children',
        ingredients: ['Acetaminophen'],
        manufacturer: 'Mcneil Laboratories, Inc',
    },
    {
        name: "Morphine",
        price: 22.50,
        generic: "Morphine Generic",
        color: "Green",
        pros: ["Potent pain relief", "Used in medical settings"],
        cons: ["Potential for respiratory depression", "Constipation"],
        rating: 4.5,
        description: "Morphine is a potent opioid analgesic commonly used in medical settings for the management of severe pain. It provides effective pain relief but should be administered with caution due to its potential for respiratory depression and constipation.",
        ingredients: ["Morphine sulfate", "Inactive ingredients"],
        manufacturer: "HealthCare Labs"
    },
    {
        name: "Oxycodone",
        price: 19.99,
        generic: "Oxycodone Generic",
        color: "Blue",
        pros: ["Effective pain relief", "Various formulations available"],
        cons: ["Risk of addiction", "Potential side effects"],
        rating: 4.0,
        description: "Oxycodone is a widely used opioid pain medication known for its effectiveness in managing moderate to severe pain. It comes in various formulations but should be used cautiously due to the risk of addiction and potential side effects.",
        ingredients: ["Oxycodone hydrochloride", "Inactive ingredients"],
        manufacturer: "MediPharm"
    },
    {
        name: "Didaudid",
        price: 25.99,
        generic: "Didaudid Generic",
        color: "White",
        pros: ["Pain relief", "Fast-acting"],
        cons: ["Risk of addiction", "Potential side effects"],
        rating: 4.2,
        description: "Didaudid is a powerful opioid analgesic used for the management of severe pain. It acts quickly to alleviate pain but should be used with caution due to the risk of addiction and potential side effects.",
        ingredients: ["Didaudid active ingredient 1", "Didaudid active ingredient 2"],
        manufacturer: "PharmaCo"
    },
    {
        name: "Tramadol",
        price: 12.99,
        generic: "Tramadol Generic",
        color: "Yellow",
        pros: ["Mild to moderate pain relief", "Lower risk of addiction"],
        cons: ["Potential side effects", "Interactions with other medications"],
        rating: 3.8,
        description: "Tramadol is a synthetic opioid used for the treatment of mild to moderate pain. It provides relief with a lower risk of addiction compared to other opioids but may have potential side effects and interactions with certain medications.",
        ingredients: ["Tramadol hydrochloride", "Inactive ingredients"],
        manufacturer: "PharmaMed"
    },
    {
        name: "Ketorolac",
        price: 8.75,
        generic: "Ketorolac Generic",
        color: "Red",
        pros: ["Potent anti-inflammatory", "Short-term pain relief"],
        cons: ["Risk of gastrointestinal bleeding", "Not for long-term use"],
        rating: 4.0,
        description: "Ketorolac is a nonsteroidal anti-inflammatory drug (NSAID) known for its potent anti-inflammatory properties. It is used for short-term pain relief but should be used cautiously due to the risk of gastrointestinal bleeding and is not recommended for long-term use.",
        ingredients: ["Ketorolac tromethamine", "Inactive ingredients"],
        manufacturer: "MediPharma"
    },
    {
        name: "Norco",
        price: 18.50,
        generic: "Norco Generic",
        color: "Orange",
        pros: ["Effective pain relief", "Combination of hydrocodone and acetaminophen"],
        cons: ["Risk of addiction", "Potential for liver damage"],
        rating: 4.3,
        description: "Norco is a combination medication containing hydrocodone and acetaminophen. It provides effective pain relief but should be used with caution due to the risk of addiction and potential for liver damage from acetaminophen.",
        ingredients: ["Hydrocodone bitartrate", "Acetaminophen", "Inactive ingredients"],
        manufacturer: "HealthCare Labs"
    },
    {
        name: "Percocet",
        price: 21.99,
        generic: "Percocet Generic",
        color: "Yellow",
        pros: ["Effective pain relief", "Combination of oxycodone and acetaminophen"],
        cons: ["Risk of addiction", "Potential for liver damage"],
        rating: 4.5,
        description: "Percocet is a combination medication containing oxycodone and acetaminophen. It is widely used for its effective pain relief properties but should be used with caution due to the risk of addiction and potential for liver damage from acetaminophen.",
        ingredients: ["Oxycodone hydrochloride", "Acetaminophen", "Inactive ingredients"],
        manufacturer: "MediPharm"
      },
      {
        name: "Cyclobenzaprine",
        price: 15.25,
        generic: "Cyclobenzaprine Generic",
        color: "Purple",
        pros: ["Muscle relaxant", "Short-term relief of muscle spasms"],
        cons: ["Drowsiness", "Not recommended for long-term use"],
        rating: 3.7,
        description: "Cyclobenzaprine is a muscle relaxant used for the short-term relief of muscle spasms. It may cause drowsiness and is not recommended for long-term use.",
        ingredients: ["Cyclobenzaprine hydrochloride", "Inactive ingredients"],
        manufacturer: "PharmaRelax"
      },
      {
        name: "Methocarbamol",
        price: 14.50,
        generic: "Methocarbamol Generic",
        color: "White",
        pros: ["Muscle relaxant", "Relief of muscle pain and stiffness"],
        cons: ["Drowsiness", "Not recommended for long-term use"],
        rating: 3.9,
        description: "Methocarbamol is a muscle relaxant used for the relief of muscle pain and stiffness. It may cause drowsiness and is not recommended for long-term use.",
        ingredients: ["Methocarbamol", "Inactive ingredients"],
        manufacturer: "RelaxPharm"
      },
      {
        name: "Aspirin",
        price: 5.99,
        generic: "Aspirin Generic",
        color: "White",
        pros: ["Pain relief", "Anti-inflammatory properties"],
        cons: ["Risk of gastrointestinal bleeding", "Not recommended for certain individuals"],
        rating: 4.1,
        description: "Aspirin is a widely used pain reliever with anti-inflammatory properties. It is effective for pain relief but should be used cautiously due to the risk of gastrointestinal bleeding, and it is not recommended for certain individuals.",
        ingredients: ["Aspirin", "Inactive ingredients"],
        manufacturer: "AspirinCo"
      },
      {
        name: "Ibuprofen",
        price: 7.50,
        generic: "Ibuprofen Generic",
        color: "Orange",
        pros: ["Pain relief", "Anti-inflammatory properties"],
        cons: ["Risk of gastrointestinal issues", "Not recommended for certain individuals"],
        rating: 4.2,
        description: "Ibuprofen is a popular nonsteroidal anti-inflammatory drug (NSAID) known for its pain relief and anti-inflammatory properties. It should be used cautiously due to the risk of gastrointestinal issues and is not recommended for certain individuals.",
        ingredients: ["Ibuprofen", "Inactive ingredients"],
        manufacturer: "IbuprofenPharma"
      },
      {
        name: "Acetaminophen",
        price: 6.99,
        generic: "Acetaminophen Generic",
        color: "Red",
        pros: ["Fever reduction", "Mild to moderate pain relief"],
        cons: ["Risk of liver damage", "Overdose can be harmful"],
        rating: 4.0,
        description: "Acetaminophen is commonly used for fever reduction and mild to moderate pain relief. However, it should be used with caution due to the risk of liver damage, and overdose can be harmful.",
        ingredients: ["Acetaminophen", "Inactive ingredients"],
        manufacturer: "AcetaPharm"
      },
      {
        name: "Naproxen",
        price: 8.25,
        generic: "Naproxen Generic",
        color: "Blue",
        pros: ["Long-lasting pain relief", "Anti-inflammatory properties"],
        cons: ["Risk of gastrointestinal issues", "Not recommended for certain individuals"],
        rating: 4.3,
        description: "Naproxen is a long-lasting nonsteroidal anti-inflammatory drug (NSAID) known for its pain relief and anti-inflammatory properties. It should be used cautiously due to the risk of gastrointestinal issues and is not recommended for certain individuals.",
        ingredients: ["Naproxen", "Inactive ingredients"],
        manufacturer: "NapraPharm"
      },
      {
        name: 'Advil',
        price: '12.99',
        generic: 'brand',
        pros: ['Pain Relief', 'Fast Acting', 'Reliable', 'Popular'],
        cons: ['Diarrhea', 'Possible death'],
        rating: 4.5,
        description:
          'Advil is a widely used pain reliever known for its fast and effective results.',
        ingredients: ['Ibuprofen', 'Starch', 'Cellulose'],
        manufacturer: 'Pfizer',
      },
      {name: 'Benadryl',
      price: '19.99',
      generic: 'generic',
      pros: ['relieve allergy and cold symptoms', 'lower-cost generic'],
      cons: ['drowsiness','hyperactivity'],
      rating: 4.2,
      description: 'treat allergies, common cold symptoms, and itching.',
      ingredients: ['Magnesium stearate','Polyethylene Glycol','Hypromellose'],
      manufacturer: 'Kenvue'
     },
     {name: 'Zyrtec', 
      price: '3.16',
      generic: 'generic',
      pros: ['Lower risk of sleepiness', 'relieving allergy'],
      cons: ['Sleepiness','liver or kidney problems'],
      rating: 4.6,
      description: 'Cetirizine (Zyrtec) works well for allergies and usually causes less side',
      ingredients: ['Cetirizine'],
      manufacturer: 'Johnson & Johnson Consumer Inc'
  
    },
    {name: 'Pepto Bismol', 
     price: '5.95',
     generic: 'brand',
     pros: ['Controls: diarrhoea'],
     cons: ['tongue turning black', 'black poo'],
     rating: 2.0,
     description: 'used for heartburn and acid reflux, indigestion, diarrhoea and feeling sick (nausea)',
     ingredients: ['Bismuth Subsalicylate'],
     manufacturer: 'Procter & Gamble company'
    },
    {
    name: 'Claritin',
      price: '9.99',
      generic: 'brand',
      color: '#8400e7',
      pros: ['Non-Drowsy', 'Fast Acting', 'Reliable', 'Popular'],
      cons: ['Dry Mouth', 'Possible drowsiness'],
      rating: 4.2,
      description:
        'Claritin is a popular antihistamine used for allergy relief without causing drowsiness.',
      ingredients: ['Loratadine', 'Calcium', 'Stearic Acid'],
      manufacturer: 'Bayer',
    }
  ];

export const popularMedicineList2 = [

    {
      name: 'Advil',
      price: '12.99',
      generic: 'brand',
      pros: ['Pain Relief', 'Fast Acting', 'Reliable', 'Popular'],
      cons: ['Diarrhea', 'Possible death'],
      rating: 4.5,
      description:
        'Advil is a widely used pain reliever known for its fast and effective results.',
      ingredients: ['Ibuprofen', 'Starch', 'Cellulose'],
      manufacturer: 'Pfizer',
    },
  
    {name: 'Benadryl',
     price: '19.99',
     generic: 'generic',
     pros: ['relieve allergy and cold symptoms', 'lower-cost generic'],
     cons: ['drowsiness','hyperactivity'],
     rating: 4.2,
     description: 'treat allergies, common cold symptoms, and itching.',
     ingredients: ['Magnesium stearate','Polyethylene Glycol','Hypromellose'],
     manufacturer: 'Kenvue'
    },
    {name: 'Tylenol',
     price: '2.25',
     generic: 'generic',
     pros: ['relieve mild aches or pain and lower fever', ' lower-cost generic '],
     cons: ['Doesn\'t help with inflammation and swelling','Liver damage'],
     rating: 3.5,
     description: 'lower fever and relieve mild pain in adults and children',
     ingredients: ['Acetaminophen'],
     manufacturer: 'McNeil Laboratories, Inc'
    },
    {name: 'Zyrtec', 
     price: '3.16',
     generic: 'generic',
     pros: ['Lower risk of sleepiness', 'relieving allergy'],
     cons: ['Sleepiness','liver or kidney problems'],
     rating: 4.6,
     description: 'Cetirizine (Zyrtec) works well for allergies and usually causes less side',
     ingredients: ['Cetirizine'],
     manufacturer: 'Johnson & Johnson Consumer Inc'
  
    },
  ];

export const recommendedMedicineList = [
    {name: 'Claritin', 
     price: '5.95',
     generic: 'generic',
     pros: ['Oral liquids and certain chewable tablets', 'relieve allergy', 'better tolerability compared to older antihistamines'],
     cons: ['Headache ','Sleepiness', 'Dry mouth', 'Fatigue'],
     rating: 2.8,
     description: 'Short-term relief of allergy symptoms (runny nose, itchy nose, itchy or watery eyes)',
     ingredients: ['Loratadine'],
     manufacturer: 'Schering-Plough Corp.'
    },
    {name: 'Pepto Bismol', 
     price: '5.95',
     generic: 'brand',
     pros: ['Controls: diarrhoea'],
     cons: ['tongue turning black', 'black poo'],
     rating: 2.0,
     description: 'used for heartburn and acid reflux, indigestion, diarrhoea and feeling sick (nausea)',
     ingredients: ['Bismuth Subsalicylate'],
     manufacturer: 'Procter & Gamble company'
    },
    {name: 'Ibuprofen', 
     price: '8.39',
     generic: 'generic',
     pros: ['lower-cost generics', 'Works well for fever, pain, and swelling'],
     cons: ['Heart attack and stroke', 'Kidney damage','Stomach bleeding and ulcers'],
     rating: 4.0,
     description: 'Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) that\'s used to temporarily relieve fever, pains, and aches in adults and children.',
     ingredients: ['Lactose', 'Maize Starch', 'Hypromellose', 'Sodium Starch Glycollate'],
     manufacturer: 'BASF '
    },
  ];

export const brandInfoData = [
    {
        name: "Morphine",
        price: 22.50,
        generic: "Morphine Generic",
        color: "Green",
        pros: ["Potent pain relief", "Used in medical settings"],
        cons: ["Potential for respiratory depression", "Constipation"],
        rating: 4.5,
        description: "Morphine is a potent opioid analgesic commonly used in medical settings for the management of severe pain. It provides effective pain relief but should be administered with caution due to its potential for respiratory depression and constipation.",
        ingredients: ["Morphine sulfate", "Inactive ingredients"],
        manufacturer: "HealthCare Labs"
    },
    {
        name: "Oxycodone",
        price: 19.99,
        generic: "Oxycodone Generic",
        color: "Blue",
        pros: ["Effective pain relief", "Various formulations available"],
        cons: ["Risk of addiction", "Potential side effects"],
        rating: 4.0,
        description: "Oxycodone is a widely used opioid pain medication known for its effectiveness in managing moderate to severe pain. It comes in various formulations but should be used cautiously due to the risk of addiction and potential side effects.",
        ingredients: ["Oxycodone hydrochloride", "Inactive ingredients"],
        manufacturer: "MediPharm"
    },
    {
        name: "Didaudid",
        price: 25.99,
        generic: "Didaudid Generic",
        color: "White",
        pros: ["Pain relief", "Fast-acting"],
        cons: ["Risk of addiction", "Potential side effects"],
        rating: 4.2,
        description: "Didaudid is a powerful opioid analgesic used for the management of severe pain. It acts quickly to alleviate pain but should be used with caution due to the risk of addiction and potential side effects.",
        ingredients: ["Didaudid active ingredient 1", "Didaudid active ingredient 2"],
        manufacturer: "PharmaCo"
    },
    {
      name: 'Advil',
      price: '12.99',
      generic: 'brand',
      color: '#8400e7',
      pros: ['Pain Relief', 'Fast Acting', 'Reliable', 'Popular'],
      cons: ['Diarrhea', 'Possible death'],
      rating: 4.5,
      description:
        'Advil is a widely used pain reliever known for its fast and effective results.',
      ingredients: ['Ibuprofen', 'Starch', 'Cellulose'],
      manufacturer: 'Pfizer',
    },
    {
      name: 'Claritin',
      price: '9.99',
      generic: 'brand',
      color: '#8400e7',
      pros: ['Non-Drowsy', 'Fast Acting', 'Reliable', 'Popular'],
      cons: ['Dry Mouth', 'Possible drowsiness'],
      rating: 4.2,
      description:
        'Claritin is a popular antihistamine used for allergy relief without causing drowsiness.',
      ingredients: ['Loratadine', 'Calcium', 'Stearic Acid'],
      manufacturer: 'Bayer',
    },
    {
      name: 'Benadryl',
      price: '7.99',
      generic: 'generic',
      color: '#8400e7',
      pros: [
        'prevents nausea',
        'prevents dizziness',
        'treats sneezing',
        'treats runny nose',
        'prevents other allergy symptoms',
      ],
      cons: ['upset stomach', 'Possible drowsiness'],
      rating: 3.6,
      description:
        'Benadryl is an antihistamine that reduces the effects of natural chemical histamine in the body.',
      ingredients: ['Carnauba Wax', 'Hypromellose', 'Magnesium stearate'],
      manufacturer: 'Pfizer',
    },
    {
      name: 'Pepto Bismol',
      price: '5.95',
      generic: 'brand',
      color: '#8400e7',
      pros: ['Controls: diarrhoea'],
      cons: ['tongue turning black', 'black poo'],
      rating: 2.0,
      description:
        'used for heartburn and acid reflux, indigestion, diarrhoea and feeling sick (nausea)',
      ingredients: ['Bismuth Subsalicylate'],
      manufacturer: 'Procter & Gamble company',
    },
    {
      name: 'Ibuprofen',
      price: '8.39',
      generic: 'generic',
      color: '#8400e7',
      pros: ['lower-cost generics', 'Works well for fever, pain, and swelling'],
      cons: [
        'Heart attack and stroke',
        'Kidney damage',
        'Stomach bleeding and ulcers',
      ],
      rating: 4.0,
      description:
        'Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) thats used to temporarily relieve fever, pains, and aches in adults and children.',
      ingredients: [
        'Lactose',
        'Maize Starch',
        'Hypromellose',
        'Sodium Starch Glycollate',
      ],
      manufacturer: 'BASF ',
    },
    {
      name: 'Tylenol',
      price: '2.25',
      generic: 'generic',
      color: '#8400e7',
      pros: [
        'relieve mild aches or pain and lower fever',
        ' lower-cost generic ',
      ],
      cons: ["Doesn't help with inflammation and swelling", 'Liver damage'],
      rating: 3.5,
      description: 'lower fever and relieve mild pain in adults and children',
      ingredients: ['Acetaminophen'],
      manufacturer: 'McNeil Laboratories, Inc',
    },
    {
      name: 'Zyrtec',
      price: '3.16',
      generic: 'generic',
      color: '#8400e7',
      pros: ['Lower risk of sleepiness', 'relieving allergy'],
      cons: ['Sleepiness', 'liver or kidney problems'],
      rating: 4.6,
      description:
        'Cetirizine (Zyrtec) works well for allergies and usually causes less side',
      ingredients: ['Cetirizine'],
      manufacturer: 'Johnson & Johnson Consumer Inc',
    },
  ];