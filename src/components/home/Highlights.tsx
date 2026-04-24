import { motion } from 'framer-motion';
import { site } from '../../data/site';

const density = ['p-6', 'p-7', 'p-6', 'p-7'] as const;

export function Highlights() {
  return (
    <section className="section-padding pt-2 md:pt-4">
      <div className="container-tight">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {site.highlights.slice(0, 4).map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className={`rounded-2xl border border-border/35 bg-panel/28 ${density[index]} backdrop-blur-sm`}
            >
              <h3 className="text-base font-semibold leading-snug">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
