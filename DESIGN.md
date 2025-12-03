Frontend - Built with Next.js, TypeScript, and TailwindCSS for responsive, modular UI design.
Backend - The Express.js + Node.js backend uses PostgreSQL via the pg module. RESTful API pattern was designed with modular routes with /auth for user management like login/register. And /goals for CRUD operations. I used Middleware to handle JSON Web Tokens (JWT) and proper user authentication.

Design Patterns - MVC (Model–View–Controller)- Separates application logic into:
    Model – data and business rules
    View – UI
    Controller – request handling

I followed an iterative design approach where I first focused on building a solid backend foundation—defining the data models, setting up the API routes, and ensuring the core logic worked as intended. Once the backend was stable, I connected it with automated tests to validate each endpoint and catch issues early, creating a reliable base to build on. With the server side secured, I moved on to the UI, starting with simple landing pages to establish the structure and overall flow of the application. After that, I implemented the user-facing functionality in stages, beginning with the registration feature and then adding the login system to enable authenticated access. Finally, I built out the bare-bones frontend, integrating it with the backend so that all components worked together seamlessly. By layering each step on top of the previous one, I ended up with a fully functioning web app developed through continuous, manageable iterations.

Things I would do different: I would start out making the basic frontend UI first. Trying to hook up a backend and make API calls using things like Postman was very difficult to navigate. If I had built out the frontend first, it would have been much easier to navigate and troubleshoot.
