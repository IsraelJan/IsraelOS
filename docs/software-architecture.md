# IsraelOS Software Architecture

Version: 2.0

Status: Draft

---

# Overview

IsraelOS is a modern web application built using a layered architecture.

The goal is to provide a scalable, maintainable, and intelligent platform that helps users organize their work, businesses, learning, finances, knowledge, and personal growth.

The architecture emphasizes modularity, reusability, and AI-first design.

---

# Architecture Principles

IsraelOS follows these principles:

- Simplicity
- Scalability
- Reusability
- Security
- Performance
- AI-First
- Mobile Friendly
- Component Driven

---

# High-Level Architecture

                    IsraelOS

        ┌─────────────────────────────┐
        │      Presentation Layer      │
        └─────────────────────────────┘
                     │
                     ▼
        ┌─────────────────────────────┐
        │     Application Layer        │
        └─────────────────────────────┘
                     │
                     ▼
        ┌─────────────────────────────┐
        │        Domain Layer          │
        └─────────────────────────────┘
                     │
                     ▼
        ┌─────────────────────────────┐
        │         Data Layer           │
        └─────────────────────────────┘

---

# Technology Stack

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React

---

## Backend

- Supabase
- PostgreSQL
- Supabase Auth
- Supabase Storage
- Supabase Edge Functions

---

## Deployment

- GitHub
- Vercel

---

# Folder Structure

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

---

# Application Layers

## Presentation Layer

Responsible for everything the user sees.

Examples:

- Dashboard
- Workspace
- Projects
- Businesses
- Clients
- Finance
- Calendar
- Tasks
- Goals
- Learning
- Knowledge
- Ideas
- Documents
- AI Assistant
- Settings

---

## Application Layer

Contains the business logic.

Responsibilities:

- Validation
- Services
- Authentication
- AI orchestration
- Permissions
- Workflows

---

## Domain Layer

Represents the business concepts.

Core entities include:

- User
- Workspace
- Project
- Business
- Client
- Task
- Goal
- Learning Item
- Knowledge Note
- Document
- Idea
- Calendar Event

---

## Data Layer

Responsible for storing and retrieving information.

Includes:

- PostgreSQL
- Supabase
- Storage
- Authentication
- Row Level Security

---

# Component Architecture

IsraelOS follows reusable components.

Example:

Dashboard

- KPI Card
- Recent Activity
- Calendar Widget
- AI Summary
- Notifications

Projects

- Project Card
- Task List
- Timeline
- Files

Businesses

- Business Card
- Metrics
- Team Members

Learning

- Course Card
- Progress Bar
- Certificates

---

# Routing Strategy

Every major module has its own route.

Example

/
 /workspace
 /projects
 /businesses
 /clients
 /finance
 /calendar
 /tasks
 /goals
 /learning
 /knowledge
 /ideas
 /documents
 /ai
 /settings

---

# Authentication

Authentication is handled by Supabase Auth.

Supported providers:

- Email & Password
- Google
- GitHub

Future providers:

- Microsoft
- Apple

---

# AI Architecture

AI is a core capability of IsraelOS.

The AI Assistant will interact with:

- Tasks
- Calendar
- Goals
- Projects
- Knowledge
- Documents
- Businesses
- Learning

Examples:

- Summarize my day
- Plan my week
- Explain my notes
- Suggest priorities
- Draft emails

---

# Design Philosophy

Every screen should follow these principles:

- Clean
- Minimal
- Fast
- Accessible
- Professional

Inspired by:

- Linear
- Notion
- Vercel
- Stripe
- Raycast

---

# Engineering Principles

Every feature should be:

- Modular
- Reusable
- Well documented
- Tested
- Version controlled

---

# Future Architecture

Future versions may include:

- Mobile App
- Desktop App
- Offline Support
- Plugin System
- Marketplace
- AI Agents
- Public API

---

# Success Metric

A successful IsraelOS allows users to manage their life, work, learning, businesses, and knowledge from one intelligent operating system.
