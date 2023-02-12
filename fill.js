import Prisma from '@prisma/client';
const prisma = new Prisma.PrismaClient();


   const list=[
      {
       "drug_id": "1",
       "forme": "001",
       "libelle": "AEROSOL",
       "libelle_court": "AERO.",
       "isDeleted": false
      },
      {
       "drug_id": "2",
       "forme": "002",
       "libelle": "AMPOULE",
       "libelle_court": "AMP.",
       "isDeleted": false
      },
      {
       "drug_id": "3",
       "forme": "003",
       "libelle": "AMPOULEBUVABLE",
       "libelle_court": "AMP.BUV.",
       "isDeleted": false
      },
      {
       "drug_id": "4",
       "forme": "004",
       "libelle": "AMPOULEINJECTABLE",
       "libelle_court": "AMP.INJ.",
       "isDeleted": false
      },
      {
       "drug_id": "5",
       "forme": "005",
       "libelle": "BOITE",
       "libelle_court": "BTE.",
       "isDeleted": false
      },
      {
       "drug_id": "6",
       "forme": "007",
       "libelle": "CAPSULE",
       "libelle_court": "CAPS.",
       "isDeleted": false
      },
      {
       "drug_id": "7",
       "forme": "008",
       "libelle": "CAPSULESPINHALER",
       "libelle_court": "CAPS.+SPINA",
       "isDeleted": false
      },
      {
       "drug_id": "8",
       "forme": "009",
       "libelle": "CAPSULEVAGINALE",
       "libelle_court": "CAPS.VAG.",
       "isDeleted": false
      },
      {
       "drug_id": "9",
       "forme": "010",
       "libelle": "CARPULE",
       "libelle_court": "CARP.",
       "isDeleted": false
      },
      {
       "drug_id": "10",
       "forme": "011",
       "libelle": "CARTOUCHE",
       "libelle_court": "CART.",
       "isDeleted": false
      },
      {
       "drug_id": "11",
       "forme": "012",
       "libelle": "COLLUTOIRE",
       "libelle_court": "COLLU.",
       "isDeleted": false
      },
      {
       "drug_id": "12",
       "forme": "013",
       "libelle": "COLLYRE",
       "libelle_court": "COLLY.",
       "isDeleted": false
      },
      {
       "drug_id": "13",
       "forme": "014",
       "libelle": "COMPRIME",
       "libelle_court": "COMP.",
       "isDeleted": false
      },
      {
       "drug_id": "14",
       "forme": "015",
       "libelle": "COMPRIMEEFFERVESCENT",
       "libelle_court": "COMP.EFFER.",
       "isDeleted": false
      },
      {
       "drug_id": "15",
       "forme": "016",
       "libelle": "COMPRIMEOUGELULE",
       "libelle_court": "COMP.OUGLES",
       "isDeleted": false
      },
      {
       "drug_id": "16",
       "forme": "017",
       "libelle": "COMPRIMEGENECOLOGIQUE",
       "libelle_court": "COMP.GYNECO.",
       "isDeleted": false
      },
      {
       "drug_id": "17",
       "forme": "018",
       "libelle": "COMPRIMEINHALATION",
       "libelle_court": "COMP.INHAL",
       "isDeleted": false
      },
      {
       "drug_id": "18",
       "forme": "019",
       "libelle": "CORRICIDE",
       "libelle_court": "COR.",
       "isDeleted": false
      },
      {
       "drug_id": "19",
       "forme": "020",
       "libelle": "CREME",
       "libelle_court": "CRE.",
       "isDeleted": false
      },
      {
       "drug_id": "20",
       "forme": "021",
       "libelle": "DRAGEE",
       "libelle_court": "DRG.",
       "isDeleted": false
      },
      {
       "drug_id": "21",
       "forme": "022",
       "libelle": "FLACON",
       "libelle_court": "FL.",
       "isDeleted": false
      },
      {
       "drug_id": "22",
       "forme": "023",
       "libelle": "GEL",
       "libelle_court": "GEL",
       "isDeleted": false
      },
      {
       "drug_id": "23",
       "forme": "024",
       "libelle": "GELDERMIQUE",
       "libelle_court": "GEL.DERM.",
       "isDeleted": false
      },
      {
       "drug_id": "24",
       "forme": "025",
       "libelle": "GEL(FLACONMONODOSE)",
       "libelle_court": "GEL.FL.MONODOSE",
       "isDeleted": false
      },
      {
       "drug_id": "25",
       "forme": "026",
       "libelle": "GELRECTAL",
       "libelle_court": "GEL.RECT.",
       "isDeleted": false
      },
      {
       "drug_id": "26",
       "forme": "027",
       "libelle": "GELULE",
       "libelle_court": "GLES.",
       "isDeleted": false
      },
      {
       "drug_id": "27",
       "forme": "028",
       "libelle": "GELULEMICRONISEE",
       "libelle_court": "GLES.MICRON.",
       "isDeleted": false
      },
      {
       "drug_id": "28",
       "forme": "029",
       "libelle": "GRANDMODELE",
       "libelle_court": "GM.",
       "isDeleted": false
      },
      {
       "drug_id": "29",
       "forme": "030",
       "libelle": "GRANULE",
       "libelle_court": "GRLES.",
       "isDeleted": false
      },
      {
       "drug_id": "30",
       "forme": "031",
       "libelle": "GOUTTESBUVABLES",
       "libelle_court": "GTTES.BUV.",
       "isDeleted": false
      },
      {
       "drug_id": "31",
       "forme": "032",
       "libelle": "INJECTABLE",
       "libelle_court": "INJ.",
       "isDeleted": false
      },
      {
       "drug_id": "32",
       "forme": "033",
       "libelle": "INJECTABLEFLACONUNIDOSE",
       "libelle_court": "INJ.FL.",
       "isDeleted": false
      },
      {
       "drug_id": "33",
       "forme": "034",
       "libelle": "INJECTIONINTRA-DERMIQUE",
       "libelle_court": "INJ.ID.",
       "isDeleted": false
      },
      {
       "drug_id": "34",
       "forme": "035",
       "libelle": "INJECTIONSOUSCUTANEEOUINTRA-MUSCULAIRE",
       "libelle_court": "INJ.SC.OUIM.",
       "isDeleted": false
      },
      {
       "drug_id": "35",
       "forme": "036",
       "libelle": "LIQUIDE",
       "libelle_court": "LIQ.",
       "isDeleted": false
      },
      {
       "drug_id": "36",
       "forme": "037",
       "libelle": "LIQUIDESTERILE",
       "libelle_court": "LIQ.STER.",
       "isDeleted": false
      },
      {
       "drug_id": "37",
       "forme": "038",
       "libelle": "MOUSSERECTALE",
       "libelle_court": "MOUS.RECT.",
       "isDeleted": false
      },
      {
       "drug_id": "38",
       "forme": "039",
       "libelle": "OVULE",
       "libelle_court": "OV.",
       "isDeleted": false
      },
      {
       "drug_id": "39",
       "forme": "040",
       "libelle": "POMMADE",
       "libelle_court": "PDE.",
       "isDeleted": false
      },
      {
       "drug_id": "40",
       "forme": "041",
       "libelle": "POMMADEDERMIQUE",
       "libelle_court": "PDE.DERM.",
       "isDeleted": false
      },
      {
       "drug_id": "41",
       "forme": "042",
       "libelle": "POMMADEOPHTALMIQUE",
       "libelle_court": "PDE.OPHT.",
       "isDeleted": false
      },
      {
       "drug_id": "42",
       "forme": "043",
       "libelle": "POUDRE",
       "libelle_court": "PDRE.",
       "isDeleted": false
      },
      {
       "drug_id": "43",
       "forme": "044",
       "libelle": "POUDRE(AEROSOL)",
       "libelle_court": "PDRE.AERO.",
       "isDeleted": false
      },
      {
       "drug_id": "44",
       "forme": "045",
       "libelle": "POUDREFLACON",
       "libelle_court": "PDRE.FL.",
       "isDeleted": false
      },
      {
       "drug_id": "45",
       "forme": "046",
       "libelle": "POUDRELOCALE",
       "libelle_court": "PDRE.LOC.",
       "isDeleted": false
      },
      {
       "drug_id": "46",
       "forme": "047",
       "libelle": "POUDREORALE",
       "libelle_court": "PDRE.OR.",
       "isDeleted": false
      },
      {
       "drug_id": "47",
       "forme": "048",
       "libelle": "POUDRERECTALE",
       "libelle_court": "PDRE.RECT.",
       "isDeleted": false
      },
      {
       "drug_id": "48",
       "forme": "049",
       "libelle": "POUDREPOURSOLUTIONBUVABLE(SACHET)",
       "libelle_court": "PDRE.SOL.BUV.",
       "isDeleted": false
      },
      {
       "drug_id": "49",
       "forme": "050",
       "libelle": "POUDRESOLUTIONINTRADISCALE",
       "libelle_court": "PDRE.SOL.I-DISC",
       "isDeleted": false
      },
      {
       "drug_id": "50",
       "forme": "051",
       "libelle": "POUDREPOURSOLUTIONINJECTABLE",
       "libelle_court": "PDRE.SOL.INJ.",
       "isDeleted": false
      },
      {
       "drug_id": "51",
       "forme": "052",
       "libelle": "POUDREPOURSOLUTIONINJECTABLEINTRA-MUSCULAIRE",
       "libelle_court": "PDRE.SOL.INJ.IM",
       "isDeleted": false
      },
      {
       "drug_id": "52",
       "forme": "053",
       "libelle": "POUDREPOURSOLUTIONINJECTABLEINTRA-VEINEUSE",
       "libelle_court": "PDRE.SOL.INJ.IV",
       "isDeleted": false
      },
      {
       "drug_id": "53",
       "forme": "054",
       "libelle": "POUDREPOURSUSPENSIONBUVABLE",
       "libelle_court": "PDRE.SUSP.BUV.",
       "isDeleted": false
      },
      {
       "drug_id": "54",
       "forme": "055",
       "libelle": "PETITMODELE",
       "libelle_court": "PM.",
       "isDeleted": false
      },
      {
       "drug_id": "55",
       "forme": "056",
       "libelle": "SIROP",
       "libelle_court": "SIR.",
       "isDeleted": false
      },
      {
       "drug_id": "56",
       "forme": "057",
       "libelle": "SIROPADULTE",
       "libelle_court": "SIR.AD.",
       "isDeleted": false
      },
      {
       "drug_id": "57",
       "forme": "058",
       "libelle": "SIROPENFANT",
       "libelle_court": "SIR.ENF.",
       "isDeleted": false
      },
      {
       "drug_id": "58",
       "forme": "059",
       "libelle": "SIROPNOURRISSON",
       "libelle_court": "SIR.NOUR.",
       "isDeleted": false
      },
      {
       "drug_id": "59",
       "forme": "060",
       "libelle": "SOLUTION",
       "libelle_court": "SOL.",
       "isDeleted": false
      },
      {
       "drug_id": "60",
       "forme": "061",
       "libelle": "SOLUTIONNONINJECTABLE",
       "libelle_court": "SOL.NONINJ.",
       "isDeleted": false
      },
      {
       "drug_id": "61",
       "forme": "062",
       "libelle": "SOLUTIONAEROSOL",
       "libelle_court": "SOL.AERO.",
       "isDeleted": false
      },
      {
       "drug_id": "62",
       "forme": "063",
       "libelle": "SOLUTIONAQUEUSE",
       "libelle_court": "SOL.AQ.",
       "isDeleted": false
      },
      {
       "drug_id": "63",
       "forme": "064",
       "libelle": "SOLUTIONAQUEUSECRISTALLINE",
       "libelle_court": "SOL.AQ.CRIST.",
       "isDeleted": false
      },
      {
       "drug_id": "64",
       "forme": "065",
       "libelle": "SOLUTIONAURICULAIRE",
       "libelle_court": "SOL.AURI.",
       "isDeleted": false
      },
      {
       "drug_id": "65",
       "forme": "066",
       "libelle": "SOLUTIONBUVABLE",
       "libelle_court": "SOL.BUV.",
       "isDeleted": false
      },
      {
       "drug_id": "66",
       "forme": "067",
       "libelle": "SOLUTIONBUVABLE/SOLUTIONRECTALE",
       "libelle_court": "SOL.BUV./RECT.",
       "isDeleted": false
      },
      {
       "drug_id": "67",
       "forme": "068",
       "libelle": "SOLUTIONBUVABLEGOUTTES",
       "libelle_court": "SOL.BUV.GTTES.",
       "isDeleted": false
      },
      {
       "drug_id": "68",
       "forme": "069",
       "libelle": "SOLUTIONDERMIQUE",
       "libelle_court": "SOL.DERM.",
       "isDeleted": false
      },
      {
       "drug_id": "69",
       "forme": "070",
       "libelle": "SOLUTIONINHALATION",
       "libelle_court": "SOL.INHAL.",
       "isDeleted": false
      },
      {
       "drug_id": "70",
       "forme": "071",
       "libelle": "SOLUTIONINJECTABLE",
       "libelle_court": "SOL.INJ.",
       "isDeleted": false
      },
      {
       "drug_id": "71",
       "forme": "072",
       "libelle": "SOLUTIONINJECTABLEINTRA-MUSCULAIRE",
       "libelle_court": "\"SOL",
       "isDeleted": false
      },
      {
       "drug_id": "72",
       "forme": "073",
       "libelle": "SOLUTIONINJECTABLEINTRE-VEINEUSE",
       "libelle_court": "SOL.INJ.IV.",
       "isDeleted": false
      },
      {
       "drug_id": "73",
       "forme": "074",
       "libelle": "SOLUTIONINJECTABLEINTRA-VEINEUSEPOURPERFUSION",
       "libelle_court": "SOL.INJ.IV.PERF",
       "isDeleted": false
      },
      {
       "drug_id": "74",
       "forme": "075",
       "libelle": "SOLUTIONINJECTABLESOUSCUTANEE",
       "libelle_court": "SOL.INJ.SC.",
       "isDeleted": false
      },
      {
       "drug_id": "75",
       "forme": "076",
       "libelle": "SOLUTIONINTRA-RACHIDIENNE",
       "libelle_court": "SOL.IR.",
       "isDeleted": false
      },
      {
       "drug_id": "76",
       "forme": "077",
       "libelle": "SOLUTIONPOURLAVAGEDUSINUS",
       "libelle_court": "SOL.LAV.SINUS.",
       "isDeleted": false
      },
      {
       "drug_id": "77",
       "forme": "078",
       "libelle": "SOLUTIONNASALE",
       "libelle_court": "SOL.NAS.",
       "isDeleted": false
      },
      {
       "drug_id": "78",
       "forme": "079",
       "libelle": "SOLUTIONNEBULISEUR",
       "libelle_court": "SOL.NEBUL.",
       "isDeleted": false
      },
      {
       "drug_id": "79",
       "forme": "080",
       "libelle": "SOLUTIONNONINJECTABLE",
       "libelle_court": "SOL.NONINJ.",
       "isDeleted": false
      },
      {
       "drug_id": "80",
       "forme": "081",
       "libelle": "SOLUTIONOPHTALMIQUE",
       "libelle_court": "SOL.OPHT.",
       "isDeleted": false
      },
      {
       "drug_id": "81",
       "forme": "082",
       "libelle": "SOLUTIONRECTALE",
       "libelle_court": "SOL.RECT.",
       "isDeleted": false
      },
      {
       "drug_id": "82",
       "forme": "083",
       "libelle": "SOLUTEBUVABLE",
       "libelle_court": "SOLUTEBUV.",
       "isDeleted": false
      },
      {
       "drug_id": "83",
       "forme": "084",
       "libelle": "SUPPOSITOIRE",
       "libelle_court": "SUPPO.",
       "isDeleted": false
      },
      {
       "drug_id": "84",
       "forme": "085",
       "libelle": "SUPPOSITOIREADULTE",
       "libelle_court": "SUPPO.AD.",
       "isDeleted": false
      },
      {
       "drug_id": "85",
       "forme": "086",
       "libelle": "SUPPOSITOIREENFANT",
       "libelle_court": "SUPPO.ENF.",
       "isDeleted": false
      },
      {
       "drug_id": "86",
       "forme": "087",
       "libelle": "SUSPENSION",
       "libelle_court": "SUSP.",
       "isDeleted": false
      },
      {
       "drug_id": "87",
       "forme": "088",
       "libelle": "SUSPENSIONBUVABLE",
       "libelle_court": "SUSP.BUV.",
       "isDeleted": false
      },
      {
       "drug_id": "88",
       "forme": "089",
       "libelle": "SUSPENSIONINJECTABLE",
       "libelle_court": "SUSP.INJ.",
       "isDeleted": false
      },
      {
       "drug_id": "89",
       "forme": "090",
       "libelle": "SUSPENSIONNASALE",
       "libelle_court": "SUSP.NAS.",
       "isDeleted": false
      },
      {
       "drug_id": "90",
       "forme": "091",
       "libelle": "SUSPENSIONORL",
       "libelle_court": "SUSP.ORL.",
       "isDeleted": false
      },
      {
       "drug_id": "91",
       "forme": "092",
       "libelle": "SUSPENSIONRECTALE",
       "libelle_court": "SUSP.RECT.",
       "isDeleted": false
      },
      {
       "drug_id": "92",
       "forme": "093",
       "libelle": "TABLETTE",
       "libelle_court": "TABL.",
       "isDeleted": false
      },
      {
       "drug_id": "93",
       "forme": "006",
       "libelle": "BOUFFEE",
       "libelle_court": "BOUF.",
       "isDeleted": false
      },
      {
       "drug_id": "94",
       "forme": "094",
       "libelle": "SPRAY",
       "libelle_court": "SPRAY",
       "isDeleted": false
      },
      {
       "drug_id": "95",
       "forme": "095",
       "libelle": "PASTILLE",
       "libelle_court": "PASTI",
       "isDeleted": false
      },
      {
       "drug_id": "96",
       "forme": "096",
       "libelle": "SOL.INJ.PERF",
       "libelle_court": "SOL.INJ.PERF",
       "isDeleted": false
      },
      {
       "drug_id": "97",
       "forme": "097",
       "libelle": "PATCH",
       "libelle_court": "PATCH",
       "isDeleted": false
      },
      {
       "drug_id": "98",
       "forme": "098",
       "libelle": "TAMPON",
       "libelle_court": "TMP",
       "isDeleted": false
      },
      {
       "drug_id": "99",
       "forme": "099",
       "libelle": "LAIT",
       "libelle_court": "LAIT",
       "isDeleted": false
      },
      {
       "drug_id": "100",
       "forme": "100",
       "libelle": "LOTION",
       "libelle_court": "LOTION",
       "isDeleted": false
      },
      {
       "drug_id": "101",
       "forme": "101",
       "libelle": "APG(TUBE15G)",
       "libelle_court": "APG",
       "isDeleted": false
      },
      {
       "drug_id": "102",
       "forme": "102",
       "libelle": "INDICEUVA",
       "libelle_court": "INDUVA",
       "isDeleted": false
      },
      {
       "drug_id": "103",
       "forme": "103",
       "libelle": "INDICEUVB",
       "libelle_court": "INDUVB",
       "isDeleted": false
      },
      {
       "drug_id": "104",
       "forme": "104",
       "libelle": "POUDRESUSPENTION",
       "libelle_court": "PDR.SUSP",
       "isDeleted": false
      },
      {
       "drug_id": "105",
       "forme": "105",
       "libelle": "PATE",
       "libelle_court": "PATE",
       "isDeleted": false
      },
      {
       "drug_id": "106",
       "forme": "106",
       "libelle": "POUDRESUSPENSIONORALE",
       "libelle_court": "PDRSUSPOR",
       "isDeleted": false
      },
      {
       "drug_id": "107",
       "forme": "107",
       "libelle": "TIMBRE",
       "libelle_court": "TIMB",
       "isDeleted": false
      },
      {
       "drug_id": "108",
       "forme": "108",
       "libelle": "SOLUTIONSUSPENSIONINJECTABLE",
       "libelle_court": "SOL.SUSP.INJ",
       "isDeleted": false
      },
      {
       "drug_id": "109",
       "forme": "109",
       "libelle": "INJECTIONINTRA-VEINEUSE",
       "libelle_court": "INJ.IV",
       "isDeleted": false
      },
      {
       "drug_id": "110",
       "forme": "110",
       "libelle": "SACHET",
       "libelle_court": "SCHT",
       "isDeleted": false
      },
      {
       "drug_id": "111",
       "forme": "111",
       "libelle": "STERILET",
       "libelle_court": "STRL",
       "isDeleted": false
      },
      {
       "drug_id": "112",
       "forme": "112",
       "libelle": "EPONGE",
       "libelle_court": "EPG",
       "isDeleted": false
      },
      {
       "drug_id": "113",
       "forme": "113",
       "libelle": "GAZE",
       "libelle_court": "GZE",
       "isDeleted": false
      },
      {
       "drug_id": "114",
       "forme": "114",
       "libelle": "COFRET",
       "libelle_court": "CRFT",
       "isDeleted": false
      },
      {
       "drug_id": "115",
       "forme": "115",
       "libelle": "PDRESOLUTIONINJECINTRAVEINEUSEINTRA-MUSCULAIR",
       "libelle_court": "PDRESOLINJIV/IM",
       "isDeleted": false
      },
      {
       "drug_id": "116",
       "forme": "116",
       "libelle": "VACCIN",
       "libelle_court": "VACC",
       "isDeleted": false
      },
      {
       "drug_id": "117",
       "forme": "117",
       "libelle": "ORALEFLACON",
       "libelle_court": "OR(FL)",
       "isDeleted": false
      },
      {
       "drug_id": "118",
       "forme": "118",
       "libelle": "INJECTABLESOUS-CUTANEINTRAVEINEUSE",
       "libelle_court": "INJSC/IV",
       "isDeleted": false
      },
      {
       "drug_id": "119",
       "forme": "119",
       "libelle": "EAUDISTILLE",
       "libelle_court": "EAU.DIST",
       "isDeleted": false
      },
      {
       "drug_id": "120",
       "forme": "120",
       "libelle": "BUVABLE",
       "libelle_court": "BUV",
       "isDeleted": false
      },
      {
       "drug_id": "121",
       "forme": "121",
       "libelle": "STERILLE",
       "libelle_court": "STRL",
       "isDeleted": false
      },
      {
       "drug_id": "122",
       "forme": "122",
       "libelle": "POCHET",
       "libelle_court": "PCHT",
       "isDeleted": false
      },
      {
       "drug_id": "123",
       "forme": "123",
       "libelle": "LANGUETTES",
       "libelle_court": "LGTS",
       "isDeleted": false
      },
      {
       "drug_id": "124",
       "forme": "124",
       "libelle": "AEROSOL",
       "libelle_court": "AERO",
       "isDeleted": false
      },
      {
       "drug_id": "125",
       "forme": "125",
       "libelle": "SUPPOSITOIRESNOURRISSON",
       "libelle_court": "SUPPO.NOUR",
       "isDeleted": false
      },
      {
       "drug_id": "126",
       "forme": "126",
       "libelle": "ORL",
       "libelle_court": "ORL",
       "isDeleted": false
      },
      {
       "drug_id": "127",
       "forme": "127",
       "libelle": "BAINDEBOUCHE",
       "libelle_court": "B.B",
       "isDeleted": false
      },
      {
       "drug_id": "128",
       "forme": "128",
       "libelle": "TABLETTE",
       "libelle_court": "TABL",
       "isDeleted": false
      },
      {
       "drug_id": "129",
       "forme": "129",
       "libelle": "GELGENGIVAL",
       "libelle_court": "GEL.GENG",
       "isDeleted": false
      },
      {
       "drug_id": "130",
       "forme": "130",
       "libelle": "AMPOULEINJECTIONPERFUSION",
       "libelle_court": "AMP.INJ.PERF",
       "isDeleted": false
      },
      {
       "drug_id": "131",
       "forme": "131",
       "libelle": "GLUCOSELITTRE",
       "libelle_court": "GLUCO.LITR",
       "isDeleted": false
      },
      {
       "drug_id": "132",
       "forme": "132",
       "libelle": "POCHE",
       "libelle_court": "POCH",
       "isDeleted": false
      },
      {
       "drug_id": "133",
       "forme": "133",
       "libelle": "POCHE1LITRE",
       "libelle_court": "POCH.1LIT",
       "isDeleted": false
      },
      {
       "drug_id": "134",
       "forme": "134",
       "libelle": "CRAYON",
       "libelle_court": "CRAY",
       "isDeleted": false
      },
      {
       "drug_id": "135",
       "forme": "135",
       "libelle": "SPECIALPLAQUETTES",
       "libelle_court": "SPC.PLAQ",
       "isDeleted": false
      },
      {
       "drug_id": "136",
       "forme": "136",
       "libelle": "CREMEVAGINALE",
       "libelle_court": "CRE.VAG.",
       "isDeleted": false
      },
      {
       "drug_id": "137",
       "forme": "137",
       "libelle": "COMPRIMEACROQUER",
       "libelle_court": "COMP.ACROQUER",
       "isDeleted": false
      },
      {
       "drug_id": "138",
       "forme": "138",
       "libelle": "PERE.FLACON",
       "libelle_court": "PERE.FLACON",
       "isDeleted": false
      },
      {
       "drug_id": "139",
       "forme": "139",
       "libelle": "COMPRIMEASUCER",
       "libelle_court": "COMP.SUCER",
       "isDeleted": false
      },
      {
       "drug_id": "140",
       "forme": "140",
       "libelle": "GELOPHTALMIQUE",
       "libelle_court": "GELOPHTALMIQUE",
       "isDeleted": false
      },
      {
       "drug_id": "141",
       "forme": "141",
       "libelle": "SOLUTIONINJECTABLEPERFUSION",
       "libelle_court": "SOL.INJ.PERF.",
       "isDeleted": false
      },
      {
       "drug_id": "142",
       "forme": "143",
       "libelle": "COMP.PELLICULE",
       "libelle_court": "COMP.PELLI",
       "isDeleted": false
      },
      {
       "drug_id": "143",
       "forme": "144",
       "libelle": "COMP./DRG./CAPS.",
       "libelle_court": "COMP./DRG./CAPS",
       "isDeleted": false
      },
      {
       "drug_id": "144",
       "forme": "145",
       "libelle": "SOLUTIONNASALE/SPRAY",
       "libelle_court": "SOL.NASAL/SPRAY",
       "isDeleted": false
      },
      {
       "drug_id": "145",
       "forme": "142",
       "libelle": "POUDREOPHTALMIQUE",
       "libelle_court": "PDE.OPHT.",
       "isDeleted": false
      },
      {
       "drug_id": "146",
       "forme": "146",
       "libelle": "COMPRIME/GELULES/CAPSULES",
       "libelle_court": "COMP/GLES/CAPS.",
       "isDeleted": false
      },
      {
       "drug_id": "147",
       "forme": "148",
       "libelle": "CRTOUCHE15ML",
       "libelle_court": "CART.15ML",
       "isDeleted": false
      },
      {
       "drug_id": "148",
       "forme": "149",
       "libelle": "CARTOUCHE3ML",
       "libelle_court": "CART.3ML",
       "isDeleted": false
      },
      {
       "drug_id": "149",
       "forme": "147",
       "libelle": "POUDREPERFUSIONINTRA-VEINEUSE",
       "libelle_court": "PDRE.PERF.IV.",
       "isDeleted": false
      },
      {
       "drug_id": "150",
       "forme": "150",
       "libelle": "GRANULESSUSPENSIONBUVABLE",
       "libelle_court": "GRLES.SUSP.BUV.",
       "isDeleted": false
      },
      {
       "drug_id": "151",
       "forme": "151",
       "libelle": "GELAPPLICATIONCUTANEE",
       "libelle_court": "GEL.APP.CUTANEE",
       "isDeleted": false
      },
      {
       "drug_id": "152",
       "forme": "152",
       "libelle": "COMPRIMESEC.",
       "libelle_court": "COMP.SEC.",
       "isDeleted": false
      },
      {
       "drug_id": "153",
       "forme": "153",
       "libelle": "LYOPHILI.INJ",
       "libelle_court": "LYOPHILI.INJ",
       "isDeleted": false
      },
      {
       "drug_id": "154",
       "forme": "154",
       "libelle": "CREMEDERMIQUE",
       "libelle_court": "CRE.DERMIQUE",
       "isDeleted": false
      },
      {
       "drug_id": "155",
       "forme": "155",
       "libelle": "COMPRIMEGASTRORESISTANTS",
       "libelle_court": "COMP.GASTRO.RES",
       "isDeleted": false
      },
      {
       "drug_id": "156",
       "forme": "156",
       "libelle": "COMPRIMEENRO.",
       "libelle_court": "COMP.ENRO.",
       "isDeleted": false
      },
      {
       "drug_id": "157",
       "forme": "157",
       "libelle": "MECHE",
       "libelle_court": "MECHE",
       "isDeleted": false
      },
      {
       "drug_id": "158",
       "forme": "158",
       "libelle": "LOTIONDERMIQUE",
       "libelle_court": "LOTIONDERM.",
       "isDeleted": false
      },
      {
       "drug_id": "159",
       "forme": "159",
       "libelle": "POUDRE.SOL.INJ.IV/IM",
       "libelle_court": "PDRE.S.INJ.IVIM",
       "isDeleted": false
      },
      {
       "drug_id": "160",
       "forme": "160",
       "libelle": "POUDREAUSAGEPARENTALE",
       "libelle_court": "PDRE.USAGE.PARE",
       "isDeleted": false
      },
      {
       "drug_id": "161",
       "forme": "161",
       "libelle": "COMPRIMEPELLICULAIRESECABLE",
       "libelle_court": "COMP.PELLI.SEC",
       "isDeleted": false
      },
      {
       "drug_id": "162",
       "forme": "162",
       "libelle": "COMPRIMEDRAGE",
       "libelle_court": "COMP.DRAG.",
       "isDeleted": false
      },
      {
       "drug_id": "163",
       "forme": "163",
       "libelle": "LIOPHILISATAUSAGEPARENTAL",
       "libelle_court": "LOPHILI.US.PARE",
       "isDeleted": false
      },
      {
       "drug_id": "164",
       "forme": "164",
       "libelle": "COMPRIMEENROBELP.",
       "libelle_court": "COMP.ENRO.LP.",
       "isDeleted": false
      },
      {
       "drug_id": "165",
       "forme": "165",
       "libelle": "AMPOULEINJ.IV.",
       "libelle_court": "AMP.INJ.IV.",
       "isDeleted": false
      },
      {
       "drug_id": "166",
       "forme": "166",
       "libelle": "LAITDERMIQUE",
       "libelle_court": "LAIT.DERM.",
       "isDeleted": false
      },
      {
       "drug_id": "167",
       "forme": "167",
       "libelle": "GELULESAMICRO/GRANULESGASTRO",
       "libelle_court": "GLESMIC/GRA.GA",
       "isDeleted": false
      },
      {
       "drug_id": "168",
       "forme": "168",
       "libelle": "ANGUENT",
       "libelle_court": "ANGUENT",
       "isDeleted": false
      },
      {
       "drug_id": "169",
       "forme": "169",
       "libelle": "GOUTTESAURICULAIRE",
       "libelle_court": "GTTESAURICU.",
       "isDeleted": false
      },
      {
       "drug_id": "170",
       "forme": "170",
       "libelle": "POUDRESOL.INJ.IM/SC",
       "libelle_court": "PDE.SOLINJIM/SC",
       "isDeleted": false
      },
      {
       "drug_id": "171",
       "forme": "171",
       "libelle": "SERINGUESPREREMPLIES",
       "libelle_court": "SERINGUESPRER.",
       "isDeleted": false
      },
      {
       "drug_id": "172",
       "forme": "172",
       "libelle": "SUSP.INHAL.",
       "libelle_court": "SUSP.INHAL.",
       "isDeleted": false
      },
      {
       "drug_id": "173",
       "forme": "173",
       "libelle": "COMPRIMELP.",
       "libelle_court": "COMP.LP.",
       "isDeleted": false
      },
      {
       "drug_id": "174",
       "forme": "174",
       "libelle": "PATEENDODONTIQUE",
       "libelle_court": "PATEENDODONTIQ",
       "isDeleted": false
      },
      {
       "drug_id": "175",
       "forme": "175",
       "libelle": "GELLULESLP.",
       "libelle_court": "GLES.LP.",
       "isDeleted": false
      },
      {
       "drug_id": "176",
       "forme": "176",
       "libelle": "INJ.HUIL.",
       "libelle_court": "INJ.HUIL.",
       "isDeleted": false
      },
      {
       "drug_id": "177",
       "forme": "177",
       "libelle": "COMPRIMEVAGINALE",
       "libelle_court": "COMP.VAGINALE",
       "isDeleted": false
      },
      {
       "drug_id": "178",
       "forme": "178",
       "libelle": "LYOPHILISATPOURPERFUSION",
       "libelle_court": "LYOPHILI.PERF.",
       "isDeleted": false
      },
      {
       "drug_id": "179",
       "forme": "179",
       "libelle": "LYOPHILISATORALE",
       "libelle_court": "LYOPHILI.ORAL.",
       "isDeleted": false
      },
      {
       "drug_id": "180",
       "forme": "180",
       "libelle": "CREMEDERMIQUE",
       "libelle_court": "CRE.DERM.",
       "isDeleted": false
      },
      {
       "drug_id": "181",
       "forme": "181",
       "libelle": "COPRIMESEC.LP.",
       "libelle_court": "COMP.SEC.LP.",
       "isDeleted": false
      },
      {
       "drug_id": "182",
       "forme": "182",
       "libelle": "SUSP.APPLIC.ENDO.SINUSIENNE",
       "libelle_court": "SUSP.APPL.END.S",
       "isDeleted": false
      },
      {
       "drug_id": "183",
       "forme": "183",
       "libelle": "SUPPOSITOIRENOURISSON",
       "libelle_court": "SUPPO.NOURIS",
       "isDeleted": false
      },
      {
       "drug_id": "184",
       "forme": "184",
       "libelle": "COMPRESSE",
       "libelle_court": "COMPRESSE",
       "isDeleted": false
      },
      {
       "drug_id": "185",
       "forme": "185",
       "libelle": "TULLE",
       "libelle_court": "TULLE",
       "isDeleted": false
      },
      {
       "drug_id": "186",
       "forme": "186",
       "libelle": "GELMOUSSANT",
       "libelle_court": "GELMOUSSANT",
       "isDeleted": false
      },
      {
       "drug_id": "187",
       "forme": "187",
       "libelle": "EMULDERMIQUE",
       "libelle_court": "EMULDERM.",
       "isDeleted": false
      },
      {
       "drug_id": "188",
       "forme": "188",
       "libelle": "POUDREEFFER.",
       "libelle_court": "PDREEFFER.",
       "isDeleted": false
      },
      {
       "drug_id": "189",
       "forme": "189",
       "libelle": "SOLUTIONGINGIVALE",
       "libelle_court": "SOL.GING.",
       "isDeleted": false
      },
      {
       "drug_id": "190",
       "forme": "190",
       "libelle": "POMMADEDECONGESTIONNANTE",
       "libelle_court": "PDE.DECONGEST.",
       "isDeleted": false
      },
      {
       "drug_id": "191",
       "forme": "191",
       "libelle": "GELULESMICROGRANULE",
       "libelle_court": "GLESMICROG.",
       "isDeleted": false
      },
      {
       "drug_id": "192",
       "forme": "192",
       "libelle": "SOL.ADM.END",
       "libelle_court": "SOL.ADM.END.",
       "isDeleted": false
      },
      {
       "drug_id": "193",
       "forme": "193",
       "libelle": "SOLUTIONBUVABLESACHET",
       "libelle_court": "SOL.BUV.SACHET",
       "isDeleted": false
      },
      {
       "drug_id": "194",
       "forme": "194",
       "libelle": "GLES.MICRONI.GASTRO.RESIST",
       "libelle_court": "GLES.MIC.GAS.RE",
       "isDeleted": false
      },
      {
       "drug_id": "195",
       "forme": "195",
       "libelle": "GELEE",
       "libelle_court": "GELEE",
       "isDeleted": false
      },
      {
       "drug_id": "196",
       "forme": "196",
       "libelle": "BAUME",
       "libelle_court": "BAUME",
       "isDeleted": false
      },
      {
       "drug_id": "197",
       "forme": "197",
       "libelle": "SPRAYNASAL",
       "libelle_court": "SPRAYNASAL",
       "isDeleted": false
      },
      {
       "drug_id": "198",
       "forme": "198",
       "libelle": "PULVER.NASAL",
       "libelle_court": "PULVER.NASAL",
       "isDeleted": false
      },
      {
       "drug_id": "199",
       "forme": "199",
       "libelle": "LYOPHSOLINJIM/SC",
       "libelle_court": "LYOPH.SOL.INJ.S",
       "isDeleted": false
      },
      {
       "drug_id": "200",
       "forme": "200",
       "libelle": "COMP.DISPERSIBLE",
       "libelle_court": "COMP.DISPERSIBL",
       "isDeleted": false
      },
      {
       "drug_id": "201",
       "forme": "201",
       "libelle": "SOLUTIONINJECTABLESER-PRE-RMP",
       "libelle_court": "SOL.INJ.SER-PRE-RMP",
       "isDeleted": false
      },
      {
       "drug_id": "202",
       "forme": "202",
       "libelle": "POUDREPOURINHALENGELULES",
       "libelle_court": "PDRE.INHALENGLES",
       "isDeleted": false
      },
      {
       "drug_id": "203",
       "forme": "203",
       "libelle": "SOL.INJ.IM/IV",
       "libelle_court": "SOL.INJ.IM.IV",
       "isDeleted": false
      },
      {
       "drug_id": "204",
       "forme": "204",
       "libelle": "COMP.ENROBES.LP",
       "libelle_court": "COMP.ENROBES.LP",
       "isDeleted": false
      },
      {
       "drug_id": "205",
       "forme": "205",
       "libelle": "GELAPPLICATIONLOCALE",
       "libelle_court": "GEL.APPL.LOCALE",
       "isDeleted": false
      },
      {
       "drug_id": "206",
       "forme": "206",
       "libelle": "SUSP.INHAL.BUCCALE",
       "libelle_court": "SUSP.INHAL.BUCCALE",
       "isDeleted": false
      },
      {
       "drug_id": "207",
       "forme": "207",
       "libelle": "PDREPOURSOLENSACHET",
       "libelle_court": "PDRESOLSACHET",
       "isDeleted": false
      },
      {
       "drug_id": "208",
       "forme": "208",
       "libelle": "PDREPOURUSAGEPARENTERALIM/IV",
       "libelle_court": "PDREUSAGEPARENTERA",
       "isDeleted": false
      },
      {
       "drug_id": "209",
       "forme": "209",
       "libelle": "GELBUV.",
       "libelle_court": "GELBUV",
       "isDeleted": false
      },
      {
       "drug_id": "210",
       "forme": "210",
       "libelle": "CAPSAGRAN.GASTRORESIST",
       "libelle_court": "CAPSAGRAN.GASTRO.R",
       "isDeleted": false
      },
      {
       "drug_id": "211",
       "forme": "211",
       "libelle": "GLESAGRAN.GASTRORESIST",
       "libelle_court": "GLESAGRAN.GASTRO.R",
       "isDeleted": false
      },
      {
       "drug_id": "212",
       "forme": "212",
       "libelle": "PDREINHAL",
       "libelle_court": "PDREINHAL",
       "isDeleted": false
      },
      {
       "drug_id": "213",
       "forme": "213",
       "libelle": "GRANULESOL.BUV/SACHETS",
       "libelle_court": "GRAN.SOL.BUV/SACHETS",
       "isDeleted": false
      },
      {
       "drug_id": "214",
       "forme": "214",
       "libelle": "PDEORALEFF.SACHET",
       "libelle_court": "PDEORALEFF.SACHET",
       "isDeleted": false
      },
      {
       "drug_id": "215",
       "forme": "215",
       "libelle": "CPDISP.SEC",
       "libelle_court": "CPDISP.SEC",
       "isDeleted": false
      },
      {
       "drug_id": "216",
       "forme": "216",
       "libelle": "PDE+SOL/SOLINJIMLP",
       "libelle_court": "PDE+SOL/SOLINJIMLP",
       "isDeleted": false
      },
      {
       "drug_id": "217",
       "forme": "217",
       "libelle": "SUSP.INJCARTOUCHE",
       "libelle_court": "SUSP.INJCARTOUCHE",
       "isDeleted": false
      },
      {
       "drug_id": "218",
       "forme": "218",
       "libelle": "CPPELSEC",
       "libelle_court": "CPPELSEC",
       "isDeleted": false
      },
      {
       "drug_id": "219",
       "forme": "219",
       "libelle": "SUSPP/INHALPARNEBULISATEURRECIPIENTSUNIDOSES",
       "libelle_court": "SUSPP/INHALNEBREC",
       "isDeleted": false
      },
      {
       "drug_id": "220",
       "forme": "220",
       "libelle": "PDEP/INHALBUCCALE",
       "libelle_court": "PDEP/INHALBUCCALE",
       "isDeleted": false
      },
      {
       "drug_id": "221",
       "forme": "221",
       "libelle": "MICROGRANL.PENGLES",
       "libelle_court": "MICROGRANL.PGLES",
       "isDeleted": false
      },
      {
       "drug_id": "222",
       "forme": "222",
       "libelle": "COMP.ENROB.SEC",
       "libelle_court": "COMP.ENROB.SEC",
       "isDeleted": false
      },
      {
       "drug_id": "223",
       "forme": "223",
       "libelle": "CAPS.MOLLE",
       "libelle_court": "CAPS.MOLLE",
       "isDeleted": false
      },
      {
       "drug_id": "224",
       "forme": "224",
       "libelle": "PDRELYOPHP/INJ",
       "libelle_court": "PDRELYOPHP/INJ",
       "isDeleted": false
      },
      {
       "drug_id": "225",
       "forme": "225",
       "libelle": "SUPPOSEC.",
       "libelle_court": "SUPPOSEC.",
       "isDeleted": false
      },
      {
       "drug_id": "226",
       "forme": "226",
       "libelle": "IMPLANTS/C.",
       "libelle_court": "IMPLANTS/C.",
       "isDeleted": false
      },
      {
       "drug_id": "227",
       "forme": "227",
       "libelle": "COMPRIMEENROGR.",
       "libelle_court": "COMPENROGR.",
       "isDeleted": false
      },
      {
       "drug_id": "228",
       "forme": "228",
       "libelle": "POUDREETSOLVANTP/SUSPINJ",
       "libelle_court": "PDRESOLVP/SUSPINJ",
       "isDeleted": false
      },
      {
       "drug_id": "229",
       "forme": "229",
       "libelle": "COMPRIMELIBERATIONMODIFIEE.",
       "libelle_court": "CPLIBERATIONMODIFI",
       "isDeleted": false
      },
      {
       "drug_id": "230",
       "forme": "230",
       "libelle": "POUDREETSOLVP/SOLINJ",
       "libelle_court": "PDRESOLVP/SOLINJ",
       "isDeleted": false
      },
      {
       "drug_id": "231",
       "forme": "231",
       "libelle": "CPORODISP",
       "libelle_court": "CPORODISP",
       "isDeleted": false
      },
      {
       "drug_id": "232",
       "forme": "232",
       "libelle": "CAPSLP",
       "libelle_court": "CAPSLP",
       "isDeleted": false
      },
      {
       "drug_id": "233",
       "forme": "233",
       "libelle": "CPQUADRISEC",
       "libelle_court": "CPQUADRISEC",
       "isDeleted": false
      },
      {
       "drug_id": "234",
       "forme": "234",
       "libelle": "COMP.EFF.SEC",
       "libelle_court": "COMP.EFF.SEC.",
       "isDeleted": false
      },
      {
       "drug_id": "235",
       "forme": "235",
       "libelle": "COMPRIMEAMACHER",
       "libelle_court": "COMP.MACHER",
       "isDeleted": false
      },
      {
       "drug_id": "236",
       "forme": "236",
       "libelle": "COMRIMELYOC",
       "libelle_court": "COMP.LYOC",
       "isDeleted": false
      },
      {
       "drug_id": "237",
       "forme": "237",
       "libelle": "BANDELETTE",
       "libelle_court": "BANDELETTE",
       "isDeleted": false
      },
      {
       "drug_id": "238",
       "forme": "238",
       "libelle": "PREPARATION",
       "libelle_court": "PREPARATION",
       "isDeleted": false
      },
      {
       "drug_id": "239",
       "forme": "239",
       "libelle": "GLESGRLP",
       "libelle_court": "GLESGRLP",
       "isDeleted": false
      },
      {
       "drug_id": "240",
       "forme": "240",
       "libelle": "CAPS.MOLORAL",
       "libelle_court": "CAPS.MOLORAL",
       "isDeleted": false
      },
      {
       "drug_id": "241",
       "forme": "241",
       "libelle": "SOLUTIONBUVABLEAMPOULE",
       "libelle_court": "SOL.BUV.AMP",
       "isDeleted": false
      },
      {
       "drug_id": "242",
       "forme": "242",
       "libelle": "GELP/APPLICATIONLOCAL",
       "libelle_court": "GELP/APPLILOC",
       "isDeleted": false
      },
      {
       "drug_id": "243",
       "forme": "243",
       "libelle": "COMPPELL.A.LIB.MOD",
       "libelle_court": "COMPPELL.A.LIB.MOD",
       "isDeleted": false
      },
      {
       "drug_id": "244",
       "forme": "244",
       "libelle": "SOLPOURAPPLLOC",
       "libelle_court": "SOLAPPLLOC",
       "isDeleted": false
      },
      {
       "drug_id": "245",
       "forme": "245",
       "libelle": "GELBUCC",
       "libelle_court": "GELBUCC",
       "isDeleted": false
      },
      {
       "drug_id": "246",
       "forme": "246",
       "libelle": "SOLP/APPLCUT",
       "libelle_court": "SOL.APP.CUT",
       "isDeleted": false
      },
      {
       "drug_id": "247",
       "forme": "247",
       "libelle": "SOLFILMOGENEP/APPLLOC",
       "libelle_court": "SOLFILMOG.APPL.L",
       "isDeleted": false
      },
      {
       "drug_id": "248",
       "forme": "248",
       "libelle": "PDRESOLV/SOL.INJ.MULTIDOSE.SC",
       "libelle_court": "PDR.SOLV/SOL.INJ.SC",
       "isDeleted": false
      },
      {
       "drug_id": "249",
       "forme": "249",
       "libelle": "SOL.INJ.SC.STYLO.PREREMPLI",
       "libelle_court": "SOL.INJ.SC.STYL.PRER",
       "isDeleted": false
      },
      {
       "drug_id": "250",
       "forme": "250",
       "libelle": "PDRE+SOL.P/SOL.INJSC",
       "libelle_court": "PDRE+SOL.P/SOL.INJSC",
       "isDeleted": false
      },
      {
       "drug_id": "251",
       "forme": "251",
       "libelle": "PDREORALEEFFE",
       "libelle_court": "PDREORALEEFFE",
       "isDeleted": false
      },
      {
       "drug_id": "252",
       "forme": "252",
       "libelle": "GRAND.P/SUSPBUV.SACHET",
       "libelle_court": "GRAND.P/SUS.BUV.SACH",
       "isDeleted": false
      },
      {
       "drug_id": "253",
       "forme": "253",
       "libelle": "COMPLYOPHORAL",
       "libelle_court": "COMP.LYOPH.ORAL",
       "isDeleted": false
      },
      {
       "drug_id": "254",
       "forme": "254",
       "libelle": "PDRE.P/SOLBUVSACHETS",
       "libelle_court": "PDR.P/SOL.BUV.SACHET",
       "isDeleted": false
      },
      {
       "drug_id": "255",
       "forme": "255",
       "libelle": "OVULEALIBPROL",
       "libelle_court": "OVULELIBPROL",
       "isDeleted": false
      },
      {
       "drug_id": "256",
       "forme": "256",
       "libelle": "SIROP15%",
       "libelle_court": "SIROP15%",
       "isDeleted": false
      },
      {
       "drug_id": "257",
       "forme": "257",
       "libelle": "SOL.INJS/CCARTOUCHE3ML",
       "libelle_court": "SOL.INJCARTOUCH3ML",
       "isDeleted": false
      },
      {
       "drug_id": "258",
       "forme": "258",
       "libelle": "SOL.INJ.SERINGPRE/REMPLI",
       "libelle_court": "SOL.INJ.SERPRE/REMP",
       "isDeleted": false
      },
      {
       "drug_id": "259",
       "forme": "259",
       "libelle": "COLLYRE/SOLAURIC/SOLNASAL",
       "libelle_court": "COLL/SOL.AURI/SOL.NA",
       "isDeleted": false
      },
      {
       "drug_id": "260",
       "forme": "260",
       "libelle": "COLLYRESOL.LIBPRO",
       "libelle_court": "COLLYRE.SOL.LIB.PRO",
       "isDeleted": false
      },
      {
       "drug_id": "261",
       "forme": "261",
       "libelle": "SOLP/PULVBUCCALE",
       "libelle_court": "SOLP/PULVBUCCALE",
       "isDeleted": false
      },
      {
       "drug_id": "262",
       "forme": "262",
       "libelle": "COMPPELLALIBPRO",
       "libelle_court": "COMPPELLALIBPRO",
       "isDeleted": false
      },
      {
       "drug_id": "263",
       "forme": "263",
       "libelle": "PDRE.SOL.INJ.PARENT",
       "libelle_court": "PDRE.SOL.INJ.PARENT",
       "isDeleted": false
      },
      {
       "drug_id": "264",
       "forme": "264",
       "libelle": "POUDREDERMIQUE",
       "libelle_court": "PDREDERMQUE",
       "isDeleted": false
      }
     ];
   
   let tab=[];

   const func= () => {
      list.map((e) => {
            e.drug_id = parseInt(e.drug_id);
            tab.push(e);
         });

   }
   func()
 

   

const fil=async () => {
      await prisma.drug.createMany({
                    data:tab 
               }
      )
      .then(
            (data) => {
                  console.log(data);
            }
      )
      .catch(
            (error) => {
                  console.log('errrrr'+error)
            }
      )
      
}
fil();

