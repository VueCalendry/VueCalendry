# Playground

Explore how **VueCalendry** behaves in different configurations.
Each example below uses the real `<VueCalendar />` component — live and interactive.

---

## 🧭 Basic Calendar

<ClientOnly>
  <BasicUsage />
</ClientOnly>

```vue
<template>
  <Calendar />
</template>

<script setup>
import { Calendar } from 'calendry'
import 'calendry/style.css'
</script>
```

<script setup>
import BasicUsage from './examples/BasicUsage.vue'
</script>
