/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

export interface ContactQuoteRequest {
  brand: string;
  eventType: string;
  guestCount: number;
  eventDate: string;
  eventTime: string;
  fullName: string;
  email: string;
  whatsapp: string;
  message?: string;
}

export interface ContactQuoteResponse {
  message: string;
  requestId: string;
}
