export interface RegionData {
  slug: string;
  name: string;
  country: "canada" | "usa" | "australia";
  heroImage: string;
  heroAlt: string;
  description: string;
  detail: string;
  stats: { value: string; label: string }[];
  metaTitle: string;
  metaDescription: string;
  areaServedName: string;
  areaServedType: "State" | "AdministrativeArea";
}

export const regions: RegionData[] = [
  // ──────────────────────────────────────────────
  // AUSTRALIA (8)
  // ──────────────────────────────────────────────
  {
    slug: "new-south-wales",
    name: "New South Wales",
    country: "australia",
    heroImage: "/images/australia-bushfires-kangaroo.avif",
    heroAlt:
      "Australian bushfire with kangaroo silhouette against fire-lit sky",
    description:
      "New South Wales faces the highest bushfire risk of any Australian state. Prodigy Wildfire Solutions delivers exterior bushfire sprinkler systems, ember detection, and remote activation for homes across the Blue Mountains, South Coast, and Hunter Valley.",
    detail:
      "The 2019-20 Black Summer season was the most devastating in NSW history, with 11,264 fires burning 5.4 million hectares and destroying 2,448 homes. Twenty-six lives were lost directly to the fires across communities from the Blue Mountains to the Far South Coast. NSW faces a year-round bushfire threat due to its mix of dense eucalyptus forests, steep gullies, and rapidly expanding urban-rural fringe. Prodigy Wildfire Solutions' exterior wildfire sprinkler systems and ember detection technology provide permanent, property-level defence against ember attack, the leading cause of home ignition in NSW.",
    stats: [
      { value: "2,448", label: "Homes Destroyed (Black Summer 2019-20)" },
      { value: "5.4M", label: "Hectares Burned (2019-20)" },
      { value: "26", label: "Lives Lost (2019-20 Season)" },
      { value: "11,264", label: "Fires Responded To (2019-20)" },
    ],
    metaTitle:
      "Bushfire Protection in New South Wales | Prodigy Wildfire",
    metaDescription:
      "Prodigy Wildfire Solutions delivers bushfire sprinkler systems, ember detection, and remote activation for homes and properties across New South Wales. Protect your property from ember attack and radiant heat.",
    areaServedName: "New South Wales",
    areaServedType: "State",
  },
  {
    slug: "victoria",
    name: "Victoria",
    country: "australia",
    heroImage: "/images/australia-bushfires-kangaroo.avif",
    heroAlt:
      "Australian bushfire with kangaroo silhouette against fire-lit sky",
    description:
      "Victoria has suffered Australia's deadliest bushfire events in recorded history. Prodigy Wildfire Solutions delivers exterior bushfire sprinkler systems and ember detection for homes across East Gippsland, the Dandenongs, and the Otway Ranges.",
    detail:
      "Victoria's Black Saturday fires of February 2009 killed 173 people and destroyed more than 2,000 homes, the deadliest bushfire disaster in Australian history. The 2019-20 season burned over 1.5 million hectares across East Gippsland and the north-east, destroying 420 homes and causing an economic impact exceeding $4 billion. Approximately 70% of Victoria is designated Bushfire Prone Area under state planning law. Prodigy Wildfire Solutions' bushfire protection systems are designed to defend homes in high-risk grassland, forest, and interface zones across the state.",
    stats: [
      { value: "173", label: "Lives Lost (Black Saturday 2009)" },
      { value: "420", label: "Homes Destroyed (2019-20 Season)" },
      { value: "1.5M", label: "Hectares Burned (2019-20)" },
      { value: "$4B+", label: "Economic Impact (2019-20)" },
    ],
    metaTitle: "Bushfire Protection in Victoria | Prodigy Wildfire",
    metaDescription:
      "Prodigy Wildfire Solutions delivers bushfire sprinkler systems, ember detection, and remote activation for homes across Victoria. Defend your property from ember attack in one of Australia's highest-risk states.",
    areaServedName: "Victoria",
    areaServedType: "State",
  },
  {
    slug: "queensland",
    name: "Queensland",
    country: "australia",
    heroImage: "/images/australia-bushfires-kangaroo.avif",
    heroAlt:
      "Australian bushfire with kangaroo silhouette against fire-lit sky",
    description:
      "Queensland regularly burns more land than any other Australian state. Prodigy Wildfire Solutions delivers bushfire sprinkler systems and ember detection for rural, coastal, and peri-urban communities across the Sunshine State.",
    detail:
      "Queensland averages 8.42 million hectares burned per year, with 2023 reaching 10.37 million hectares, 23% above the long-term average. The 2023 Southern Queensland fires killed five people, destroyed over 180 structures including 74 homes, and impacted a third of Queensland's local government areas. Bushfire protection in Queensland must account for the state's diverse hazards, from dry inland scrub and Darling Downs grasslands to the heavily populated southeast hinterland. Prodigy Wildfire Solutions' exterior wildfire sprinkler systems are engineered for Queensland's extreme heat and extended dry seasons.",
    stats: [
      { value: "10.37M", label: "Hectares Burned (2023 Record)" },
      { value: "74", label: "Homes Destroyed (Southern QLD 2023)" },
      { value: "5", label: "Lives Lost (Southern QLD 2023)" },
      { value: "8.42M", label: "Avg. Hectares Burned Per Year" },
    ],
    metaTitle: "Bushfire Protection in Queensland | Prodigy Wildfire",
    metaDescription:
      "Prodigy Wildfire Solutions delivers bushfire sprinkler systems, ember detection, and remote activation for homes across Queensland. Protect your property from bushfire in one of Australia's most fire-active states.",
    areaServedName: "Queensland",
    areaServedType: "State",
  },
  {
    slug: "south-australia",
    name: "South Australia",
    country: "australia",
    heroImage: "/images/australia-bushfires-kangaroo.avif",
    heroAlt:
      "Australian bushfire with kangaroo silhouette against fire-lit sky",
    description:
      "South Australia's unique geography, from Kangaroo Island to the Adelaide Hills, creates extreme bushfire risk. Prodigy Wildfire Solutions delivers bushfire sprinkler systems and ember detection for rural properties, heritage areas, and suburban fringes.",
    detail:
      "South Australia's 2019-20 Black Summer was catastrophic: the Cudlee Creek fire in the Adelaide Hills destroyed 98 homes and burned over 23,000 hectares, while on Kangaroo Island fires burned 211,500 hectares, nearly half the island, destroying 87 dwellings and killing two people. An estimated 40,000 koalas were lost on Kangaroo Island alone. Bushfire protection in South Australia must address both urban interface risks in the Adelaide Hills and the extreme isolation of rural and island properties where emergency response times are long. Prodigy Wildfire Solutions' systems provide permanent, remotely activated defence.",
    stats: [
      { value: "211,500", label: "Hectares Burned on Kangaroo Island (2019-20)" },
      { value: "98", label: "Homes Destroyed (Cudlee Creek 2019)" },
      { value: "87", label: "Homes Destroyed (Kangaroo Island 2019-20)" },
      { value: "40,000", label: "Koalas Lost on Kangaroo Island" },
    ],
    metaTitle:
      "Bushfire Protection in South Australia | Prodigy Wildfire",
    metaDescription:
      "Prodigy Wildfire Solutions delivers bushfire sprinkler systems, ember detection, and remote activation for homes across South Australia. Protect your Adelaide Hills or Kangaroo Island property from bushfire.",
    areaServedName: "South Australia",
    areaServedType: "State",
  },
  {
    slug: "western-australia",
    name: "Western Australia",
    country: "australia",
    heroImage: "/images/australia-bushfires-kangaroo.avif",
    heroAlt:
      "Australian bushfire with kangaroo silhouette against fire-lit sky",
    description:
      "Over 90% of Western Australia is classified as bushfire prone. Prodigy Wildfire Solutions delivers bushfire sprinkler systems and ember detection for Perth's expanding suburbs and the state's vast rural properties.",
    detail:
      "Over 90% of Western Australia is classified as bushfire prone, giving the state one of the highest proportional risk profiles in the country. In February 2021, the Wooroloo fire in Perth Hills destroyed 86 homes, burned 10,500 hectares, and caused $91 million in insured losses, all within a six-day period just 45km from the Perth CBD. In 2024-25, DFES recorded 5,191 bushfires burning approximately 754,366 hectares across the state. Prodigy Wildfire Solutions' bushfire protection systems account for the extreme fire weather that pushes fires from rural areas into densely populated suburbs with little warning.",
    stats: [
      { value: "90%+", label: "Of WA Land Classified Bushfire Prone" },
      { value: "86", label: "Homes Destroyed (Wooroloo 2021)" },
      { value: "$91M", label: "Insured Losses (Wooroloo 2021)" },
      { value: "5,191", label: "Bushfires Recorded (2024-25)" },
    ],
    metaTitle:
      "Bushfire Protection in Western Australia | Prodigy Wildfire",
    metaDescription:
      "Prodigy Wildfire Solutions delivers bushfire sprinkler systems, ember detection, and remote activation for homes across Western Australia. Defend your property in one of the world's most bushfire-prone regions.",
    areaServedName: "Western Australia",
    areaServedType: "State",
  },
  {
    slug: "tasmania",
    name: "Tasmania",
    country: "australia",
    heroImage: "/images/australia-bushfires-kangaroo.avif",
    heroAlt:
      "Australian bushfire with kangaroo silhouette against fire-lit sky",
    description:
      "Tasmania's ancient forests and World Heritage wilderness face a growing bushfire threat intensified by climate change. Prodigy Wildfire Solutions delivers bushfire protection for properties bordering rainforest, alpine moorland, and irreplaceable ecosystems.",
    detail:
      "January 2019 was Tasmania's warmest and driest month on record, triggering fires that burned over 200,000 hectares, approximately 2.9% of the state's total land area. Some 95,430 hectares of the Tasmanian Wilderness World Heritage Area were scorched, including ancient pencil pines and rainforest that cannot regenerate after fire. While Tasmanian fires destroy fewer structures due to lower housing density, the ecological loss from each fire event is globally significant. Prodigy Wildfire Solutions' bushfire protection systems account for the rapid transition from cleared farmland to old-growth forest that defines Tasmania's landscape.",
    stats: [
      { value: "200,000+", label: "Hectares Burned (2018-19)" },
      { value: "95,430", label: "Hectares of World Heritage Area Burned" },
      { value: "36,000", label: "Hectares Burned (2019-20)" },
      { value: "2.9%", label: "Of Tasmania's Land Area Burned (2018-19)" },
    ],
    metaTitle: "Bushfire Protection in Tasmania | Prodigy Wildfire",
    metaDescription:
      "Prodigy Wildfire Solutions delivers bushfire sprinkler systems, ember detection, and remote activation for homes across Tasmania. Protect your property near World Heritage wilderness from bushfire.",
    areaServedName: "Tasmania",
    areaServedType: "State",
  },
  {
    slug: "northern-territory",
    name: "Northern Territory",
    country: "australia",
    heroImage: "/images/australia-bushfires-kangaroo.avif",
    heroAlt:
      "Australian bushfire with kangaroo silhouette against fire-lit sky",
    description:
      "The Northern Territory burns more land each year than most countries on Earth. Prodigy Wildfire Solutions delivers wildfire protection for Darwin's suburban fringe and remote communities far from emergency services.",
    detail:
      "The Northern Territory experiences the most extensive annual fire activity of any Australian jurisdiction, with an estimated 43 million hectares burning in 2023 alone, vastly exceeding the total area burned during the entire Black Summer nationally. In 2011, over 55 million hectares burned, representing approximately 67% of the entire Territory. Wildfire protection in the Northern Territory must serve both Darwin's growing suburban fringe and the remote Indigenous communities and cattle stations that face fire with minimal emergency infrastructure. Prodigy Wildfire Solutions' systems provide remotely activated defence for isolated properties.",
    stats: [
      { value: "43M", label: "Hectares Burned in NT (2023)" },
      { value: "55M", label: "Hectares Burned (2011 Record)" },
      { value: "67%", label: "Of NT Land Area Burned (2011)" },
      { value: "6.8M", label: "Hectares Burned (2019-20)" },
    ],
    metaTitle:
      "Wildfire Protection in Northern Territory | Prodigy Wildfire",
    metaDescription:
      "Prodigy Wildfire Solutions delivers wildfire sprinkler systems, ember detection, and remote activation for properties across the Northern Territory. Protect remote homes and stations from bushfire.",
    areaServedName: "Northern Territory",
    areaServedType: "AdministrativeArea",
  },
  {
    slug: "act",
    name: "Australian Capital Territory",
    country: "australia",
    heroImage: "/images/australia-bushfires-kangaroo.avif",
    heroAlt:
      "Australian bushfire with kangaroo silhouette against fire-lit sky",
    description:
      "Canberra sits inside one of Australia's most bushfire-exposed capital cities. Prodigy Wildfire Solutions delivers bushfire protection for the thousands of homes on the urban-bush interface across Canberra's suburbs.",
    detail:
      "The 2003 Canberra bushfires remain one of Australia's most dramatic urban fire disasters: four people died, 487 homes were destroyed, and 164,000 hectares burned, approximately 70% of the ACT, with financial damage estimated at up to $1 billion. In 2020, nearly 90,000 hectares burned from fires spilling over from the NSW Black Summer. Today, close to 25% of all ACT dwellings are located within designated Bushfire Prone Areas. Prodigy Wildfire Solutions' bushfire protection systems are essential for the thousands of homes on the urban-bush interface across suburbs including Duffy, Chapman, and the Tuggeranong Valley.",
    stats: [
      { value: "487", label: "Homes Destroyed (Canberra 2003)" },
      { value: "~$1B", label: "Financial Damage (2003 Fires)" },
      { value: "~90,000", label: "Hectares Burned (2020 Season)" },
      { value: "~25%", label: "Of ACT Dwellings in Bushfire Prone Area" },
    ],
    metaTitle:
      "Bushfire Protection in the ACT | Prodigy Wildfire",
    metaDescription:
      "Prodigy Wildfire Solutions delivers bushfire sprinkler systems, ember detection, and remote activation for homes in the Australian Capital Territory. Protect your Canberra property from bushfire.",
    areaServedName: "Australian Capital Territory",
    areaServedType: "AdministrativeArea",
  },

  // ──────────────────────────────────────────────
  // CANADA (8)
  // ──────────────────────────────────────────────
  {
    slug: "british-columbia",
    name: "British Columbia",
    country: "canada",
    heroImage: "/images/prodigy-bc-canada-sign.webp",
    heroAlt:
      "British Columbia wildfire scene with Prodigy Wildfire Solutions signage",
    description:
      "British Columbia faces the most severe wildfire risk of any Canadian province. Prodigy Wildfire Solutions delivers exterior wildfire sprinkler systems, ember detection, and remote activation for homes and businesses across the interior, Okanagan, and coastal regions.",
    detail:
      "The 2023 wildfire season shattered every previous record in BC history, burning 2.84 million hectares, more than double any prior year. Two fires alone in the Okanagan and Shuswap caused over $720 million in insured losses, the most expensive insured wildfire event in BC history. Wildfire suppression cost the province $1.1 billion in 2023, and evacuation orders displaced up to 48,000 residents at peak. Prodigy Wildfire Solutions' exterior wildfire sprinkler systems and ember detection technology provide permanent, proactive defence for BC property owners in high-risk zones.",
    stats: [
      { value: "2.84M", label: "Hectares Burned (2023 Record)" },
      { value: "$720M+", label: "Insured Losses (Okanagan 2023)" },
      { value: "48,000", label: "Residents Evacuated at Peak (2023)" },
      { value: "$1.1B", label: "Provincial Suppression Cost (2023)" },
    ],
    metaTitle:
      "Wildfire Protection in British Columbia | Prodigy Wildfire",
    metaDescription:
      "Prodigy Wildfire Solutions delivers wildfire sprinkler systems, ember detection, and remote activation for homes and businesses across British Columbia. Protect your BC property from wildfire.",
    areaServedName: "British Columbia",
    areaServedType: "AdministrativeArea",
  },
  {
    slug: "alberta",
    name: "Alberta",
    country: "canada",
    heroImage: "/images/prodigy-jasper-ab-fire.webp",
    heroAlt:
      "Wildfire in Jasper, Alberta",
    description:
      "Alberta has experienced two of Canada's most catastrophic wildfire events in the past decade. Prodigy Wildfire Solutions delivers exterior wildfire sprinkler systems and ember detection for homes and communities in the boreal forest, foothills, and mountain towns.",
    detail:
      "The 2016 Fort McMurray wildfire remains the costliest natural disaster in Canadian history, burning 590,000 hectares, destroying approximately 2,400 structures, and forcing 88,000 residents to evacuate, resulting in $3.58 billion in insured losses. In 2023, Alberta recorded 1,090 wildfires burning over 2.2 million hectares. Then in 2024, the Jasper wildfire destroyed 358 structures in the townsite, forcing 25,000 evacuees and causing over $880 million in insured damage. Prodigy Wildfire Solutions' wildfire protection systems provide the permanent, remotely activated defence Alberta property owners need.",
    stats: [
      { value: "2.2M", label: "Hectares Burned (2023)" },
      { value: "88,000", label: "Evacuated (Fort McMurray 2016)" },
      { value: "358", label: "Structures Destroyed (Jasper 2024)" },
      { value: "$3.58B", label: "Insured Losses (Fort McMurray 2016)" },
    ],
    metaTitle: "Wildfire Protection in Alberta | Prodigy Wildfire",
    metaDescription:
      "Prodigy Wildfire Solutions delivers wildfire sprinkler systems, ember detection, and remote activation for homes and businesses across Alberta. Protect your property from wildfire in Canada's most fire-affected province.",
    areaServedName: "Alberta",
    areaServedType: "AdministrativeArea",
  },
  {
    slug: "saskatchewan",
    name: "Saskatchewan",
    country: "canada",
    heroImage: "/images/prodigy-saskatchewan-fire.webp",
    heroAlt:
      "Wildfire in Saskatchewan",
    description:
      "Saskatchewan's boreal forest and parkland regions face mounting wildfire threats. Prodigy Wildfire Solutions delivers wildfire sprinkler systems and ember detection for rural communities, First Nations, and resource industry operators.",
    detail:
      "The 2023 wildfire season was Saskatchewan's most severe on record, with 505 fires burning approximately 1.9 million hectares, roughly five times the size of Prince Albert National Park. The province declared a State of Emergency, with 2,703 residents evacuated and 43 structures destroyed. The total economic cost was estimated at over $500 million. Prodigy Wildfire Solutions' wildfire protection systems are designed for northern communities and forestry corridors where response times are long and infrastructure is sparse.",
    stats: [
      { value: "1.9M", label: "Hectares Burned (2023 Record)" },
      { value: "505", label: "Wildfires Recorded (2023)" },
      { value: "2,703", label: "Residents Evacuated (2023)" },
      { value: "$500M+", label: "Estimated Economic Cost (2023)" },
    ],
    metaTitle:
      "Wildfire Protection in Saskatchewan | Prodigy Wildfire",
    metaDescription:
      "Prodigy Wildfire Solutions delivers wildfire sprinkler systems, ember detection, and remote activation for homes and communities across Saskatchewan. Protect your property from wildfire in Saskatchewan's boreal zone.",
    areaServedName: "Saskatchewan",
    areaServedType: "AdministrativeArea",
  },
  {
    slug: "ontario",
    name: "Ontario",
    country: "canada",
    heroImage: "/images/Prodigy-Ontario-fire.jpg",
    heroAlt:
      "Wildfire in Ontario",
    description:
      "Northwestern Ontario faces serious and growing wildfire risk, with fire seasons far exceeding historical averages. Prodigy Wildfire Solutions delivers wildfire sprinkler systems for remote communities, cottagers, and resource operators across the boreal shield.",
    detail:
      "In 2023, Ontario recorded 726 wildfires burning 429,772 hectares, nearly three times the 10-year average area burned. Northwestern Ontario communities, particularly around the Kenora and Thunder Bay districts, face regular evacuation orders as fires threaten First Nations, towns, and critical infrastructure. Ontario's 25-year average is 156,414 hectares burned per year, a baseline that 2023 exceeded by nearly three times. Prodigy Wildfire Solutions' wildfire protection systems are essential for anyone within the wildland-urban interface from Sudbury north to the Manitoba border.",
    stats: [
      { value: "429,772", label: "Hectares Burned (2023)" },
      { value: "726", label: "Wildfires Recorded (2023)" },
      { value: "3x", label: "Above 10-Year Average (2023)" },
      { value: "156,414", label: "25-Year Avg. Hectares Burned/Year" },
    ],
    metaTitle: "Wildfire Protection in Ontario | Prodigy Wildfire",
    metaDescription:
      "Prodigy Wildfire Solutions delivers wildfire sprinkler systems, ember detection, and remote activation for homes and communities across Ontario. Protect your property from wildfire in Ontario's boreal regions.",
    areaServedName: "Ontario",
    areaServedType: "AdministrativeArea",
  },
  {
    slug: "newfoundland-and-labrador",
    name: "Newfoundland and Labrador",
    country: "canada",
    heroImage: "/images/prodigy-nfandl-fire.avif",
    heroAlt:
      "Wildfire in Newfoundland and Labrador",
    description:
      "Labrador's vast boreal forests are experiencing increasingly severe wildfire seasons driven by climate change. Prodigy Wildfire Solutions delivers wildfire protection for remote communities, industrial operators, and infrastructure in the Labrador interior.",
    detail:
      "In 2024, roughly 72,000 hectares burned in Newfoundland and Labrador, more than three times the 30-year average of approximately 21,000 hectares, with virtually all area burned occurring in remote Labrador. Labrador City, Wabush, and Churchill Falls faced their largest-ever wildfire evacuation as fast-moving fires swept through the region. Scientists predict the province's area burned could increase two to three times further by end of century. Prodigy Wildfire Solutions' wildfire protection systems provide remotely activated defence for Labrador communities and coastal properties.",
    stats: [
      { value: "72,000", label: "Hectares Burned (2024)" },
      { value: "3x", label: "Above 30-Year Average (2024)" },
      { value: "21,000", label: "30-Year Avg. Hectares Burned/Year" },
      { value: "101", label: "Wildfires Recorded (2023)" },
    ],
    metaTitle:
      "Wildfire Protection in Newfoundland and Labrador | Prodigy Wildfire",
    metaDescription:
      "Prodigy Wildfire Solutions delivers wildfire sprinkler systems, ember detection, and remote activation for homes and communities across Newfoundland and Labrador. Protect your property from wildfire.",
    areaServedName: "Newfoundland and Labrador",
    areaServedType: "AdministrativeArea",
  },
  {
    slug: "nova-scotia",
    name: "Nova Scotia",
    country: "canada",
    heroImage: "/images/prodigy-nova-scotia-fire.avif",
    heroAlt:
      "Wildfire in Nova Scotia",
    description:
      "Nova Scotia's 2023 wildfire season was the most destructive in the province's recorded history. Prodigy Wildfire Solutions delivers wildfire sprinkler systems for homeowners in both rural and suburban communities near the wildland-urban interface.",
    detail:
      "In May 2023, two simultaneous wildfires transformed Nova Scotia's wildfire risk profile permanently. The Barrington Lake fire in Shelburne County burned 23,525 hectares, the largest in provincial history, destroying an estimated 60 homes and forcing 6,700 residents to evacuate. Simultaneously, the Upper Tantallon fire near Halifax destroyed 151 homes and forced the evacuation of 16,400 residents in one of the largest municipal emergency responses on record. Prodigy Wildfire Solutions' wildfire protection systems provide the permanent structural defence Nova Scotia homeowners need in the wake of these back-to-back suburban disasters.",
    stats: [
      { value: "23,525", label: "Hectares Burned (Barrington Lake 2023)" },
      { value: "151", label: "Homes Destroyed (Upper Tantallon 2023)" },
      { value: "16,400", label: "Residents Evacuated (Tantallon 2023)" },
      { value: "6,700", label: "Displaced (Shelburne County 2023)" },
    ],
    metaTitle:
      "Wildfire Protection in Nova Scotia | Prodigy Wildfire",
    metaDescription:
      "Prodigy Wildfire Solutions delivers wildfire sprinkler systems, ember detection, and remote activation for homes across Nova Scotia. Protect your property from wildfire after the province's most destructive fire season.",
    areaServedName: "Nova Scotia",
    areaServedType: "AdministrativeArea",
  },
  {
    slug: "new-brunswick",
    name: "New Brunswick",
    country: "canada",
    heroImage: "/images/Prodigy-NewBrunswick-Fire.jpg",
    heroAlt:
      "Wildfire in New Brunswick",
    description:
      "New Brunswick's wildfire risk is rising sharply as a warming climate dries out its predominantly softwood forests. Prodigy Wildfire Solutions delivers wildfire protection for rural homeowners and forest-adjacent communities across the Acadian forest.",
    detail:
      "While New Brunswick's annual area burned has historically been modest, the risk trajectory is accelerating. The 2023 season burned 860 hectares, more than double the recent average, with the Stein Lake fire forcing the evacuation of 300 homes in Charlotte County. By 2025, the season had already surpassed 2,506 hectares with over 300 fires recorded. Experts warn that 68% of the province's tree cover is softwood, the forest type most susceptible to fire, and climate models project a doubling of annual area burned by mid-century. Prodigy Wildfire Solutions' wildfire protection systems provide the proactive defence New Brunswick property owners need as risk escalates.",
    stats: [
      { value: "860 ha", label: "Hectares Burned (2023)" },
      { value: "300", label: "Homes Evacuated (Stein Lake 2023)" },
      { value: "68%", label: "Of NB Forests Are Fire-Prone Softwood" },
      { value: "2x", label: "Projected Increase in Area Burned by 2050" },
    ],
    metaTitle:
      "Wildfire Protection in New Brunswick | Prodigy Wildfire",
    metaDescription:
      "Prodigy Wildfire Solutions delivers wildfire sprinkler systems, ember detection, and remote activation for homes across New Brunswick. Protect your property as wildfire risk accelerates in the Acadian forest.",
    areaServedName: "New Brunswick",
    areaServedType: "AdministrativeArea",
  },
  {
    slug: "manitoba",
    name: "Manitoba",
    country: "canada",
    heroImage: "/images/Prodigy-manitoba-fire.jpg",
    heroAlt:
      "Wildfire in Manitoba",
    description:
      "Manitoba's northern boreal region faces severe and worsening wildfire conditions. Prodigy Wildfire Solutions delivers wildfire protection for remote First Nations, northern communities, and anyone living adjacent to the provincial boreal zone.",
    detail:
      "The 2024 season was Manitoba's most severe in living memory: 266,000 hectares burned in 291 fires, with Premier Wab Kinew declaring the province's largest evacuation as 17,000 residents received evacuation orders. A 37,000-hectare blaze near Cranberry Portage forced the entire community to flee, and Manitoba declared a Provincial State of Emergency. Statistics Canada analysis found that wildfire-affected zones accounted for approximately 2.4% of Manitoba's total provincial GDP, with some northern regions seeing up to 26% of their local economy at risk. Prodigy Wildfire Solutions' wildfire protection systems provide remotely activated defence for Manitoba's most vulnerable communities.",
    stats: [
      { value: "266,000", label: "Hectares Burned (2024)" },
      { value: "17,000", label: "Residents Evacuated (2024)" },
      { value: "291", label: "Wildfires Recorded (2024)" },
      { value: "26%", label: "Of Northern MB Economy at Risk" },
    ],
    metaTitle: "Wildfire Protection in Manitoba | Prodigy Wildfire",
    metaDescription:
      "Prodigy Wildfire Solutions delivers wildfire sprinkler systems, ember detection, and remote activation for homes and communities across Manitoba. Protect your property from wildfire in Manitoba's boreal region.",
    areaServedName: "Manitoba",
    areaServedType: "AdministrativeArea",
  },

  // ──────────────────────────────────────────────
  // USA (11)
  // ──────────────────────────────────────────────
  {
    slug: "california",
    name: "California",
    country: "usa",
    heroImage: "/images/usa-wildfire-home-under-threat.jpg",
    heroAlt: "American home under threat from approaching wildfire",
    description:
      "California faces the most severe wildfire threat in the nation. Prodigy Wildfire Solutions delivers exterior wildfire sprinkler systems, ember detection, and remote activation for homeowners and businesses across the wildland-urban interface.",
    detail:
      "California recorded over 1 million acres burned in 2024, and the 2025 fire season began catastrophically with the Palisades and Eaton fires destroying more than 18,000 structures across Los Angeles County and killing at least 31 people. The two fires generated an estimated $40 billion or more in insured losses, making January 2025 the single costliest wildfire event in U.S. history. With over 11 million Californians living in high wildfire-risk zones and insurers pulling back coverage across the state, Prodigy Wildfire Solutions' exterior wildfire sprinkler systems and ember detection technology are purpose-built for California's uniquely severe fire conditions.",
    stats: [
      { value: "18,000+", label: "Structures Destroyed (LA Fires Jan 2025)" },
      { value: "$40B+", label: "Estimated Insured Losses (Jan 2025)" },
      { value: "1M+", label: "Acres Burned (2024)" },
      { value: "31", label: "Lives Lost (LA Wildfires Jan 2025)" },
    ],
    metaTitle:
      "Wildfire Protection in California | Prodigy Wildfire",
    metaDescription:
      "Prodigy Wildfire Solutions delivers wildfire sprinkler systems, ember detection, and remote activation for homes and businesses across California. Protect your property from wildfire in the nation's highest-risk state.",
    areaServedName: "California",
    areaServedType: "State",
  },
  {
    slug: "oregon",
    name: "Oregon",
    country: "usa",
    heroImage: "/images/usa-wildfire-home-under-threat.jpg",
    heroAlt: "American home under threat from approaching wildfire",
    description:
      "Oregon shattered its wildfire record in 2024, burning nearly 2 million acres. Prodigy Wildfire Solutions delivers wildfire sprinkler systems and ember detection for residents of the Cascade foothills, high desert, and coastal ranges.",
    detail:
      "In 2024, Oregon experienced its worst wildfire season on record, with 1,956 fires burning 1,937,512 acres, surpassing the previous record set in 2020. Suppression costs reached an estimated $317 million, with the Oregon Department of Forestry spending more than triple its usual budget. Gilliam, Grant, Jefferson, Umatilla, Wasco, and Wheeler counties were hit hardest, with 42 homes and 132 other structures destroyed. Prodigy Wildfire Solutions' wildfire protection systems give Oregon homeowners the ability to defend structures remotely, even when evacuation orders force them to leave.",
    stats: [
      { value: "1.94M", label: "Acres Burned (2024 State Record)" },
      { value: "1,956", label: "Wildfires in Oregon (2024)" },
      { value: "42", label: "Homes Destroyed (2024)" },
      { value: "$317M", label: "Suppression Costs (2024)" },
    ],
    metaTitle: "Wildfire Protection in Oregon | Prodigy Wildfire",
    metaDescription:
      "Prodigy Wildfire Solutions delivers wildfire sprinkler systems, ember detection, and remote activation for homes across Oregon. Protect your property after Oregon's worst wildfire season on record.",
    areaServedName: "Oregon",
    areaServedType: "State",
  },
  {
    slug: "washington",
    name: "Washington",
    country: "usa",
    heroImage: "/images/usa-wildfire-home-under-threat.jpg",
    heroAlt: "American home under threat from approaching wildfire",
    description:
      "Wildfire protection in Washington state is critical across Eastern Washington, where dry conditions and summer winds drive fast-moving fires that can overtake communities within hours. Prodigy Wildfire Solutions delivers wildfire sprinkler systems for homes and businesses statewide.",
    detail:
      "Washington saw 1,800 fires burn approximately 308,000 acres in 2024. The state's most devastating recent event was the September 7, 2020 Labor Day fire storm, which incinerated 80% of the town of Malden and burned 175,000 acres across Eastern Washington in a single day, a one-day total greater than any of the prior 12 entire fire seasons. Eastern Washington's grassland and ponderosa pine landscapes are particularly vulnerable to extreme fire behaviour. Prodigy Wildfire Solutions' exterior protection systems and remote activation technology are designed for the fast-moving, wind-driven fire conditions that threaten Washington communities.",
    stats: [
      { value: "308,000", label: "Acres Burned (2024)" },
      { value: "1,800", label: "Fires Responded To (2024)" },
      { value: "175,000", label: "Acres Burned in One Day (Sept 2020)" },
      { value: "80%", label: "Of Malden, WA Destroyed (2020)" },
    ],
    metaTitle:
      "Wildfire Protection in Washington State | Prodigy Wildfire",
    metaDescription:
      "Prodigy Wildfire Solutions delivers wildfire sprinkler systems, ember detection, and remote activation for homes across Washington state. Protect your property from fast-moving grassland and forest fires.",
    areaServedName: "Washington",
    areaServedType: "State",
  },
  {
    slug: "idaho",
    name: "Idaho",
    country: "usa",
    heroImage: "/images/usa-wildfire-home-under-threat.jpg",
    heroAlt: "American home under threat from approaching wildfire",
    description:
      "Idaho saw nearly 1 million acres burn in 2024, among the highest totals in the state's recent history. Prodigy Wildfire Solutions delivers wildfire sprinkler systems for residents across the Boise foothills, Clearwater, and Sawtooth regions.",
    detail:
      "In 2024, Idaho recorded 1,450 wildfire incidents burning approximately 997,000 acres, the highest total since 2012, with the Paddock Fire alone scorching 187,000 acres across Gem, Payette, and Washington counties. The Wapiti Fire devastated another 129,000 acres across Boise and Custer counties, and more than 50 homes were lost across the state. The Idaho Department of Lands spent over $39 million on firefighting operations. Prodigy Wildfire Solutions' external wildfire sprinkler systems provide the first line of structural defence for homeowners in Idaho's rapidly growing wildland-urban interface communities.",
    stats: [
      { value: "997,000", label: "Acres Burned (2024)" },
      { value: "1,450", label: "Wildfire Incidents (2024)" },
      { value: "187,000", label: "Acres Burned by Paddock Fire (2024)" },
      { value: "$39M+", label: "Firefighting Expenditure (2024)" },
    ],
    metaTitle: "Wildfire Protection in Idaho | Prodigy Wildfire",
    metaDescription:
      "Prodigy Wildfire Solutions delivers wildfire sprinkler systems, ember detection, and remote activation for homes across Idaho. Protect your property in one of the West's fastest-growing wildfire-risk states.",
    areaServedName: "Idaho",
    areaServedType: "State",
  },
  {
    slug: "montana",
    name: "Montana",
    country: "usa",
    heroImage: "/images/usa-wildfire-home-under-threat.jpg",
    heroAlt: "American home under threat from approaching wildfire",
    description:
      "Montana recorded over 443,000 acres burned in 2024, with the Remington Fire alone accounting for nearly half the total. Prodigy Wildfire Solutions delivers wildfire protection for rural homesteads, timber communities, and mountain towns.",
    detail:
      "In 2024, Montana experienced 2,323 wildfire incidents burning over 443,000 acres, with the Remington Fire consuming roughly 200,000 acres by itself. Drought conditions persisted for the fifth consecutive year across much of the state, elevating fire danger throughout summer and into autumn. Montana's mix of dense lodgepole pine, grasslands, and mountain communities creates complex fire behaviour that can produce rapid rates of spread. Prodigy Wildfire Solutions' wildfire defence systems provide homeowners and ranchers in Montana with the remote activation and structural protection needed when fast-moving fires threaten remote properties.",
    stats: [
      { value: "443,000", label: "Acres Burned (2024)" },
      { value: "2,323", label: "Wildfire Incidents (2024)" },
      { value: "200,000", label: "Acres Burned by Remington Fire (2024)" },
      { value: "5th", label: "Consecutive Year of Drought" },
    ],
    metaTitle: "Wildfire Protection in Montana | Prodigy Wildfire",
    metaDescription:
      "Prodigy Wildfire Solutions delivers wildfire sprinkler systems, ember detection, and remote activation for homes and ranches across Montana. Protect your property from wildfire in Big Sky Country.",
    areaServedName: "Montana",
    areaServedType: "State",
  },
  {
    slug: "wyoming",
    name: "Wyoming",
    country: "usa",
    heroImage: "/images/usa-wildfire-home-under-threat.jpg",
    heroAlt: "American home under threat from approaching wildfire",
    description:
      "Wyoming's 2024 wildfire season was the second most destructive in state history. Prodigy Wildfire Solutions delivers wildfire protection for ranch lands, mountain communities, and homeowners along the Front Range.",
    detail:
      "Wyoming burned over 850,000 acres across 2,167 fires in 2024, ranking it the second-worst wildfire season in state history, surpassed only by the 1988 Yellowstone fires. Approximately 75% of the burned area impacted private and state lands rather than federal wilderness, putting ranches, rural homes, and communities directly in harm's way. The Elk Fire became the largest in the history of the Bighorn National Forest at over 98,000 acres, and nine counties were designated USDA disaster areas. Prodigy Wildfire Solutions' wildfire protection technology is built for the remote, wind-exposed terrain that characterises Wyoming's fire environment.",
    stats: [
      { value: "850,000+", label: "Acres Burned (2024)" },
      { value: "2,167", label: "Wildfire Incidents (2024)" },
      { value: "98,000+", label: "Acres Burned by Elk Fire (2024)" },
      { value: "9", label: "Counties Designated USDA Disaster Areas" },
    ],
    metaTitle: "Wildfire Protection in Wyoming | Prodigy Wildfire",
    metaDescription:
      "Prodigy Wildfire Solutions delivers wildfire sprinkler systems, ember detection, and remote activation for homes and ranches across Wyoming. Protect your property from wildfire in Wyoming's fire-prone landscape.",
    areaServedName: "Wyoming",
    areaServedType: "State",
  },
  {
    slug: "nevada",
    name: "Nevada",
    country: "usa",
    heroImage: "/images/usa-wildfire-home-under-threat.jpg",
    heroAlt: "American home under threat from approaching wildfire",
    description:
      "Nevada's rapidly growing Reno-Tahoe corridor sits in one of the most fire-prone landscapes in the West. Prodigy Wildfire Solutions delivers wildfire sprinkler systems for homeowners as population expansion into high-risk terrain accelerates.",
    detail:
      "In 2024, 858 wildfires burned over 103,595 acres across Nevada, with the Davis Fire near Reno forcing the evacuation of 20,000 residents and destroying 14 structures despite burning just 5,824 acres, a sign of how dangerous fire becomes in densely populated wildland-urban interface zones. Insurance carriers are increasingly withdrawing coverage from Nevada's high-risk zones, with wildfire-related non-renewals rising 82% in 2023 alone. Prodigy Wildfire Solutions' exterior wildfire sprinkler systems offer Nevada homeowners a proactive alternative to relying solely on an under-resourced insurance market.",
    stats: [
      { value: "103,595", label: "Acres Burned Statewide (2024)" },
      { value: "858", label: "Wildfire Incidents (2024)" },
      { value: "20,000", label: "Residents Evacuated (Davis Fire 2024)" },
      { value: "82%", label: "Surge in Insurance Non-Renewals (2023)" },
    ],
    metaTitle: "Wildfire Protection in Nevada | Prodigy Wildfire",
    metaDescription:
      "Prodigy Wildfire Solutions delivers wildfire sprinkler systems, ember detection, and remote activation for homes across Nevada. Protect your Reno-Tahoe property from wildfire as risk and insurance gaps grow.",
    areaServedName: "Nevada",
    areaServedType: "State",
  },
  {
    slug: "utah",
    name: "Utah",
    country: "usa",
    heroImage: "/images/usa-wildfire-home-under-threat.jpg",
    heroAlt: "American home under threat from approaching wildfire",
    description:
      "Utah's 2024 wildfire season was the state's most active in four years, with over 80,000 homes in the high-risk wildland-urban interface. Prodigy Wildfire Solutions delivers wildfire protection for communities across the Wasatch Front and southern Utah.",
    detail:
      "In 2024, Utah recorded 1,211 wildfire incidents burning 90,417 acres, with 93% of fires contained at 10 acres or less, but the remaining fires capable of growing to tens of thousands of acres in dry, wind-driven conditions. The Yellow Lake Fire became the largest fire of the 2024 season at 33,045 acres in Piute County. The Utah Division of Forestry has identified 80,000 homes within the state's wildland-urban interface, with approximately 60,000 structures flagged as high-risk. Prodigy Wildfire Solutions' wildfire protection systems give Utah homeowners a critical last line of structural defence.",
    stats: [
      { value: "90,417", label: "Acres Burned (2024)" },
      { value: "1,211", label: "Wildfire Incidents (2024)" },
      { value: "80,000", label: "Utah Homes in the WUI" },
      { value: "33,045", label: "Acres Burned by Yellow Lake Fire (2024)" },
    ],
    metaTitle: "Wildfire Protection in Utah | Prodigy Wildfire",
    metaDescription:
      "Prodigy Wildfire Solutions delivers wildfire sprinkler systems, ember detection, and remote activation for homes across Utah. Protect your Wasatch Front property from wildfire as the WUI expands.",
    areaServedName: "Utah",
    areaServedType: "State",
  },
  {
    slug: "arizona",
    name: "Arizona",
    country: "usa",
    heroImage: "/images/usa-wildfire-home-under-threat.jpg",
    heroAlt: "American home under threat from approaching wildfire",
    description:
      "Arizona recorded over 280,000 acres burned and more than 2,100 wildfire incidents in 2024. Prodigy Wildfire Solutions delivers wildfire sprinkler systems for communities from the Mogollon Rim to the Sonoran Desert grasslands.",
    detail:
      "In 2024, the Arizona Department of Forestry and Fire Management recorded 2,162 fires burning more than 280,000 acres across state, federal, and tribal lands, a 15% increase from 2023. More than 1,400 of those fires were human-caused, reflecting Arizona's elevated risk during hot, dry pre-monsoon conditions every spring and early summer. One fire in the San Carlos community alone destroyed 21 homes and 13 auxiliary structures. Arizona's ponderosa pine forests, chaparral, and dry desert grasslands are all capable of rapid fire spread, conditions that Prodigy Wildfire Solutions' exterior wildfire protection systems are engineered to withstand.",
    stats: [
      { value: "280,000+", label: "Acres Burned (2024)" },
      { value: "2,162", label: "Wildfire Incidents (2024)" },
      { value: "65%", label: "Of 2024 Fires Human-Caused" },
      { value: "15%", label: "Increase Over 2023 Fire Activity" },
    ],
    metaTitle: "Wildfire Protection in Arizona | Prodigy Wildfire",
    metaDescription:
      "Prodigy Wildfire Solutions delivers wildfire sprinkler systems, ember detection, and remote activation for homes across Arizona. Protect your property from wildfire in Arizona's year-round fire environment.",
    areaServedName: "Arizona",
    areaServedType: "State",
  },
  {
    slug: "colorado",
    name: "Colorado",
    country: "usa",
    heroImage: "/images/usa-wildfire-home-under-threat.jpg",
    heroAlt: "American home under threat from approaching wildfire",
    description:
      "Colorado is home to some of the most destructive wildfires in U.S. history. Prodigy Wildfire Solutions delivers wildfire sprinkler systems for homeowners along the Front Range, in mountain communities, and across the Eastern Plains.",
    detail:
      "Colorado's wildfire history is defined by large, fast, and devastating events. The 2020 Cameron Peak Fire burned 208,663 acres, the largest in state history, while the concurrent East Troublesome Fire destroyed over 300 homes. Just months later, the December 2021 Marshall Fire destroyed 1,084 homes in Boulder County in a matter of hours, causing over $2 billion in damage and becoming the most destructive wildfire in Colorado history. In 2024, the Alexander Mountain Fire near Loveland burned 9,500 acres and destroyed nearly 50 structures. Prodigy Wildfire Solutions' exterior sprinkler systems and ember protection technology provide critical structural defence for Colorado's wildland-urban interface.",
    stats: [
      { value: "208,663", label: "Acres Burned (Cameron Peak 2020)" },
      { value: "1,084", label: "Homes Destroyed (Marshall Fire 2021)" },
      { value: "$2B+", label: "Damage (Marshall Fire 2021)" },
      { value: "9,500", label: "Acres Burned (Alexander Mountain 2024)" },
    ],
    metaTitle: "Wildfire Protection in Colorado | Prodigy Wildfire",
    metaDescription:
      "Prodigy Wildfire Solutions delivers wildfire sprinkler systems, ember detection, and remote activation for homes across Colorado. Protect your Front Range property from wildfire after the state's most destructive fire events.",
    areaServedName: "Colorado",
    areaServedType: "State",
  },
  {
    slug: "hawaii",
    name: "Hawaii",
    country: "usa",
    heroImage: "/images/usa-wildfire-home-under-threat.jpg",
    heroAlt: "American home under threat from approaching wildfire",
    description:
      "Hawaii faces a devastating and growing wildfire threat driven by invasive grasses, drought, and powerful trade winds. Prodigy Wildfire Solutions delivers exterior wildfire sprinkler systems and ember detection for homeowners across the Hawaiian Islands.",
    detail:
      "The August 2023 Lahaina fire on Maui was the deadliest U.S. wildfire in over a century, killing 102 people, destroying more than 2,200 structures, and causing an estimated $5.5 billion in damage. The fire levelled nearly the entire historic town of Lahaina in a matter of hours, driven by hurricane-force winds from passing Hurricane Dora and fuelled by non-native grasslands that cover roughly 26% of Hawaii's land area. Hawaii burns an average of 20,000 acres per year, a rate that has accelerated as former agricultural land has been overtaken by fire-prone invasive grasses. Prodigy Wildfire Solutions' exterior wildfire sprinkler systems provide the structural defence Hawaii homeowners need in these uniquely dangerous fire conditions.",
    stats: [
      { value: "102", label: "Lives Lost (Lahaina Fire Aug 2023)" },
      { value: "2,200+", label: "Structures Destroyed (Lahaina 2023)" },
      { value: "$5.5B", label: "Estimated Damage (Lahaina 2023)" },
      { value: "20,000", label: "Avg. Acres Burned Per Year in Hawaii" },
    ],
    metaTitle: "Wildfire Protection in Hawaii | Prodigy Wildfire",
    metaDescription:
      "Prodigy Wildfire Solutions delivers wildfire sprinkler systems, ember detection, and remote activation for homes across Hawaii. Protect your property from wildfire after the devastating Lahaina fire.",
    areaServedName: "Hawaii",
    areaServedType: "State",
  },
  {
    slug: "texas",
    name: "Texas",
    country: "usa",
    heroImage: "/images/usa-wildfire-home-under-threat.jpg",
    heroAlt: "American home under threat from approaching wildfire",
    description:
      "Texas set a new record in 2024 when the Smokehouse Creek Fire burned over 1 million acres in the Panhandle. Prodigy Wildfire Solutions delivers wildfire protection for rural landowners, ranchers, and communities across the Panhandle, Hill Country, and Piney Woods.",
    detail:
      "The Smokehouse Creek Fire, ignited on February 26, 2024 in the Texas Panhandle, burned 1,058,482 acres across Texas and western Oklahoma, the largest wildfire in Texas history and the largest fire in the United States in 2024. The fire killed two people, destroyed over 500 structures, killed an estimated 15,000 cattle, and left 11,000 people without power. The disaster underscored how quickly wind-driven grassland fires in the Texas Panhandle can reach catastrophic scale. Prodigy Wildfire Solutions' wildfire protection systems are designed for the ranch and rural residential properties across Texas that face this type of extreme, fast-moving fire threat.",
    stats: [
      { value: "1,058,482", label: "Acres Burned (Smokehouse Creek 2024)" },
      { value: "500+", label: "Structures Destroyed (2024)" },
      { value: "15,000", label: "Cattle Killed (Panhandle 2024)" },
      { value: "2", label: "Lives Lost (Smokehouse Creek 2024)" },
    ],
    metaTitle: "Wildfire Protection in Texas | Prodigy Wildfire",
    metaDescription:
      "Prodigy Wildfire Solutions delivers wildfire sprinkler systems, ember detection, and remote activation for homes and ranches across Texas. Protect your property from the Panhandle's record-breaking wildfire threat.",
    areaServedName: "Texas",
    areaServedType: "State",
  },
];

export function getRegionBySlug(slug: string): RegionData | undefined {
  return regions.find((r) => r.slug === slug);
}

export function getRegionsByCountry(
  country: "canada" | "usa" | "australia"
): { name: string; slug: string }[] {
  return regions
    .filter((r) => r.country === country)
    .map((r) => ({ name: r.name, slug: r.slug }));
}
