# APIForge

APIForge is an API testing and management platform consisting of multiple backend services.

---

## Project Structure

```
apiforge/
├── API testing platform-node/   # Node.js / Express API Service
└── apiforge-spring/             # Spring Boot Service (Java 21)
```

---

## Running the Spring Boot Service

For full instructions, see [apiforge-spring/README.md](apiforge-spring/README.md).

### Quick Start

1. **Navigate to the Spring directory:**
   ```bash
   cd apiforge-spring
   ```

2. **Run using Maven Wrapper:**
   - **Windows:**
     ```powershell
     .\mvnw.cmd spring-boot:run
     ```
   - **Linux / macOS:**
     ```bash
     ./mvnw spring-boot:run
     ```

3. **Verify running service:**
   ```bash
   curl http://localhost:8080/api/hello
   ```
