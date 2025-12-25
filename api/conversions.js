import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { event_name, event_time, action_source, user_data, custom_data, attribution_data, original_event_data } = req.body;

  // Validate required fields
  if (!event_name || !event_time || !action_source || !user_data) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Hash user data
  const hashedUserData = {};
  if (user_data.em) {
    hashedUserData.em = user_data.em.map(email => crypto.createHash('sha256').update(email.toLowerCase().trim()).digest('hex'));
  }
  if (user_data.ph) {
    hashedUserData.ph = user_data.ph.map(phone => crypto.createHash('sha256').update(phone.replace(/\D/g, '')).digest('hex'));
  }
  if (user_data.ct) {
    hashedUserData.ct = user_data.ct.map(city => crypto.createHash('sha256').update(city.toLowerCase().trim()).digest('hex'));
  }
  // Add other user data fields as needed

  const payload = {
    data: [{
      event_name,
      event_time,
      action_source,
      user_data: hashedUserData,
      ...(custom_data && { custom_data }),
      ...(attribution_data && { attribution_data }),
      ...(original_event_data && { original_event_data })
    }]
  };

  const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;
  const pixelId = '743181434847592';
  const apiVersion = 'v18.0';

  try {
    const response = await fetch(`https://graph.facebook.com/${apiVersion}/${pixelId}/events?access_token=${accessToken}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (response.ok) {
      res.status(200).json({ success: true, result });
    } else {
      res.status(response.status).json({ error: result });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}