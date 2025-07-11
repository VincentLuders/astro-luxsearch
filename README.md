# Luxsearch Website - Astro Architecture Guide

> 🚀 Modern component-based Luxsearch website built with Astro, deployed on luxsearch.eu

## 🎯 **CORE ARCHITECTURE PRINCIPLE**

### **"One Change Propagates Everywhere" - CSS Property-Level Reuse**

This codebase follows a **unified CSS system** where shared behaviors (hover states, transitions, glass effects, etc.) are centralized and referenced across all components. This means:

✅ **Change transition speed once** → affects all elements automatically  
✅ **Modify glass hover effect once** → updates cards, header, buttons, footer  
✅ **Adjust shadow system once** → cascades to entire site  
✅ **Zero duplicate code** → maintainable and consistent  

**Example:**
```css
/* GOOD: Unified system */
.glass-hover-effect,
.card:hover,
.header:hover,
.btn-glass:hover,
.footer:hover {
    backdrop-filter: blur(20px) saturate(1.3);
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    /* Shared properties here */
}

/* AVOID: Duplicate properties */
.card:hover { backdrop-filter: blur(20px); transition: 0.2s; }
.header:hover { backdrop-filter: blur(20px); transition: 0.2s; }
.footer:hover { backdrop-filter: blur(20px); transition: 0.2s; }
```

This principle applies to:
- **Hover states** (glass effects, shadows, transforms)
- **Transitions** (timing, easing functions)  
- **Glass effects** (backdrop-filter, saturate values)
- **Shadow systems** (consistent depth and lighting)
- **Animation timings** (unified cubic-bezier curves)

---

## 🏗️ Architecture Overview

This project uses a **component-based architecture** with reusable components, consistent design patterns, and clear separation of concerns.

### 📁 File Structure & Purpose

```
src/
├── components/              # Reusable UI components
│   ├── Layout.astro        # Main page wrapper (header + content + footer)
│   ├── Header.astro        # Navigation with smart current page highlighting
│   └── GradientBackground.astro  # Animated background blobs
├── pages/                  # Route-based pages (file = URL)
│   ├── index.astro         # Homepage (/)
│   ├── hire-talent.astro   # Hire talent page (/hire-talent)
│   └── opportunities.astro # Jobs page (/opportunities)
public/
├── assets/                 # Static images & logos
└── styles/
    └── design-system.css   # Master CSS file with all design tokens
```

## 🎨 Design System & Principles

### Core Design Language
- **Aesthetic**: Luxurious, professional, modern
- **Colors**: Deep purples, elegant gradients, high contrast text
- **Typography**: Clean, readable, hierarchical
- **Layout**: Card-based, grid system, generous whitespace
- **Animation**: Subtle morphing gradients, smooth transitions

### Design Tokens (in `public/styles/design-system.css`)
```css
/* Extract these patterns when creating new components */
.card              /* Standard content container */
.card-tall         /* Tall card for more content */
.card-medium       /* Medium card for job listings */
.btn               /* Primary button style */
.btn-flex          /* Flexible button in button groups */
.title             /* Section headings */
.body-text         /* Standard paragraph text */
.tag               /* Skill/technology tags */
.grid-2            /* Two-column responsive grid */
```

## 🧩 Component Architecture

### Layout.astro - Master Template
```astro
---
// Props interface defines what each page can customize
export interface Props {
    title: string;                    // Page title for <title> tag
    currentPage?: 'opportunities' | 'hire-talent';  // For nav highlighting
}
---
```

**Usage Pattern:**
```astro
<Layout title="Page Name" currentPage="opportunities">
    <!-- Page-specific content goes here -->
</Layout>
```

### Header.astro - Smart Navigation
- **Auto-highlighting**: Current page gets `.current` class
- **Responsive navigation** with logo and tagline
- **Consistent across all pages**

### GradientBackground.astro - Animated Background
- **12 morphing gradient blobs** for visual interest
- **Pure CSS animations** (no JavaScript)
- **Consistent across all pages**

## 📄 Page Patterns

### Standard Page Structure
```astro
---
import Layout from '../components/Layout.astro';
---

<Layout title="Page Title" currentPage="pagename">
    <div class="container grid-2">        <!-- or appropriate layout -->
        <div class="card card-tall">      <!-- content cards -->
            <h3 class="title">Section</h3>
            <div class="body-text">Content</div>
        </div>
    </div>
</Layout>
```

