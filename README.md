# Angular Application

This is an Angular-based application that includes various components and services to provide a rich user experience. The application is built using TypeScript, Angular, and several other libraries.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Services](#services)
- [Environment Configuration](#environment-configuration)
- [Build and Serve](#build-and-serve)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the dependencies, run the following command:

```sh
npm install
```

## Usage

To start the development server, run:

```sh
npm start
```

This will serve the application at `http://localhost:4200/`.

## Project Structure

The project structure is as follows:

```
src/
├── app/
│   ├── components/
│   │   ├── chat-window/
│   │   ├── footer/
│   │   ├── navbar/
│   │   └── ...
│   ├── pages/
│   │   ├── contact/
│   │   └── ...
│   ├── services/
│   │   ├── chat.service.ts
│   │   └── ...
│   │ 
│   ├── app.routes.ts
│   └── app.module.ts
├── assets/
├── environments/
│   ├── environment.ts
│   └── environment.prod.ts
├── main.ts
└── index.html
```

## Components

### Chat Window Component

The `ChatWindowComponent` provides a chat interface for users to interact with an AI assistant.

### Contact Component

The `ContactComponent` includes a form for users to contact support or provide feedback.

## Services

### Chat Service

The `ChatService` handles communication with the OpenAI API to get responses from the AI assistant.

## Environment Configuration

The environment configuration is stored in the `src/environments/` directory. Update the `environment.ts` file with your API keys and other configuration settings.

```typescript
export const environment = {
    production: false,
    openaiApiKey: 'your-openai-api-key'
    emailServiceID: 'emailjs-service-id',
    emailTemplateID: 'emailjs-template-id',
    emailUserID: 'emailjs-public-key'
};
```

## Build and Serve

To build the application for production, run:

```sh
npm run build
```

To serve the production build, run:

```sh
npm run serve
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
