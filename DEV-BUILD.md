# Post-Clone
Luego de realizar el `git clone`, se procede:

```bash
npm install    # Instala dependencias (requiere Node.js)

# Luego se procede con alguno de los siguientes comandos...
npm run start  # Servidor de desarrollo
npm run build  # Realiza el build
npm run clear  # Limpieza total
npm run deploy # Sube a Github-Pages
```

Recordar utilizar las siguientes variables antes de realizar el deploy:
```bash
# Ubuntu
USE_SSH=true
GIT_USER=christian-herrera
npm run deploy

# Windows
$env:USE_SSH="true"
$env:GIT_USER="christian-herrera"
npm run deploy
```