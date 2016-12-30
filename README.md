# Gitbook plugin iframely

Get any video or iframe card supported by [iframely](https://iframely.com). (Vimeo, YouTube, Facebook, Twitter, Instagram, etc)

## Installation
Add "iframely" to your plugins in `book.json`.

```js
{
  "plugins": ["iframely"]
}
```

## API Key (Requiered)
You need an API key from [iframely](https://iframely.com) (FREE or paid).
The free one can get you started and should work for most cases.

Once you have the key, add it to your `book.json`.

```js
{
  "pluginsConfig": {
    "iframely": {
      "apiKey": "YOUR_API_KEY"
    }
  }
}
```

## Usage
- You can use two filter calls `iframely` or `video`. *(At the moment they both do exactly the same)*
- Make sure you wrap your URL around single or double quotes.

```md
{{ 'https://vimeo.com/31942602' | iframely }}

or

{{ 'https://vimeo.com/31942602' | video }}
```

