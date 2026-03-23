# Urban Routes – Automatización QA con Cypress (Beta)

Proyecto de automatización de pruebas E2E para la aplicación web **Urban Routes**, desarrollado como parte del Sprint 9 del Bootcamp de QA de TripleTen.

Esta versión en **Cypress + JavaScript** forma parte de una comparativa multi-framework junto a las implementaciones en [Selenium](https://github.com/DavidHunter94/qa-project-Urban-Routes-es) y [Playwright](https://github.com/DavidHunter94/qa-automation-playwright).

---

## 🧪 Cobertura de pruebas

### Implementado
- Selección de origen y destino
- Validación de direcciones ingresadas
- Selección de tarifa Comfort
- Ingreso del número de teléfono
- Obtención dinámica del código SMS desde el DOM
- Ingreso y validación del código SMS
- Manejo de modales
- Manejo de errores JavaScript del frontend

### Pendiente (limitaciones conocidas)
- Registro de tarjeta de crédito
- Solicitud de extras (manta, pañuelos y helados)
- Confirmación final del pedido

> Las funcionalidades pendientes presentan defectos críticos en el frontend que impiden su automatización estable en esta versión:
> - Labels flotantes que bloquean campos de entrada
> - Modales inestables en el flujo de pago
> - Excepción JavaScript recurrente: `"o is not a function"`
> - Comportamiento inconsistente del DOM durante carga dinámica
>
> El flujo completo fue exitosamente automatizado en Selenium y Playwright.

---

## ⚙️ Tecnologías utilizadas

- **Lenguaje:** JavaScript
- **Framework:** Cypress 13.x
- **Runtime:** Node.js 18.x+
- **Plugin:** cypress-xpath (selectores XPath)
- **Patrón de diseño:** Page Object Model (POM)

---

## 🏗️ Estructura del proyecto

```
project/
│
├── cypress/
│   ├── e2e/
│   │   └── urban_routes_e2e.cy.js   ← Caso de prueba principal
│   ├── pages/
│   │   └── UrbanRoutesPage.js       ← Page Object Model
│   ├── fixtures/
│   │   └── data.json                ← Datos fijos de la prueba
│   └── support/
│       ├── commands.js              ← Comandos personalizados
│       └── e2e.js                   ← Configuración global
│
├── cypress.config.js
├── package.json
└── README.md
```

---

## ▶️ Instalación y ejecución

```bash
# 1. Clonar el repositorio
git clone https://github.com/DavidHunter94/urban-routes-cypress-beta.git
cd urban-routes-cypress-beta

# 2. Instalar dependencias
npm install

# 3. Abrir Cypress
npx cypress open
```

En la interfaz de Cypress:
1. Selecciona **E2E Testing**
2. Abre **Chrome** o **Electron**
3. Ejecuta `urban_routes_e2e.cy.js`

> ⚠️ Los tests requieren que el servidor de Urban Routes esté activo.
> Esta URL es temporal del entorno de TripleTen y puede estar inactiva
> una vez finalizado el sprint.

---

## 🔍 Detalles de implementación

- Verificación del código SMS extrayendo dinámicamente el valor desde el DOM
- Workarounds para eliminar labels flotantes que bloquean inputs
- Excepciones JavaScript del frontend ignoradas para evitar falsos negativos
- Page Object Model para separar lógica de prueba de lógica de UI

---

## 🔀 Comparativa de frameworks

Este mismo flujo fue implementado en tres frameworks distintos:

| | Selenium | Playwright | Cypress |
|---|---|---|---|
| Lenguaje | Python | Python | JavaScript |
| Esperas | Manuales | Automáticas | Automáticas |
| Cobertura del flujo | Completa ✅ | Completa ✅ | Parcial (beta) ⚠️ |
| CI/CD | — | GitHub Actions ✅ | — |

---

## 🚀 Autor

**Victor David Martínez Matías**
QA Engineer con experiencia en pruebas manuales, automatización UI y pruebas de API.
Multi-framework: Selenium · Playwright · Cypress · Python · JavaScript
