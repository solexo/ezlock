// Facebook Conversions API utility functions

const PIXEL_ID = '743181434847592';

export const sendFacebookEvent = async (eventData) => {
  try {
    const response = await fetch('/api/conversions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    });

    const result = await response.json();

    if (response.ok) {
      console.log('Facebook event sent successfully:', result);
      return { success: true, result };
    } else {
      console.error('Failed to send Facebook event:', result);
      return { success: false, error: result };
    }
  } catch (error) {
    console.error('Error sending Facebook event:', error);
    return { success: false, error: error.message };
  }
};

export const trackPurchase = async (value, currency = 'MAD', userData = {}) => {
  const eventData = {
    event_name: 'Purchase',
    event_time: Math.floor(Date.now() / 1000),
    action_source: 'website',
    user_data: {
      ...userData,
    },
    custom_data: {
      currency,
      value: value.toString(),
    },
  };

  return await sendFacebookEvent(eventData);
};

export const trackProspect = async (userData = {}) => {
  const eventData = {
    event_name: 'Lead',
    event_time: Math.floor(Date.now() / 1000),
    action_source: 'website',
    user_data: {
      ...userData,
    },
  };

  return await sendFacebookEvent(eventData);
};

// Helper function to hash user data
export const hashUserData = (data) => {
  const crypto = require('crypto');
  return crypto.createHash('sha256').update(data.toLowerCase().trim()).digest('hex');
};