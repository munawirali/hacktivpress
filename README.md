# Hacktivpress
This a simple application news blog

# REST API
List of basic routes:
| Route | HTTP | Description |
| ------ | ------ | ------ |
| `/` | GET | Print name server|

List  of user routes:
| Route | HTTP | Description |
| ------ | ------ | ------ |
| `/users/signin` | POST | Authentication users |
| `/users/signup` | POST | Create a new users |

List  of articles routes:
| Route | HTTP | Description |
| ------ | ------ | ------ |
| `/articles` | GET | Show all articles |
| `/articles/:id` | GET | Show article by id |
| `/articles/users/:ID` | GET | Show article by users id |
| `/articles` | POST | Create a new article |
| `/articles/:id` | PUT | Update a article |
| `/articles/:id` | DELETE | Delete a article |

List  of user routes:
| Route | HTTP | Description |
| ------ | ------ | ------ |
| `/api/users?name={name}` | GET | Get `{name}` match in users |
| `/api/users?name={na}` | GET | Get `{na}` like in users |

# Usage
```sh
$ npm install
$ npm start
$ npm run dev
```

Acces the website via `http://localhost:8080` or API via
`http://localhost:3000`
