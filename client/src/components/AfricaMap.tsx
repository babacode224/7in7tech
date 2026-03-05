import { useState, useEffect, useRef } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Users2, Cpu, Info } from 'lucide-react';

const geoUrl = '/africa.geojson';

const africanCountriesData: Record<string, { population: string; info: string; techStatus: string; topCompanies: string[] }> = {
  "Nigeria": { population: "218 Million", info: "The most populous country in Africa, known as the Giant of Africa.", techStatus: "Leading tech hub in West Africa, massive fintech boom.", topCompanies: ["Flutterwave", "Paystack", "Andela"] },
  "South Africa": { population: "60 Million", info: "Southernmost country in Africa, renowned for its varied topography.", techStatus: "Mature tech ecosystem with strong enterprise and fintech sectors.", topCompanies: ["Naspers", "Takealot", "JUMO"] },
  "Kenya": { population: "54 Million", info: "East African nation known for its wildlife and the Great Rift Valley.", techStatus: "The 'Silicon Savannah', pioneers in mobile money.", topCompanies: ["Safaricom", "M-Kopa", "Twiga Foods"] },
  "Egypt": { population: "109 Million", info: "Linking northeast Africa with the Middle East.", techStatus: "Rapidly growing startup ecosystem and tech talent pool.", topCompanies: ["Swvl", "Fawry", "Instabug"] },
  "Ghana": { population: "32 Million", info: "Nation on West Africa's Gulf of Guinea known for diverse wildlife.", techStatus: "Emerging tech hub with strong government support.", topCompanies: ["Chipper Cash", "mPharma", "Hubtel"] },
  "Morocco": { population: "37 Million", info: "North African country distinguished by cultural influences.", techStatus: "Growing ecosystem, focus on renewable tech and outsourcing.", topCompanies: ["WaystoCap", "Chari", "Atlan Space"] },
  "Senegal": { population: "17 Million", info: "Country in West Africa, known for its French colonial heritage.", techStatus: "Francophone Africa's rising tech star.", topCompanies: ["Wave", "PayDunya", "Intouch"] },
  "Rwanda": { population: "13 Million", info: "Landlocked East African country, rapidly developing.", techStatus: "Aiming to be the tech capital of East Africa.", topCompanies: ["Zipline", "Irembo", "Awesomity Lab"] }
};

const getCountryData = (name: string) => {
  if (africanCountriesData[name]) return africanCountriesData[name];
  return {
    population: "~10-40 Million",
    info: `${name} is a vibrant and culturally rich nation in Africa with growing potential.`,
    techStatus: "Emerging tech ecosystem with increasing digital adoption.",
    topCompanies: ["Local Tech Innovators", "Digital Solutions Ltd", "Pan-African Tech Co"]
  };
};

const getCountryColor = (name: string) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash % 360);
  return `hsl(${hue}, 70%, 50%)`;
};

export default function AfricaMap() {
  const [tooltipContent, setTooltipContent] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close the card if clicking outside of it 
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        // Only close if it's not a click on the map paths (SVG paths)
        // because clicking a path should open/change it, not just dismiss it and stop there
        if (!(event.target instanceof SVGPathElement)) {
          setSelectedCountry(null);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center bg-card/50 rounded-xl overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] border border-border group py-8">
      
      {/* Tooltip Overlay */}
      {tooltipContent && !selectedCountry && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-6 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-6 py-2 rounded-full font-bold shadow-xl shadow-accent/20 z-10 transition-colors pointer-events-none"
        >
          {tooltipContent}
        </motion.div>
      )}

      {/* Floating Detail Card */}
      <AnimatePresence>
        {selectedCountry && (
          <motion.div
            ref={popupRef}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-background/95 border border-border/50 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  {selectedCountry}
                </h3>
                <button 
                  onClick={() => setSelectedCountry(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors p-1"
                >
                  ✕
                </button>
              </div>
              
              {(() => {
                const data = getCountryData(selectedCountry);
                return (
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Users2 className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Population</p>
                        <p className="text-sm font-semibold">{data.population}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <Info className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">About</p>
                        <p className="text-sm leading-relaxed">{data.info}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
                        <Cpu className="w-4 h-4 text-purple-500" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Tech Status</p>
                        <p className="text-sm leading-relaxed">{data.techStatus}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                        <Building2 className="w-4 h-4 text-green-500" />
                      </div>
                      <div className="w-full">
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-2">Top 3 Tech Companies</p>
                        <div className="flex flex-wrap gap-2">
                          {data.topCompanies.map((company, idx) => (
                            <span key={idx} className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">
                              {company}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ComposableMap
        projectionConfig={{
          scale: 400,
          center: [15, 0] // Centered perfectly on Africa
        }}
        className={`w-full h-full object-contain transition-all duration-500 ${selectedCountry ? 'opacity-30 blur-[2px] scale-95' : 'opacity-100 scale-100'}`}
        viewBox="0 0 800 600"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const { name } = geo.properties;
              const defaultColor = getCountryColor(name);
              const isSelected = selectedCountry === name;
              
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => setTooltipContent(name)}
                  onMouseLeave={() => setTooltipContent('')}
                  onClick={() => setSelectedCountry(name)}
                  style={{
                    default: {
                      fill: defaultColor,
                      stroke: "rgba(255, 255, 255, 0.4)",
                      strokeWidth: 0.75,
                      outline: "none",
                      transition: "all 250ms ease",
                    },
                    hover: {
                      fill: "hsl(var(--accent))",
                      stroke: "white",
                      strokeWidth: 1.5,
                      outline: "none",
                      filter: "drop-shadow(0px 0px 8px hsl(var(--accent)))",
                      cursor: "pointer",
                      transition: "all 250ms ease",
                      zIndex: 10
                    },
                    pressed: {
                      fill: "hsl(var(--accent))",
                      outline: "none",
                    }
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
