# To Do List

###### Short term

- [] Validate & normalize date inputs on BookFormRedux

###### Medium term

- [] Datepicker
- [] 5 stars rating system
- [] Add statistics page
- [] Switch genre & format bookshelf from dropdown to input with dropdown
- [x] Write github readme & format properly
- [] Consolidate library & bookshelf components
- [] Figure out where to put "Generate master list" for genres (and eventually other kinds of tags?)
- [] Maybe app init?
- [] In which case, set up a landing page + simulate a "log in"
- [] Add "Awards" (actually this is just tags) ((actually maybe it isn't))
- [] Maybe separate out into "Best of" category that has more strict validation (i.e. there can be only one Gold Medal 2018)
- [] Style awards and tags

###### Long term

- [] Styling
- [] (Break this down into medium priority tasks)
- [] Have suggested tags?
- [] Figure out the best way to do book covers
- [] This might be how we end up on Firebase
- [] Implement tagging system
- [] Tags component works but doesn't communicate with Redux
- [] Clean up Redux/API calls/the app so it only fetches what it needs, not _EVERYTHING_
- [] https://www.apollographql.com/ (SOUNDS LIKE THIS IS WHAT I NEED?)
- [] "You should read next"
- [] Profiles??
- [] Add notes

## Bugs/Issues

---BookFormRedux

1. Reset Form Values properly BookFormRedux (line 31)
2. InputTag component doesn't work with BookFormRedux (lines 69 - 79)
3. RenderGenreInput doesn't validate properly in the validate function (lines 82 - 107 && 153)
4. Uncheese onSubmit (110-113). Related to problem 1

---InputTag

1. Need to pass in the input & spit out the values
2. Figure out how to store all tags & all genres
3. RemoveTag in current implementation is incompatible with reordering tags

---GenerateGenreMasterlist

1. Buggy & causes 500 error (due to data structuring??)

## Dreams

-Barcode scanner integration for books?
-Google Books API?

##### Current Branch

-If you're reading this on the master branch version of todo.md, then check the latest patch notes in [readme.md](/readme.md) for the latest updates
-Check todo.md on the current branch to see what features are being added to that branch.
-This is probably overcomplicated, but I like to be thorough with my internal notes.
