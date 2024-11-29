'use client';

import { motion } from 'framer-motion';
import { Cloud, Server, GitBranch, Terminal, Database, Shield } from 'lucide-react';

const icons = [
  { Icon: Cloud, color: 'text-blue-500' },
  { Icon: Server, color: 'text-green-500' },
  { Icon: GitBranch, color: 'text-purple-500' },
  { Icon: Terminal, color: 'text-yellow-500' },
  { Icon: Database, color: 'text-red-500' },
  { Icon: Shield, color: 'text-cyan-500' },
];

export function TechIcons() {
  return (
    <div className="flex justify-center gap-8 flex-wrap">
      {icons.map(({ Icon, color }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            type: 'spring',
            stiffness: 100,
          }}
          whileHover={{ scale: 1.2, rotate: 360 }}
          className={`${color} p-4 bg-background border rounded-xl shadow-lg`}
        >
          <Icon size={32} />
        </motion.div>
      ))}
    </div>
  );
}