
ESTRUCTURA DE ESTE PROYECTO

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