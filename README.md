<p align="center">
    <a href="https://laravel.com" target="_blank">
        <img src="https://media.maximilian-mewes.de/project/em/blem_logo_prototype.png" width="400">
    </a>
</p>

# 🌈 Welcome to the Event Manager 🎫

Manage events, send/recieve invitations, lost and found list, create polls and so much more ❤️‍🔥

## ⚙️ Features

(still in very early development)

- Timetable (schedule finder with acquaintances) ✔️
- Audit logging ✔️
- Acquaintance System ✔️
- Great design ✔️
- [User management] ❌
- [Send Invitations] ❌
- [Send Invites (Accepts/decline)] ❌
- [Guest list] ❌
- and much more

---

## 👪 Contributing

No Ticket (issue) no Servie!
That means if there is no issue that is ready for development then don't just start work on something.
Detailed Description: TBD ❎

---

## How to install (Development)

1. Clone this repo

    ```sh
    git clone https://github.com/BlubberLounge/EventManager.git
    ```

2. Install all dependencies
 
    ```sh
    composer install && npm install
    ```

3. Copy `.env.example`, Paste and Rename to `.env`. Create Database conenction. Configure as needed.

    ```txt
    Default DB config
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=bl_eventmanager
    DB_USERNAME=root
    DB_PASSWORD=
    ```
    Do other configuration changes as you need

4. Database migration

    ```sh
    php artisan migrate
    ```

5. ( Start the Development Server )

    ```sh
    php artisan serve
    ```

## Hints

### API usage

1. The OpenAPI/Swagger Api documentation can be found under: **/api/doc**

2. Generate the documentation via the following command:

    ```sh
    php artisan l5-swagger:generate
    ```

### User settings

1. Manage user settings via `settings/users.php`

2. Migrate user settings

    ```sh
    php artisan settings:migrate
    ```

---

## ✌️ Other

Licensed under the  [MIT license](https://opensource.org/licenses/MIT).
