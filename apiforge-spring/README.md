# APIForge - Spring Boot Service

A lightweight Spring Boot backend service for the APIForge platform.

---

## Prerequisites

- **Java JDK**: Version 21 or higher
- **Maven**: Included via Maven Wrapper (`./mvnw` / `mvnw.cmd`)

---

## Getting Started

Navigate to the Spring project directory:

```bash
cd apiforge-spring
```

### 1. Run the Application

**On Windows (PowerShell / CMD):**
```powershell
.\mvnw.cmd spring-boot:run
```

**On Linux / macOS:**
```bash
./mvnw spring-boot:run
```

The application will start on `http://localhost:8080` by default.

---

## Testing & Endpoints

### Health / Hello Endpoint
- **URL**: `http://localhost:8080/api/hello`
- **Method**: `GET`
- **Response**: `Hello World from controller`

#### Test with cURL:
```bash
curl http://localhost:8080/api/hello
```

---

## Build for Production

To create an executable JAR:

```bash
# Windows
.\mvnw.cmd clean package

# Linux / macOS
./mvnw clean package
```

Run the packaged JAR:
```bash
java -jar target/apiforge-0.0.1-SNAPSHOT.jar
```
