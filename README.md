# PROYECYO-2-ALEX-JOAN
| HTTP | Routes           | Description                      | JSON               |
|:----:|------------------|----------------------------------|--------------------|
	| GET  | /                | index                            |                    |
	| GET  | /auth/register   | register user from render        |                    |
	| POST | /auth/register   | register user from handler       |                    |
	| GET  | /auth/login      | login user from render           |                    |
	| POST | /auth/login      | login user from handler          |                    |
| GET  | /games           | videogames list                  |                    |
| GET  | /games/{id}      | videogames details               |                    |
| GET  | /events          | events list                      |                    |
| GET  | /events/{id}     | events details                   |                    |
| GET  | /events/create   | crear evento from render         |                    |
| POST | /events/create   | crear evento from handler        |                    |
| GET  | /users/home      | Página de inicio para el usuario |                    |
| GET  | /users/{id}      | ver tu perfil                    |                    |
| GET  | /users/{id}/edit | editar tu perfil from render     |                    |
| POST | /users/{id}/edit | editar tu perfil from handler    |                    |
| GET  | /api/games       | videogames list                  | :marca_de_verificación_gruesa: |
| GET  | /api/games/{id}  | videogames details               | :marca_de_verificación_gruesa: |