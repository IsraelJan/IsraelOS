# 🗄️ IsraelOS Database Design

**Project:** IsraelOS

**Version:** 1.0.0

**Status:** Draft

**Author:** Israel Jan

**Created:** July 2026

**Last Updated:** July 2026

---

# Table of Contents

1. Overview
2. Design Principles
3. Database Technology
4. Core Entities
5. Entity Relationships
6. Table Definitions
7. Row-Level Security (RLS)
8. Indexing Strategy
9. Future Database Expansion

---

# 1. Overview

IsraelOS uses a relational database to store and organize application data.

The database is designed to support:

- Multi-user architecture
- High performance
- Data integrity
- Scalability
- Security
- Maintainability

Every record belongs to a user and is protected using Row-Level Security (RLS).

---

# 2. Design Principles

The database follows these principles:

- Normalize data to reduce duplication.
- Every table has a primary key.
- Relationships use foreign keys.
- Use UUIDs as identifiers.
- Store timestamps for auditing.
- Design for future scalability.
- Enforce security using Row-Level Security (RLS).

---

# 3. Database Technology

Database: PostgreSQL

Backend Platform: Supabase

Authentication: Supabase Auth

Primary Key Type: UUID

Time Zone: UTC

---

# 4. Core Entities

The initial MVP consists of the following entities:

## User Management

- Users
- Profiles
- Settings

---

## Productivity

- Tasks
- Habits
- Goals
- Projects

---

## Business

- Clients
- Leads
- Meetings
- Notes

---

## Finance

- Income
- Expenses
- Budgets

---

## Learning

- Learning Sessions
- Courses
- Resources
- Certifications

---

## Journal

- Daily Journal
- Weekly Reviews

---

## Calendar

- Events
- Reminders

---

## AI

- AI Conversations
- AI Recommendations

---

# 5. Entity Relationships

One User

├── Many Tasks

├── Many Habits

├── Many Goals

├── Many Clients

├── Many Projects

├── Many Meetings

├── Many Journal Entries

├── Many Learning Sessions

├── Many Income Records

├── Many Expense Records

└── Many Calendar Events

Every table references the authenticated user.

---

# 6. Table Definitions

## Users

Purpose:

Stores authentication information.

Managed by Supabase Auth.

---

## Profiles

Purpose:

Stores user profile information.

Fields:

- id (UUID)
- user_id
- full_name
- email
- avatar_url
- timezone
- created_at
- updated_at

---

## Tasks

Purpose:

Stores daily and long-term tasks.

Fields:

- id
- user_id
- title
- description
- priority
- status
- due_date
- completed_at
- created_at
- updated_at

---

## Habits

Purpose:

Tracks recurring habits.

Fields:

- id
- user_id
- name
- frequency
- streak
- target
- created_at

---

## Goals

Purpose:

Stores personal and business goals.

Fields:

- id
- user_id
- title
- category
- target_date
- progress
- status

---

## Clients

Purpose:

Stores client information.

Fields:

- id
- user_id
- company_name
- contact_name
- email
- phone
- status
- created_at

---

## Leads

Purpose:

Tracks sales opportunities.

Fields:

- id
- user_id
- source
- stage
- estimated_value
- next_follow_up

---

## Meetings

Purpose:

Stores scheduled meetings.

Fields:

- id
- client_id
- meeting_date
- location
- notes

---

## Income

Purpose:

Tracks revenue.

Fields:

- id
- user_id
- source
- amount
- category
- payment_date

---

## Expenses

Purpose:

Tracks spending.

Fields:

- id
- user_id
- category
- amount
- payment_date

---

## Learning Sessions

Purpose:

Tracks learning progress.

Fields:

- id
- user_id
- topic
- duration_minutes
- completed
- notes

---

## Journal Entries

Purpose:

Stores reflections.

Fields:

- id
- user_id
- mood
- gratitude
- reflection
- created_at

---

## Calendar Events

Purpose:

Stores events and reminders.

Fields:

- id
- user_id
- title
- start_time
- end_time
- event_type

---

# 7. Row-Level Security (RLS)

Every table will enforce Row-Level Security.

Policy:

A user can:

- View their own records.
- Create their own records.
- Update their own records.
- Delete their own records.

A user cannot access another user's data.

---

# 8. Indexing Strategy

Indexes will be created on frequently queried fields.

Examples:

- user_id
- due_date
- status
- created_at
- meeting_date
- payment_date

This improves query performance as the application grows.

---

# 9. Future Database Expansion

Future versions may introduce:

- Teams
- Organizations
- Shared Workspaces
- Notifications
- File Attachments
- AI Memory
- Plugin System
- Public API
- Audit Logs

The current database design should support these future enhancements with minimal structural changes.

---

# Conclusion

The IsraelOS database is designed to provide a secure, scalable, and maintainable foundation for all application features.

Every new module should integrate with this database design while maintaining consistency, performance, and data integrity.
