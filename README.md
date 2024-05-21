# CSS Colour Palette Generator

## Routes

- "/" : Homepage
  - CSS generator available
- "/cssvariables" : CSS theme page
  - CCS generator available

## Contexts

- Localstorage for list of CSS themes
  - Array of theme lists
- Localstorage for current CSS theme
  - One theme list
- List of CSS themes
  - Array of theme lists
- Current CSS theme
  - One theme list

## Data

### Colour Object

```js
{
    hex: "#000000",
    strength: 100,
}
```

### Theme List

```js
{
    name: "violet eggplant",
    colours: [
        Colours Objects go here
    ]
}
```
