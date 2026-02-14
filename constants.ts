import { 
    Pickaxe, 
    Leaf, 
    Droplets, 
    Mail, 
    Phone, 
    MapPin, 
    Linkedin, 
    Twitter, 
    Facebook, 
    Instagram,
    ClipboardCheck,
    Construction,
    Map
  } from 'lucide-react';
  import { ServiceCategory, Project, NavItem } from './types';
  
  export const NAV_ITEMS: NavItem[] = [
    { label: 'Home', href: '/#home' },
    { label: 'Services', href: '/#services' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/portfolio' },
  ];
  
  export const SERVICE_CATEGORIES: ServiceCategory[] = [
    {
      id: 'geo-engineering-works',
      title: 'Geo-Engineering',
      description: 'We specialize in advanced geotechnical investigations and engineering designs that form the backbone of safe infrastructure. From slope stability assessments to complex foundation solutions, our team leverages data-driven analysis to mitigate risks in challenging terrains and ensure long-term structural integrity.',
      icon: Construction,
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop', 
      offerings: [
        {
          id: 'geotechnical-investigations',
          title: 'Geotechnical Investigations',
          shortDescription: 'Comprehensive site investigations, foundation designs, and slope stability assessments for safe infrastructure development.',
          imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop',
          fullDescription: [
            'We conduct site investigations, foundation engineering designs, slope stability assessments and interventions, retaining structures, ground improvements, and offer geotechnical laboratory services.',
            'We perform earthquake geotechnical engineering assessments and designs for critical structures or those located in seismic active regions to find design parameters, site response, liquefaction potential and show site micro-zonation.',
            'We undertake risk based geotechnical design to include uncertainty and complement the traditional designs.',
            '**Site Investigations & Foundation Engineering Design**',
            'EBG conducts geo-technical investigations with focus on understanding ground conditions to ensure safe, efficient, and sustainable infrastructure development. We employ techniques such as the Dynamic Cone Penetrometer (DCP) and Standard Penetration Test (SPT) to assess soil strength, bearing capacity, and subsurface variability. Using Soil Mechanics analysis we evaluate properties like shear strength, compressibility, and permeability.',
            'The results analyze information that support critical services including foundation design, slope stability assessment, and consultative infrastructure planning. As such, by integrating field testing, laboratory analysis, and engineering expertise, we equip our clients with informed decisions to minimize construction risks and optimize design solutions for buildings, bridges, dams, roads, and other civil works.',
            '**Foundation Mapping & Slope Stability Assessments**',
            'EBG employs latest technological discovery and local based strategies to investigate subsurface conditions to determine the suitability of ground for supporting structures. We integrate geological, geotechnical, and geophysical data to map the lithology, identify soil and rock properties, bearing capacity, depth to bedrock, fractures, cavities, and groundwater conditions.',
            'We combine the use of satellite data, and GIS data to develop sustainable solutions to reduce construction risks, guide foundation design, and prevent failures. We provide information for decision makers to ensure structures are safely adapted to ground conditions, especially in complex or variable geological environments.'
          ],
          features: [
            'DCP & SPT Testing',
            'Foundation Engineering Design',
            'Slope Stability Assessment',
            'Seismic Micro-zonation',
            'Risk-Based Geotechnical Design'
          ]
        },
        {
          id: 'grouting-works-supervision',
          title: 'Grouting Works Supervision',
          shortDescription: 'Overseeing controlled injection of grout to improve ground strength, reduce permeability, and stabilize foundations.',
          imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop',
          fullDescription: [
            'Part of our geotechnical investigation spills into grouting works. Proper supervision guarantees quality execution of grouting works for dams, tunnels, foundations, and ground improvement projects, ensuring long-term performance, safety, and structural integrity of engineered systems.',
            'As such, EBG has trained experts who will provide services to oversee the controlled injection of grout into soil or rock to improve ground strength, reduce permeability, and stabilize foundations.',
            'The EBG supervisor ensures correct grout mix design, pressure control, injection sequence, and compliance with technical specifications and safety standards.',
            'With continuous monitoring of flow rates, pressures, and ground response our experts will ensure that effective treatment without causing ground heave or structural damage is employed at the most critical time.'
          ],
          features: [
            'Quality Execution Guarantee',
            'Mix Design & Pressure Control',
            'Ground Improvement',
            'Structural Integrity Supervision'
          ]
        },
        {
          id: 'geo-hydrological-hazard-risk',
          title: 'Geo-Hydrological Hazard and Risk Assessment',
          shortDescription: 'Assessment of natural hazards including earthquakes, floods, mudslides, and erosion to determine vulnerability and mitigation strategies.',
          imageUrl: 'https://images.unsplash.com/photo-1469521669194-babb45f835d7?q=80&w=1200&auto=format&fit=crop',
          fullDescription: [
            '**Earthquake & Flood Risk Investigation**',
            'We have EBG experts to assess natural hazards to determine the vulnerability of an area to seismic activity and flooding. Using geological, hydrological, and geotechnical data, experts analyze soil composition, fault lines, groundwater levels, drainage patterns, and historical events to identify potential risks.',
            'Our investigations map active seismic zones, site response, liquefaction potential, and site micro-zonation. This helps us predict the severity and impact of earthquakes and floods, informing building design, land-use planning, and disaster preparedness strategies.',
            'Through combining field surveys, remote sensing, and modeling techniques, risk assessments provide actionable insights for policymakers, engineers, and communities, enhancing resilience, minimizing damage, and safeguarding lives and property in hazard-prone regions.',
            '**Mudslide & Erosion Risk Investigation**',
            'We provide expert services in assessing landscapes prone to soil movement, slope failure, and surface runoff to identify potential hazards. Using field surveys, geotechnical sampling, and geophysical techniques, EBG geo-engineers and geologists lead investigations to evaluate soil composition, slope stability, water infiltration, and vegetation cover.',
            'Our hydrological modeling and historical data are used to predict areas at high risk of mudslides or erosion during heavy rainfall or seismic activity in order to develop findings guide land-use planning, infrastructure development, and mitigation strategies such as retaining structures, drainage systems, and reforestation.',
            'This proactive approach helps our clients minimize property damage, protects communities, and supports sustainable land management in vulnerable regions.',
            '**Remediation Planning & Design**',
            'We have a team of experts that collaborate to develop strategies to restore contaminated or degraded environments to safe, sustainable conditions. We begin with a thorough assessment of pollution sources, contaminant types, and site conditions, often using soil, water, and air testing data.',
            'Based on collected insights, our geo-environmentalists, engineers and environmental scientists design targeted interventions such as soil excavation, bioremediation, chemical treatment, or groundwater cleanup to mitigate risks to human health and ecosystems.',
            'Our process balances technical feasibility, regulatory compliance, cost-effectiveness, and long-term sustainability. With effective remediation planning we will ensure that polluted sites are rehabilitated responsibly, supporting environmental recovery, community safety, and future land use potential.'
          ],
          features: [
            'Seismic & Flood Risk Analysis',
            'Liquefaction Potential Mapping',
            'Mudslide & Erosion Prediction',
            'Remediation Planning',
            'Coastal Dynamics'
          ]
        },
        {
          id: 'water-resources-engineering',
          title: 'Water Resources Engineering',
          shortDescription: 'Engineering solutions for sustainable water management, including environmental engineering and watershed management.',
          imageUrl: 'https://images.unsplash.com/photo-1581093588402-4857474d5fdb?q=80&w=1200&auto=format&fit=crop',
          fullDescription: [
            'Our Water Resources Engineering division focuses on the sustainable development and management of water systems to meet the needs of communities and industries while preserving ecological balance.',
            '**Water and Environmental Engineering**',
            'We apply engineering principles to improve the natural environment, specifically focusing on water systems. This includes the design of water supply networks, treatment facilities, and sustainable drainage systems. We ensure that water projects comply with environmental regulations and promote public health.',
            '**Watershed Management**',
            'We implement integrated strategies for managing watershed resources. By analyzing the flow of water, sediment, and nutrients, we develop plans to control runoff, prevent degradation, and enhance water quality. Our approach balances human water needs with the conservation of the watershed ecosystem.'
          ],
          features: [
            'Water & Environmental Engineering',
            'Watershed Management',
            'Sustainable Water Systems',
            'Environmental Integration'
          ]
        }
      ]
    },
    {
      id: 'geological-services',
      title: 'Geological',
      description: 'We deliver comprehensive geological intelligence to de-risk your projects. Through precise hydrogeology, lithological mapping, and geophysical surveys, we uncover the subsurface realities that drive informed decision-making. Our data-led approach supports sustainable resource management and infrastructure planning.',
      icon: Pickaxe,
      imageUrl: 'https://images.unsplash.com/photo-1461301214746-1e790926d323?q=80&w=1200&auto=format&fit=crop',
      offerings: [
        {
          id: 'hydrogeology-groundwater',
          title: 'Hydrogeology & Groundwater',
          shortDescription: 'Investigations and assessment for sustainable water resource management, borehole siting, and aquifer mapping.',
          imageUrl: 'https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?q=80&w=1200&auto=format&fit=crop',
          fullDescription: [
            'Our hydrogeological and ground water investigations and assessment facilitate developing informed decision making for sustainable water resource management, borehole siting, protection of recharge areas, and informed planning for water supply, environmental conservation, and climate resilience initiatives.',
            'We carry out aquifer mapping using the latest technology and strategies. We carry out expert-led supervision to oversee all stages of borehole development from geophysical investigations to drilling to ensure works are carried out safely, accurately, and in compliance with technical specifications and regulatory standards.',
            'We expertly develop and monitor new or old boreholes through test pumping to determine recharge capacity and pump testing to select appropriate pump capacity, and ensuring long-term groundwater resource sustainability.',
            '**Aquifer and Catchment Mapping**',
            'We take charge in aquifer and catchment mapping by identifying and characterizing groundwater-bearing formations and the surface areas that contribute recharge to them.',
            'We integrate hydrogeological surveys, geophysical investigations, remote sensing, and GIS analysis to define aquifer extent, depth, thickness, and hydraulic properties. We carry out catchment mapping by comprehensively assessing drainage patterns, land use, soil types, and recharge zones that influence groundwater availability and quality.',
            '**Borehole Siting**',
            'Using ABEM we carry out non-invasive subsurface exploration. We determine the in-situ conditions by measuring electrical resistivity variations. We interpret data and determine lithological stratification and aquifer locations.',
            'We provide drilling methodology guide and include an appropriately designed borehole with directives accompanied by drawings on casings placement, gravel placement including its quantity.',
            '**Drilling Supervision**',
            'We supervise drilling methods, borehole depth and diameter, borehole design, lithological logging, casing installation, gravel packing, and well development (test pumping & pump testing). We ensure continuous quality control to prevent borehole collapse, contamination, and improper construction.',
            '**Test Pumping & Pump Testing**',
            'We use hydrogeological methods used to evaluate the performance of wells and aquifers pumping water from a borehole at controlled rates. We monitor water level drawdown and recovery over time.',
            'We carry out pump testing to identify boundary conditions, recharge characteristics, and potential impacts on nearby wells. We use the results to design reliable water supply systems, adjust existing systems for efficient performance, select appropriate pump capacity, and ensure long-term groundwater resource sustainability.'
          ],
          features: [
            'Aquifer & Catchment Mapping',
            'Borehole Siting (ABEM Technology)',
            'Drilling Supervision',
            'Test Pumping & Pump Testing',
            'Sustainable Water Management'
          ]
        },
        {
          id: 'lithological-mapping',
          title: 'Lithological Mapping & Exploration',
          shortDescription: 'Rock classifications, borehole logging, seismic surveys, and electrical resistivity for foundation design.',
          imageUrl: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?q=80&w=1200&auto=format&fit=crop',
          fullDescription: [
            'We carry out lithological mapping including rock classifications, borehole logging, seismic surveys, and electrical resistivity.',
            'We generate geological maps, cross-sections, and vertical variations logs that show condition above and beneath a site.',
            'We combine satellite data, GIS data, and mapped data to develop recommended solutions that are essential to reduce construction risks, guides foundation design, and prevent failures.'
          ],
          features: [
            'Rock Classifications',
            'Borehole Logging',
            'Seismic Surveys',
            'Geological Maps & Cross-sections',
            'Construction Risk Reduction'
          ]
        },
        {
          id: 'applied-geophysics',
          title: 'Applied Geophysics',
          shortDescription: 'Subsurface condition determination using electrical resistivity variations for informed decision-making.',
          imageUrl: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1200&auto=format&fit=crop',
          fullDescription: [
            'We determine the in-situ conditions by measuring electrical resistivity variations and interpreting them in comparison to lithological stratification.',
            'We conduct shallow mapping, geotechnical studies, groundwater exploration (borehole drilling for water), environmental assessments, and mineral investigations.',
            'As such, we directly identify aquifers, bedrock depth, fractures, cavities, and soil layering to provide you with reliable, cost-effective data for informed decision-making for your development.'
          ],
          features: [
            'Electrical Resistivity Variations',
            'Shallow Mapping',
            'Groundwater Exploration',
            'Bedrock & Fracture Identification',
            'Mineral Investigations'
          ]
        }
      ]
    },
    {
      id: 'geomatics-survey',
      title: 'Geomatics & Survey',
      description: 'We deploy state-of-the-art surveying and geospatial technologies to provide high-precision mapping data. From aerial drone photogrammetry to cadastral boundary definitions, our solutions are essential for accurate land development, infrastructure planning, and rigorous environmental management.',
      icon: Map,
      imageUrl: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1200&auto=format&fit=crop',
      offerings: [
        {
          id: 'topographical-engineering-surveys',
          title: 'Topographical & Engineering Surveys',
          shortDescription: 'Precise mapping of terrain and surface features to support engineering design and construction projects.',
          imageUrl: 'https://images.unsplash.com/photo-1503756264783-0937a3c306d8?q=80&w=1200&auto=format&fit=crop',
          fullDescription: [
             '**Topographical Mapping**',
             'We provide comprehensive topographical surveys that accurately depict the physical features of a site, including relief, contours, natural terrain, and man-made structures. This data serves as the foundation for architects and engineers during the planning and design phases of infrastructure projects.',
             '**Engineering Surveying**',
             'Our engineering survey services cover the entire project lifecycle, from setting out reference points and levels for construction to monitoring structural deformations. We ensure that roads, bridges, pipelines, and buildings are constructed exactly according to design specifications.',
             '**As-Built & Volumetric Surveys**',
             'Upon project completion, we conduct as-built surveys to verify that the final construction aligns with the approved plans. We also perform precise volumetric calculations for earthworks and stockpiles.'
          ],
          features: [
            'Contour & Terrain Mapping',
            'Construction Set-Out',
            'Deformation Monitoring',
            'As-Built Verification',
            'Volume Calculations'
          ]
        },
        {
          id: 'gis-remote-sensing',
          title: 'GIS & Remote Sensing',
          shortDescription: 'Advanced spatial analysis, data visualization, and aerial mapping using drone technology.',
          imageUrl: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop',
          fullDescription: [
            '**Geographic Information Systems (GIS)**',
            'We leverage powerful GIS technology to capture, store, analyze, and visualize spatial data. Our solutions help clients make informed decisions regarding land use planning, environmental conservation, and urban development by revealing patterns and relationships in geographic data.',
            '**Drone Mapping (UAV) & Photogrammetry**',
            'Using state-of-the-art Unmanned Aerial Vehicles (UAVs), we provide high-resolution orthomosaics, 3D point clouds, and Digital Elevation Models (DEMs). Drone mapping offers a rapid, cost-effective, and safe alternative for surveying large or hard-to-reach areas.',
            '**Remote Sensing**',
            'We utilize satellite imagery and aerial photography to extract valuable information about the earth’s surface, ideal for large-scale environmental monitoring, vegetation analysis, and geological mapping.'
          ],
          features: [
            'Spatial Data Analysis',
            'Drone/UAV Mapping',
            'Digital Elevation Models (DEM)',
            'Land Use Classification',
            'Asset Management Systems'
          ]
        },
        {
            id: 'cadastral-boundary-surveys',
            title: 'Cadastral & Boundary Surveys',
            shortDescription: 'Legal boundary determination, subdivision planning, and title surveys for property administration.',
            imageUrl: 'https://images.unsplash.com/photo-1628122368945-88d4078864a7?q=80&w=1200&auto=format&fit=crop',
            fullDescription: [
                '**Boundary Establishment**',
                'We accurately define and mark land boundaries to resolve disputes and provide certainty for property owners. Whether establishing new boundaries or retracing old ones, our surveys comply with all local legal regulations and standards.',
                '**Subdivision Services**',
                'Our team assists developers and landowners in partitioning land into smaller parcels for sale or development. We prepare detailed subdivision plans that maximize land utility while adhering to zoning laws and planning requirements.',
                '**Title Surveys**',
                'We conduct precise surveys required for the issuance of land titles, ensuring that the legal description of the property matches the physical reality on the ground, securing property rights for our clients.'
            ],
            features: [
                'Boundary Demarcation',
                'Subdivision Design',
                'Title Surveying',
                'Land Dispute Resolution',
                'Easement Mapping'
            ]
        }
      ]
    },
    {
      id: 'environmental-feasibility-assessment',
      title: 'Environmental & Feasibility Assessment',
      description: 'We provide rigorous Environmental Impact Assessments (EIA) and feasibility studies that balance engineering goals with ecological preservation. Our insights help navigate regulatory landscapes and guide sustainable development for major infrastructure projects.',
      icon: Leaf,
      imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop',
      offerings: [
        {
          id: 'eia-assessment',
          title: 'EIA Assessment',
          shortDescription: 'Comprehensive Environmental Impact Assessments for sustainable project development.',
          imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop',
          fullDescription: [
            'We conduct Environmental Impact Assessments (EIA) to evaluate the potential environmental effects of proposed projects.',
            'Our assessments guide sustainable development by identifying risks and proposing effective mitigation strategies.'
          ],
          features: [
            'Impact Evaluation',
            'Mitigation Strategies',
            'Regulatory Compliance'
          ]
        },
        {
          id: 'feasibility-reserve',
          title: 'Feasibility & Reserve Estimations',
          shortDescription: 'Feasibility studies for infrastructure and resource quantity estimation for water and exploration.',
          imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
          fullDescription: [
            '**Feasibility Studies**',
            'We conduct feasibility studies for Aquifers, Water Catchments, Dam Siting, Construction Site, Road networks, and Bridge Location Siting.',
            '**Resource Reserve Estimation**',
            'We provide Water Resource Quantity Estimation and Exploration Resources Quantity Estimation.'
          ],
          features: [
            'Aquifer & Catchment Feasibility',
            'Infrastructure Siting Studies',
            'Water Resource Quantity Estimation',
            'Exploration Resources Quantity Estimation'
          ]
        }
      ]
    }
  ];
  
  export const PROJECTS: Project[] = [
    // Geo-Engineering Projects
    {
      id: 'project-geo-1',
      title: 'Mountain Pass Highway Stabilization',
      description: 'Slope stabilization and rockfall protection for a critical mountain highway.',
      category: 'Geo-Engineering',
      imageUrl: 'https://images.unsplash.com/photo-1508108712903-49b7ef9b1df8?q=80&w=1200&auto=format&fit=crop',
      location: 'Alpine Region, CO',
      date: '2022',
      client: 'State Dept of Transportation',
      challenge: 'Frequent rockfalls and soil slippage threatened a vital transportation artery connecting two major districts. The unstable geological conditions were exacerbated by seasonal freeze-thaw cycles.',
      solution: 'We implemented a multi-faceted approach including rock bolting, high-tensile wire mesh installation, and deep soil nailing. Drainage improvements were also constructed to manage pore water pressure.',
      result: 'The highway has operated accident-free for two years post-completion. Our interventions significantly reduced maintenance costs and ensured year-round safety for commuters.'
    },
    {
      id: 'project-geo-2',
      title: 'Coastal Erosion Mitigation',
      description: 'Comprehensive shoreline protection strategy for a vulnerable coastal community.',
      category: 'Geo-Engineering',
      imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
      location: 'Pacific Coast, USA',
      date: '2021',
      client: 'Coastal Municipal Council',
      challenge: 'Rising sea levels and aggressive tidal action were eroding the coastline at a rate of 2 meters per year, threatening residential properties and public infrastructure.',
      solution: 'Designed and supervised the construction of a riprap revetment system combined with beach nourishment. Native vegetation was planted to stabilize dunes and provide ecological value.',
      result: 'Erosion has been effectively halted. The solution preserved 3km of coastline and enhanced the local beach ecosystem, protecting over $50M in property assets.'
    },
    {
      id: 'project-geo-3',
      title: 'Deep Foundation High-Rise',
      description: 'Geotechnical investigation and pile foundation design for a 40-story commercial tower.',
      category: 'Geo-Engineering',
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop',
      location: 'Denver, CO',
      date: '2023',
      client: 'Skyline Developers Inc.',
      challenge: 'The site featured complex stratigraphy with loose sandy soils overlying irregular bedrock. High bearing loads required a foundation system that could mitigate differential settlement.',
      solution: 'Conducted extensive SPT and geophysical surveys to map bedrock depth. Designed a bored pile foundation system socketed into the bedrock, optimized for load distribution.',
      result: 'The foundation was completed ahead of schedule with zero settlement issues during the superstructure construction, ensuring the structural integrity of the landmark tower.'
    },
    {
      id: 'project-geo-4',
      title: 'Mining Site Rehabilitation',
      description: 'Environmental restoration of a former mining site for community use.',
      category: 'Geo-Engineering',
      imageUrl: 'https://images.unsplash.com/photo-1578256420811-d88f39045663?q=80&w=1200&auto=format&fit=crop',
      location: 'Nevada, USA',
      date: '2020',
      client: 'Green Earth Reclamation',
      challenge: 'An abandoned open-pit mine posed safety hazards and environmental contamination risks. The goal was to transform the scarred landscape into a safe public recreational park.',
      solution: 'Developed a grading plan to stabilize slopes and fill voids. Implemented a soil remediation program using bio-augmentation and installed a groundwater monitoring network.',
      result: 'The site successfully passed all environmental safety checks and was opened to the public as a nature reserve, restoring local biodiversity and community value.'
    },
    {
      id: 'project-geo-5',
      title: 'Seismic Micro-zonation Study',
      description: 'Detailed seismic hazard assessment for a new hospital complex in a fault zone.',
      category: 'Geo-Engineering',
      imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
      location: 'San Francisco Bay Area',
      date: '2023',
      client: 'Regional Health Authority',
      challenge: 'The proposed hospital site was located near active fault lines. Accurate ground motion prediction was critical for the structural design of the essential facility.',
      solution: 'Performed shear wave velocity measurements (Vs30) and site response analysis. Developed detailed micro-zonation maps indicating amplification factors and liquefaction potential.',
      result: 'The structural engineers used our site-specific response spectra to design a resilient base-isolation system, ensuring the hospital remains operational even after a major seismic event.'
    },
    
    // Geological Projects
    {
      id: 'project-geol-1',
      title: 'Urban Groundwater Mapping',
      description: 'Detailed aquifer characterization for sustainable urban water management.',
      category: 'Geological',
      imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop',
      location: 'Phoenix, AZ',
      date: '2022',
      client: 'City Water Department',
      challenge: 'Rapid urbanization led to over-extraction of groundwater, causing declining water tables and land subsidence. The city needed a clear understanding of aquifer recharge rates.',
      solution: 'Integrated historical well data with new hydrogeological surveys and isotopic analysis. Modeled the groundwater flow and identified critical recharge zones.',
      result: 'Provided a sustainable yield report that guided the city’s new water usage regulations, helping to stabilize the water table and prevent further subsidence.'
    },
    {
      id: 'project-geol-2',
      title: 'Regional Aquifer Recharge Study',
      description: 'Hydrogeological modeling to assess groundwater sustainability for agricultural use.',
      category: 'Geological',
      imageUrl: 'https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?q=80&w=1200&auto=format&fit=crop',
      location: 'Central Valley, CA',
      date: '2021',
      client: 'Agricultural Association',
      challenge: 'Farmers were facing water shortages due to prolonged drought. Determining the feasibility of managed aquifer recharge (MAR) was essential for long-term crop survival.',
      solution: 'Conducted field infiltration tests and lithological mapping to identify suitable sites for flood-MAR. Developed a numerical model to simulate recharge scenarios.',
      result: 'Identified three optimal recharge basins that are now used during wet seasons to replenish the aquifer, improving water security for over 500 farms.'
    },
    {
      id: 'project-geol-3',
      title: 'Subsurface Mineral Mapping',
      description: 'Geophysical survey to identify mineral deposits for a mining expansion project.',
      category: 'Geological',
      imageUrl: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1200&auto=format&fit=crop',
      location: 'Western Australia',
      date: '2023',
      client: 'Global Resources Corp',
      challenge: 'The client needed to delineate the extent of a copper-gold deposit beneath deep sedimentary cover without excessive exploratory drilling.',
      solution: 'Deployed induced polarization (IP) and magnetic surveys. Inverted the geophysical data to create a 3D model of the subsurface mineralization.',
      result: 'Pinpointed high-grade targets with precision, reducing the drilling budget by 40% and accelerating the mine planning phase.'
    },
    {
      id: 'project-geol-4',
      title: 'Lithological Core Logging',
      description: 'Precise rock classification and logging for a major tunnel infrastructure project.',
      category: 'Geological',
      imageUrl: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?q=80&w=1200&auto=format&fit=crop',
      location: 'Swiss Alps',
      date: '2020',
      client: 'Alpine Tunnel Consortium',
      challenge: 'Tunnelling through heterogeneous rock formations required accurate geological data to predict TBM performance and support requirements.',
      solution: 'Provided a team of expert geologists for 24/7 core logging and face mapping. Analyzed rock mass rating (RMR) and Q-system parameters in real-time.',
      result: 'Enabled the construction team to adapt support measures proactively, avoiding major collapses and keeping the project on a strict timeline.'
    },

    // Geomatics & Survey Projects
    {
        id: 'project-survey-1',
        title: 'High-Speed Rail Topography',
        description: 'LiDAR and aerial photogrammetry survey for 200km railway corridor planning.',
        category: 'Geomatics & Survey',
        imageUrl: 'https://images.unsplash.com/photo-1486704155675-e4c07f8ad160?q=80&w=1200&auto=format&fit=crop',
        location: 'Texas, USA',
        date: '2022',
        client: 'Federal Rail Authority',
        challenge: 'Planning a new high-speed rail corridor required highly accurate topographic data over a vast 200km stretch with varying terrain and vegetation cover.',
        solution: 'Utilized airborne LiDAR combined with high-resolution aerial photography. Established a robust geodetic control network for data calibration.',
        result: 'Delivered a centimeter-accuracy Digital Terrain Model (DTM) that served as the backbone for the engineering design, significantly reducing earthwork estimation errors.'
    },
    {
        id: 'project-survey-2',
        title: 'City Cadastral Modernization',
        description: 'Digitalization and boundary verification for municipal land records system.',
        category: 'Geomatics & Survey',
        imageUrl: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1200&auto=format&fit=crop',
        location: 'Metropolis City',
        date: '2021',
        client: 'City Planning Department',
        challenge: 'The city’s land records were outdated and paper-based, leading to frequent boundary disputes and inefficient property tax collection.',
        solution: 'Conducted a city-wide GPS survey to verify property boundaries. integrated the data into a modern GIS-based land administration system.',
        result: 'Modernized the cadastre for over 50,000 parcels, streamlining property transactions and increasing municipal revenue transparency.'
    },
    {
        id: 'project-survey-3',
        title: 'Drone Pipeline Inspection',
        description: 'Aerial photogrammetry and thermal imaging for a 500km oil pipeline corridor.',
        category: 'Geomatics & Survey',
        imageUrl: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop',
        location: 'Alaska, USA',
        date: '2023',
        client: 'Energy Transporters Ltd.',
        challenge: 'Regular inspection of a remote pipeline was costly and hazardous using traditional ground crews or manned helicopters.',
        solution: 'Deployed long-range VTOL drones equipped with thermal and RGB cameras to inspect the corridor for leaks, encroachment, and structural defects.',
        result: 'Identified three critical thermal anomalies indicating minor leaks, allowing for immediate repair and preventing major environmental damage.'
    },
    {
        id: 'project-survey-4',
        title: 'Quarry Volumetric Analysis',
        description: 'Periodic drone surveys to calculate extraction volumes for stockpile management.',
        category: 'Geomatics & Survey',
        imageUrl: 'https://images.unsplash.com/photo-1503756264783-0937a3c306d8?q=80&w=1200&auto=format&fit=crop',
        location: 'Boulder, CO',
        date: '2023',
        client: 'Rock Aggregate Co.',
        challenge: 'Accurate inventory of aggregate stockpiles was difficult and dangerous to measure manually, leading to discrepancies in production reporting.',
        solution: 'Implemented monthly drone surveys to capture 3D point clouds of the quarry. Used photogrammetry software to compute precise volumes.',
        result: 'Improved inventory accuracy by 98% and eliminated safety risks associated with surveyors climbing onto unstable stockpiles.'
    },

    // Environmental & Feasibility Projects
    {
        id: 'project-env-1',
        title: 'Wind Farm Environmental Impact',
        description: 'Bird migration and noise impact studies for a proposed offshore wind energy project.',
        category: 'Environmental & Feasibility Assessment',
        imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop',
        location: 'North Sea',
        date: '2021',
        client: 'Renewable Energy Partners',
        challenge: 'The proposed wind farm location overlapped with potential migratory bird routes. Regulatory approval hinged on ensuring minimal ecological disruption.',
        solution: 'Conducted radar surveys and acoustic monitoring to map bird flight paths. Modeled underwater noise propagation during construction.',
        result: 'The EIA report led to an optimized turbine layout that minimized impact. The project received full environmental clearance and is now under construction.'
    },
    {
        id: 'project-env-2',
        title: 'Dam Construction Feasibility',
        description: 'Geological and hydrological feasibility analysis for a hydroelectric dam.',
        category: 'Environmental & Feasibility Assessment',
        imageUrl: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1200&auto=format&fit=crop',
        location: 'British Columbia, Canada',
        date: '2019',
        client: 'Provincial Energy Utility',
        challenge: 'Determining the technical and economic viability of a new dam in a remote, geologically complex canyon.',
        solution: 'Performed drilling programs to assess abutment stability. Analyzed river flow data to estimate power generation potential and reservoir capacity.',
        result: 'Concluded that the site was viable but required specific foundation treatment. The feasibility study served as the basis for the project’s $2B funding approval.'
    },
    {
        id: 'project-env-3',
        title: 'Solar Plant EIA',
        description: 'Comprehensive environmental impact assessment for a 50MW solar photovoltaic park.',
        category: 'Environmental & Feasibility Assessment',
        imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop',
        location: 'Mojave Desert, USA',
        date: '2022',
        client: 'Solar Gen Inc.',
        challenge: 'Developing a large solar park in a desert ecosystem required careful consideration of protected species like the desert tortoise.',
        solution: 'Carried out extensive biological surveys. Designed a habitat conservation plan that included translocation protocols and wildlife corridors.',
        result: 'Successfully balanced renewable energy goals with conservation. The project was built with zero net loss of habitat for threatened species.'
    },
    {
        id: 'project-env-4',
        title: 'Wetland Restoration Study',
        description: 'Feasibility study and ecological impact assessment for a wetland restoration initiative.',
        category: 'Environmental & Feasibility Assessment',
        imageUrl: 'https://images.unsplash.com/photo-1581093588402-4857474d5fdb?q=80&w=1200&auto=format&fit=crop',
        location: 'Florida Everglades',
        date: '2023',
        client: 'Nature Conservancy',
        challenge: 'A degraded wetland area was suffering from altered hydrology and invasive species, losing its function as a natural water filter.',
        solution: ' modeled hydraulic flows to design water control structures that would mimic natural hydro-periods. Proposed a vegetation management plan.',
        result: 'The restoration plan was adopted and funded. Early monitoring shows a 40% increase in native bird populations and improved water quality.'
    }
  ];
  
  export const SOCIAL_LINKS = [
      { id: 'linkedin', icon: Linkedin, href: '#' },
      { id: 'twitter', icon: Twitter, href: '#' },
      { id: 'facebook', icon: Facebook, href: '#' },
      { id: 'instagram', icon: Instagram, href: '#' },
  ];
  
  export const CONTACT_INFO = [
      {
          id: 'office',
          icon: MapPin,
          title: 'Our Office',
          lines: ['1234 Geology Way, Suite 500', 'Boulder, CO 80301']
      },
      {
          id: 'email',
          icon: Mail,
          title: 'Email Us',
          lines: ['info@geotechengineering.com', 'projects@geotechengineering.com']
      },
      {
          id: 'phone',
          icon: Phone,
          title: 'Call Us',
          lines: ['(303) 555-7890', 'Toll-free: (800) 555-4321']
      }
  ];