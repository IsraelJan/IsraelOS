# 🗂️ IsraelOS Entity Relationship Diagram (ERD)

**Project:** IsraelOS

**Version:** 1.0.0

**Status:** Draft

**Author:** Israel Jan

**Created:** July 2026

---

# Table of Contents

1. Overview
2. Design Principles
3. Core Entities
4. Relationship Diagram
5. Relationship Definitions
6. Cardinality
7. Database Constraints
8. Future Expansion

---

# 1. Overview

The Entity Relationship Diagram (ERD) defines how data is organized and connected throughout IsraelOS.

The ERD ensures:

- Consistent relationships
- Data integrity
- Reduced duplication
- Easier scalability
- Secure ownership of user data

Every business entity belongs to an authenticated user unless otherwise specified.

---

# 2. Design Principles

The ERD follows these principles:

- Every table has a UUID primary key.
- Every business record belongs to one user.
- Foreign keys enforce relationships.
- Avoid duplicate data.
- Use one-to-many relationships where appropriate.
- Apply Row-Level Security (RLS) on all user-owned tables.

---

# 3. Core Entities

Authentication

- Users
- Profiles
- Settings

Planner

- Tasks
- Goals
- Habits

Projects

- Projects

CRM

- Clients
- Leads
- Meetings
- CRM Notes

Finance

- Income
- Expenses
- Budgets

Learning

- Courses
- Learning Sessions
- Certifications

Journal

- Journal Entries

Calendar

- Calendar Events

AI

- AI Conversations
- AI Recommendations

---

# 4. Relationship Diagram

```text
                     USERS
                       │
               1 ──────┼───────────────────────────────────────────────┐
                       │                                               │
                       ▼                                               ▼
                  PROFILES                                       SETTINGS
                       │
                       │
        ┌──────────────┼──────────────────────────────────────────────────────────────┐
        ▼              ▼             ▼             ▼            ▼                      ▼
      TASKS         GOALS        HABITS      PROJECTS      CLIENTS                COURSES
        │                              │            │              │                    │
        │                              │            │              ▼                    ▼
        │                              │            │         MEETINGS         LEARNING SESSIONS
        │                              │            │
        ▼                              ▼            ▼
CALENDAR EVENTS                 JOURNAL ENTRIES   LEADS

USERS
├── INCOME
├── EXPENSES
├── BUDGETS
├── AI CONVERSATIONS
└── AI RECOMMENDATIONS
```

---

# 5. Relationship Definitions

## User → Profile

Relationship:

One-to-One (1:1)

Description:

Each authenticated user has one profile.

---

## User → Tasks

Relationship:

One-to-Many (1:N)

Description:

A user can own many tasks.

Each task belongs to exactly one user.

---

## User → Goals

Relationship:

One-to-Many (1:N)

---

## User → Habits

Relationship:

One-to-Many (1:N)

---

## User → Projects

Relationship:

One-to-Many (1:N)

---

## Project → Tasks

Relationship:

One-to-Many (1:N)

A project may contain multiple tasks.

---

## User → Clients

Relationship:

One-to-Many (1:N)

---

## Client → Meetings

Relationship:

One-to-Many (1:N)

---

## Client → CRM Notes

Relationship:

One-to-Many (1:N)

---

## User → Leads

Relationship:

One-to-Many (1:N)

---

## User → Income

Relationship:

One-to-Many (1:N)

---

## User → Expenses

Relationship:

One-to-Many (1:N)

---

## User → Budgets

Relationship:

One-to-Many (1:N)

---

## User → Courses

Relationship:

One-to-Many (1:N)

---

## Course → Learning Sessions

Relationship:

One-to-Many (1:N)

---

## User → Journal Entries

Relationship:

One-to-Many (1:N)

---

## User → Calendar Events

Relationship:

One-to-Many (1:N)

---

## User → AI Conversations

Relationship:

One-to-Many (1:N)

---

# 6. Cardinality Summary

| Parent | Child | Relationship |
|----------|--------|--------------|
| User | Profile | 1:1 |
| User | Tasks | 1:N |
| User | Goals | 1:N |
| User | Habits | 1:N |
| User | Projects | 1:N |
| Project | Tasks | 1:N |
| User | Clients | 1:N |
| Client | Meetings | 1:N |
| Client | CRM Notes | 1:N |
| User | Leads | 1:N |
| User | Income | 1:N |
| User | Expenses | 1:N |
| User | Budgets | 1:N |
| User | Courses | 1:N |
| Course | Learning Sessions | 1:N |
| User | Journal Entries | 1:N |
| User | Calendar Events | 1:N |
| User | AI Conversations | 1:N |

---

# 7. Database Constraints

The following constraints apply:

- Every foreign key must reference an existing parent record.
- Deleting a user removes all dependent records.
- Every table includes:
  - created_at
  - updated_at
- UUIDs are used as primary keys.
- All user-owned tables enforce Row-Level Security.

---

# 8. Future Expansion

Future releases may introduce:

- Teams
- Organizations
- Shared Projects
- File Attachments
- Notifications
- AI Memory
- Workflow Automation
- Public APIs

The current ERD is designed to support these additions with minimal restructuring.
