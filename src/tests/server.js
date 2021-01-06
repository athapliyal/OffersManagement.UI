import { setupServer } from 'msw/node'
import { offerHandler } from './handlers/offerHandlers';

// Setup requests interception using the given handlers.
export const server = setupServer(...offerHandler)