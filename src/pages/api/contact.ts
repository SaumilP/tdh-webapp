import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const formData = await req.formData();

  const fullName = formData.get('fullName') as string;
  const company = formData.get('company') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const message = formData.get('message') as string;
  const needsNDA = formData.get('needsNDA') === 'true' || formData.get('needsNDA') === 'on';
  
  const file = formData.get('file') as File | null;
  let attachment: { filename: string; content: string }[] = [];

   if (file && file.size > 0) {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    attachment.push({
      filename: file.name,
      content: buffer.toString('base64'), // Resend expects base64
    });
  }

  try {
    const emailContent = `
New web-contact form submission:

Full Name: ${fullName}
Company Name: ${company}
Work Email: ${email}
Phone Number: ${phone}
NDA Required: ${needsNDA ? 'Yes' : 'No'}

Message:
${message}
`;

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Must be verified
      to: 'contact@tdhenterprises.co.za',
      subject: `New Contact Form Submission from ${fullName}`,
      reply_to: email,
      text: emailContent,
      attachments: attachment.length > 0 ? attachment : undefined,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
