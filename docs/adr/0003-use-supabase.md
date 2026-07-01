# ADR-0003: Use Supabase as the Backend Platform

**Status:** Accepted

**Date:** July 2026

**Decision Makers:** Israel Jan

---

# Context

IsraelOS requires a modern backend platform capable of supporting authentication, database management, file storage, APIs, and real-time functionality without requiring significant infrastructure management.

The backend must support:

- User Authentication
- PostgreSQL Database
- Secure API Access
- File Storage
- Row-Level Security (RLS)
- Real-Time Features
- Easy Deployment
- Scalability
- Excellent Developer Experience

Several backend solutions were evaluated.

---

# Options Considered

## Option 1: Custom Node.js Backend

### Advantages

- Complete control over backend logic
- Highly customizable
- Suitable for complex enterprise systems
- Large ecosystem

### Disadvantages

- Requires building authentication
- Requires API development
- Requires server hosting
- Increased maintenance
- Slower development
- More infrastructure management

---

## Option 2: Firebase

### Advantages

- Mature Backend-as-a-Service
- Authentication
- Cloud Storage
- Realtime Database
- Good documentation

### Disadvantages

- Uses NoSQL by default
- More difficult relational queries
- Vendor lock-in concerns
- Less suitable for structured business data

---

## Option 3: Supabase

### Advantages

- PostgreSQL Database
- Built-in Authentication
- Row-Level Security (RLS)
- Auto-generated REST APIs
- Real-time subscriptions
- File Storage
- SQL support
- Open-source
- Excellent Next.js integration
- Strong TypeScript support

### Disadvantages

- Smaller ecosystem than Firebase
- Some advanced enterprise features require paid plans
- Requires understanding relational databases

---

# Decision

IsraelOS will use **Supabase** as its backend platform.

Supabase will provide:

- Authentication
- PostgreSQL Database
- File Storage
- Real-Time Services
- REST APIs
- Security Policies

---

# Rationale

Supabase aligns closely with the architectural goals of IsraelOS.

It allows rapid development while maintaining a robust relational database powered by PostgreSQL.

Its built-in authentication, security model, and developer tools significantly reduce backend complexity without sacrificing scalability.

This enables the project to focus on delivering business value rather than maintaining backend infrastructure.

---

# Consequences

## Positive

- Faster backend development
- Secure authentication
- Relational database support
- Simplified deployment
- Automatic APIs
- Excellent integration with Next.js
- Lower maintenance costs
- Scalable architecture

## Negative

- Dependency on Supabase services
- Learning curve for PostgreSQL and RLS
- Some advanced capabilities require paid plans

---

# Alternatives Rejected

### Node.js Backend

Rejected because it would require building and maintaining authentication, APIs, database connections, and infrastructure manually.

This would significantly increase development time for a solo project.

---

### Firebase

Rejected because IsraelOS relies heavily on relational data.

Modules such as CRM, Finance, Learning, Projects, Calendar, and Task Management benefit from PostgreSQL's relational capabilities.

---

# Security Considerations

Supabase provides several security features that align with IsraelOS requirements.

These include:

- Row-Level Security (RLS)
- Secure Authentication
- JWT-based Sessions
- Encrypted Connections (HTTPS)
- Environment Variables
- Secure Storage Policies

Every table in IsraelOS will enforce Row-Level Security to ensure users can only access their own data.

---

# Future Considerations

Future versions of IsraelOS may integrate:

- Edge Functions
- Background Jobs
- AI Services
- External APIs
- Webhooks
- Multi-tenant Organizations

Supabase provides a solid foundation for supporting these future enhancements.

---

# References

- Supabase Documentation
- PostgreSQL Documentation
- Next.js Documentation

---

# Review

**Reviewed By:** Israel Jan

**Review Date:** July 2026

**Next Review:** July 2027

---

**Status:** ✅ Accepted
