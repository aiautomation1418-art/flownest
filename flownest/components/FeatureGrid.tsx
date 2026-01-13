import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const FeatureGrid: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">{t.features.title}</h2>
      </div>
    </section>
  );
};

export default FeatureGrid;