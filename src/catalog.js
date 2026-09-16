window.COMMON_GROUND_CATALOG = {
  categories: [
    {
      id: "pre-rolls",
      number: "01",
      name: "Pre-rolls",
      short: "Pre-rolls",
      note: "Flower • paper • filter",
      intro: "Ready-rolled cannabis in single, multipack and infused formats. Compare how each format is made, what the pack should disclose and which batch details to check in store.",
      accent: "acid",
      image: "./assets/catalog/pre-rolls.png",
      imageAlt: "Three rolled joints on a dark studio surface",
      products: [
        {
          id: "single-pre-roll",
          name: "Single pre-roll",
          descriptor: "One ready-rolled joint in individual packaging",
          summary: "The most direct pre-roll format: ground flower wrapped in paper with a filter tip. The pack should identify the cultivar, net weight and cannabinoid information for that batch.",
          checks: ["Cultivar or strain name", "Net flower weight", "Batch-specific THC and CBD", "Paper, filter and storage details"],
          questions: ["Is this flower-only or infused?", "When was this batch packed?", "Where is the batch test information?"]
        },
        {
          id: "pre-roll-multipack",
          name: "Pre-roll multipack",
          descriptor: "Several ready-rolled joints in one sealed pack",
          summary: "A convenient pack of consistently sized pre-rolls. Clear labelling should separate the total flower weight from the weight of each joint.",
          checks: ["Number of joints", "Weight per joint and total", "Cultivar and batch number", "Resealable storage guidance"],
          questions: ["Are all joints from one batch?", "What is the weight of each joint?", "How should the opened pack be stored?"]
        },
        {
          id: "infused-pre-roll",
          name: "Infused pre-roll",
          descriptor: "Flower enhanced with concentrate, oil, kief or another declared extract",
          summary: "An infused joint combines ground flower with an added cannabis extract. The label should name the infusion and show cannabinoid information for the finished pre-roll.",
          checks: ["Flower and infusion type", "Net weight", "Total THC and CBD per joint", "Full ingredient and batch details"],
          questions: ["Which extract was added?", "Is the infusion inside, outside or both?", "Where is the finished-product test information?"]
        }
      ]
    },
    {
      id: "infused-wine",
      number: "02",
      name: "Infused wine",
      short: "Infused wine",
      note: "Ingredients • volume • servings",
      intro: "Cannabis-infused wine in single, multi-serve and sparkling formats. The bottle should make volume, ingredients, servings and cannabinoid content easy to understand.",
      accent: "violet",
      image: "./assets/catalog/infused-wine.png",
      imageAlt: "Dark wine bottle and a glass of red wine on a studio surface",
      products: [
        {
          id: "single-serve-bottle",
          name: "Single-serve bottle",
          descriptor: "One bottle presented as a single serving",
          summary: "An individual bottle of infused wine with the serving information tied to the full container. Volume, ingredients and total cannabinoid content should appear together.",
          checks: ["Bottle volume", "Total THC and CBD", "Ingredients and allergens", "Batch and best-before details"],
          questions: ["Is the full bottle one serving?", "Does it contain alcohol?", "Should it be refrigerated before or after opening?"]
        },
        {
          id: "multi-serve-bottle",
          name: "Multi-serve bottle",
          descriptor: "A larger bottle containing several measured servings",
          summary: "A share-size infused wine format. The label should clearly separate the cannabinoid amount in one measured serving from the total in the bottle.",
          checks: ["Bottle volume", "Number and size of servings", "THC and CBD per serving and bottle", "Storage after opening"],
          questions: ["How is one serving measured?", "What is the total content of the bottle?", "How long does it keep after opening?"]
        },
        {
          id: "sparkling-format",
          name: "Sparkling format",
          descriptor: "A carbonated take on infused wine",
          summary: "A sparkling infused wine with the same essential label needs as still formats, plus clear handling, opening and refrigeration guidance.",
          checks: ["Bottle volume", "Servings and cannabinoid content", "Ingredients and allergens", "Opening and storage guidance"],
          questions: ["Is it single-serve or multi-serve?", "Does it contain alcohol?", "How should an opened bottle be stored?"]
        }
      ]
    }
    ,{
      id: "vaporizers",
      number: "03",
      name: "Vaporizer formats",
      short: "Vapes",
      note: "Device • extract • batch",
      intro: "Portable cannabis vape formats range from all-in-one disposables to cartridges and closed pods. Compatibility, extract type, capacity and batch testing should all be easy to find.",
      accent: "orange",
      image: "./assets/catalog/vaporizers.png",
      imageAlt: "Vape pen, cartridge and pod device on a dark studio surface",
      products: [
        {
          id: "disposable-vaporizer",
          name: "Disposable vaporizer",
          descriptor: "An all-in-one vape with oil, battery and heating element",
          summary: "A sealed, ready-to-use device that needs no separate battery. The packaging should identify the extract, fill volume, cannabinoid profile and batch.",
          checks: ["Extract type", "Oil capacity", "THC and CBD profile", "Batch, charging and disposal details"],
          questions: ["Is the device rechargeable?", "What extract is inside?", "How should the finished device be disposed of?"]
        },
        {
          id: "510-cartridge",
          name: "510 cartridge",
          descriptor: "A threaded oil cartridge for a compatible 510 battery",
          summary: "A widely used cartridge format sold separately from the battery. Capacity, extract type and hardware compatibility should be stated clearly.",
          checks: ["510-thread compatibility", "Oil capacity", "Extract and ingredient details", "Cannabinoid profile and batch"],
          questions: ["Is a battery included?", "What voltage range is recommended?", "How should the cartridge be stored?"]
        },
        {
          id: "closed-pod",
          name: "Closed pod",
          descriptor: "A pre-filled pod made for a specific device system",
          summary: "A compact closed-system format. The exact compatible device matters as much as the extract, capacity and batch information.",
          checks: ["Compatible device", "Pod capacity", "Extract and ingredient details", "Cannabinoid profile and batch"],
          questions: ["Which device accepts this pod?", "Is the pod refillable or sealed?", "How should used pods be disposed of?"]
        }
      ]
    }
    ,{
      id: "edibles",
      number: "04",
      name: "Edible formats",
      short: "Edibles",
      note: "Ingredients • allergens • portions",
      intro: "Cannabis edibles turn measured extracts into familiar confectionery and baked formats. Ingredients, allergens, portions and cannabinoid content should be clear before the pack is opened.",
      accent: "acid",
      image: "./assets/catalog/edibles.png",
      imageAlt: "Colorful gummies and dark chocolate on a black plate",
      products: [
        {
          id: "gummy-pack",
          name: "Gummy pack",
          descriptor: "Chewy, portioned gummies in a multi-piece pack",
          summary: "A familiar edible format where each piece represents a stated portion. The label should show piece count and cannabinoid content per gummy and per pack.",
          checks: ["Number of gummies", "THC and CBD per piece and pack", "Ingredients and allergens", "Batch and best-before details"],
          questions: ["How many gummies are in the pack?", "What does each piece contain?", "How should the opened pack be stored?"]
        },
        {
          id: "chocolate-bar",
          name: "Chocolate bar",
          descriptor: "An infused chocolate bar divided into marked segments",
          summary: "A segmented bar makes portion information easier to follow. The wrapper should state the content of each segment as well as the total for the full bar.",
          checks: ["Number of segments", "THC and CBD per segment and bar", "Ingredients and allergens", "Temperature and storage guidance"],
          questions: ["How many segments make up the bar?", "What does each segment contain?", "How should it be protected from heat?"]
        },
        {
          id: "baked-format",
          name: "Baked format",
          descriptor: "An infused brownie, cookie or other packaged baked item",
          summary: "Baked edibles combine cannabis extract with a perishable food product, so freshness, allergens and storage deserve the same attention as cannabinoid content.",
          checks: ["THC and CBD per item", "Ingredients and allergens", "Packed and best-before dates", "Storage guidance"],
          questions: ["Is the package one portion or several?", "Which allergens are present?", "What is the stated shelf life?"]
        }
      ]
    }
    ,{
      id: "merchandise",
      number: "05",
      name: "Merchandise",
      short: "Merchandise",
      note: "Apparel • accessories • editions",
      intro: "Streetwear and everyday accessories carry the shop’s visual identity beyond the counter. Fit, fabric, construction and care should be as considered as the artwork.",
      accent: "violet",
      image: "./assets/catalog/merchandise.png",
      imageAlt: "Black T-shirt, black cap and cream canvas tote bag",
      products: [
        {
          id: "graphic-tee",
          name: "Graphic tee",
          descriptor: "A heavyweight printed T-shirt built around the shop’s artwork",
          summary: "The core wearable: a graphic tee with enough detail on fit, fabric weight, print method and care to choose the right size confidently.",
          checks: ["Size range and fit", "Fabric composition and weight", "Print method", "Wash and care instructions"],
          questions: ["Is the fit regular or oversized?", "Is the fabric pre-shrunk?", "How should the print be washed?"]
        },
        {
          id: "headwear",
          name: "Headwear",
          descriptor: "Caps, beanies and bucket hats finished with shop artwork",
          summary: "An everyday headwear range where shape, material and fit matter. Each listing should explain sizing, adjustment and construction clearly.",
          checks: ["Hat style and profile", "Size or adjustment range", "Materials and finish", "Care instructions"],
          questions: ["Is the fit adjustable?", "What is the crown profile?", "Is this a core piece or limited run?"]
        },
        {
          id: "everyday-accessory",
          name: "Everyday accessory",
          descriptor: "Tote bags and small everyday branded essentials",
          summary: "Useful objects that bring the visual identity into daily life. Dimensions, materials, construction and what is included should be easy to scan.",
          checks: ["Dimensions and capacity", "Materials and construction", "What is included", "Maker and care details"],
          questions: ["What is included with the item?", "How should it be cleaned?", "Was it produced locally?"]
        }
      ]
    }
  ]
};
