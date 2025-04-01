# Merchant Management System

Этот проект представляет собой систему управления торговцами, созданную с использованием `React`, `Node.js`, `Express` и `PostgreSQL`.\

**Проект позволяет добавлять и отображать торговцев через веб-интерфейс.**

## Особенности

- Добавление новых торговцев через форму.
- Отображение списка всех торговцев.
- Взаимодействие с базой данных `PostgreSQL` через `API`, созданное на `Node.js` и `Express`

## Установка и запуск

### Предварительные условия

- `Node.js` и `npm` должны быть установлены.
- `PostgreSQL` должен быть установлен и настроен.

### Установка

1. **Клонируйте репозиторий:**

   ```bash
   git clone <repository-url>
   cd project-root
   ```

2. **Установите зависимости для бэкенда:**
   
   ```bash
   cd backend
   npm install
   ```

3. **Установите зависимости для фронтенда:**
   
   ```bash
   cd ../frontend
   npm install
   ```

### Настройка базы данных

1. **Создайте базу данных и таблицу в `PostgreSQL`:**

   ```bash
   CREATE DATABASE my_database;

   \c my_database

   CREATE TABLE merchants(
     id SERIAL PRIMARY KEY,
     name VARCHAR(30),
     email VARCHAR(30)
   );
   ```

2. **Создайте файл `.env` в директории `backend` и добавьте переменные окружения:**

   ```bash
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_HOST=localhost
   DB_PORT=5432
   DB_DATABASE=my_database
   PORT=3001
   ```

### Запуск

1. **Запустите бэкенд:**

   ```bash
   cd backend
   node server.js
   ```

   **Или используйте `nodemon` для автоматического перезапуска:**

   ```bash
   npx nodemon server.js
   ```

2. **Запустите фронтенд:**

   ```bash
   cd ../frontend
   npm start
   ```

## Лицензия

Этот проект распространяется под лицензией `MIT`

**Подробнее см. в файле** `LICENSE`
