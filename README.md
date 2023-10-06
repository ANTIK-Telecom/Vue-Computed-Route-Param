# @antik-web/computed-route-param

A facade for using computed property to set primitive (string) route param values.

## Installation
**npm**:
```
npm i @antik-web/computed-route-param
```

**pnpm**:
```
pnpm add @antik-web/computed-route-param
```

**ESM import**:
```
import { makeComputedQuery } from '@antik-web/computed-route-param';
```

## Example code / Usage

In below examples, you can see how easily you can apply the library. It's recommended to use `await router.isReady()` before assigning computed query, in some cases, the function call could result in an error.

### Example 1 - Basic input

```html
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { makeComputedQuery } from '@antik-web/computed-route-param';

const route = useRoute();
const router = useRouter();
const paramText = makeComputedQuery(router, route, 'paramName');

</script>

<template>
    <input v-model="paramText" type="text" class="bg-red-400">
</template>
```

### Example 2 - Element UI

```html
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { makeComputedQuery } from '@antik-web/computed-route-param';

const route = useRoute();
const router = useRouter();
const paramText = makeComputedQuery(router, route, 'paramName');

</script>

<template>
    <el-form>
        <el-form-item :label="Title" prop="title">
            <div>
                <el-input v-model="paramText" size="default" required />
            </div>
        </el-form-item>
    </el-form>
</template>
```

### Example 3 - Programmatically setting value

```html
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { makeComputedQuery } from '@antik-web/computed-route-param';

const route = useRoute();
const router = useRouter();
const paramText = makeComputedQuery(router, route, 'paramName');

paramText.value = 'valueOfParam'

</script>
```

## Support
- ES2022
- CommonJS

## Authors and acknowledgment
Jakub Frankovic - Web developer ANTIK Telecom | [Send Mail](mailto:frankovic@antik.sk)
