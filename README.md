Creacion de proyectos en react
```bash
npx create-react-app .
```

Se instala el modulo axios
```bash
npm install axios
```

Se instala bootstrap
```bash
npm install react-bootstrap bootstrap
```



Al momento de crear proyectos react borrar los siguientes archivos
```bash
src/App.test.js
src/logo.svg
src/setupTests.js
```

En el archivo 
```bash
src/index.js
```

Borrar la linea que hace referencia a los arhivos borrados
```js
import './index.css';
```

En el arhcivo src/App.js eliminar todo lo que este dentro de la etiqueta, tambien eliminar la importacion:
```JavaScript
import logo from './logo.svg';
<div className="App"></div>
```

En el archivo src/App.css solo dejar con la eqtiqueta
```css
.App {
  text-align: center;
}
```