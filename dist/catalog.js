window.COMMON_GROUND_CATALOG = {
  categories: [
    {
      id: "pre-rolls",
      number: "01",
      name: "Pre-rolls",
      short: "Pre-rolls",
      note: "Flower • paper • filter",
      intro: "Prepared flower formats vary by size, construction and pack configuration. Use the format guide to see which product facts should be easy to verify.",
      accent: "acid",
      products: [
        {
          id: "single-pre-roll",
          name: "Single pre-roll",
          descriptor: "One prepared roll in individual packaging",
          summary: "A single-unit format where declared weight, materials and batch information should be visible on the pack.",
          checks: ["Declared net weight", "Paper and filter materials", "Batch reference", "Verified product documentation"],
          questions: ["Is the unit sealed and labelled?", "Which details are specific to this batch?", "Where are storage and warning details shown?"]
        },
        {
          id: "pre-roll-multipack",
          name: "Pre-roll multipack",
          descriptor: "Several prepared rolls in one package",
          summary: "A multi-unit format that should distinguish the total package contents from the specification of each unit.",
          checks: ["Number of units", "Weight per unit and total", "Package seal", "Batch reference"],
          questions: ["Are all units from the same batch?", "Is the total quantity clearly stated?", "How should the opened pack be stored?"]
        },
        {
          id: "infused-pre-roll",
          name: "Infused pre-roll",
          descriptor: "Prepared flower format with additional declared ingredients",
          summary: "An infused format needs a complete ingredient description and product-specific documentation rather than assumptions based on appearance.",
          checks: ["Full ingredient list", "Declared net weight", "Batch-specific documentation", "Required warnings"],
          questions: ["What additional ingredients are declared?", "Who supplied or manufactured the product?", "Which documents support the label details?"]
        }
      ]
    },
    {
      id: "infused-wine",
      number: "02",
      name: "Infused wine",
      short: "Infused wine",
      note: "Ingredients • volume • servings",
      intro: "Packaged drink formats need a clear separation between container contents, stated servings and verified batch information.",
      accent: "violet",
      products: [
        {
          id: "single-serve-bottle",
          name: "Single-serve bottle",
          descriptor: "A bottle presented as one stated serving",
          summary: "The packaging should make total volume, ingredients and the stated serving information easy to distinguish.",
          checks: ["Total volume", "Ingredient and allergen list", "Stated serving information", "Batch reference"],
          questions: ["Does the entire bottle represent one stated serving?", "Are allergens clearly declared?", "What storage instructions apply?"]
        },
        {
          id: "multi-serve-bottle",
          name: "Multi-serve bottle",
          descriptor: "A larger bottle containing several stated servings",
          summary: "A multi-serve container should show both the full-container information and the amount represented by one stated serving.",
          checks: ["Container volume", "Number of stated servings", "Information per serving", "Storage after opening"],
          questions: ["How is one stated serving measured?", "What information applies to the full bottle?", "Is refrigeration required after opening?"]
        },
        {
          id: "sparkling-format",
          name: "Sparkling format",
          descriptor: "Carbonated packaged drink format",
          summary: "Carbonated formats add handling and storage considerations to the core ingredient, volume and batch information.",
          checks: ["Total volume", "Ingredient list", "Closure and storage information", "Supplier details"],
          questions: ["How should the bottle be handled and stored?", "Are serving details stated clearly?", "Where is the batch reference located?"]
        }
      ]
    }
    ,{
      id: "vaporizers",
      number: "03",
      name: "Vaporizer formats",
      short: "Vapes",
      note: "Device • extract • batch",
      intro: "Device, cartridge and pod formats should state what is included, what they are compatible with and which product details belong to that batch.",
      accent: "orange",
      products: [
        {
          id: "disposable-vaporizer",
          name: "Disposable vaporizer",
          descriptor: "Self-contained device format",
          summary: "A self-contained device should identify its contents, capacity, supplier and handling information without relying on unstated compatibility assumptions.",
          checks: ["Device contents", "Declared capacity", "Ingredient or extract details", "Supplier and batch reference"],
          questions: ["Is the device sealed?", "Which handling instructions are supplied?", "How is the device responsibly disposed of?"]
        },
        {
          id: "510-cartridge",
          name: "510 cartridge",
          descriptor: "Threaded cartridge format for a compatible battery",
          summary: "A cartridge listing should separate the cartridge contents from the battery or device required to use it.",
          checks: ["Connection type", "Declared capacity", "Contents and ingredients", "Batch reference"],
          questions: ["Is a battery included?", "Which devices are compatible?", "What storage position is recommended?"]
        },
        {
          id: "closed-pod",
          name: "Closed pod",
          descriptor: "Pod made for a named compatible system",
          summary: "Closed pods require precise compatibility information alongside verified contents and batch details.",
          checks: ["Compatible system", "Pod capacity", "Contents and ingredients", "Manufacturer or supplier"],
          questions: ["Which exact device accepts this pod?", "Is the pod refillable?", "Where are handling warnings shown?"]
        }
      ]
    }
    ,{
      id: "edibles",
      number: "04",
      name: "Edible formats",
      short: "Edibles",
      note: "Ingredients • allergens • portions",
      intro: "Food-format products need prominent ingredient, allergen, package-content and storage information tied to the specific product and batch.",
      accent: "acid",
      products: [
        {
          id: "gummy-pack",
          name: "Gummy pack",
          descriptor: "Multiple confectionery pieces in one package",
          summary: "A gummy pack should state the number of pieces, its full ingredient list and how package information relates to each piece.",
          checks: ["Piece count", "Ingredients and allergens", "Information per piece and pack", "Batch reference"],
          questions: ["Is each piece uniform according to the label?", "Which allergens are declared?", "How should the opened pack be stored?"]
        },
        {
          id: "chocolate-bar",
          name: "Chocolate bar",
          descriptor: "Segmented confectionery format",
          summary: "A segmented bar should clearly describe its ingredients, allergens, total contents and any stated information per segment.",
          checks: ["Segment count", "Ingredients and allergens", "Total package information", "Storage temperature"],
          questions: ["How many segments are identified?", "Does the label distinguish segment and pack details?", "What prevents heat damage?"]
        },
        {
          id: "baked-format",
          name: "Baked format",
          descriptor: "Packaged baked food format",
          summary: "Baked formats should carry complete food labelling, packaging dates and batch-specific product information.",
          checks: ["Ingredients and allergens", "Package date", "Storage guidance", "Manufacturer or supplier"],
          questions: ["What is the stated shelf life?", "How is freshness protected?", "Which information is specific to this batch?"]
        }
      ]
    }
    ,{
      id: "merchandise",
      number: "05",
      name: "Merchandise",
      short: "Merchandise",
      note: "Apparel • accessories • editions",
      intro: "Apparel and accessories carry the visual identity into useful objects. Product pages should make materials, dimensions and care information clear.",
      accent: "violet",
      products: [
        {
          id: "graphic-tee",
          name: "Graphic tee",
          descriptor: "Printed apparel format",
          summary: "A useful apparel listing should make fit, fabric, print method and care details easy to compare.",
          checks: ["Available sizing", "Fabric composition", "Print method", "Care instructions"],
          questions: ["Is the fit standard or oversized?", "How should the print be washed?", "Who produced the garment?"]
        },
        {
          id: "headwear",
          name: "Headwear",
          descriptor: "Cap, beanie or bucket-hat format",
          summary: "Headwear details should explain construction, fit adjustment, materials and care rather than relying only on photography.",
          checks: ["Style and construction", "Sizing or adjustment", "Materials", "Care instructions"],
          questions: ["Is the fit adjustable?", "What materials are used?", "Is this part of a limited edition?"]
        },
        {
          id: "everyday-accessory",
          name: "Everyday accessory",
          descriptor: "Small branded utility object",
          summary: "Accessory listings should state purpose, dimensions, materials and maker information precisely.",
          checks: ["Dimensions", "Materials", "Intended use", "Maker details"],
          questions: ["What is included?", "Are care instructions needed?", "Is the object locally made?"]
        }
      ]
    }
  ]
};
