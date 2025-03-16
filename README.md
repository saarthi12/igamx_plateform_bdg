# PHP to Modern Stack Transformation

This project uses Amazon Q Developer CLI to transform a PHP application into a modern stack using FastAPI (backend) and Next.js (frontend).

## Configuration

The transformation is configured through `transform.yaml`, which defines:

- Source code locations and patterns
- Target output directories
- Transformation rules for:
  - Database connections
  - API endpoints
  - Authentication
- Dependencies for both backend and frontend
- Pre and post-transformation actions

## Key Components Transformed

1. Database Connection
   - PHP's mysqli_connect -> SQLAlchemy
   - Connection string configuration

2. API Endpoints
   - PHP endpoints -> FastAPI routes
   - Response handling
   - Type annotations

3. Authentication
   - PHP JWT -> FastAPI security with python-jose
   - Token generation and validation

## Usage

1. Install Amazon Q Developer CLI
2. Run the transformation:
   ```bash
   q transform --config transform.yaml
   ```

3. Review the transformed code in:
   - `./backend/` - FastAPI application
   - `./frontend/` - Next.js application

## Notes

- Backup is automatically created before transformation
- Code formatting is applied after transformation
- Error handling includes retry mechanism