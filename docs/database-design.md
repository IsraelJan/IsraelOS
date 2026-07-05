# 🗄️ IsraelOS Database Design

**Version:** 2.0  
**Status:** Draft  
**Author:** Israel Jan Otieno  
**Date Created:** July 2026  
**Last Updated:** July 2026

---

# Table of Contents

1. Overview
2. Design Principles
3. Database Technology
4. Core Tables
5. Entity Relationships
6. Data Ownership
7. Security Model
8. File Storage
9. Future Database Expansion
10. Summary

---

# 1. Overview

The IsraelOS database is designed to support a modern, scalable Personal Operating System.

The database stores information related to users, projects, businesses, learning, knowledge, finances, documents, AI interactions, and productivity.

The design prioritizes simplicity, scalability, security, and maintainability.

---

# 2. Design Principles

The database follows these principles:

- Single source of truth
- Normalize data where appropriate
- Avoid unnecessary duplication
- Secure by default
- Support future scalability
- AI-ready architecture
- User-centric ownership

---

# 3. Database Technology

Backend Platform

- Supabase

Database Engine

- PostgreSQL

Authentication

- Supabase Auth

File Storage

- Supabase Storage

Real-time Updates

- Supabase Realtime

Server Functions

- Supabase Edge Functions

---

# 4. Core Tables

## users

Stores account information.

Examples:

- Profile
- Preferences
- Settings

---

## workspaces

Represents user workspaces.

Examples:

- Personal
- Business
- Study

Relationships

- User → Many Workspaces

---

## businesses

Stores businesses managed by the user.

Examples:

- ZariQ
- Marisel Hub
- Architecture Studio

Relationships

- Workspace → Many Businesses

---

## projects

Stores projects.

Examples:

- IsraelOS
- Portfolio
- Client Website

Relationships

- Business → Many Projects

---

## clients

Stores client information.

Relationships

- Business → Many Clients

---

## tasks

Stores tasks.

Relationships

- Project → Many Tasks

---

## goals

Stores user goals.

Relationships

- Workspace → Many Goals

---

## calendar_events

Stores meetings and reminders.

Relationships

- Workspace → Many Calendar Events

---

## learning_items

Stores learning resources.

Examples

- Courses
- Books
- Certifications

Relationships

- User → Many Learning Items

---

## knowledge_notes

Stores notes and knowledge.

Examples

- Research
- Meeting Notes
- Architecture Decisions

Relationships

- Workspace → Many Knowledge Notes

---

## ideas

Stores business and product ideas.

Relationships

- Workspace → Many Ideas

---

## documents

Stores uploaded documents.

Examples

- Contracts
- PDFs
- Drawings
- Images

Relationships

- Projects
- Businesses
- Clients

---

## ai_conversations

Stores AI conversations.

Relationships

- User
- Projects
- Knowledge Notes

---

## finance_records

Stores financial information.

Examples

- Income
- Expenses
- Budgets
- Invoices

Relationships

- Business
- Workspace

---

# 5. Entity Relationships

User

│

├── Workspaces

│     ├── Projects

│     │      ├── Tasks

│     │      ├── Documents

│     │      └── AI Conversations

│

├── Businesses

│      ├── Clients

│      ├── Finance Records

│      └── Projects

│

├── Goals

├── Calendar Events

├── Learning Items

├── Knowledge Notes

├── Ideas

└── Documents

---

# 6. Data Ownership

Every record belongs to a user.

Examples

Task

- user_id
- project_id

Project

- user_id
- business_id

Knowledge Note

- user_id
- workspace_id

Goal

- user_id
- workspace_id

This ownership model enables secure Row Level Security (RLS).

---

# 7. Security Model

Authentication

- Supabase Auth

Authorization

- Row Level Security (RLS)

Policies

Users can:

✔ Read their own data

✔ Create their own data

✔ Update their own data

✔ Delete their own data

Users cannot access another user's information.

---

# 8. File Storage

Files are stored using Supabase Storage.

Examples

- Documents
- Images
- Certificates
- Drawings
- PDFs

Metadata is stored in PostgreSQL.

Actual files remain in Storage Buckets.

---

# 9. Future Database Expansion

Future versions may include:

- Teams
- Organizations
- Workflows
- Notifications
- Habits
- Time Tracking
- AI Memory
- Plugins
- Marketplace
- Public API

The current design allows these features to be added without major restructuring.

---

# 10. Naming Conventions

Tables

Use plural lowercase names.

Examples

users

projects

tasks

documents

Columns

Use snake_case.

Examples

user_id

created_at

updated_at

workspace_id

business_id

Primary Keys

Use UUID.

Examples

id UUID PRIMARY KEY

Foreign Keys

Always reference the parent table.

Examples

project_id

workspace_id

business_id

Indexes

Create indexes on:

- user_id
- workspace_id
- business_id
- project_id
- created_at

to improve performance.

---

# 11. Backup Strategy

The database should support:

- Automatic backups
- Point-in-time recovery
- Disaster recovery
- Version migration

This protects user information and business continuity.

---

# 12. Summary

The IsraelOS database is designed around the core philosophy of a Personal Operating System.

Every table supports one or more of the platform's core modules:

- Work
- Businesses
- Projects
- Clients
- Finance
- Learning
- Knowledge
- AI
- Documents
- Personal Growth

The design prioritizes security, scalability, maintainability, and future expansion while remaining simple enough for the MVP.
