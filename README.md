# EcoReport-GIS

Sistema de gestión de reportes geolocalizados para reservas naturales. Permite capturar incidentes en campo y gestionarlos desde una plataforma centralizada.

## Descripción del Proyecto

La idea es que desde el visor de mapa se pueda agregar un reporte sobre lo encontrado en tiempo real dentro del terreno de la reserva.
Para eso es necesario:
*   Una **versión móvil** que solo va a levantar el reporte.
*   Una **versión web** para gestionar todo, incluso también sumar un reporte.

### Flujo de Generación de un Reporte

1.  **Captura en Sitio**: El usuario activa la geolocalización en tiempo real sobre un mapa de MapLibre GL JS.
2.  **Reporte**: Se crea aplicando presión sobre un punto en el mapa.
    *   Genera un marcador y un tooltip preguntando si se quiere generar un reporte.
    *   Si la respuesta es sí, se despliega un formulario con los datos a rellenar (los que aparecen en las tablas de Supabase).
3.  **Enriquecimiento Multimedia e IA**:
    *   Se captura una fotografía desde el navegador.
    *   Para evitar la carga manual, un LLM categoriza automáticamente el reporte basado en la imagen o metadatos.
4.  **Persistencia**: El dato viaja y se guarda en **Supabase (PostGIS)**, quedando disponible instantáneamente.

### Arquitectura Técnica

#### 1. Frontend (Recolección Móvil y Dashboard)
*   **Tecnologías**: React, MapLibre GL JS.
*   **Móvil**: Interfaz de alto contraste, optimizada para exteriores y consumo de batería. Uso de API de Geolocalización (`watchPosition`) y cámara.
*   **Dashboard**: Plataforma web para análisis y gestión.

#### 2. Backend (API en Python)
*   **Tecnologías**: FastAPI, Pydantic, SQLAlchemy/Supabase-py.
*   **Funciones**:
    *   **CRUD Completo**: Crear, Leer, Actualizar y Borrar reportes.
    *   **Validación**: Asegurar coordenadas válidas antes de guardar.
    *   **Conexión**: Comunicación con Supabase.

#### 3. Base de Datos (Supabase + PostGIS)
*   **Motor**: PostgreSQL con extensión **PostGIS**.
*   **Datos**: Almacenamiento de geometrías (Puntos, Líneas, Polígonos) con SRID 4326.
*   **Seguridad**: RLS (Row Level Security) para controlar acceso (usuarios de campo solo ven/editan sus reportes).

---

## Configuración de Desarrollo

### Requisitos Previos
*   Node.js & npm
*   Python 3.8+
*   Cuenta en Supabase

### Instalación Frontend
```bash
npm install
npm run dev
```

### Instalación Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```
