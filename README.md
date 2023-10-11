# @antik-web/computed-route-param

A facade for using computed property to set primitive (string) route param values.

## Installation

See [below](#npm-repository-setup), how to configure .npmrc file to be able to access this package. When you complete this step, you can continue with below commands:

**npm**:
```
npm i @antik-web/computed-route-param
```

**pnpm**:
```
pnpm add @antik-web/computed-route-param
```

## Importing

**ESM import**:
```
import { makeComputedQuery, makeComputedQueryArray } from '@antik-web/computed-route-param';
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

### Example 4 - Work with arrays

```html
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { makeComputedQueryArray } from '@antik-web/computed-route-param';

const route = useRoute();
const router = useRouter();
const paramText = makeComputedQueryArray(router, route, 'paramName');

paramText.value = [1,2,3,4]
paramText.value = ['1','2','3','4']

</script>
```

### Example 5 - Work with number arrays
 *makeComputedQueryArray* function has also generic property, which you can use to type-cast resulting array. You should use string or number types here. If you decide to use number, please, also include fourth parameter with value <b>true</b>. This enables resulting values to be number, executing *parseInt* on each.

```html
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { makeComputedQueryArray } from '@antik-web/computed-route-param';

const route = useRoute();
const router = useRouter();
const paramText = makeComputedQueryArray<number>(router, route, 'paramName', true);

paramText.value = [1,2,3,4]

</script>
```

<div id="setup-npm-repo"></div>

## NPM repository setup

### Step 1 (skip if you have working access token)
Request npm access token by sending an mail to

```
web@antik.sk
```
[HERE](mailto:web@antik.sk) is quick link if you use mail app.

### Step 2
Create `.npmrc` file in root directory of your project.

### Step 3

Add this content if you have token only for specific package:
```
@antik-web:registry=https://git.antik.sk/api/v4/projects/{PACKAGE_ID}/packages/npm/
//git.antik.sk/api/v4/projects/{PACKAGE_ID}/packages/npm/:_authToken={AUTH_TOKEN}
```

**OR**

Add this content if you have token for group:
```
@antik-web:registry=https://git.antik.sk/api/v4/groups/{GROUP_ID}/-/packages/npm/
//git.antik.sk/api/v4/groups/{GROUP_ID}/-/packages/npm/:_authToken={AUTH_TOKEN}
```

<hr>
After these 3 steps, you should be able to download NPM package from our private repositories.

## Support
- ES2022 - ESM

## For gitlab admins

### Generating access tokens
1. Go to the group or project
2. Settings -> Access tokens
3. Add new token
4. Choose appropriate name containing person identifier so we know who has the token
5. Check at least **REPORTER ROLE** and **read_api** scope
6. Click 'Create project access token'

## Authors and acknowledgment
Jakub Frankovic - Web developer ANTIK Telecom | [Send Mail](mailto:web@antik.sk)
