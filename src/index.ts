import type { WritableComputedRef } from 'vue';
import { computed } from 'vue';
import type { RouteLocationNormalizedLoaded, Router } from 'vue-router';

export const makeComputedQuery = (router: Router, route: RouteLocationNormalizedLoaded, key: string): WritableComputedRef<string> => {
  return computed({
    get(): string {
      return Object.hasOwn(route.query, key) ? route.query[key] as string ?? '' : '';
    },
    set(newValue: string): void {
      const routeQuery = {
        ...route.query,
      } as Record<any, any>;
      if (newValue === routeQuery[key]) {
        return;
      }
  
      delete routeQuery[key];
      if (newValue) {
        routeQuery[key] = newValue;
      }
  
      router.replace({ path: route.path, query: routeQuery });
    }
  });
};

export const makeComputedQueryArray = <ReturnArrayType extends string | number = string>(router: Router, route: RouteLocationNormalizedLoaded, key: string, isNumberArr = false): WritableComputedRef<ReturnArrayType[]> => {
  return computed({
    get(): Array<ReturnArrayType> {
      const paramData = Object.hasOwn(route.query, key) ? route.query[key] as string : undefined;
      return paramData ? isNumberArr ? paramData.split(',').map(n => parseInt(n)) as ReturnArrayType[] : paramData.split(',') as ReturnArrayType[] : []
    },
    set(newValue: Array<ReturnArrayType>): void {
      const routeQuery = {
        ...route.query,
      } as Record<any, any>;
      if (newValue.toString() === routeQuery[key]) {
        return;
      }
  
      delete routeQuery[key];
      if (newValue.length) {
        routeQuery[key] = newValue.toString();
      }
      router.push({ path: route.path, query: routeQuery });
    },
  });
};