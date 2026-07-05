# IsraelOS Coding Standards

**Version:** 1.0  
**Status:** Active  
**Author:** Israel Jan Otieno  
**Date Created:** July 5, 2026  
**Last Updated:** July 5, 2026

---

# Table of Contents

1. Purpose
2. Engineering Principles
3. General Standards
4. Folder Structure
5. File Naming
6. Component Standards
7. TypeScript Standards
8. Styling Standards
9. Imports
10. Code Formatting
11. Git Standards
12. Documentation Standards
13. Error Handling
14. Testing Standards
15. AI Development Guidelines
16. Review Checklist

---

# 1. Purpose

This document defines the coding standards for IsraelOS.

Its purpose is to ensure that every piece of code is:

- Readable
- Consistent
- Reusable
- Maintainable
- Scalable

Following these standards makes it easier for future contributors to understand and improve the project.

---

# 2. Engineering Principles

Every piece of code should follow these principles:

- Keep it simple.
- Avoid duplication.
- Build reusable components.
- Write code for humans first.
- Optimize only when necessary.
- Document important decisions.

---

# 3. General Standards

Always prefer:

- Readability over cleverness
- Simplicity over complexity
- Reuse over duplication
- Composition over repetition

---

# 4. Folder Structure

The project should remain organized.

Example:

```
app/
components/
hooks/
lib/
services/
types/
public/
docs/
```

Future versions may adopt a feature-based structure.

---

# 5. File Naming

Use lowercase with hyphens.

✅

```
project-card.tsx
user-avatar.tsx
dashboard-layout.tsx
```

❌

```
ProjectCardFinal.tsx
dashboard_new.tsx
MyComponent.tsx
```

---

# 6. Component Standards

React components use PascalCase.

Example

```tsx
export function ProjectCard() {
  return <div>Project</div>;
}
```

Each component should have one clear responsibility.

Keep components focused and reusable.

---

# 7. TypeScript Standards

Always define interfaces for component props.

Example

```tsx
interface ProjectCardProps {
  title: string;
  description: string;
}
```

Avoid using `any`.

Prefer explicit types whenever possible.

---

# 8. Styling Standards

Use Tailwind CSS.

Prefer utility classes over custom CSS.

Use shadcn/ui components where appropriate.

Avoid inline styles unless absolutely necessary.

---

# 9. Imports

Import order should be:

1. React / Next.js
2. Third-party libraries
3. Internal libraries
4. Components
5. Styles

Example

```tsx
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { ProjectCard } from "@/components/projects/project-card";
```

---

# 10. Code Formatting

Indentation

- 2 spaces

Maximum line length

- 100–120 characters

Always use meaningful variable names.

Good

```tsx
const activeProjects = [];
```

Avoid

```tsx
const data = [];
```

unless the meaning is obvious.

---

# 11. Git Standards

Commit messages follow Conventional Commits.

Examples

```
feat: add workspace dashboard

fix: resolve sidebar navigation

docs: update architecture

refactor: simplify project layout

style: improve button spacing

test: add task service tests
```

Commit often.

Each commit should represent one logical change.

---

# 12. Documentation Standards

Document:

- Major architectural decisions
- Public functions
- Complex logic
- API integrations

Keep documentation updated whenever functionality changes.

---

# 13. Error Handling

Handle errors gracefully.

Never expose internal system information to users.

Provide meaningful error messages.

Example

```
Unable to save your project.
Please try again.
```

instead of

```
Database exception 42804
```

---

# 14. Testing Standards

Future tests should cover:

- Components
- Business logic
- Database services
- API routes

Critical functionality should always be tested.

---

# 15. AI Development Guidelines

AI should assist development, not replace engineering judgment.

Before accepting AI-generated code:

- Understand it.
- Review it.
- Test it.
- Refactor if necessary.

Never merge code that you do not understand.

---

# 16. Review Checklist

Before every commit, verify:

- Code compiles successfully.
- No unnecessary duplication exists.
- Components are reusable.
- Types are defined correctly.
- Naming follows conventions.
- Documentation is updated.
- The application builds successfully.
- The change aligns with the IsraelOS vision.

---

# Conclusion

IsraelOS is intended to be a long-term software product.

These standards ensure that every contribution strengthens the codebase, keeps development consistent, and supports future growth.
