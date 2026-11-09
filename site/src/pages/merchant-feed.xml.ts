/** Merchant Center feed. Built by src/lib/feed.ts from the same product data and PRICING as the pages. */
import type { APIRoute } from 'astro';
import { buildFeed } from '~/lib/feed';

export const GET: APIRoute = () => buildFeed();
