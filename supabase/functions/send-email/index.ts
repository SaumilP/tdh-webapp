import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface EmailData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  needsNDA: boolean;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const data: EmailData = await req.json();
    
    // Construct email content
    const emailContent = `
      New Contact Form Submission
      
      Name: ${data.fullName}
      Company: ${data.company}
      Email: ${data.email}
      Phone: ${data.phone}
      Needs NDA: ${data.needsNDA ? 'Yes' : 'No'}
      
      Message:
      ${data.message}
    `;

    // Send email using Supabase's built-in SMTP service
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'contact@tdhenterprises.co.za',
        to: 'contact@tdhenterprises.co.za',
        subject: `New Contact Form Submission from ${data.fullName}`,
        text: emailContent,
      }),
    });

    if (!emailResponse.ok) {
      throw new Error('Failed to send email');
    }

    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    );
  }
});