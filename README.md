# VueCalendry

A modern, TypeScript-first Vue 3 calendar component.

[![npm version](https://badge.fury.io/js/vuecalendry.svg)](https://badge.fury.io/js/vuecalendry)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-green.svg)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/npm/l/vuecalendry.svg)](https://github.com/VueCalendry/VueCalendry/blob/main/LICENSE)

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
  - [Basic Example](#basic-example)
- [Contributing](#contributing)
- [License](#license)

## Requirements

- Vue.js 3.x or higher
- TypeScript 5.x (recommended)
- Modern browsers (Chrome, Firefox, Safari, Edge)

## Features

- Built with Vue 3 and TypeScript
- Supports multiple views: month, week, day
- Customizable event rendering
- Responsive design
- Easy integration with Vue applications
- Localization support
- Drag and drop event management
- Recurring events
- Theming support

## Installation

You can install VueCalendry via your preferred package manager:

```bash
npm install vuecalendry
```

```bash
yarn add vuecalendry
```

```bash
pnpm add vuecalendry
```

## Usage

### Basic Example

Import the VueCalendry component into your Vue application and use it as follows:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import VueCalendry from 'vuecalendry'

const events = ref([
  {
    id: 1,
    title: 'Meeting with Bob',
    start: '2024-07-01T10:00:00',
    end: '2024-07-01T11:00:00',
  },
  {
    id: 2,
    title: 'Lunch with Alice',
    start: '2024-07-02T12:00:00',
    end: '2024-07-02T13:00:00',
  },
])
</script>

<template>
  <VueCalendry v-model:events="events" />
</template>
```

## Contributing

VueCalendry is developed using Visual Studio Code (VSCode) with Dev Containers to ensure a consistent development environment.

### Setup Development Environment

1. Fork the repository on GitHub
2. Clone your forked repository:

   ```bash
   git clone git@github.com:<your-username>/VueCalendry.git
   ```

3. Install VSCode Dev Containers extension
4. Open the project in a Dev Container:
   - Open the Command Palette (Ctrl+Shift+P or Cmd+Shift+P)
   - Select "Dev Containers: Reopen in Container"
5. Wait for the container to build, start and install the dependencies.
6. Start development server:

   ```bash
   pnpm dev
   ```

### Additional Dev Container Setup

#### SSH Agent Forwarding

Follow the [VSCode Dev Container documentation](https://code.visualstudio.com/remote/advancedcontainers/sharing-git-credentials#_using-ssh-keys) to set up SSH agent forwarding.

#### GPG Signing

For GPG signing setup, follow the [VSCode Dev Container documentation](https://code.visualstudio.com/remote/advancedcontainers/sharing-git-credentials#_sharing-gpg-keys).

## License

VueCalendry is released under the GPLv3 License. See the [LICENSE](./LICENSE) file for details.
