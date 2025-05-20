import { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }
 
  const { fullName, company, email, phone, message, needsNDA } = req.body; 

  const needsNDAFlag = needsNDA === 'true' || needsNDA === 'on';
  
  /*const file = formData.get('file') as File | null;
  const attachment: { filename: string; content: string }[] = [];

   if (file && file.size > 0) {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    attachment.push({
      filename: file.name,
      content: buffer.toString('base64'), // Resend expects base64
    });
  }*/

  try {
    const emailContent = `
New web-contact form submission:

Full Name: ${fullName}
Company Name: ${company}
Work Email: ${email}
Phone Number: ${phone}
NDA Required: ${needsNDAFlag ? 'Yes' : 'No'}

Message:
${message}
`;

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Must be verified
      to: 'contact@tdhenterprises.co.za',
      subject: `New Contact Form Submission from ${fullName}`,
      replyTo: email,
      text: emailContent,
      // attachments: attachment.length > 0 ? attachment : undefined,
    });

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error });
  }
}

