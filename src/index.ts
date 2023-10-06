import type { WritableComputedRef } from 'vue';
import { computed } from 'vue';
import type { RouteLocationNormalizedLoaded, Router } from 'vue-router';

export const makeComputedQuery = (router: Router, route: RouteLocationNormalizedLoaded, key: string): WritableComputedRef<string> => {
  return computed({
    get(): string {
      return Object.hasOwn(route.query, key) ? route.query[key] as string ?? '' : '';
    },
    set(newValue: string): void {
      const routeQuery = {} as Record<any, any>;
      if (newValue) {
        routeQuery[key] = newValue;
      }
      router.push({ path: route.path, query: routeQuery });
    },
  });
};
