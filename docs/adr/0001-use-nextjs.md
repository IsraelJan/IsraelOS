# ADR-0001: Use Next.js as the Frontend Framework

**Status:** Accepted

**Date:** July 2026

**Decision Makers:** Israel Jan

---

# Context

IsraelOS is intended to be a modern, scalable Software-as-a-Service (SaaS) application that helps users manage productivity, business operations, learning, finances, and long-term goals.

The frontend framework must provide:

- Excellent performance
- Easy routing
- Server-side rendering support
- Strong TypeScript integration
- Scalable project structure
- Excellent developer experience
- Easy deployment
- Long-term community support

Several frontend frameworks were evaluated before making this decision.

---

# Options Considered

## Option 1: React + Vite

### Advantages

- Extremely fast development server
- Lightweight
- Large ecosystem
- Flexible architecture

### Disadvantages

- Requires additional libraries for routing
- Requires more manual configuration
- Less opinionated project structure

---

## Option 2: Next.js

### Advantages

- Built on React
- File-based routing
- Server Components support
- Excellent TypeScript integration
- Built-in API routes
- Image optimization
- Strong performance
- Excellent Vercel integration
- Large community support
- Industry adoption

### Disadvantages

- Slightly steeper learning curve
- More conventions to learn
- Frequent framework updates

---

## Option 3: Angular

### Advantages

- Complete framework
- Enterprise-ready
- Strong architecture

### Disadvantages

- Larger learning curve
- More boilerplate
- Less suitable for this project's goals

---

# Decision

IsraelOS will use **Next.js** as the frontend framework.

Next.js provides an excellent balance between performance, scalability, developer experience, and maintainability.

Its built-in routing, server rendering capabilities, and seamless deployment with Vercel make it the best choice for this project.

---

# Rationale

Next.js was selected because it:

- Supports modern React development.
- Encourages scalable application architecture.
- Reduces configuration overhead.
- Provides excellent production performance.
- Integrates naturally with Supabase.
- Is widely adopted by startups and production applications.
- Aligns with current software engineering best practices.

---

# Consequences

## Positive

- Faster development.
- Better SEO capabilities.
- Cleaner project structure.
- Easier deployment.
- Excellent TypeScript support.
- Future-ready architecture.

## Negative

- Requires learning Next.js conventions.
- Framework updates may require migration work.
- Some concepts (Server Components, App Router) have a learning curve.

---

# Alternatives Rejected

React + Vite remains an excellent choice for many applications.

However, IsraelOS benefits more from the integrated features offered by Next.js, especially routing, rendering, deployment, and project organization.

Angular was rejected because it introduces additional complexity that is not necessary for this project.

---

# Future Considerations

This decision may be revisited if:

- The application requirements change significantly.
- A future version requires a different frontend architecture.
- New technologies emerge that provide substantial advantages.

At this time, Next.js is considered the most appropriate frontend framework for IsraelOS.

---

# References

- Next.js Documentation
- React Documentation
- Vercel Documentation

---

**Status:** ✅ Accepted
