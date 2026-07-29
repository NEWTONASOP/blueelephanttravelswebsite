export const CONFIG = {
  AI_API_URL: '/api/v1/groq/chat/completions',
  PEXELS_API_URL: '/api/v1/pexels/search',
  CALCOM_SLOTS_URL: '/api/v1/calcom/slots',
  CALCOM_BOOKINGS_URL: '/api/v1/calcom/bookings',

  // Groq model (change if needed). This should be a tool-capable model
  // since the chatbot uses function calling for calendar/slot booking.
  AI_MODEL: 'llama-3.3-70b-versatile',
  CALCOM_USERNAME: 'Deteroid/deteroid-meeting', // Change this to your cal.com link
  CONTACT_PHONE: '+91 98765 43210',

  AI_TEMPERATURE: 1,
  AI_MAX_TOKENS: 1024,
  AI_TOP_P: 1,
};
