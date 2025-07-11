# Component Quick Reference Guide

> 🚀 Fast lookup for creating new pages and components in the luxsearch® system

## 🎯 Page Creation Template

### New Page Checklist
```astro
---
import Layout from '../components/Layout.astro';
---

<Layout title="Page Title" currentPage="page-name">
    <div class="container grid-2">
        <!-- Content goes here -->
    </div>
</Layout>
```

### Required Steps:
1. ✅ Import Layout component
2. ✅ Set appropriate title and currentPage
3. ✅ Wrap content in `.container` and layout class
4. ✅ Add navigation link to Header.astro if needed

## 🃏 Content Patterns

### Standard Content Card
```astro
<div class="card card-tall">
    <h3 class="title">Section Title</h3>
    <div class="body-text">
        Your content here...
    </div>
    <div class="btn-group">
        <a href="#" class="btn btn-flex">Action</a>
    </div>
</div>
```

### Job Listing Card
```astro
<div class="card card-medium">
    <h3 class="title">Job Title</h3>
    <div class="tags">
        <span class="tag">Skill 1</span>
        <span class="tag">Skill 2</span>
    </div>
    <div class="job-details">
        <span class="salary">80k - 90k EUR</span>
        <span class="location">Location</span>
    </div>
    <button class="btn btn-full mt-auto">Apply</button>
</div>
```

### Profile Card
```astro
<div class="card card-tall">
    <h3 class="title">About Section</h3>
    <div class="profile">
        <img src="/assets/profile.png" alt="Name">
        <div class="profile-info">
            <h4 class="profile-name">Full Name</h4>
            <p class="profile-title">Job Title</p>
        </div>
    </div>
    <p class="quote">"Quote text here"</p>
    <div class="body-text">
        Additional content...
    </div>
</div>
```

## 🎨 Layout Patterns

### Two-Column Grid (Default)
```astro
<div class="container grid-2">
    <div class="card">Column 1</div>
    <div class="card">Column 2</div>
</div>
```

### Jobs Grid (Specific)
```astro
<div class="jobs-container grid-2">
    <!-- Multiple job cards -->
</div>
```

### Single Column
```astro
<div class="container">
    <div class="card">Full width content</div>
</div>
```

## 🔘 Button Patterns

### Button Group (Side by Side)
```astro
<div class="btn-group">
    <a href="#" class="btn btn-flex">Option 1</a>
    <span class="divider">or</span>
    <a href="#" class="btn btn-flex">Option 2</a>
</div>
```

### Single Action Button
```astro
<a href="#" class="btn">Call to Action</a>
```

### Full Width Button
```astro
<button class="btn btn-full">Submit</button>
```

## 📝 Text Patterns

### Standard Content Block
```astro
<div class="body-text">
    <strong>Section heading:</strong>
    <ul class="list-bulleted">
        <li>Point 1</li>
        <li>Point 2</li>
    </ul>
</div>
```

### Numbered Process
```astro
<ol class="list-numbered">
    <li>Step one description</li>
    <li>Step two description</li>
    <li>Step three description</li>
</ol>
```

### Quote Block
```astro
<p class="quote">"Quotation text here"</p>
```

## 🏷️ Tag Usage

### Technology Tags
```astro
<div class="tags">
    <span class="tag">React</span>
    <span class="tag">TypeScript</span>
    <span class="tag">Node.js</span>
</div>
```

### Job Details
```astro
<div class="job-details">
    <span class="salary">75k - 95k EUR</span>
    <span class="location">Luxembourg City</span>
</div>
```

## 🧩 Component Integration

### Adding to Header Navigation
```astro
<!-- In Header.astro -->
<nav class="nav">
    
    <a href="/opportunities" class={`nav-link ${currentPage === 'opportunities' ? 'current' : ''}`}>Opportunities</a>
    <a href="/hire-talent" class={`nav-link ${currentPage === 'hire-talent' ? 'current' : ''}`}>Hire Talent</a>
    <!-- Add new page here -->
    <a href="/new-page" class={`nav-link ${currentPage === 'new-page' ? 'current' : ''}`}>New Page</a>
</nav>
```

### Layout Props Interface
```astro
<!-- When adding new currentPage options -->
export interface Props {
    title: string;
    currentPage?: 'about' | 'opportunities' | 'hire-talent' | 'new-page';
}
```

## 🎯 Common CSS Classes

### Essential Classes
- `.container` - Page wrapper with max-width
- `.grid-2` - Two-column responsive grid
- `.card` - Basic content container
- `.card-tall` - Extended height card
- `.card-medium` - Medium height card
- `.title` - Section headings
- `.body-text` - Paragraph content
- `.btn` - Primary button
- `.tag` - Skill/category tags

### Layout Utilities
- `.btn-group` - Horizontal button layout
- `.btn-flex` - Flexible button sizing
- `.btn-full` - Full-width button
- `.mt-auto` - Margin-top auto (push to bottom)
- `.flex-1` - Flex grow

### Text Utilities
- `.list-numbered` - Styled ordered list
- `.list-bulleted` - Styled unordered list
- `.quote` - Quote text styling
- `.divider` - Text divider (e.g., "or")

## 🚨 Common Mistakes to Avoid

### ❌ Don't Do This
```astro
<!-- Inline styles -->
<div style="background: purple;">Content</div>

<!-- Custom CSS classes without system -->
<div class="my-custom-card">Content</div>

<!-- Missing Layout wrapper -->
<div>Raw content without Layout</div>

<!-- Inconsistent spacing -->
<div class="card" style="margin: 25px;">Content</div>
```

### ✅ Do This Instead
```astro
<!-- Use system classes -->
<div class="card card-tall">Content</div>

<!-- Always use Layout -->
<Layout title="Page" currentPage="page">
    <div class="container grid-2">Content</div>
</Layout>

<!-- Consistent spacing via grid gap -->
<div class="container grid-2">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
</div>
```

## 🔍 Debugging Tips

### Check Responsive Behavior
1. Test mobile view (< 768px)
2. Verify grid columns adjust automatically
3. Ensure touch-friendly button sizes (44px minimum)

### Validate Design Consistency
1. White text on dark backgrounds
2. Consistent card padding (1.5rem)
3. Proper spacing between elements
4. Button hover states working

### Component Integration
1. Navigation highlighting works
2. Layout props properly typed
3. CSS classes applied correctly
4. No inline styles used

---

**Quick Links:**
- [Full Documentation](README.md)
- [Design System](DESIGN_SYSTEM.md)
- [Live Site](https://www.luxsearch.eu) 