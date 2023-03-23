# TrainingData-Backend-Nestjs
Backend of the Training Data Project to track the progress with routines


Models

## Users
```
    const users = {
        PK  user_id,
            name,
            birth_date,
            height,
            weight,
            email
    }
```


## Exercises
```
    const exercises = {
        PK  exercise_id,
            name,
            type,
            units
    }
```



## Series
```
    const series = {
        PK  series_id,
        FK  session_id,
        FK  exercise_list_id,
        FK  exercise_id,
            objective_weight,
            repetitions_weight,
            time_goal,
            time_elapsed,
    }
```


## Sessions
```
    const sessions = {
        PK  session_id,
        FK  user_id,
        FK  series_id,
            created_date,
            modified_date,
            registered_date,
        FK  exercise_list_id,
    }
```


## ExerciseLists

```
    const exerciseLists = {
        PK  exercise_list_id,
            name,
        FK  user_id,
        FK  exercise_id,
    }
```
