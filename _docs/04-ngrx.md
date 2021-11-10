# Ngrx

Handy mnemonic to remember about Ngrx is arse, where
A - Actions 
R - Reducers
S - Selectors
E - Effects


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

A revisionist understanding

Actions
    Describes an action that has been carried out (event).
    Events are described using the convention '[EventSource] Event'. 

Reducers 
    Defines state of the application.
    Subscribers of Actions.
    They 'listens' for actions and generate new state based on actions.

Selectors
    Retrieves a portion (slice) of the state.

Effects
    Subcribers of Actions to carry out the the actual underlying actions needed (make HTTP calls).
    Typically raise another action for reducers.
    

# Passing parameters to Effects!

Assuming action:

export const successfulLoginAction = createAction('[User] Login Succeeded', props<{ token: string }>());

```New stype
return this.actions.pipe(
      ofType(successfulLoginAction),
      tap((action) => {
          localStorage.setItem('jwt', action.token);
      ...
```

```Old style
return this.actions$.pipe(
      ofType<LoginSuccess>(AuthActions.SUCCESSFUL_LOGIN),
      tap((action) => {
        localStorage.setItem('jwt', action.payload.token);
      ...
  );
```

See: https://stackoverflow.com/questions/68406651/converting-effect-to-createeffect-ngrx
