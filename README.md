# To-Do-List-app

A simple to-do-list app built with following tech:

* Webpack (self-configured)
* Vanilla JS modules


## Overview

This project is a simple to-do list application built as part of my own self-learning journey to deep dive more inside JavaScript modules, webpack, and dynamic HTML component loading. The application is structured around the Model-View-Controller (MVC) pattern, a design pattern that separates the application into three interconnected components:

**Model**:  Represents the data and business logic of the application. In this app, the model is comprised of Project, Task, and TaskManager classes. These classes encapsulate the responsibilities of managing projects, tasks, and task lists, adhering to the Single Responsibility Principle (SRP) to ensure each class focuses on a single domain.

**View**:  Manages the user interface and presentation of the data. The ScreenController class is responsible for rendering various components of the application, such as project pages, tab buttons, and tasks in the task list. It contains static methods to manipulate the DOM. Where it is possible, i've tried to keep clean separation of concerns between the application's logic and its presentation.

**Controller**:  Acts as the central hub for handling user interactions and coordinating the model and view. The AppController class is the main controller of the application. It instantiates instances of the view and model, defining the logic for each interaction, such as creating a new project, which involves calling a form, assigning a new project, and rendering it. All of event listeners regarding UI and interaction was also defined in that AppController, where it could be called through init() function. 

## Design Patterns and Principles

I've tried to design application's architecture with several principles and patterns in mind:

**Model-View-Controller (MVC)**:  The application is structured around the MVC pattern, which separates the application into three interconnected components: the model, which represents the data and business logic; the view, which manages the user interface and presentation; and the controller, which handles user interactions and coordinates the model and view.

**Single Responsibility Principle (SRP)**:  Each class within the model is designed to have a single responsibility, ensuring that each part of the application focuses on a specific domain. This principle is also applicable within MVC model i've been following.

**Dependency Inversion**:  I opted for the Dependency Injection (DI) pattern to promote loose coupling between components. In that way i was able to rely more on abstractions or interfaces instead of direct implementations. The project scope wasn't really demanding that, but it helped me to understand pattern better. 

## Live preview 
You can check out this hosted project at: https://arthwr.github.io/to-do-list-app/
