export type ProductCategory =
  | "Plant Nutrition"
  | "Plant Protection"
  | "Soil Health";

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  type: string;
  image: string;
  description: string;
  benefits: string[];
  application: string;
}

export const products: Product[] = [
  {
    slug: "npk-consomax",
    name: "BPCI-NPK CONSOMAX (AMC)",
    category: "Plant Nutrition",
    type: "NPK Biofertilizer",
    image: "/images/products/npk-consomax.jpg",
    description:
      "BPCI-NPK CONSOMAX (AMC) is a microbial consortium formulated with efficient beneficial microorganisms that improve the availability and utilization of essential nutrients such as nitrogen, phosphorus and potassium. These microorganisms fix atmospheric nitrogen, release bound phosphorus and mobilise potassium, supporting natural nutrient cycling in the root zone and promoting healthy root development, balanced plant growth and efficient nutrient uptake throughout the crop growth.",
    benefits: [
      "Helps improve the availability of nitrogen, phosphorus and potassium",
      "Promotes healthy root development and vigorous plant growth",
      "Enhances nutrient uptake and nutrient-use efficiency",
      "Supports balanced crop growth and improved overall plant health",
      "Reduces dependency on chemical fertilizers",
    ],
    application:
      "Suitable for soil application, seed treatment, seedling treatment and fertigation as recommended for the crop. BPCI-NPK CONSOMAX (AMC) can be used along with other compatible biofertilizers and recommended inputs as part of an integrated nutrient management programme.",
  },

  {
    slug: "azomax",
    name: "BPCI-AZOMAX",
    category: "Plant Nutrition",
    type: "Azotobacter Biofertilizer",
    image: "/images/products/azomax.jpg",
    description:
      "BPCI-AZOMAX contains efficient nitrogen-fixing bacteria that naturally fix atmospheric nitrogen and make it available to plants. It supports healthy root development, vigorous vegetative growth and improved nutrient utilization, helping crops grow stronger and more uniformly.",
    benefits: [
      "Helps fix atmospheric nitrogen and improve nitrogen availability",
      "Promotes healthy root development and vigorous plant growth",
      "Supports better nutrient uptake and crop establishment",
      "Helps maintain soil fertility and reduce dependence on chemical nitrogen fertilizers",
    ],
    application:
      "Suitable for seed treatment, soil application and fertigation as recommended for the crop. BPCI-AZOMAX can be used along with other compatible biofertilizers as part of an integrated nutrient management programme.",
  },

  {
    slug: "rhizomax",
    name: "BPCI-RHIZOMAX",
    category: "Plant Nutrition",
    type: "Rhizobium Biofertilizer",
    image: "/images/products/rhizomax.jpg",
    description:
      "BPCI-RHIZOMAX contains efficient Rhizobium bacteria that form a beneficial association with the roots of leguminous crops and fix atmospheric nitrogen through root nodules. This natural nitrogen fixation improves nitrogen availability to the crop, supporting healthy root growth, vigorous plant development and better crop performance.",
    benefits: [
      "Fixes atmospheric nitrogen through effective root nodulation",
      "Promotes healthy root development and vigorous plant growth",
      "Improves nitrogen availability and nutrient utilization",
      "Supports better crop establishment and productivity in leguminous crops",
    ],
    application:
      "Suitable for seed treatment, soil application and other recommended methods depending on the crop. BPCI-RHIZOMAX is specifically suited for compatible leguminous crops and can be used as part of an integrated nutrient management programme.",
  },

  {
    slug: "azospir",
    name: "BPCI-AZOSPIR",
    category: "Plant Nutrition",
    type: "Azospirillum Biofertilizer",
    image: "/images/products/azospir.jpg",
    description:
      "BPCI-AZOSPIR contains beneficial Azospirillum bacteria that associate with plant roots and help improve nitrogen availability while promoting healthy root development. The bacteria also support plant growth through the production of growth-promoting substances, helping plants develop stronger root systems and make better use of available nutrients.",
    benefits: [
      "Helps improve nitrogen availability to plants",
      "Promotes strong and healthy root development",
      "Supports vigorous vegetative growth and better nutrient uptake",
      "Helps improve crop establishment and overall plant growth",
    ],
    application:
      "Suitable for seed treatment, soil application and fertigation as recommended for the crop. BPCI-AZOSPRIMAX can be used along with other compatible biofertilizers as part of an integrated nutrient management programme.",
  },

  {
    slug: "phosphomax",
    name: "BPCI-PHOSPHOMAX",
    category: "Plant Nutrition",
    type: "Phosphate Solubilizing Bacterial (PSB) Biofertilizer",
    image: "/images/products/phosphomax.jpg",
    description:
      "BPCI-Phosphomax contains efficient phosphate-solubilizing bacteria that help convert insoluble and fixed forms of phosphorus in the soil into forms readily available to plants. By improving phosphorus availability around the root zone, it supports better root development, crop establishment and overall plant growth.",
    benefits: [
      "Helps solubilize fixed and insoluble phosphorus in soil",
      "Promotes strong and healthy root development",
      "Improves phosphorus availability and nutrient uptake",
      "Supports vigorous crop growth and better yield",
    ],
    application:
      "Suitable for seed treatment, soil application and fertigation as recommended for the crop. BPCI-Phosphomax can be used along with other compatible biofertilizers as part of an integrated nutrient management programme.",
  },

  {
    slug: "potamax",
    name: "BPCI-POTAMAX",
    category: "Plant Nutrition",
    type: "Potash Mobilizing Bacteria (KMB) Biofertilizer",
    image: "/images/products/potamax.jpg",
    description:
      "BPCI-POTAMAX contains beneficial potash-mobilizing bacteria that help release fixed and unavailable forms of potassium present in the soil, making it more accessible for plant uptake. By improving potassium availability in the root zone, it supports healthy root development, stronger plant growth and efficient utilization of essential nutrients.",
    benefits: [
      "Helps mobilize fixed and unavailable potassium in the soil",
      "Improves potassium availability and uptake by plants",
      "Supports healthy root development and vigorous plant growth",
      "Contributes to better nutrient utilization and overall crop health",
    ],
    application:
      "Suitable for seed treatment, soil application and fertigation as recommended for the crop. BPCI-Potamax can be used along with other compatible biofertilizers as part of an integrated nutrient management programme.",
  },

  {
    slug: "mycorrhiza",
    name: "BPCI-MYCORRHIZA",
    category: "Plant Nutrition",
    type: "Mycorrhizal Biofertilizer",
    image: "/images/products/mycorrhiza.jpg",
    description:
      "BPCI-Mycorrhiza contains beneficial mycorrhizal fungi that establish a symbiotic association with plant roots and extend the effective root system through their fine fungal hyphae. This helps plants access nutrients and water from a larger volume of soil, particularly improving the availability and uptake of phosphorus and other essential nutrients.",
    benefits: [
      "Enhances phosphorus and other nutrient uptake",
      "Promotes extensive and healthy root development",
      "Improves water absorption and helps plants tolerate moderate environmental stress",
      "Supports better crop establishment, growth and overall plant health",
    ],
    application:
      "Suitable for application to seeds, seedlings, planting pits, root zones or soil as recommended for the crop. BPCI-Mycorrhiza is particularly useful for horticultural, vegetable, field and plantation crops and can be incorporated into an integrated nutrient management programme.",
  },

  {
    slug: "poshak",
    name: "BPCI-POSHAK (Grade I to IX)",
    category: "Plant Nutrition",
    type: "State Notified Micronutrient Mixtures / Micronutrient Fertilizer",
    image: "/images/products/poshak.jpg",
    description:
      "BPCI-POSHAK is a range of State Notified Micronutrient Mixtures formulated to supply essential micronutrients such as Zinc, Iron, Manganese and Boron according to the specific requirements of different crops, soil types and growing regions. It helps correct micronutrient deficiencies, supports healthy plant growth and development, and promotes efficient nutrient utilization for better crop performance.",
    benefits: [
      "Helps prevent and correct micronutrient deficiencies",
      "Supplies essential micronutrients required for healthy crop growth",
      "Supports important physiological and metabolic processes in plants",
      "Promotes better nutrient utilization, crop quality and overall plant health",
      "Available in grades suited to different soil conditions and crop requirements",
    ],
    application:
      "Available grades are recommended for foliar spray or soil application depending on the formulation, crop and soil condition. Crop-specific grades are available for mango, banana, vegetable and citrus crops. Use as per the recommended grade, dose and application method.",
  },

  {
    slug: "trishul",
    name: "BPCI-TRISHUL",
    category: "Plant Protection",
    type: "Trichoderma viride 1.5% WP",
    image: "/images/products/trishul.jpg",
    description:
      "BPCI-TRISHUL contains Trichoderma viride, a beneficial fungus that colonizes the root zone and helps suppress soil-borne fungal pathogens associated with diseases such as damping-off, root rot, collar rot and wilt. It supports healthy root development, improves the soil microbial environment and promotes vigorous plant growth through natural biological activity.",
    benefits: [
      "Helps suppress soil-borne fungal pathogens",
      "Promotes healthy root development and stronger plants",
      "Enhances nutrient uptake",
      "Boosts Plant Immunity and overall plant health",
    ],
    application:
      "Suitable for seed treatment, soil application and root-zone application as recommended for the crop. BPCI-TRISHUL can be incorporated into an integrated crop and disease management programme along with compatible agricultural inputs.",
  },

  {
    slug: "bio-bectin",
    name: "BIO BECTIN",
    category: "Plant Protection",
    type: "Bacillus thuringiensis 10% WSL",
    image: "/images/products/bio-bectin.jpg",
    description:
      "BPCI-BTK contains Bacillus thuringiensis var. kurstaki, a naturally occurring microbial biopesticide effective against susceptible caterpillar pests, particularly the larval stages of several lepidopteran insects. After ingestion by susceptible larvae, Bt produces insecticidal proteins that disrupt the larval gut, leading to cessation of feeding and eventual mortality.",
    benefits: [
      "Helps control susceptible caterpillar and lepidopteran larval pests",
      "Acts primarily through ingestion by the target larvae",
      "Helps reduce feeding damage and protect crop foliage",
      "Suitable for use as part of an integrated pest management programme",
    ],
    application:
      "Suitable for foliar application against susceptible caterpillar pests as recommended for the crop and target pest. Apply according to the approved product label for the recommended dose, timing and application interval.",
  },

  {
    slug: "fluoromax",
    name: "BPCI-FLUOROMAX",
    category: "Plant Protection",
    type: "Pseudomonas fluorescens 1.0% WP",
    image: "/images/products/fluoromax.jpg",
    description:
      "BPCI-FLUOROMAX contains beneficial Pseudomonas fluorescens, a naturally occurring beneficial bacterium that colonizes the plant root zone and helps suppress soil-borne and foliar plant pathogens through natural biological mechanisms. It supports healthy root development, improves the rhizosphere environment and promotes vigorous plant growth.",
    benefits: [
      "Helps suppress a range of plant pathogenic fungi and other harmful microorganisms",
      "Promotes healthy root development and plant growth",
      "Supports beneficial microbial activity in the rhizosphere",
      "Helps improve crop establishment and overall plant health",
    ],
    application:
      "Suitable for seed treatment, soil application and foliar application as recommended for the crop and target disease. BPCI- FLUOROMAX can be incorporated into an integrated disease management programme along with compatible agricultural inputs.",
  },

  {
    slug: "nemoleum",
    name: "BPCI-NEEMOLEUM (0.15% and 1%)",
    category: "Plant Protection",
    type: "Neem-Based Botanical Biopesticide",
    image: "/images/products/nemoleum.jpg",
    description:
      "BPCI-NEEMOLEUM is a neem-based botanical biopesticide containing Azadirachtin, a naturally occurring bioactive compound derived from neem (Azadirachta indica). It helps manage a wide range of insect pests by interfering with feeding, growth, development and reproduction, making it a valuable component of Integrated Pest Management (IPM) programmes.",
    benefits: [
      "Helps manage a broad range of sucking and chewing insect pests",
      "Acts primarily as an antifeedant and insect growth regulator",
      "Helps disrupt insect growth, development and reproduction",
      "Helps reduce pest population and consequent crop damage",
      "Suitable for use as part of an Integrated Pest Management (IPM) programme",
      "Can be used at different concentrations according to pest pressure, crop and label recommendations",
    ],
    application:
      "BPCI-NEEMOLEUM is primarily intended for foliar application. The appropriate formulation and dose should be selected according to the crop, target pest and level of infestation.\n\nThe 0.15% formulation may be used for routine pest management and lower to moderate pest pressure, while the 1% formulation, being more concentrated in Azadirachtin, may be selected where a higher active-ingredient concentration is required, such as under higher pest pressure or more established infestations, subject to the approved product label and crop-specific recommendations.\n\nAlways follow the recommended dose, dilution, application interval and crop-specific directions given on the product label.",
  },

  {
    slug: "decomposer",
    name: "BPCI-DECOMPOSER",
    category: "Soil Health",
    type: "Microbial Waste Decomposer",
    image: "/images/products/decomposer.jpg",
    description:
      "BPCI-DECOMPOSER is a microbial formulation containing beneficial microorganisms that help accelerate the natural decomposition of crop residues, plant waste and other organic materials. It supports the breakdown of complex organic matter and promotes efficient recycling of nutrients back into the soil. It helps farmers manage crop residues in an environmentally friendly manner while contributing to soil organic matter improvement and nutrient recycling.",
    benefits: [
      "Helps in faster decomposition of crop residues and plant waste",
      "Convert agricultural residues into valuable organic matter",
      "Increases organic carbon content in the soil",
      "Supports improvement of soil biological activity and soil health",
      "Reduce the need for burning or disposal of crop residues",
      "Suitable for use in sustainable and integrated soil management practices",
    ],
    application:
      "BPCI-DECOMPOSER can be used for the treatment of crop residues, farm waste and other biodegradable organic materials. Apply as recommended on the product label, depending on the type and quantity of organic material being treated. For best results, ensure adequate moisture and proper mixing of the microbial formulation with the organic material and maintain suitable conditions for microbial activity.",
  },

  {
    slug: "neem-cake",
    name: "NEEM CAKE",
    category: "Soil Health",
    type: "Organic Soil Amendment",
    image: "/images/products/neem-cake.jpg",
    description:
      "BPCI-Neem Cake is an organic soil amendment derived from neem seeds and kernels, providing organic matter and naturally occurring nutrients to the soil. In addition to improving soil fertility and root-zone conditions, neem cake has natural pest-suppressive properties and can help in the integrated management of certain soil-borne pests and nematodes.",
    benefits: [
      "Adds organic matter and naturally occurring nutrients to the soil",
      "Helps improve soil fertility and soil conditioning",
      "Supports suppression of certain soil pests and plant-parasitic nematodes",
      "Promotes beneficial microbial activity and healthy root development",
    ],
    application:
      "Apply to the soil around the root zone as recommended for the crop. BPCI-Neem Cake can be used along with organic manures, biofertilizers and other recommended inputs as part of an integrated soil fertility and pest management programme.",
  },

  {
    slug: "prom",
    name: "BPCI-PROM",
    category: "Soil Health",
    type: "Phosphate Rich Organic Manure",
    image: "/images/products/prom.jpg",
    description:
      "PROM is a phosphate-rich organic manure formulated to supply phosphorus along with organic matter, supporting improved soil fertility and plant nutrition. It helps provide a gradual source of phosphorus while contributing to better soil condition, nutrient availability and healthy root development.",
    benefits: [
      "Supplies phosphorus and organic matter to the soil",
      "Supports healthy root development and plant growth",
      "Helps improve soil fertility and nutrient availability",
      "Contributes to balanced crop nutrition and overall plant health",
    ],
    application:
      "Apply to the soil and incorporate into the root zone as recommended for the crop. PROM can be used along with biofertilizers and other recommended nutrient inputs as part of an integrated nutrient management programme.",
  },

  {
    slug: "humic-acid",
    name: "HUMIC ACID",
    category: "Soil Health",
    type: "Soil Conditioner",
    image: "/images/products/humic-acid.jpg",
    description:
      "Humic acid contains humic substances that help improve soil structure, nutrient availability and the overall soil environment. It supports better root development and nutrient uptake by improving the soil’s ability to retain and supply essential nutrients to plants.",
    benefits: [
      "Improves soil structure and soil conditioning",
      "Enhances nutrient availability and uptake",
      "Promotes healthy root development and plant growth",
      "Supports better soil fertility and overall crop performance",
    ],
    application:
      "Suitable for soil application, fertigation or other recommended methods depending on the crop and product formulation. It can be used as part of an integrated crop nutrition and soil management programme.",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
