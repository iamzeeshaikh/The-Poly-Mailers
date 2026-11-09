/** Older feed URL, kept so nothing that already fetches it breaks. Same output as /merchant-feed.xml. */
import type { APIRoute } from 'astro';
import { buildFeed } from '~/lib/feed';

export const GET: APIRoute = () => buildFeed();
