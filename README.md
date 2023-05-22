# Inside Security WEB

Sitio WEB público de [Inside Security](https://insidesecurity.cl/).


## Comandos

Ejecución en ambiente de desarrollo:

```bash
npm start
```

Compilación para ambiente productivo:

```bash
npm run build
```

Para subir ambiente productivo a servidor:

```bash
rsync -tvrz --progress --delete ./build/ user@server:/home/insidesecurity.cl/public_html/
```
