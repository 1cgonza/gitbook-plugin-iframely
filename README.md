# Gitbook plugin iframely

Get any video or iframe card supported by [iframely](https://iframely.com). (Vimeo, YouTube, Facebook, Twitter, Instagram, etc)

*If you prefer an option without the need for an API key or depending on creating an account, you can try [gitbook-plugin-noembed](https://github.com/1cgonza/gitbook-plugin-noembed). It has less supported sites than iframely but still has all the popular ones and more.*

## Installation
Add "iframely" to your plugins in `book.json`.

```js
{
  "plugins": ["iframely"]
}
```

## API Key (Required)
You need an API key from [iframely](https://iframely.com) (FREE or paid).
The free one can get you started and should work for most cases.

Once you have the key, add it to your `environment variable` when executing gitbook-cli.

```sh
> IFRAMELY_APIKEY=YOUR_IFRAMELY_APIKEY gitbook build
# or
> IFRAMELY_APIKEY=YOUR_IFRAMELY_APIKEY gitbook serve
```

## Usage
- You can use two filters: `iframely` or `video`. *(At the moment they both do exactly the same)*
- Make sure you wrap your URL around single or double quotes.

```md
{{ 'https://vimeo.com/31942602' | iframely }}

or

{{ 'https://vimeo.com/31942602' | video }}
```

