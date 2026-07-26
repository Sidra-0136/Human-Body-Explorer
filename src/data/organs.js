import heart from "../assets/images/heart-png.webp";
import brain from "../assets/images/brain-png.webp";
import kidneys from "../assets/images/kidneys-png.webp";
import liver from "../assets/images/liver.png";
import lungs from "../assets/images/lungs.png";
import stomach from "../assets/images/stomach.png";

const organs = [
  {
    id: 1,
    name: "Heart",
    image: heart,
    description: "A muscular organ that pumps blood throughout the body.",
    function: "Pumps oxygen-rich blood to all parts of the body.",
    location: "Middle of the chest, slightly to the left.",
    parts: [
      "Left Atrium",
      "Right Atrium",
      "Left Ventricle",
      "Right Ventricle",
    ],
    diseases: [
      "Heart Attack",
      "Coronary Artery Disease",
      "Arrhythmia",
    ],
    fact: "The human heart beats about 100,000 times every day.",
  },

  {
    id: 2,
    name: "Brain",
    image: brain,
    description: "The body's control center made up of billions of nerve cells.",
    function: "Controls thoughts, memory, movement, and body functions.",
    location: "Inside the skull.",
    parts: [
      "Cerebrum",
      "Cerebellum",
      "Brainstem",
    ],
    diseases: [
      "Stroke",
      "Brain Tumor",
      "Alzheimer's Disease",
    ],
    fact: "The brain contains about 86 billion neurons.",
  },

  {
    id: 3,
    name: "Lungs",
    image: lungs,
    description: "A pair of spongy organs that help us breathe.",
    function: "Exchange oxygen and carbon dioxide during breathing.",
    location: "Inside the chest on both sides of the heart.",
    parts: [
      "Right Lung",
      "Left Lung",
      "Bronchi",
      "Alveoli",
    ],
    diseases: [
      "Asthma",
      "Pneumonia",
      "Tuberculosis",
    ],
    fact: "Your lungs contain millions of tiny air sacs called alveoli.",
  },

  {
    id: 4,
    name: "Liver",
    image: liver,
    description: "The largest internal organ in the human body.",
    function: "Filters blood, produces bile, and stores nutrients.",
    location: "Upper right side of the abdomen.",
    parts: [
      "Right Lobe",
      "Left Lobe",
      "Hepatic Duct",
    ],
    diseases: [
      "Hepatitis",
      "Fatty Liver Disease",
      "Cirrhosis",
    ],
    fact: "The liver can regenerate itself after injury.",
  },

  {
    id: 5,
    name: "Stomach",
    image: stomach,
    description: "A J-shaped muscular organ of the digestive system.",
    function: "Breaks down food using acids and digestive enzymes.",
    location: "Upper left side of the abdomen.",
    parts: [
      "Cardia",
      "Fundus",
      "Body",
      "Pylorus",
    ],
    diseases: [
      "Gastritis",
      "Stomach Ulcer",
      "Stomach Cancer",
    ],
    fact: "The stomach lining replaces itself every few days.",
  },

  {
    id: 6,
    name: "Kidneys",
    image: kidneys,
    description: "Two bean-shaped organs that filter waste from the blood.",
    function: "Filter blood and produce urine.",
    location: "Back of the abdomen on either side of the spine.",
    parts: [
      "Cortex",
      "Medulla",
      "Renal Pelvis",
      "Nephron",
    ],
    diseases: [
      "Kidney Stones",
      "Kidney Failure",
      "Urinary Tract Infection",
    ],
    fact: "Each kidney contains about one million nephrons.",
  },
];

export default organs;