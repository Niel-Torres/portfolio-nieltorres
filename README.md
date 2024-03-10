# Mi portfolio web
Web personal

<strong>¡Hola Mundo!</strong> Soy Niel torres, desarrollador Front-End Web & Mobile. Aquí tenéis el código de mi portafolio, espero que os guste.

## 💻 Requirements

<ul>
  <li>node v20.11.0</li>
</ul>  

💻Tecnologías utilizadas
<ul>
  <li>Ionic v7</li>
  <li>Angular v17</li>
  <li>Capacitor</li>
</ul>  
  

💻Estructura de este proyecto

```
src/
|-- app/
|   |-- core/                       // Capa de dominio
|   |   |-- services/               // Logica de negocio y servicios de la aplicación
|   |   |-- models/                 // Modelos de datos (Interfaces)
|   |   |-- utils/                  // Utilidades de la aplicación
|   |-- components/                 // Capa de presentación
|   |   |-- shared/                 // Componentes compartidos entre módulos
|   |   |-- feature1/               // Componentes específicos de una funcionalidad
|   |   |-- feature2/               // Componentes específicos de otra funcionalidad
|   |-- pages/                      // Páginas de la aplicación
|   |   |-- home/                   // Página Home
|   |   |-- about/                  // Página Acerca de
|   |-- app-routing.module.ts      // Capa de aplicación - Módulo de enrutamiento principal
|   |-- app.component.ts           // Capa de aplicación - Componente raíz
|   |-- app.module.ts              // Capa de aplicación - Módulo raíz
|-- assets/                         // Recursos estáticos (imágenes, JSON, etc.)
|-- environments/                   // Configuraciones de entorno
```

## ⚙Installation

## Install Ionic & Angular:
```
npm install -g @ionic/cli
npm install -g @angular/cli
```

## Install dependencies:

```
npm install
```

Compile code to later copy them to platforms (Android / iOS):
```
ionic build
```

Create android platform (Native compilation code)
```
npx cap add android
```

## Deploy to githubPages or other server
1. Paso 1: Ejecutar
   ```
    npm run prepare:global
   ```

2. Paso 2: Deploy to GitHubPages or other server
   ```
    npm run deploy:github:branch:ghpages
   ```

   ó

   ```
    npm run deploy:global:local
   ```

- La diferencia entre ambos es que el primero lo sube directamente a github pages y el otro lo deja preparado en local www para que lo subas manualmente

👨🏾‍💻<span>Proyecto realizado por Niel Torres para la web "https://www.nieltorres.com"<span>
