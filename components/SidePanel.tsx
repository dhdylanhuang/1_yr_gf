// Animated side panel that presents the active memory details.
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import type { Memory } from '../app/memories/data';
import { formatMonthYear, formatMemoryDate } from '../lib/format';

type SidePanelProps = {
  memory: Memory;
  index: number;
  total: number;
};

export function SidePanel({ memory, index, total }: SidePanelProps) {
  return (
    <aside className="w-full lg:w-2/5 lg:sticky lg:top-0 min-h-[calc(90vh-4rem)] lg:h-[calc(90vh-4rem)] flex items-stretch">
      <div className="w-full bg-parchment/80 backdrop-blur-sm border border-charcoal/10 shadow-soft p-6 lg:p-10 overflow-y-auto">
        <div className="text-xs uppercase tracking-[0.2em] text-charcoal/60 mb-4">
          #{index + 1} of {total}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="space-y-5"
          >
            <div>
              <div className="text-3xl font-display text-charcoal">
                {formatMonthYear(memory.takenAtISO)}
              </div>
              <div className="text-lg text-charcoal/80">{memory.place}</div>
              <div className="text-sm text-charcoal/60 mt-1">
                {formatMemoryDate(memory.takenAtISO)}
              </div>
            </div>
            {memory.mapSrc ? (
              <div className="w-128 h-40 rounded-lg overflow-hidden border border-charcoal/15">
                <img
                  src={memory.mapSrc}
                  alt={`${memory.place} map`}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : null}
            <p className="whitespace-pre-line text-base leading-relaxed text-charcoal/90">
              {memory.caption}
            </p>
            {memory.songSrc ? (
              <div className="w-128 h-40 rounded-lg overflow-hidden border border-charcoal/15">
                <img
                  src={memory.songSrc}
                  alt={`${memory.place} song artwork`}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : null}
          </motion.div>
        </AnimatePresence>
      </div>
    </aside>
  );
}
