# LuxSearch Design System Documentation

> 🎨 Complete guide to the LuxSearch visual design language and CSS implementation

## 🎯 Design Philosophy

**Luxury meets Technology** - A sophisticated, professional aesthetic that conveys trust and expertise while remaining approachable and modern.

### Core Principles
- **Elegant Simplicity**: Clean, uncluttered layouts with purposeful design elements
- **Visual Hierarchy**: Clear information architecture using size, color, and spacing
- **Consistency**: Systematic approach to spacing, typography, and color usage
- **Accessibility**: High contrast ratios and readable typography
- **Motion**: Subtle animations that enhance UX without distraction

## 🎨 Color System

### Primary Palette
```css
/* Background Gradients - Deep purples creating depth */
Background: Linear gradients from #1a0b2e → #16213e → #0f0f23
Accent: #3b82f6 (blue highlights)
Purple tones: #8b5cf6, #a855f7, #9333ea

/* Text Colors - High contrast for readability */
Primary Text: #ffffff (white on dark backgrounds)
Secondary Text: rgba(255, 255, 255, 0.8) (slightly transparent white)
Accent Text: #e5e7eb (light gray for subtle text)

/* Interactive Elements */
Button Gradients: #3b82f6 → #8b5cf6
Hover States: Lighter versions of base colors
Focus States: Bright accent borders
```

### Usage Guidelines
- **Dark Background**: Always use purple gradient backgrounds
- **High Contrast**: White text on dark cards ensures readability
- **Accent Sparingly**: Blue accents for CTAs and important elements
- **Transparency**: Use rgba for subtle layering effects

## 📝 Typography System

### Hierarchy & Usage
```css
/* Headings */
.title {
    font-size: 1.25rem;        /* 20px */
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 1rem;
}

/* Body Text */
.body-text {
    font-size: 0.875rem;       /* 14px */
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 1rem;
}

/* Navigation */
.nav-link {
    font-size: 0.875rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.7);
    /* .current state: color: #ffffff */
}

/* Brand Typography */
.brand-name {
    font-size: 1.125rem;
    font-weight: 700;
    color: #ffffff;
}

.brand-tagline {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.6);
}
```

### Typography Rules
- **Never exceed 3 font sizes** per page
- **Use font-weight** to create hierarchy (400, 500, 600, 700)
- **Line-height 1.6** for body text readability
- **White text** on dark backgrounds always

## 🏗️ Layout System

### Grid & Spacing
```css
/* Container System */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

/* Grid Layouts */
.grid-2 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
}

.jobs-container {
    /* Specific grid for job listings */
    gap: 1rem;
}

/* Spacing Scale */
gap: 1rem;          /* 16px - tight spacing */
gap: 1.5rem;        /* 24px - standard spacing */
gap: 2rem;          /* 32px - loose spacing */
```

### Layout Patterns
- **Card-based**: All content lives in `.card` containers
- **Responsive grids**: Auto-fit columns with minimum widths
- **Consistent spacing**: Use gap instead of margins for grid layouts
- **Center alignment**: Max-width containers with auto margins

## 🃏 Card System

### Card Variants
```css
/* Base Card - Standard content container */
.card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 1.5rem;
    backdrop-filter: blur(10px);
}

/* Card Tall - Extended content */
.card-tall {
    /* Inherits .card + */
    min-height: 400px;
    display: flex;
    flex-direction: column;
}

/* Card Medium - Job listings */
.card-medium {
    /* Inherits .card + */
    min-height: 200px;
    display: flex;
    flex-direction: column;
}
```

### Card Usage Rules
- **Always use cards** for content containers
- **Choose appropriate height** based on content volume
- **Maintain consistent padding** (1.5rem standard)
- **Use flex layouts** for vertical content organization

## 🔘 Button System

### Button Variants
```css
/* Primary Button */
.btn {
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    color: #ffffff;
    border: none;
    border-radius: 8px;
    padding: 0.75rem 1.5rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
}

/* Button in Flex Containers */
.btn-flex {
    flex: 1;
    text-align: center;
}

/* Full Width Button */
.btn-full {
    width: 100%;
}

/* Button Groups */
.btn-group {
    display: flex;
    gap: 1rem;
    align-items: center;
}
```

### Button Rules
- **Gradient backgrounds** for primary actions
- **Consistent border-radius** (8px)
- **Smooth transitions** (0.2s ease)
- **Responsive sizing** with flex properties

## 🏷️ Tag & Label System

### Tag Implementation
```css
.tag {
    background: rgba(59, 130, 246, 0.2);
    color: #60a5fa;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 500;
    display: inline-block;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
}
```

### Tag Usage
- **Skill indicators**: Technology tags, categories
- **Small, pill-shaped**: Rounded corners (border-radius: 9999px)
- **Subtle backgrounds**: Low opacity for visual hierarchy
- **Flexible containers**: Allow wrapping with consistent gaps

## 📱 Component Patterns

### Navigation Pattern
```css
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: rgba(0, 0, 0, 0.2);
}

.nav-link.current {
    color: #ffffff;
    font-weight: 600;
}
```

### Job Card Pattern
```css
.job-details {
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    padding-top: 1rem;
}

.salary {
    font-weight: 600;
    color: #ffffff;
}

.location {
    color: rgba(255, 255, 255, 0.7);
}
```

### List Patterns
```css
.list-numbered {
    counter-reset: item;
    padding-left: 0;
}

.list-bulleted {
    padding-left: 1.5rem;
}
```

## 🎬 Animation & Interaction

### Background Animation
```css
.gradient-bg {
    /* 12 morphing blobs with staggered animations */
    animation: morphing 20s ease-in-out infinite;
}

/* Subtle, continuous movement */
/* Creates visual interest without distraction */
```

### Hover States
```css
.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.card:hover {
    border-color: rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.08);
}
```

### Transition Rules
- **Fast interactions**: 0.2s for buttons, links
- **Smooth movements**: ease-in-out for organic feel
- **Subtle transforms**: Small translateY, scale changes
- **Consistent timing**: Same duration across similar elements

## 🔧 Implementation Guidelines

### When Creating New Components
1. **Start with existing classes** from this system
2. **Follow card-based layouts** for content organization
3. **Use established spacing scale** (1rem, 1.5rem, 2rem)
4. **Maintain color consistency** (white text, purple backgrounds)
5. **Test responsive behavior** with grid systems

### CSS Class Naming Convention
- **Component-based**: `.card`, `.btn`, `.tag`
- **Modifier patterns**: `.card-tall`, `.btn-flex`
- **State classes**: `.current`, `.active`
- **Layout utilities**: `.grid-2`, `.container`

### Responsive Design Patterns
- **Mobile-first approach**: Base styles for mobile
- **Grid auto-fit**: Columns adjust automatically
- **Flexible spacing**: rem units scale with font size
- **Touch-friendly**: Minimum 44px touch targets

## ✅ Quality Checklist

Before deploying new components:
- [ ] Uses existing CSS classes where possible
- [ ] Follows card-based layout pattern
- [ ] Maintains white text on dark background
- [ ] Uses consistent spacing (1rem, 1.5rem, 2rem)
- [ ] Includes proper hover/focus states
- [ ] Tests responsive behavior
- [ ] Validates accessibility (contrast, touch targets)
- [ ] Updates this documentation if new patterns added

---

**Reference File**: `public/styles/design-system.css`  
**Live Examples**: https://www.luxsearch.eu 