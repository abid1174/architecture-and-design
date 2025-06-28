# SOLID Principles & Design Patterns — Learning Journey

Welcome! 👋

This repository is my structured learning journey focused on writing clean, maintainable, and extensible code using **object-oriented design**, **SOLID principles**, and **design patterns**.

---

## 🎯 Objectives

- Strengthen understanding of **object-oriented programming (OOP)** fundamentals.
- Master **SOLID principles** for robust class and module design.
- Learn and implement classic **design patterns** (creational, structural, behavioral).
- Prepare to design scalable systems using advanced architectural approaches.

---

## 🗺️ Learning Order & Topics

### 1️⃣ Object-Oriented Programming Fundamentals

- Classes and objects
- Encapsulation
- Inheritance vs composition
- Polymorphism
- Abstraction

📁 Folder: `oop-fundamentals/`

---

### 2️⃣ SOLID Principles

1. **Single Responsibility Principle (SRP)** — One reason to change.
2. **Open/Closed Principle (OCP)** — Open for extension, closed for modification.
3. **Liskov Substitution Principle (LSP)** — Subtypes should be substitutable for base types.
4. **Interface Segregation Principle (ISP)** — No client should depend on unused interfaces.
5. **Dependency Inversion Principle (DIP)** — Depend on abstractions, not concretions.

📁 Folder: `solid/`

### 💥 Code Smells

While learning SOLID and design patterns, it's equally important to learn to **identify and avoid code smells** — symptoms of deeper design problems that make code hard to maintain or extend.

Some common code smells include:

- **Large Class (God Object)**: Class does too much; violates SRP.
- **Long Method**: Method is doing too many things.
- **Duplicate Code**: Same logic repeated in multiple places.
- **Feature Envy**: One class heavily relies on another class’s data or methods.
- **Data Clumps**: Group of variables often passed around together; should be encapsulated.
- **Divergent Change**: Class changes for many unrelated reasons.
- **Shotgun Surgery**: A small change forces changes in many different classes.
- **Primitive Obsession**: Overuse of primitive types instead of small objects.
- **Switch Statements**: Overused complex conditionals, better solved via polymorphism or strategy pattern.
- **Middle Man**: Too many simple delegations to other classes.
- **Speculative Generality**: Code written for possible future use that never happens.

📁 Folder: `code-smells/`

> 💡 **Goal:** Learn to **recognize and refactor** these smells using SOLID principles and patterns.

---

### 3️⃣ Design Patterns

#### ⭐ Creational Patterns

- Factory Method
- Abstract Factory
- Builder
- Singleton
- Prototype

📁 Folder: `patterns/creational/`

---

#### ⭐ Structural Patterns

- Adapter
- Decorator
- Proxy
- Composite
- Facade
- Bridge
- Flyweight

📁 Folder: `patterns/structural/`

---

#### ⭐ Behavioral Patterns

- Strategy
- Observer
- Command
- Chain of Responsibility
- Template Method
- Mediator
- State
- Visitor
- Iterator
- Memento

📁 Folder: `patterns/behavioral/`

---

### 4️⃣ Clean Architecture & Advanced Design (Future Scope)

- Clean Architecture (layered, hexagonal, ports & adapters)
- Domain-Driven Design (DDD)
- CQRS & Event-Driven Design
- Testing approaches in clean architectures

📁 Folder: `architecture/`

---

## 💡 Repository Structure

```plaintext
.
├── oop-fundamentals/
│   └── examples/
├── solid/
│   ├── single-responsibility/
│   ├── open-closed/
│   ├── liskov-substitution/
│   ├── interface-segregation/
│   └── dependency-inversion/
├── patterns/
│   ├── creational/
│   │   └── singleton/
│   │   └── builder/
│   ├── structural/
│   └── behavioral/
├── architecture/
│   └── clean-architecture/
├── common/
│   └── shared utilities or base abstractions
└── README.md
```
