# Angular cheatsheet

## Template / Markup Language

```
<app-sizer [size]="fontSizePx" (sizeChange)="fontSizePx=$event"></app-sizer>
```

() -- Event-binding
[] -- Data(model)-binding


## Ngrx

Actions     -- Are events! The 'C' in CQRS (Command Query Responsibility Segregation)
Reducers    -- Event-handlers!
Selectors   -- The 'Q' in CQRS