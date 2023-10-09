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

export const makeComputedQueryArray = (router: Router, route: RouteLocationNormalizedLoaded, key: string): WritableComputedRef<Array<string|number>> => {
  return computed({
    get(): Array<string> {
      const paramData = Object.hasOwn(route.query, key) ? route.query[key] as string : undefined;
      return paramData ? paramData.split(',') : []
    },
    set(newValue: Array<number|string>): void {
      const routeQuery = {} as Record<any, any>;
      if (newValue) {
        routeQuery[key] = newValue.toString();
      }
      router.push({ path: route.path, query: routeQuery });
    },
  });
};