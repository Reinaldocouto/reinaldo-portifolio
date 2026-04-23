import { motion } from 'framer-motion';
import { site } from '../../data/site';

export function Highlights() {
  return (
    <section className="section-padding pt-2">
      <div className="container-tight">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {site.highlights.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="glass-card p-5"
            >
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
