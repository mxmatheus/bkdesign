# Animation Utilities and Constants

This directory contains animation variants and site configuration constants used throughout the portfolio.

## Files

### animations.js
Framer Motion animation variants for consistent animations across the portfolio.

**Exports:**
- `fadeUp` - Fade up animation for section content entering from below
- `scaleIn` - Scale in animation for cards and interactive elements
- `staggerContainer` - Container for sequential child animations
- `staggerItem` - Item animation used with staggerContainer
- `modalVariants` - Modal open/close animations
- `backdropVariants` - Backdrop fade animations
- `slideInLeft` - Slide in from left animation
- `slideInRight` - Slide in from right animation
- `fadeIn` - Simple fade in animation

**Usage Example:**
```jsx
import { fadeUp, staggerContainer } from '@/lib/animations';
import { motion } from 'framer-motion';

<motion.div
  initial="initial"
  animate="animate"
  variants={fadeUp}
>
  Content
</motion.div>
```

### constants.js
Centralized site configuration and content data.

**Exports:**
- `siteConfig` - Site metadata and social links
- `skills` - Array of skills with icons and categories
- `projects` - Array of project data with descriptions and links
- `navLinks` - Navigation menu items
- `heroButtons` - Hero section CTA buttons
- `aboutContent` - About section content
- `footerSocialLinks` - Footer social media links

**Usage Example:**
```jsx
import { skills, projects } from '@/lib/constants';

// Use in components
skills.map(skill => <SkillCard key={skill.name} {...skill} />)
```

## Requirements Satisfied

- ✅ **9.2** - Animation variants created with fadeUp, scaleIn, stagger, and modal animations
- ✅ **9.3** - Constants file created for site configuration, skills data, and projects data
