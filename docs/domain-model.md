# 🧩 IsraelOS Domain Model

**Version:** 2.0  
**Status:** Draft  
**Author:** Israel Jan Otieno  
**Date Created:** July 3, 2026  
**Last Updated:** July 5, 2026

---

# Table of Contents

1. Overview
2. Purpose
3. Domain Philosophy
4. Core Domain Entities
5. Entity Relationships
6. Domain Boundaries
7. Module Ownership
8. Future Domain Expansion
9. Domain Principles
10. Summary

---

# 1. Overview

The Domain Model defines the core business concepts of IsraelOS.

Rather than focusing on the database or user interface, the domain model describes the real-world objects that IsraelOS manages and how they relate to one another.

The domain serves as the heart of the application and drives every feature, workflow, and data model.

---

# 2. Purpose

The purpose of the domain model is to establish a shared understanding of the business concepts that power IsraelOS.

It ensures that every developer, designer, and future AI agent speaks the same language when building the platform.

---

# 3. Domain Philosophy

IsraelOS is a Personal Operating System.

Everything inside the platform should help users organize one or more of the following:

- Work
- Businesses
- Projects
- Clients
- Tasks
- Knowledge
- Learning
- Goals
- Documents
- Finances
- Ideas

If a feature does not support one of these areas, it should be carefully evaluated before becoming part of the platform.

---

# 4. Core Domain Entities

## User

Represents the owner of the operating system.

Responsibilities:

- Authentication
- Preferences
- Profile
- Ownership of data

---

## Workspace

Represents the user's active working environment.

Examples:

- Personal
- Business
- Study
- Research

A workspace groups related information together.

---

## Project

Represents any initiative with a clear objective.

Examples:

- IsraelOS
- ZariQ
- Portfolio Website
- Architecture Design

Projects may contain:

- Tasks
- Documents
- Notes
- Goals
- AI conversations

---

## Business

Represents a company or venture.

Examples:

- Marisel Hub
- ZariQ
- Architecture Studio
- Freelance Services

Businesses own:

- Clients
- Projects
- Finances
- Documents

---

## Client

Represents an individual or organization receiving services.

Examples:

- Contento
- Real Tasking
- InvestIn
- Tracy King

A client may have:

- Multiple projects
- Documents
- Invoices
- Meetings

---

## Task

Represents a unit of work.

Examples:

- Design dashboard
- Send proposal
- Deploy website

Tasks belong to projects or workspaces.

---

## Goal

Represents a desired outcome.

Examples:

- Learn Next.js
- Reach $10,000 Monthly Revenue
- Launch IsraelOS MVP

Goals are supported by projects and tasks.

---

## Learning Item

Represents structured learning.

Examples:

- Course
- Book
- Certification
- Tutorial

Tracks:

- Progress
- Notes
- Completion

---

## Knowledge Note

Represents permanent knowledge.

Examples:

- Research
- Meeting Notes
- AI Summaries
- Architecture Decisions

Knowledge should be searchable.

---

## Idea

Represents an opportunity or concept.

Examples:

- Startup Idea
- Feature Request
- Product Improvement
- Business Opportunity

Ideas may later become projects.

---

## Document

Represents stored files.

Examples:

- Contracts
- Drawings
- PDFs
- Certificates
- Invoices

Documents can belong to projects, businesses, or clients.

---

## Calendar Event

Represents scheduled activities.

Examples:

- Meeting
- Deadline
- Reminder
- Appointment

---

## AI Conversation

Represents conversations with the AI Assistant.

Examples:

- Planning
- Research
- Coding
- Brainstorming

AI conversations may reference projects, tasks, documents, or knowledge notes.

---

# 5. Entity Relationships

User

├── Workspaces

├── Businesses

│ ├── Clients

│ ├── Projects

│ └── Documents

├── Projects

│ ├── Tasks

│ ├── Goals

│ ├── Documents

│ └── AI Conversations

├── Learning Items

├── Knowledge Notes

├── Ideas

├── Calendar Events

└── Finance Records

---

# 6. Domain Boundaries

IsraelOS manages:

- Personal productivity
- Business management
- Knowledge management
- Learning
- Finance
- AI assistance

IsraelOS does **not** directly manage:

- Rental properties
- Tenants
- Property maintenance
- Property listings

Those belong to ZariQ.

---

# 7. Module Ownership

| Module | Primary Entity |
|----------|----------------|
| Dashboard | User |
| Workspace | Workspace |
| Projects | Project |
| Businesses | Business |
| Clients | Client |
| Finance | Finance Record |
| Calendar | Calendar Event |
| Tasks | Task |
| Goals | Goal |
| Learning | Learning Item |
| Knowledge | Knowledge Note |
| Ideas | Idea |
| Documents | Document |
| AI Assistant | AI Conversation |

---

# 8. Future Domain Expansion

Future versions may introduce:

- Teams
- Organizations
- Notifications
- Workflows
- Habits
- Time Tracking
- Journals
- Public APIs
- Plugins

These should extend the existing domain without breaking the core principles.

---

# 9. Domain Principles

Every domain entity should:

- Have a single responsibility.
- Represent a real-world concept.
- Be reusable across modules.
- Be independent from the user interface.
- Support future scalability.

---

# 10. Summary

The IsraelOS Domain Model defines the language of the platform.

It provides a stable foundation that guides the database design, application logic, API development, AI integration, and future expansion of the operating system.

Every future feature should be built around these core domain entities.
