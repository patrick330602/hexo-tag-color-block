# hexo-tag-color-block

Create Color Block Easily on Hexo

## Install

`npm i hexo-tag-color-block`

## Usage

The full tag format is as follows:

`{% colorblock [color hex code] [width] [height] %}`

Example:

`{% colorblock #f8dcf8 %}` will generate:

![example of #f8dcf8](example.png)
## Configuration

You can configure the dafault width in your site `_config.yml`:

```yml
code_block:
  width: 
  height:
  # whether you want to show hex code
  text:
```

default configuration:

```yml
code_block:
  width: 10
  height: 10
  text: true
```

## License

MIT.