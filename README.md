# Urban Routes – Cypress Automation (Beta)

Este repositorio contiene una prueba automática end-to-end para la aplicación web **Urban Routes**,
desarrollada como parte del Sprint 8 del Bootcamp de QA de TripleTen.

El objetivo es demostrar que, en un único flujo, un usuario puede:
- seleccionar una ruta
- elegir una tarifa
- ingresar su número de teléfono
- recibir y validar el código SMS dinámico

Esta versión en Cypress corresponde a una **fase beta**, enfocada en estabilizar
la verificación telefónica antes de completar el flujo total.

## 🧪 Pruebas implementadas

- Selección de origen y destino  
- Validación de direcciones ingresadas  
- Selección de tarifa **Comfort**  
- Ingreso del número de teléfono  
- Obtención dinámica del código SMS desde la UI  
- Ingreso y validación del código SMS  
- Manejo de modales  
- Manejo de errores JavaScript del frontend

## ⚠️ Limitaciones conocidas

Las siguientes funcionalidades no están automatizadas en esta versión de Cypress debido a defectos críticos en la interfaz del frontend:

- Registro de tarjeta de crédito  
- Solicitud de extras (manta, pañuelos y helados)  
- Confirmación final del pedido  

### Motivos técnicos

- Labels flotantes que bloquean campos de entrada  
- Modales inestables en el flujo de pago  
- Excepción JavaScript recurrente:  
  **"o is not a function"**  
- Comportamiento inconsistente del DOM durante la carga dinámica  

> Nota: El flujo completo (incluyendo pago y extras)  
> fue exitosamente automatizado en Selenium como parte del mismo proyecto.

## 🛠️ Tecnologías utilizadas

- **Node.js** 18.x o superior  
- **Cypress** 13.x  
- **cypress-xpath** – Soporte para selectores XPath  
- JavaScript  
- Page Object Model (POM)  

## 📦 Instalación y ejecución

### 1️⃣ Clonar el repositorio
git clone https://github.com/TU_USUARIO/urban-routes-cypress-beta.git
cd urban-routes-cypress-beta
2️⃣ Instalar dependencias
npm install
3️⃣ Ejecutar la prueba
npx cypress open
Luego, en la interfaz de Cypress:

Selecciona E2E Testing

Abre el navegador Chrome o Electron

Ejecuta el archivo:

urban_routes_e2e.cy.js
📁 Estructura del proyecto
cypress/
 ├── e2e/
 │   └── urban_routes_e2e.cy.js      # Caso de prueba principal
 ├── pages/
 │   └── UrbanRoutesPage.js          # Page Object Model
 ├── fixtures/
 │   └── data.json                   # Datos fijos de la prueba
 ├── support/
 │   ├── commands.js                 # Comandos personalizados
 │   └── e2e.js                      # Configuración global
cypress.config.js                    # Configuración de Cypress
package.json                         # Dependencias del proyecto
package-lock.json                    # Lockfile
.gitignore                           # Archivos ignorados por Git
README.md                            # Este documento
🧠 Notas técnicas
La verificación del código SMS se realiza extrayendo dinámicamente
el valor desde el contenido del DOM.

Se aplican workarounds para eliminar labels flotantes que bloquean inputs.

Se ignoran excepciones JavaScript del frontend para evitar falsos negativos.

Se utiliza Page Object Model para separar la lógica de prueba de la lógica de UI.

📌 Estado del proyecto
Versión: Beta

Cobertura actual:

Ruta

Tarifa

Verificación telefónica

Pendiente:

Pago

Extras

Confirmación final

Próximo objetivo:
Completar la automatización total del flujo en Cypress.

🤝 Observaciones finales
Este proyecto refleja un proceso real de debugging y adaptación de pruebas
al portar un flujo automatizado desde Selenium a Cypress.

Cualquier sugerencia es bienvenida; continúo mejorando mis habilidades de automatización.
👤 Autor
David Martínez
Bootcamp QA Engineer – TripleTen
