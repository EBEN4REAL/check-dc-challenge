This provided file contains the routes you will need to perform necessary operations on the API:
The available routes for the API include



* [`${url}/movies`] - Get all movies 
* [`${url}/movies/budget`] - Get all movies sorted based on budget either in ascending or descending order 
* [`${url}/movies/revenue`] - Get all movies sorted based on revenue either in ascending or descending order
* [`${url}/movies/runtime`] - Get all movies sorted based on runtime either in ascending or descending order
* [`${url}/characters`] - Get all characters based on page and items per page  
* [`${url}/characters/race`] - Get all characters sorted based on race  
* [`${url}/characters/gender`] - Get all characters sorted based on gender  

### `${url}/movies`

url Route:

```js
${url}/movies
```

* Returns a valid JSON contaning all movies 


### `${url}/movies/budget`

url Route:

```js
${url}/movies/budget
```

* Takes a query string order with value being either ascending or descending. Example is `${url}/movies/budget?order=ascending`
* Returns a valid JSON contaning all movies sorted based on the budget of the movies


### `${url}/movies/revenue`

url Route:

```js
${url}/movies/revenue
```

* Takes a query string order with value being either ascending or descending. Example is `${url}/movies/revenue?order=ascending`
* Returns a valid JSON contaning all movies sorted based on the revenues of the movies


### `${url}/movies/runtime`

url Route:

```js
${url}/movies/runtime
```

* Takes a query string order with value being either ascending or descending. Example is `${url}/movies/runtime?order=ascending`
* Returns a valid JSON contaning all movies sorted based on the runtime of the movies


### `${url}/characters`

url Route:

```js
${url}/characters
```

* Takes query strings page & limit with value for page being the page number, and limit being the number of items per page. Example is `${url}/characters?page=2&limit=3`
* Returns a valid JSON contaning characters in the page 
* If no query string is attached, it returns a valid JSON containing all characters


### `${url}/characters/race`

url Route:

```js
${url}/characters/race
```

* Takes a query string order with value being either ascending or descending. Example is `${url}/characters/race?order=descending`
* Returns a valid JSON contaning characters in the page 
* If no query string is attached, it returns a valid JSON containing all characters sorted by race in ascending order 


### `${url}/characters/gender`

url Route:

```js
${url}/characters/gender
```

* Takes a query string order with value being either ascending or descending. Example is `${url}/characters/gender?order=descending`
* Returns a valid JSON contaning characters in the page 
* If no query string is attached, it returns a valid JSON containing all characters sorted by gender in ascending order 

