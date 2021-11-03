# Ngrx

NgRx packages are divided into a few main categories

State
    Store - RxJS powered global state management for Angular apps, inspired by Redux.
    Effects - Side effect model for @ngrx/store.
    Router Store - Bindings to connect the Angular Router to @ngrx/store.
    Entity - Entity State adapter for managing record collections.
    ComponentStore - Standalone library for managing local/component state.

Data
    Data - Extension for simplified entity data management.

View
    Component - Extension for fully reactive Angular applications.


A good guideline that might help answer the question, "Do I need NgRx Store?" is the SHARI principle:

    Shared: state that is accessed by many components and services.

    Hydrated: state that is persisted and rehydrated from external storage.

    Available: state that needs to be available when re-entering routes.

    Retrieved: state that must be retrieved with a side-effect.

    Impacted: state that is impacted by actions from other sources.


S - Single Responsibility Principle (known as SRP)
    class should be having one and only one responsibility
O - Open/Closed Principle
    classes should be open for extension but closed for modification
L - Liskov’s Substitution Principle
    parent classes should be easily substituted with their child classes without blowing up the application
I - Interface Segregation Principle
    many client specific interfaces are better than one general interface
D - Dependency Inversion Principle
    classes should depend on abstraction but not on concretion


## Ngrx store

Actions 
    unique events that are dispatched from components and services.

Reducers
    pure functions called reducers that take the current state and the latest action to compute a new state.
    State changes are handled by pure functions called reducers that take the current state and the latest action to compute a new state.

Selectors 
    pure functions used to select, derive and compose pieces of state.

Store
    observer of actions; an observable of state
    State is accessed with the Store, an observable of state and an observer of actions.

Store - observe Actions
Actions - generator of events dispatched from components and services 
Reducers - take current state and latest action to compute new state 
Selector - select, compute, compose state