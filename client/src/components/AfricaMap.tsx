import { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { motion } from 'framer-motion';

const geoUrl = '/africa.geojson';

export default function AfricaMap() {
  const [tooltipContent, setTooltipContent] = useState('');

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-card/50 rounded-xl overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] border border-border group">
      
      {/* Tooltip Overlay */}
      {tooltipContent && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-6 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-6 py-2 rounded-full font-bold shadow-xl shadow-accent/20 z-10 transition-colors pointer-events-none"
        >
          {tooltipContent}
        </motion.div>
      )}

      <ComposableMap
        projectionConfig={{
          scale: 350,
          center: [15, 0] // Centered perfectly on Africa
        }}
        className="w-full h-full object-contain"
        viewBox="0 0 800 600"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const { name } = geo.properties;
              
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => setTooltipContent(name)}
                  onMouseLeave={() => setTooltipContent('')}
                  style={{
                    default: {
                      fill: "rgba(255, 255, 255, 0.03)",
                      stroke: "rgba(255, 255, 255, 0.15)",
                      strokeWidth: 0.75,
                      outline: "none",
                      transition: "all 250ms ease",
                    },
                    hover: {
                      fill: "currentColor",
                      color: "hsl(var(--accent))",
                      stroke: "hsl(var(--accent))",
                      strokeWidth: 1.5,
                      outline: "none",
                      filter: "drop-shadow(0px 0px 8px hsl(var(--accent))) drop-shadow(0px 0px 4px rgba(255,255,255,0.8))",
                      cursor: "pointer",
                      transition: "all 250ms ease",
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