### Content Patterns
- **Cards**: Primary content containers (`.card`, `.card-tall`, `.card-medium`)
- **Grids**: Responsive layouts (`.grid-2` for two columns)
- **Typography**: `.title` for headings, `.body-text` for paragraphs
- **Buttons**: `.btn` with variants (`.btn-flex`, `.btn-full`)
- **Tags**: `.tag` for skills/technologies
- **Lists**: `.list-numbered`, `.list-bulleted`

## 🎯 Creating New Content

### Adding a New Page
1. **Create**: `src/pages/new-page.astro`
2. **Follow pattern**:
```astro
---
import Layout from '../components/Layout.astro';
---

<Layout title="New Page" currentPage="new-page">
    <!-- Use existing CSS classes for consistency -->
</Layout>
```
3. **Add to Header.astro**: Add navigation link with proper currentPage logic

### Adding New Components
1. **Create**: `src/components/NewComponent.astro`
2. **Follow existing patterns**: Props interface, consistent styling
3. **Import**: Add to Layout.astro or specific pages as needed

### Design Consistency Rules
- **Always use existing CSS classes** from `design-system.css`
- **Follow card-based layouts** for content organization
- **Maintain color scheme** (purples, gradients, high contrast)
- **Use established typography hierarchy** (`.title`, `.body-text`)
- **Keep responsive grid patterns** (`.grid-2`, `.container`)

## 🔧 Development Workflow

### Local Development
```bash
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Build for production
npm run preview      # Preview production build
```

### Deployment
- **Auto-deploy**: Push to GitHub → Live on luxsearch.eu
- **Manual deploy**: `netlify deploy --prod`
- **Preview**: Every push creates deploy preview

### Git Workflow
```bash
git add .
git commit -m "feat: add new feature following design system"
git push             # Auto-deploys to luxsearch.eu
```

## 🎨 Design System Reference

### CSS Classes Quick Reference
| Class | Purpose | Usage |
|-------|---------|--------|
| `.card` | Content container | Main content blocks |
| `.card-tall` | Extended content | Long form content |
| `.card-medium` | Job listings | Opportunities page |
| `.title` | Section headings | H2, H3 elements |
| `.body-text` | Paragraph text | Standard content |
| `.btn` | Primary button | Call-to-action buttons |
| `.tag` | Technology tags | Skills, categories |
| `.grid-2` | Two-column layout | Responsive containers |
| `.container` | Page wrapper | Content max-width |

### Color & Visual Patterns
- **Background**: Morphing purple gradients
- **Cards**: Semi-transparent with subtle borders
- **Text**: High contrast (white on dark cards)
- **Buttons**: Gradient backgrounds with hover effects
- **Navigation**: Smart highlighting with `.current` class

## 🚀 Extending the System

### When Creating New Features:
1. **Study existing patterns** in current pages
2. **Reuse CSS classes** from design-system.css
3. **Follow component architecture** (Layout → specific content)
4. **Maintain visual consistency** (cards, grids, typography)
5. **Update this README** if adding new patterns

### Before Making Changes:
- ✅ Check if existing CSS classes can be used
- ✅ Follow established component patterns
- ✅ Test responsive behavior
- ✅ Ensure consistent visual hierarchy
- ✅ Update documentation if needed

---

## 🎯 **CRITICAL: CSS PROPERTY-LEVEL REUSE ENFORCEMENT**

### **The "One Change Propagates Everywhere" Principle is MANDATORY**

Before adding any CSS properties, **ALWAYS check if they already exist in a unified system**:

#### **✅ REQUIRED CHECKS:**
1. **Transitions** → Use unified `.glass-hover-effect` timing
2. **Hover effects** → Extend unified `.glass-hover-effect` selector
3. **Glass properties** → Reference shared backdrop-filter values
4. **Shadows** → Use consistent shadow depth system
5. **Animations** → Use shared cubic-bezier curves

#### **🚫 VIOLATIONS TO AVOID:**
```css
/* WRONG: Duplicate transition */
.new-element:hover { transition: all 0.3s ease; }

/* RIGHT: Extend unified system */
.glass-hover-effect,
.card:hover,
.header:hover,
.btn-glass:hover,
.footer:hover,
.new-element:hover { /* Add here */ }
```

#### **⚡ WHY THIS MATTERS:**
- **One change** to transition speed affects **entire site**
- **Zero maintenance overhead** for global style updates
- **Perfect consistency** across all interactions
- **No forgotten elements** when updating effects

**If you find duplicate CSS properties, consolidate them immediately. The architecture only works when rigorously followed.**

---

**Live Site**: https://www.luxsearch.eu  
**GitHub**: https://github.com/VincentLuders/astro-luxsearch  
**Admin**: https://app.netlify.com/projects/jolly-speculoos-d7e8b1 